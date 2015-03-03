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

var domainSearch = {
  tldInfo: {
    defaultTld: 'com', 
    lastTldInList: 'org', 
    tlds: [@T[appSetting:<setting name="SALES_GOT_TLD_EVERYONE_LIST" />]@T],   
    possibleAdditionalTlds: [@T[appSetting:<setting name="SALES_GOT_TLD_RESTRICTED_LIST" />]@T],  
    isPossibleAdditionalTld: function(tld) {return -1 !== $.inArray(tld, domainSearch.tldInfo.possibleAdditionalTlds);}
  },
  sfDialogErrorButtons: [{text: 'OK', onClick: function($sfDialog) { $sfDialog.sfDialog('close'); } }],
  maxNumberOfSpinsToShowByDefault: 3,
  totalSpinResults: 0,
  dppErrorReturnUrl: '[@T[link:<relative path="~/offers/online-business.aspx"><param name="tldRegErr" value="tldRegErr" /></relative>]@T]',
  pricing: {
    promo_wsb: '[@T[multipleproductprice:<current productidlist="464069|101|7524" period="monthly" promocode="24681357" />]@T]',
    promo_ols: '[@T[multipleproductprice:<current productidlist="464069|101|40972" period="monthly" promocode="75315678" />]@T]',
    bundleRenewal_wsb: '[@T[multipleproductprice:<list productidlist="464069|101|7524" period="monthly"></list>]@T]',
    bundleRenewal_ols: '[@T[multipleproductprice:<list productidlist="464069|101|40972" period="monthly"></list>]@T]',
    bingAdCredits: '[@T[currencyprice:<price usdamount="5000" dropdecimal="true" htmlsymbol="false" />]@T]'
  },
  imagePath: '[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/offers/online-business/',
  canOfferOls: true,
  animationTime: 800,
  animationEasingType: 'swing',
  isEnUs: '[@T[localization:<language full='true' />]@T]'.toLowerCase() === 'en-us',
  showChoicesWithAvailableDomain: true,
  selectedDomainName: ''
};

##if(!productIsOffered(105))
  domainSearch.canOfferOls = false;
##endif

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

  showTldImagesInDomainArea(); //- dynamically build the tld images in the #findYourPerfectDomain section
  
  //- fix up list of valid tlds from lang files
  showAndOrderDynamicTldsInList("#products .TLD-token");
  showAndOrderDynamicTldsInList("#domain-entry-details-modal-wsb-only p");
  showAndOrderDynamicTldsInList("#domain-entry-details-modal p");
  // showAndOrderDynamicTldsInList("#domain-search-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-available-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-not-available-view .invalid-TLD-entered");

  // tokenizeDisclaimerModals(); 
  // tokenizeTheDataTokenizeAttribute();

  wireupModals();

  //- display error on return from DPP's TLD eligibility requirements failure
  if(getParameterByName('tldRegErr').length > 0) {
    showDomainRegistrationFailure(getParameterByName('tldRegErr'));
  }

  // set up verify buttons on spin results to do validation before sending to DPP
  // $('#domain-available-view').on('click', '.purchase-btn', validDomainSelected);

  // wireupCheckoutBtns();

  // displayMoreResultsLinks();
  
  $(document).find('.select-and-continue').on('click', verifyDomainIsStillAvailable);

  $(document).find('.clickable-show-more').on('click', displayMoreResultsArea);
  $(document).find('.view-all-button').on('click', displayMoreResultsArea);

  // $('#domain-search-view').find('.see-details-disclaimer-link').attr('data-ci', domainSearch.canOfferOls ? "95734" : "95736");

  $(document).find('.btn-search-again').on('click', navigateToSearchAgain);
  $('#bottomSearchAgain').on('click', function() {$('#wizardSearchAgain').click(); goToDomainSearchWizard();});
  $(document).find('.btn-purchase').on('click', function(e){goToCheckOut(e)});
  // $(document).find('.btn-search-again').on('click', goToDomainSearchWizard);
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

function updateRecommendedDomainName(domain) {
  if(domainSearch.selectedDomainName == '')
    $(document).find('.selected-domain-name-display').text(domain);
}

function updateSelectedDomain(domain) {
  domainSearch.selectedDomainName = domain;
  $(document).find('.selected-domain-name-display').text(domain);
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

  //- show sorted list
  $this.find('.tld-list').show();
}

function tokenizeTheDataTokenizeAttribute() {
  $('[data-tokenize]').each(function(){
    var $this = $(this),
      html = $this.html(),
      val = $this.data('tokenize'),
        tokenizedHtml = html.replace(/\{0\}/gi, val);
    $this
      .html(tokenizedHtml)
      .removeAttr('data-tokenize');
  });
}

