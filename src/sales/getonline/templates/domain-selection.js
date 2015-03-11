// Array indexOf shim for IE9 and below
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0) ? Math.ceil(from) : Math.floor(from);
    if (from < 0) from += len;
    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}

##if(countrySiteAny(ca) || isManager())  
  if(domainSearch.tldInfo.isPossibleAdditionalTld('ca')) {
    domainSearch.tldInfo.tlds.push('ca');
    domainSearch.tldInfo.defaultTld = 'ca';
  }
##endif
##if(countrySiteAny(br) || isManager())
  if(domainSearch.tldInfo.isPossibleAdditionalTld('br')) {
    domainSearch.tldInfo.tlds.push('br');
    domainSearch.tldInfo.defaultTld = 'br';
  }
##endif
##if(countrySiteAny(in) || isManager())
  if(domainSearch.tldInfo.isPossibleAdditionalTld('in')) {
    domainSearch.tldInfo.tlds.push('in');
    domainSearch.tldInfo.defaultTld = 'in';
  }
##endif
##if(countrySiteAny(uk) || isManager())
  if(domainSearch.tldInfo.isPossibleAdditionalTld('co.uk')) {
    domainSearch.tldInfo.tlds.push('co.uk');
    domainSearch.tldInfo.defaultTld = 'co.uk';
  }
  if(domainSearch.tldInfo.isPossibleAdditionalTld('uk')) {
    domainSearch.tldInfo.tlds.push('uk');
    domainSearch.tldInfo.defaultTld = 'uk';
  }
##endif

//- sort the list of TLDs, keeping default at the head of the list and lastTldInList at the end of the list
domainSearch.tldInfo.tlds.sort();
domainSearch.tldInfo.tlds.splice(domainSearch.tldInfo.tlds.indexOf(domainSearch.tldInfo.defaultTld), 1); //- remove default from list
domainSearch.tldInfo.tlds.unshift(domainSearch.tldInfo.defaultTld); //- add default to the beginning
domainSearch.tldInfo.tlds.splice(domainSearch.tldInfo.tlds.indexOf(domainSearch.tldInfo.lastTldInList), 1); //- remove  lastTldInList from list
domainSearch.tldInfo.tlds.push(domainSearch.tldInfo.lastTldInList); //- add to the end of the list

$(document).ready(function() {

  // fix up list of valid tlds from lang files
  showAndOrderDynamicTldsInList("#default-details-modal p");
  showAndOrderDynamicTldsInList("#domain-search-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-available-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-not-available-view .invalid-TLD-entered");

  $('#domain-available-view').on('click', '.select-and-continue', verifyDomainIsStillAvailable);
  $('#domain-not-available-view').on('click', '.select-and-continue', verifyDomainIsStillAvailable);
  
  $(document).find('.clickable-show-more').on('click', displayMoreResultsArea);
  $(document).find('.view-all-button').on('click', displayMoreResultsArea);

  $(document).find('.btn-search-again').on('click', navigateToSearchAgain);
  $('#bottomSearchAgain').on('click', goToDomainSearchWizard);
  $(document).find('.btn-see-bundle').on('click', goToShowProducts);

  $("[data-ci-workaround]").click(function(a){
    var $this=$(this);
    FastballEvent_MouseClick(a,$this.attr("data-ci-workaround"),$(this)[0],"a");
    fbiLibCheckQueue();
  });
});

function updateSearchedDomain(e, domain) {
  $(document).find('.searched-domain-name-display').text(domain);
}

function updateRecommendedDomain(domain) {
  if(domainSearch.selectedDomainName == '')
    $(document).find('.selected-domain-name-display').text(domain);
}

function updateSelectedDomain(domain) {
  domainSearch.selectedDomainName = domain;
  $(document).find('.selected-domain-name-display').text(domain);
}

function updateNotAvailableDomain(e, domain) {
  $(document).find('.not-available-domain-name-display').text(domain);
}

