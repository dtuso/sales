var got1Page = {
  tldInfo: {
    defaultTld: 'com', 
    lastTldInList: 'org', 
    tlds: [@T[appSetting:<setting name="SALES_GOT_TLD_EVERYONE_LIST" />]@T],   
    possibleAdditionalTlds: [@T[appSetting:<setting name="SALES_GOT_TLD_RESTRICTED_LIST" />]@T],  
    isPossibleAdditionalTld: function(tld) {return -1 !== $.inArray(tld, got1Page.tldInfo.possibleAdditionalTlds);}
  },
  sfDialogErrorButtons: [{text: 'OK', onClick: function($sfDialog) { $sfDialog.sfDialog('close'); } }],
  maxNumberOfSpinsToShowByDefault: 3,
  lastSpinResultCount: 0,
  dppErrorReturnUrl: '[@T[link:<relative path="~/offers/online-business.aspx"><param name="err" value="dpp1" /></relative>]@T]',
  offersCodes: {
    packageId_wsb: 'gybo_1email_1yr',
    packageId_ols: 'gybo_1email_1yr_ols',
    itc_wsb: 'slp_GYBO1',
    itc_ols: 'slp_GYBO2',
  },
  pricing: {
    promo_wsb: '[@T[multipleproductprice:<current productidlist="464069|101|7524" period="monthly" promocode="24681357" />]@T]',
    promo_ols: '[@T[multipleproductprice:<current productidlist="464069|101|40972" period="monthly" promocode="75315678" />]@T]',
    bundleRenewal_wsb: '[@T[multipleproductprice:<list productidlist="464069|101|7524" period="monthly"></list>]@T]',
    bundleRenewal_ols: '[@T[multipleproductprice:<list productidlist="464069|101|40972" period="monthly"></list>]@T]',
    bingAdCredits: '[@T[currencyprice:<price usdamount="5000" dropdecimal="true" htmlsymbol="false" />]@T]'
  },
  imagePath: '[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/offers/online-business/',
  canOfferOls: true
};


function showAndOrderDynamicTldsInList(selector) {

  // <span class="sorted-tld-list"><span class="tld-list tld-ca">.CA, </span>
  // <span class="tld-list tld-club">.CLUB, </span></span>or .ORG

  var $this = $(selector),
    formatTldSelector = function(tld) { return '.tld-' + tld.replace('.','-')},
    tldList = got1Page.tldInfo.tlds,
    removedSpansArr = [],
    $sortedArea = $this.find(".sorted-tld-list");

  // remove all dynamic tlds from this
  $.each(tldList, function(idx, tld){
    var $tldItem = $this.find(formatTldSelector(tld));
    removedSpansArr.push($tldItem);
  });

  // insert sorted HTML back into the original object and show the ones that are turned on
  $sortedArea.empty();
  $.each(removedSpansArr, function(idx, tldSpan) {
    $sortedArea.append(tldSpan);
  });

  // show sorted list
  $this.find('.tld-list').show();
}


##if(!productIsOffered(105))
  got1Page.canOfferOls = false;
##endif


##if(countrySiteAny(ca) || isManager())  
  if(got1Page.tldInfo.isPossibleAdditionalTld('ca')) {
    got1Page.tldInfo.tlds.push('ca');
    got1Page.tldInfo.defaultTld = 'ca';
  }
##endif
##if(countrySiteAny(br) || isManager())
  if(got1Page.tldInfo.isPossibleAdditionalTld('br')) {
    got1Page.tldInfo.tlds.push('br');
    got1Page.tldInfo.defaultTld = 'br';
  }
##endif
##if(countrySiteAny(in) || isManager())
  if(got1Page.tldInfo.isPossibleAdditionalTld('in')) {
    got1Page.tldInfo.tlds.push('in');
    got1Page.tldInfo.defaultTld = 'in';
  }
##endif
##if(countrySiteAny(uk) || isManager())
  if(got1Page.tldInfo.isPossibleAdditionalTld('co.uk')) {
    got1Page.tldInfo.tlds.push('co.uk');
    got1Page.tldInfo.defaultTld = 'co.uk';
  }
  if(got1Page.tldInfo.isPossibleAdditionalTld('uk')) {
    got1Page.tldInfo.tlds.push('uk');
    got1Page.tldInfo.defaultTld = 'uk';
  }