function tokenizeDisclaimerModals() {

  var tokenizeDisclaimerModal = function(selector, price0, price1) {
    $(selector).each(function(idx, modal) {
      var $modal = $(modal);
      var htmlTokenized = $modal.html();
      htmlTokenized = htmlTokenized.replace(/\{0\}/gi, price0);
      htmlTokenized = htmlTokenized.replace(/\{1\}/gi, price1);
      $modal.html(htmlTokenized);
    });
  };
  
  if(domainSearch.canOfferOls) tokenizeDisclaimerModal('#domain-entry-details-modal.tokenizable-disclaimer-modal',domainSearch.pricing.bundleRenewal_wsb,domainSearch.pricing.bundleRenewal_ols);
  tokenizeDisclaimerModal('#domain-entry-details-modal-wsb-only.tokenizable-disclaimer-modal',domainSearch.pricing.bundleRenewal_wsb);
  tokenizeDisclaimerModal('#domain-entry-details-modal-wsb-only-choice.tokenizable-disclaimer-modal',domainSearch.pricing.bundleRenewal_wsb);  
}

function wireupModals() {

  // wire up see details links  

  $('#domain-search-view').on('click', '.see-details-disclaimer-link', function(){
    $(domainSearch.canOfferOls ? "#domain-entry-details-modal" : "#domain-entry-details-modal-wsb-only")
      .sfDialog({buttons: domainSearch.sfDialogErrorButtons});
  });
}


function showTldImagesInDomainArea() {
  //dynamically build the tld images in the #findYourPerfectDomain section
  var $imageDiv = $('#findYourPerfectDomain').find(".features-img").parent().empty().addClass('tld-images');
  $.each(domainSearch.tldInfo.tlds, function(idx, tld){
    var $img = $('<img>')
      .addClass('tld-image lazyload')
      .attr('data-lazyload-source', domainSearch.imagePath + 'tld-' + tld + '.png');
    $imageDiv.append($img);
    lazyload.add($img);
  });

  // rerun the height alignment
  $('#findYourPerfectDomain [data-center-element]').css({marginTop:"0px"});
  $(window).trigger('resize');
}

function domainSearchFormSubmit(e, domain) { 

  var $thisSection,
      pageStartupSearch = true;

  if(e != '') {
    var $this = $(e.target);

    $thisSection = $this.closest('.js-domain-search-wizard-section');
    pageStartupSearch = false;
  }

  ##if(isManager())
    offerInfo.itcCode = 'mgr_' + offerInfo.itcCode;
  ##endif

  apiEndpoint1 = '[@T[link:<relative path="~/domainsapi/v1/search/free"><param name="domain" value="domain" /><param name="itc" value="itc" /></relative>]@T]';
  apiEndpoint1 = apiEndpoint1.replace('domain=domain', 'q=' + encodeURIComponent(domain) );
  apiEndpoint1 = apiEndpoint1.replace('itc=itc', 'key=' + offerInfo.itcCode);

  $.ajaxSetup({cache:false});
  $.ajax({
    url: apiEndpoint1,
    type: 'GET',
    dataType: 'json',
    cache: false,
    success: function(data){ 

      var 
        exactMatchDomain = data.ExactMatchDomain || {},
        searchedForDomain = exactMatchDomain.Fqdn ? exactMatchDomain.Fqdn : domain,
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

        updateRecommendedDomainName(exactMatchDomain.Fqdn);

        // tokenize header on search available page
        $('#available-domain-name').text(exactMatchDomain.Fqdn);

        $('#domain-available-view').show();
        $('#domain-available-view').find('.purchase-btn').data('domain', exactMatchDomain);
        $('#domain-available-view').find('.select-and-continue.available-domain-name').data('domain', exactMatchDomain);

        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {

          // SHOW SPINS
          showSearchSpins($('#domain-available-view'), exactMatchDomain, alternateDomains);
        }

        animateWizard($thisSection, $('#domain-available-view'));

      } else {

        // tokenize header on search available page
        $('#not-available-domain-name').text(exactMatchDomain.Fqdn);
        $('#domain-not-available-view').show();

        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {

          // SHOW SPINS
          showSearchSpins($('#domain-not-available-view'), exactMatchDomain, alternateDomains);

          $('#domainSearchWizard').find('.search-form-input').val(''); 
          
        } else {
          // NO SPINS
          showApi1or2SearchError(e, domain);
        }

        animateWizard($thisSection, $('#domain-not-available-view'));
      }    

    },
    error: function(){
      showApi1or2SearchError(e, domain);
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

  // // bypass the choices if OLS is not available for their market
  // if(!domainSearch.canOfferOls) {
    // goToDppCheckoutPage(e);
    // return;
  // }
  var $this = $(e.target),
    domain = $this.data('domain');

  updateSelectedDomain(domain.Fqdn);

  $(document).find('.btn-purchase').data('domain', domain);
  $('#got-domain-selected').show();
  $('#got-domain-not-selected').hide();

  var $thisSection = $this.closest('.js-domain-search-wizard-section');

  animateWizard($thisSection, $('#domain-selected-view') /*toView*/);
}

function navigateToSearchAgain(e) { 
  $("#domainAvailableViewSearchForm").show();
  var $thisSection = $(e.target).closest('.js-domain-search-wizard-section');
  animateWizard($thisSection, $('#domain-search-view'));
}

function goToCheckOut(e) {
  if(domainSearch.selectedDomainName == '') {
    goToDomainSearchWizard();
  }
  else {
    goToDppCheckoutPage(e);
  }
}

function goToDomainSearchWizard()
{
  $('#domainSearchWizardSection').show();
  window.location.href = '#domainSearchWizardSection';
}

function goToShowProducts()
{
  window.location.href = '#got';
}

function goToDppCheckoutPage(e) {
  var $this = $(e.target),
    domain = $this.data('domain'),
    apiEndpoint3;
  var sourceurl = encodeURIComponent(domainSearch.dppErrorReturnUrl.replace('tldRegErr=tldRegErr', 'tldRegErr=.' + domain.Extension));

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
    $newSpin.on('click', verifyDomainIsStillAvailable);
    $spinResults.append($newSpin);
  });
  domainSearch.totalSpinResults = alternateDomains.length;
  
  if(domainSearch.totalSpinResults <= domainSearch.maxNumberOfSpinsToShowByDefault) {
    hideMoreResultsLinks($view);
  } else {
    updateDomainCountText($view, domainSearch.maxNumberOfSpinsToShowByDefault);
  }
  
  $view.find(".spin-results .spin-result:lt(" + domainSearch.maxNumberOfSpinsToShowByDefault + ")").show(); // show first 3 results
}