function showAndOrderDynamicTldsInList(selector) {

  //- <span class="sorted-tld-list"><span class="tld-list tld-ca">.CA, </span>
  //- <span class="tld-list tld-club">.CLUB, </span></span>or .ORG

  var $this = $(selector),
    formatTldSelector = function(tld) { return '.tld-' + tld.replace('.','-')},
    tldList = domainSearch.tldInfo.tlds,
    removedSpansArr = [],
    $sortedArea = $this.find(".sorted-tld-list");

  //- remove all dynamic tlds from this
  $.each(tldList, function(idx, tld){
    var $tldItem = $this.find(formatTldSelector(tld));
    removedSpansArr.push($tldItem);
  });

  //- insert sorted HTML back into the original object and show the ones that are turned on
  $sortedArea.empty();
  $.each(removedSpansArr, function(idx, tldSpan) {
    $sortedArea.append(tldSpan);
  });

  // show sorted list
  // commented out because it navigates to search wizard upon page load.
  $this.find('.tld-list').show();
}

function domainSearchFormSubmit(e, domainSearched) { 

  var $thisSection,
      pageStartupSearch;

  if(e != '') {
    var $this = $(e.target);

    $thisSection = $this.closest('.js-domain-search-wizard-section');
    $('#domainAvailableViewSearchForm').show();
    pageStartupSearch = false;
  } else {
    $thisSection = $(document).find(domainSearch.initialViewId);
    $('#domainAvailableViewSearchForm').hide();
    pageStartupSearch = true;
  }

  ##if(isManager())
    offerInfo.itcCode = 'mgr_' + offerInfo.itcCode;
  ##endif

  apiEndpoint1 = '[@T[link:<relative path="~/domainsapi/v1/search/free"><param name="domain" value="domain" /><param name="itc" value="itc" /></relative>]@T]';
  apiEndpoint1 = apiEndpoint1.replace('domain=domain', 'q=' + encodeURIComponent(domainSearched) );
  apiEndpoint1 = apiEndpoint1.replace('itc=itc', 'key=' + offerInfo.appKey);

  $.ajaxSetup({cache:false});
  $.ajax({
    url: apiEndpoint1,
    type: 'GET',
    dataType: 'json',
    cache: false,
    success: function(data){ 

      var 
        exactMatchDomain = data.ExactMatchDomain || {},
        searchedForDomain = exactMatchDomain.Fqdn ? exactMatchDomain.Fqdn : domainSearched,
        isAvailable = exactMatchDomain.IsPurchasable && exactMatchDomain.IsPurchasable === true, /* data.ExactMatchDomain.AvailabilityStatus 1001=unavailable 1000=available*/
        alternateDomains = data.RecommendedDomains || [];

      if(!isAvailable && pageStartupSearch) {
        if(alternateDomains.length > 0) {
          exactMatchDomain = alternateDomains[0];
          alternateDomains.shift();
          isAvailable = true;
        }
      }

      if(isAvailable) {

        updateRecommendedDomain(exactMatchDomain.Fqdn);

        domainSearchWizard.showView('#domain-available-view');

        // tokenize header on search available page
        $('#available-domain-name').text(exactMatchDomain.Fqdn);
        $('#domain-available-view').find('.purchase-btn').data('domain', exactMatchDomain);
        $('#domain-available-view').find('.select-and-continue.available-domain-name').data('domain', exactMatchDomain);

        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {

          // SHOW SPINS
          showSearchSpins($('#domain-available-view'), exactMatchDomain, alternateDomains);
        }

        // should be in desired view
        if(!pageStartupSearch)
          animateWizard($thisSection, $('#domain-available-view'));

      } else {

        // tokenize header on search available page
        updateNotAvailableDomain('', domainSearched);

        domainSearchWizard.showView('#domain-not-available-view');

        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {

          // SHOW SPINS
          showSearchSpins($('#domain-not-available-view'), exactMatchDomain, alternateDomains);

          $('#domainSearchWizard').find('.search-form-input').val(''); 
        }

        animateWizard($thisSection, $('#domain-not-available-view'));
      }    

    },
    error: function(){
      showApi1or2SearchError(e, domainSearched);
    }
  });

}

