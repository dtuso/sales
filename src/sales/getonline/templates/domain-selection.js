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
});

function showAndOrderDynamicTldsInList(selector) {

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
  $this.find('.tld-list').show();
}

function domainSearchFormSubmit(e, domainSearched) { 

  var $thisSection,
      pageStartupSearch;

  if(e != '') {
    var $this = $(e.target);

    $thisSection = $this.closest('.js-domain-search-wizard-section');
    $('#domainAvailableViewSearchForm').show();
    $('#domain-available-view').find('.search-again-section').hide();
    pageStartupSearch = false;
  } else {
    $thisSection = $('#'+domainSearch.initialViewId);
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

      $(document).trigger('onDomainSearch', domainSearched);
      
      if(data == null) {
        showApi1or2SearchError(e, domainSearched);
      } else {
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

          if(domainSearch.showRecommendedDomain) {
            $('#recommended-domain-name').text(exactMatchDomain.Fqdn);
            $('#recommended-domain').find('.select-and-continue').data('domain', exactMatchDomain);
            $('#recommended-domain').show();
          }

          // If desired and spins are available, show them
          if(domainSearch.showChoicesWithAvailableDomain && alternateDomains.length > 0) {
            showSearchSpins($('#domain-available-view'), exactMatchDomain, alternateDomains);
          }

          $(document).trigger('onDomainAvailable', exactMatchDomain);

          animateWizard($thisSection, $('#domain-available-view'));

        } else {

          // Domain is taken, show spins if possible
          if(alternateDomains.length > 0) {
            showSearchSpins($('#domain-not-available-view'), exactMatchDomain, alternateDomains);

            $('#domainSearchWizard').find('.search-form-input').val(''); 
          }

          $(document).trigger('onDomainNotAvailable', exactMatchDomain);

          animateWizard($thisSection, $('#domain-not-available-view'));
        }    
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
  domainSearch.selectedDomainName = domain;

  var $thisSection = $this.closest('.js-domain-search-wizard-section');
  animateWizard($thisSection, $('#domain-selected-view') /*toView*/);

  $(document).trigger('onValidDomainSelected', domain);
}

function navigateToSearchAgain(e) { 
  var $thisSection = $(e.target).closest('.js-domain-search-wizard-section');
  animateWizard($thisSection, $('#domain-search-view'));
  window.location.href = '#domainSearchWizardSection';
}

function verifyCanCheckOut(e) {
  if(domainSearch.requireDomainToGoToCart && domainSearch.selectedDomainName == '') {
    window.location.href = '#domainSearchWizardSection';
  }
  else {
    $(e.target).trigger('goToCheckout');
  }
}

function goToCheckoutHandler(e) {
  var $this = $(e.target),
    domain = $this.data('domain'),
    ciCode = $this.data('ci'),
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
 
  $view.find(".spin-container").show();
  $view.find(".spin-results .spin-result:gt(" + (domainSearch.maxNumberOfSpinsToShowByDefault-1) + ")").hide();
}

function showApi1or2SearchError(e,domain){
  var $modal = $("#api-failure");
  $modal.sfDialog({titleHidden:true, buttons: offerInfo.sfDialogErrorButtons});
  animateWizard($('#'+domainSearch.initialViewId), $('#domain-search-view'));
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
  var $spinCounts = $view.find('.spin-counts');
  var templateHtml = $spinCounts.data("result-count-template");
  templateHtml = templateHtml.replace(/\{0\}/gi, numberShowing); 
  templateHtml = templateHtml.replace(/\{1\}/gi, domainSearch.totalSpinResults);
  $spinCounts.html(templateHtml);
}

function animateWizard($currentView, $animateToView) {  
  if($currentView[0].id === $animateToView[0].id) return; // we're there!

  if(!domainSearch.animateWizard) {
    $currentView.hide();
    $animateToView.show();
  } else {
    var currentViewHeight = $currentView.height(),
      windowWidth = $(window).width(),
      $wizard = $('#domainSearchWizardSection'),
      wizardHeight = $('#domainSearchWizardSection').height();

    // show view offscreen to get height
    $animateToView.css({"position":"absolute", "left": windowWidth + "px", "width": windowWidth + "px"}).show();
    // can only get height when shown      
    var toViewHeight = $animateToView.height(),
      maxHeight = Math.max(currentViewHeight, toViewHeight),
      minHeight = Math.min(currentViewHeight, toViewHeight);
    
    //run the animations
    animateHeight($wizard, wizardHeight, toViewHeight, 1);  
    animateObjectOffToTheLeft($currentView, windowWidth, 2);
    animateObjectInFromTheRight($animateToView, windowWidth, 3);
  }
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