function showApi1or2SearchError(e,domain){
  var $modal = $("#api-failure");
  $modal.sfDialog({titleHidden:true, buttons: domainSearch.sfDialogErrorButtons});
}

function showApi3SearchError(e,domain){  
  var $modal = $("#domain-selected-view .api-c-failure-modal");
  $modal.sfDialog({titleHidden:true, buttons: domainSearch.sfDialogErrorButtons});
}

function showDomainRegistrationFailure(tld) {
  var 
    $failArea = $('#domainSearchWizard .domain-eligibility-fail'), 
    html = $failArea.html();
  html = html.replace(/\{0\}/gi, tld)
  $failArea.html(html);
  $('#domainSearchWizard .search-message').hide();
  $('#domainSearchWizard .domain-eligibility-fail').show();
}

function showTypeYourDomain() {  
  $('#domainSearchWizard .search-message').hide();
  $('#domainSearchWizard .type-your-business-name').show();
}

function displayMoreResultsLinks($view) {
  $view.find(".domain-available-view .view-all-button").show();
  $view.find(".show-more-section").show();
}

function hideMoreResultsLinks($view) {
  $view.find(".view-all-button").hide();
  $view.find(".show-more-section").hide();
}

function displayMoreResultsArea($view) {
  $view.find(".spin-results .spin-result").slideDown(domainSearch.animationTime);
  hideMoreResultsLinks($view);
  updateDomainCountText($view, domainSearch.totalSpinResults);
}

function updateDomainCountText($view, numberShowing) {
  var $spinCounts = $view.find('.spin-counts');
  var templateHtml = $spinCounts.data("result-count-template");
  templateHtml = templateHtml.replace(/\{0\}/gi, numberShowing); 
  templateHtml = templateHtml.replace(/\{1\}/gi, domainSearch.totalSpinResults);
  $spinCounts.html(templateHtml);
}

function animateWizard($currentView, $animateToView) {  

  if($currentView != undefined) {
    if($currentView[0].id === $animateToView[0].id) return; // we're there!

    // $currentView.hide();
  }

  // $animateToView.show();

  var currentViewHeight;
  var windowWidth = $(window).width();

  if($currentView == undefined)
    currentViewHeight = 0;
  else {
    if($currentView[0].id === $animateToView[0].id) return; // we're there!

    animateObjectOffToTheLeft($currentView, windowWidth, 2);
    currentViewHeight = $currentView.height();
  }

  var $wizard = $('#domainSearchWizard'),
  wizardHeight = $('#domainSearchWizard').height();

  // show view offscreen to get height
  $animateToView.css({"position":"absolute", "left": windowWidth + "px", "width": windowWidth + "px"}).show();
  // can only get height when shown      
  var toViewHeight = $animateToView.height(),
    maxHeight = Math.max(currentViewHeight, toViewHeight),
    minHeight = Math.min(currentViewHeight, toViewHeight);
  
  //run the animations
  animateHeight($wizard, wizardHeight, toViewHeight, 1);  
  animateObjectInFromTheRight($animateToView, windowWidth, 3);
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