function verifyDomainIsStillAvailable(e) {

  var $this = $(e.target),
    $thisParent = $this.parent(),
    domain = $this.data('domain'),
    apiEndpoint2;

  $thisParent.find('.spin-results-message').hide(); // aka $this, but code is easier to read with the find()
  $thisParent.find('.checking-availability').show();

  apiEndpoint2 = '[@T[link:<relative path="~/domains/actions/json/domainavailabilitycheck.aspx"><param name="sld" value="sld" /><param name="tld" value="tld" /><param name="targetdivid" value="x" /><param name="source" value="domaincheck" /><param name="addIfAvailable" value="false" /></relative>]@T]';
  apiEndpoint2 = apiEndpoint2.replace('sld=sld', 'sld=' + encodeURIComponent(domain.NameWithoutExtension));
  apiEndpoint2 = apiEndpoint2.replace('tld=tld', 'tld=' + encodeURIComponent(domain.Extension));

  $.ajaxSetup({cache:false});
  $.ajax({
    url: apiEndpoint2,
    type: 'GET',
    dataType: 'json',
    cache: false,
    success: function(data){
      data = data || {};
      data.Properties = data.Properties || {};
      data.Properties.domainInfo = data.Properties.domainInfo || [{isAvailable: false}];
      if(data.Properties.domainInfo[0].isAvailable) {
        $thisParent.find('.checking-availability').hide();
        validDomainSelected(e);
      } else {
        // display domain is now unavailable message
        $thisParent.find('.spin-results-message').hide();
        $thisParent.find('.now-unavailable').show();
      }
    },
    error: function(){
      showApi1or2SearchError(e, domain);
    }
  });

}

function validDomainSelected(e){

  var $this = $(e.target),
    domain = $this.data('domain');

  updateSelectedDomain(domain.Fqdn);

  $(document).find('.btn-purchase').data('domain', domain);
  $('#got-domain-not-selected').hide();
  $('#got-domain-selected').show();
  $('#bottomSearchAgain').show();

  var $thisSection = $this.closest('.js-domain-search-wizard-section');

  animateWizard($thisSection, $('#domain-selected-view') /*toView*/);
  window.location.href = '#domain-selected-view';
}

function navigateToSearchAgain(e) { 
  var $thisSection = $(e.target).closest('.js-domain-search-wizard-section');
  animateWizard($thisSection, $('#domain-search-view'));
  window.location.href = '#domain-search-view';
}

function goToCheckOut(e) {
  if(domainSearch.selectedDomainName == '') {
    window.location.href = '#domainSearchWizardSection';
  }
  else {
    goToDppCheckoutPage(e);
  }
}

function goToDomainSearchWizard()
{
  animateWizard($('#domain-selected-view'), $('#domain-search-view'));
  window.location.href = '#domainSearchWizardSection';
}

function goToShowProducts()
{
  window.location.href = '#bottomGetItNow';
}

function goToDppCheckoutPage(e) {
  var $this = $(e.target),
    domain = $this.data('domain'),
    apiEndpoint3;
  var sourceurl = encodeURIComponent(domainSearch.dppErrorReturnUrl.replace('tldRegErr=tldRegErr', 'tldRegErr=' + domain.Fqdn));

  apiEndpoint3 = '[@T[link:<relative path="~/api/dpp/searchresultscart/11/"><param name="domain" value="domain" /><param name="packageid" value="packageid" /><param name="itc" value="itc" /><param name="sourceurl" value="sourceurl" /><param name="returnUrl" value="returnUrl" /></relative>]@T]';
  apiEndpoint3 = apiEndpoint3.replace('domain=domain', 'domain=' + encodeURIComponent(domain.Fqdn));
  apiEndpoint3 = apiEndpoint3.replace('packageid=packageid', 'packageid=' + offerInfo.packageId);
  apiEndpoint3 = apiEndpoint3.replace('itc=itc', 'itc=' + offerInfo.itcCode);
  apiEndpoint3 = apiEndpoint3.replace('sourceurl=sourceurl', 'sourceurl=' +  sourceurl );
  apiEndpoint3 = apiEndpoint3.replace('returnUrl=returnUrl', 'returnUrl=' +  sourceurl );

  $.ajaxSetup({cache:false});
  $.ajax({
    url: apiEndpoint3,
    type: 'GET',
    dataType: 'json',
    cache: false,
    success: function(data){
      if(data && data.Success) {
        window.location = data.NextStepUrl;
        return;
      } else {
        showApi3SearchError(e, domain);
      }
    },
    error: function(){
      showApi3SearchError(e, domain);
    }
  });
}