##endif

// sort the list of TLDs, keeping default at the head of the list and lastTldInList at the end of the list
got1Page.tldInfo.tlds.sort();
got1Page.tldInfo.tlds.splice(got1Page.tldInfo.tlds.indexOf(got1Page.tldInfo.defaultTld), 1); // remove default from list
got1Page.tldInfo.tlds.unshift(got1Page.tldInfo.defaultTld); // add default to the beginning
got1Page.tldInfo.tlds.splice(got1Page.tldInfo.tlds.indexOf(got1Page.tldInfo.lastTldInList), 1); // remove  lastTldInList from list
got1Page.tldInfo.tlds.push(got1Page.tldInfo.lastTldInList); // add to the end of the list
console.dir(got1Page.tldInfo.tlds);
console.log(got1Page.tldInfo.tlds);

$(document).ready(function() {

  showTldImagesInDomainArea(); //dynamically build the tld images in the #findYourPerfectDomain section
  
  // fix up list of valid tlds from lang files
  showAndOrderDynamicTldsInList("#marquee .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#default-marquee-details-modal-wsb-only");
  showAndOrderDynamicTldsInList("#default-marquee-details-modal");
  showAndOrderDynamicTldsInList("#site-choice-wsb-modal p");
  showAndOrderDynamicTldsInList("#site-choice-ols-modal p");
  showAndOrderDynamicTldsInList("#step2-choose-product-wsb-modal p");
  showAndOrderDynamicTldsInList("#step2-choose-product-ols-modal p"); 
  showAndOrderDynamicTldsInList("#default-marquee-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-available-marquee-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-not-available-marquee-view .invalid-TLD-entered");
  tokenizeDisclaimerModals();
 
  tokenizeOnDataTokenizeAttribute();

  wireUpDisclaimerModals();

  //set up domain search buttons to do a domain search
  $('#marquee')
    .on('keyup', '.search-form-input', function(e) { 
      if ( e.which == 13 ) {
        // enter key!
        e.preventDefault();
        domainSearchFormSubmit(e);
        return false;
      } else {
        // verify domain name has a good tld
        var domain = $(e.target).val();
        if(domain.indexOf('.') > 0 && !isTldValid(domain)) {
          displayInvlidTldMessage();
        } else {
          showTypeYourDomain();
        }
      }

    })
    .on('click', '.offer-search-btn', function(e) {
      e.preventDefault();
      domainSearchFormSubmit(e);
      return false;
    });

  // set up verify buttons on spin results to do validation before sending to DPP
  $('#domain-available-marquee-view').on('click', '.purchase-btn', showChoicesScreen);
  
  showTypeYourDomain();

  $('#domain-not-available-marquee-view').on('click', '.select-and-continue', verifyDomainIsStillAvailable);
  $('#step2-choose-product').on('click','.btn-purchase', goToDppCheckoutPage);

  displayMoreResultsLinks();
  $('#show-more-section').on('click', '.show-more-arrow', displayMoreResultsArea);
  $('#domain-not-available-marquee-view').on('click', '.view-all-button', displayMoreResultsArea);

  // track ci codes
  $('[data-ci]').click(function (e) {
      var $this = $(this);
      var ci = $this.attr('data-ci');
      FastballEvent_MouseClick(e, ci, $(this)[0], 'a');
      fbiLibCheckQueue();
  });

});