function showSearchSpins($view, domain, alternateDomains){  

  displayMoreResultsLinks($view, alternateDomains.length);

  // clear any spins from the DOM
  $view.find('.spin-results .spin-result').remove();
  totalSpinResults =  0;
  var $spinResults = $view.find('.spin-results');
  var $spinTemplate = $view.find('.spin-template-wrap').find('.spin-template');
  $.each(alternateDomains, function(idx,domain){
    var $newSpin = $spinTemplate.clone();
    $newSpin.removeClass('spin-template');
    $newSpin.find('.domain-name-display').text(domain.Fqdn);
    // $newSpin.find('.domain-name-display-tld').text('.' + domain.Extension);
    $newSpin.find('.select-and-continue').show().data('domain', domain);
    $spinResults.append($newSpin);
  });
  domainSearch.totalSpinResults = alternateDomains.length;
  
  if(domainSearch.totalSpinResults <= domainSearch.maxNumberOfSpinsToShowByDefault) {
    hideMoreResultsLinks($view);
  } else {
    updateDomainCountText($view, domainSearch.maxNumberOfSpinsToShowByDefault);
  }
 
  $view.find(".spin-results").show();
  $view.find(".spin-results .spin-result:lt(" + domainSearch.maxNumberOfSpinsToShowByDefault + ")").show(); // show first 3 results
}

function showApi1or2SearchError(e,domain){
  var $modal = $("#api-failure");
  $modal.sfDialog({titleHidden:true, buttons: offerInfo.sfDialogErrorButtons});
}

function showApi3SearchError(e,domain){  
  var $modal = $("#domain-selected-view .api-c-failure-modal");
  $modal.sfDialog({titleHidden:true, buttons: offerInfo.sfDialogErrorButtons});
}

function displayMoreResultsLinks($thisSection) {
  $thisSection.find(".view-all-button").show();
  $thisSection.find(".show-more-section").show();
}

function hideMoreResultsLinks($thisSection) {
  $thisSection.find(".view-all-button").hide();
  $thisSection.find(".show-more-section").hide();
}

function displayMoreResultsArea(e) {
  $thisSection = $(e.target).closest('.js-domain-search-wizard-section');
  $thisSection.find(".spin-results .spin-result").slideDown(domainSearch.animationTime);
  hideMoreResultsLinks($thisSection);
  updateDomainCountText($thisSection, domainSearch.totalSpinResults);
}

function updateDomainCountText($view, numberShowing) {
  var $spinCounts = domainSearchWizard.visibleView().find('.spin-counts');
  var templateHtml = $spinCounts.data("result-count-template");
  templateHtml = templateHtml.replace(/\{0\}/gi, numberShowing); 
  templateHtml = templateHtml.replace(/\{1\}/gi, domainSearch.totalSpinResults);
  $spinCounts.html(templateHtml);
}

function animateWizard($currentView, $animateToView) {  

  var currentViewHeight;
  var windowWidth = $(window).width();

  if($currentView != undefined) {
    if($currentView[0].id === $animateToView[0].id) return; // we're there!
    currentViewHeight = $currentView.height();
    $currentView.hide();
  } else {
    currentViewHeight = 0;
  }

  $animateToView.show();
}

function animateHeight($obj, startHeight, finishHeight, zIndex) {
  $obj
    .css({"height": startHeight + "px", "z-index": zIndex})
    .animate({
      "height": finishHeight + "px"
    },{ 
      duration: domainSearch.animationTime, 
      easing: domainSearch.animationEasingType, 
      complete:function(){
        $obj.css({"position":"relative", "height": "auto", "z-index": "1"});
      }
  });
}

function animateObjectOffToTheLeft($obj, windowWidth, zIndex) {
  $obj
    .css({"position":"absolute", "left": "0px", "width": windowWidth + "px", "z-index": zIndex})
    .animate({
      "left": "-" + windowWidth + "px"
    },{ 
      duration: domainSearch.animationTime, 
      easing: domainSearch.animationEasingType, 
      complete:function(){

        // clean up the views of the screens
        $obj.hide().css({"position":"relative", "width": "auto", "left": "0px", "z-index": "1"});
      }
  });
}

function animateObjectInFromTheRight($obj, windowWidth, zIndex) {

  $obj
    .css({"position":"absolute", "left": windowWidth + "px", "width": windowWidth + "px", "z-index": zIndex})
    .show()
    .animate({
      "left": "0px"
    },{ 
      duration: domainSearch.animationTime , 
      easing: domainSearch.animationEasingType, 
      complete:function(){
        $obj.css({"position":"relative", "width": "auto", "left": "0px", "z-index": "1"}).show();  
      }
    });
  $(document).trigger('resize');
}


// Page Global script -- changes will effect all campaigns 
// get url parameter by parameter name
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