function tokenizeOnDataTokenizeAttribute() {
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
  tokenizeDisclaimerModal(
    '#default-marquee-details-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb,got1Page.pricing.ols);
  tokenizeDisclaimerModal(
    '#default-marquee-details-modal-wsb-only.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);
  tokenizeDisclaimerModal(
    '#site-choice-wsb-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);
  tokenizeDisclaimerModal(
    '#site-choice-ols-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_ols);
}

function wireUpDisclaimerModals() {

  // wire up see details links
  var marqueeModalId = got1Page.canOfferOls ? "#default-marquee-details-modal" : "#default-marquee-details-modal-wsb-only";
  $('#default-marquee-view').on('click', '.see-details-disclaimer-link', function(){
    var $modal = $(marqueeModalId);
    $modal.sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });

  // product split modals
  $('#site-choice').on('click', '.see-wsb-disclaimer-link', function(){
    $("#site-choice-wsb-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });
  $('#site-choice').on('click', '.see-ols-disclaimer-link', function(){
    $("#site-choice-ols-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });

  // choose product screen
  $('#step2-choose-product').on('click', '.see-wsb-disclaimer-link', function(){
    $("#step2-choose-product-wsb-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });
  $('#step2-choose-product').on('click', '.see-ols-disclaimer-link', function(){
    $("#step2-choose-product-ols-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });


}


function showTldImagesInDomainArea() {
  //dynamically build the tld images in the #findYourPerfectDomain section
  var $imageDiv = $('#findYourPerfectDomain').find(".features-img").parent().empty().addClass('tld-images');
  $.each(got1Page.tldInfo.tlds, function(idx, tld){
    var $img = $('<img>')
      .addClass('tld-image')
      .attr('src', got1Page.imagePath + 'tld-' + tld + '.png');
    $imageDiv.append($img);
  });

  // rerun the height alignment
  $('#findYourPerfectDomain [data-center-element]').css({marginTop:"0px"});
  $(window).trigger('resize');
}

function formatDomainWithDefaultTldIfNoneSpecified(domain) {
  if(domain.indexOf('.') > 0) return domain;
  return domain + '.' + got1Page.tldInfo.defaultTld;
}

function isTldValid(domain) {
  var isValid = false;
  $.each(got1Page.tldInfo.tlds, function(idx, tld) {
    if(domain.indexOf(tld, domain.length - tld.length) !== -1) {
      isValid = true;
    }
  });
  return isValid;
}


function domainSearchFormSubmit(e) {
 
  var $this = $(e.target),
    $textInput = $this.siblings('.search-form-input'),
    domain = $textInput.val().trim(), 
    sucessful = false,
    apiEndpoint1;

  if((domain && domain.length==0) || !domain) return;
  
  domain = formatDomainWithDefaultTldIfNoneSpecified(domain);

  if(!isTldValid(domain)) {
    displayInvlidTldMessage();
    return;
  }

  apiEndpoint1 = '[@T[link:<relative path="~/domainsapi/v1/search/free"><param name="domain" value="domain" /><param name="itc" value="itc" /></relative>]@T]';
  apiEndpoint1 = apiEndpoint1.replace('domain=domain', 'q=' + domain);
  apiEndpoint1 = apiEndpoint1.replace('itc=itc', 'key=' + got1Page.offersCodes.itc_wsb);

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

      if(isAvailable) {
        // Domain is available, so allow them to search again or to select this available domain
        showSuccessfulSearch(exactMatchDomain);

      } else {
        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {
          // SHOW SPINS
          showSearchSpins(exactMatchDomain, alternateDomains);
        } else {
          // NO SPINS
          showApi1SearchError(e, domain);
        }

      }    

    },
    error: function(){
      showApi1SearchError(e, domain);
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
  apiEndpoint2 = apiEndpoint2.replace('sld=sld', 'sld=' + domain.NameWithoutExtension);
  apiEndpoint2 = apiEndpoint2.replace('tld=tld', 'tld=' + domain.Extension);

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
        showChoicesScreen(e);
      } else {
        // display domain is now unavailable message
        $thisParent.find('.spin-results-message').hide();
        $thisParent.find('.now-unavailable').show();
      }
    },
    error: function(){
      showApi2SearchError(e, domain);
    }
  });

}

function showChoicesScreen(e){

  // bypass the choices if OLS is not available for their market
  if(!got1Page.canOfferOls) {
    goToDppCheckoutPage(e);
    return;
  }
  var $this = $(e.target),
    domain = $this.data('domain');

  $('#marquee, #domains, #products').hide();
  $('#step2-choose-product')
    .show()
    .find('.btn-purchase').data('domain', domain);

  // TODO: rerun the height alignment on the choose product screen
}

function goToDppCheckoutPage(e) {
  var $this = $(e.target),
    domain = $this.data('domain'),
    isOLS = $this.hasClass('product-ols'),
    apiEndpoint3;

  apiEndpoint3 = '[@T[link:<relative path="~/api/dpp/searchresultscart/11/"><param name="domain" value="domain" /><param name="packageid" value="packageid" /><param name="itc" value="itc" /><param name="returnUrl" value="returnUrl" /></relative>]@T]';
  apiEndpoint3 = apiEndpoint3.replace('domain=domain', 'domain=' + domain.Fqdn);
  apiEndpoint3 = apiEndpoint3.replace('packageid=packageid', 'packageid=' + (isOLS ? got1Page.offersCodes.packageId_ols : got1Page.offersCodes.packageId_wsb));
  apiEndpoint3 = apiEndpoint3.replace('itc=itc', 'itc=' + (isOLS ? got1Page.offersCodes.itc_ols : got1Page.offersCodes.itc_wsb));
  apiEndpoint3 = apiEndpoint3.replace('returnUrl=returnUrl', 'returnUrl=' +  encodeURIComponent(got1Page.dppErrorReturnUrl) );

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

function showSuccessfulSearch(domain){  

  // setup search box
  $('.search-message').hide();

  $('#available-domain-name').text(domain.Fqdn);
  animateToAvailable(domain);

}

function showSearchSpins(domain, alternateDomains){  

  // setup search box
  $('.search-message').hide();
  displayMoreResultsLinks();

  // clear any spins from the DOM
  $('#spin-results .spin-result').remove();
  lastSpinResultCount =  0;
  var $spinResults = $('#spin-results');
  var $spinTemplate = $('#spin-template-wrap').find('.spin-template');
  $.each(alternateDomains, function(idx,domain){
    var $newSpin = $spinTemplate.clone();
    $newSpin.removeClass('spin-template');
    $newSpin.find('.domain-name-display').text(domain.NameWithoutExtension);
    $newSpin.find('.domain-name-display-tld').text('.' + domain.Extension);
    $newSpin.find('.select-and-continue').show().data('domain', domain);
    $spinResults.append($newSpin);
  });
  got1Page.lastSpinResultCount = alternateDomains.length;
  updateDomainCountText(true);
  $("#spin-results .spin-result:lt(" + got1Page.maxNumberOfSpinsToShowByDefault + ")").show(); // show first 3 results

  animateToNotAvailable(domain); 

}

function showApi1SearchError(e,domain){
  $('.search-message').hide();
  $('.api-A-failure').show();
}

function displayInvlidTldMessage(){
  $('#marquee .search-message').hide();
  $('#marquee .invalid-TLD-entered').show();
}

function showApi2SearchError(e,domain){
  var $modal = $("#step2-choose-product .api-b-failure-modal");
  $modal.sfDialog({titleHidden:true, buttons: got1Page.sfDialogErrorButtons});
}

function showApi3SearchError(e,domain){
  
  var $modal = $("#step2-choose-product .api-c-failure-modal");
  $modal.sfDialog({titleHidden:true, buttons: got1Page.sfDialogErrorButtons});

}

function showDomainRegistrationFailure() {
  $('#marquee .search-message').hide();
  $('#marquee .domain-eligibility-fail').show();
}

function showTypeYourDomain() {  
  $('#marquee .search-message').hide();
  $('#marquee .type-your-business-name').show();
}

function displayMoreResultsLinks() {
  $("#domain-not-available-marquee-view button.view-all-button").show();
  $("#show-more-section").show();
}

function hideMoreResultsLinks() {
  $("#domain-not-available-marquee-view button.view-all-button").hide();
  $("#show-more-section").hide();
}

function displayMoreResultsArea () {
  $("#spin-results .spin-result").show('slow');
  hideMoreResultsLinks();
  updateDomainCountText(false);
}

function updateDomainCountText(initial) {
  var $header = $('#domain-not-available-marquee-view').find('.results-list-heading-text');
  var numbersHtml = $header.html();
  if (initial) {
    numbersHtml = '[@L[cds.sales/offers/online-business:32573-number-of-number-results]@L]';
    numbersHtml = numbersHtml.replace(/\{0\}/gi, got1Page.maxNumberOfSpinsToShowByDefault); 
    numbersHtml = numbersHtml.replace(/\{1\}/gi, got1Page.lastSpinResultCount);
  }
  else {
    numbersHtml = '[@L[cds.sales/offers/online-business:32573-number-of-number-results]@L]';
    numbersHtml = numbersHtml.replace(/\{0\}/gi, got1Page.lastSpinResultCount); 
    numbersHtml = numbersHtml.replace(/\{1\}/gi, got1Page.lastSpinResultCount);
  }
  $header.html(numbersHtml);
}

