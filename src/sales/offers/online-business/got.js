var got1Page = {
  tlds: ['com','org','co','net', 'club', 'rocks'],
  defaultTld: 'com',
  maxNumberOfSpinsToShowByDefault: 3,
  dppErrorReturnUrl: '[@T[link:<relative path="~/offers/online-business.aspx"><param name="err" value="dpp1" /></relative>]@T]',
  offersCodes: {
    packageId_wsb: 'gybo_1email_1yr',
    packageId_ols: 'gybo_1email_1yr_ols',
    itc_wsb: 'slp_GYBO1',
    itc_ols: 'slp_GYBO2',
  },
  pricing: {
    promo_wsb: '[@T[multipleproductprice:<current productidlist="464069|101|7524" period="monthly" promocode="24681357" />]@T]',
    promo_ols: '[@T[multipleproductprice:<current productidlist="40972|101|7524" period="monthly" promocode="75315678" />]@T]',
    bundleRenewal_wsb: '[@T[multipleproductprice:<list productidlist="464069|101|7524" period="monthly"></list>]@T]',
    bundleRenewal_ols: '[@T[multipleproductprice:<list productidlist="40972|101|7524" period="monthly"></list>]@T]',
    bingAdCredits: '[@T[currencyprice:<price usdamount="5000" dropdecimal="true" htmlsymbol="false" />]@T]'
  },
  imagePath: '[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/offers/online-business/'
};

##if(countrySiteAny(br) || isManager())
  got1Page.tlds.push('br');
  got1Page.defaultTld = 'br';
##endif
##if(countrySiteAny(in) || isManager())
  got1Page.tlds.push('in');
  got1Page.defaultTld = 'in';
##endif
##if(countrySiteAny(uk) || isManager())
  got1Page.tlds.push('uk');
  got1Page.tlds.push('co.uk');
  got1Page.defaultTld = 'uk';
##endif

$(document).ready(function() {


  //dynamically build the tld images in the #findYourPerfectDomain section
  showTldImages();


  $('[data-tokenize]').each(function(){
    var $this = $(this),
      html = $this.html(),
      val = $this.data('tokenize'),
        tokenizedHtml = html.replace(/\{0\}/gi, val);
    $this
      .html(tokenizedHtml)
      .removeAttr('data-tokenize');
  });

  //set up domain search buttons to do a domain search
  $('#marquee').on('click', '.offer-search-btn', function(e) {
    window.setTimeout(function(){
      domainSearchFormSubmit(e);
    },0);
    return false;
  });

  // set up verify buttons on spin results to do validation before sending to DPP
  $('#domain-available-marquee-view').on('click', '.purchase-btn', showChoicesScreen);
  
  showTypeYourDomain();

  $('#domain-not-available-marquee-view').on('click', '.select-and-continue', verifyDomainIsStillAvailable);
  $('#step2-choose-product').on('click','.btn-purchase', goToDppCheckoutPage);

  // track ci codes
  $('[data-ci]').click(function (e) {
      var $this = $(this);
      var ci = $this.attr('data-ci');
      FastballEvent_MouseClick(e, ci, $(this)[0], 'a');
      fbiLibCheckQueue();
  });

});

function showTldImages() {
  console.log('TODO: showTldImages');
  return;
  //dynamically build the tld images in the #findYourPerfectDomain section
  var $imageDiv = $('#findYourPerfectDomain').find(".features-img").parent().empty();
  $.each(got1Page.tlds, function(idx, tld){
    var $img = $('<img>').attr('src', got1Page.imagePath + 'tld-' + tld + '.jpg');
    $imageDiv.append($img);
  });

  // TODO: rerun the height alignment
}

function populateTldsOnDisclaimerModal(selector) {
  var $this = $(selector);
  ##if(countrySiteAny(br) || isManager())
    $this.find('.tlds-br').show();
  ##endif
  ##if(countrySiteAny(in) || isManager())
    $this.find('.tlds-in').show();
  ##endif
  ##if(countrySiteAny(uk) || isManager())
    $this.find('.tlds-uk').show();
  ##endif
}

function formatDomainWithDefaultTldIfNoneSpecified(domain) {
  if(domain.indexOf('.') > 0) return domain;
  return domain + '.' + got1Page.defaultTld;
}

function isTldValid(domain) {
  var isValid = false;
  $.each(got1Page.tlds, function(idx, tld) {
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
    displayInvlidTldMessage($this);
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

  // clear any spins from the DOM
  $('#spin-results .spin-result').remove();

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
  var $header = $('#domain-not-available-marquee-view').find('.results-list-heading-text');

  var numbersHtml = $header.html();
  numbersHtml = numbersHtml.replace(/\{0\}/gi, got1Page.maxNumberOfSpinsToShowByDefault); 
  numbersHtml = numbersHtml.replace(/\{1\}/gi, alternateDomains.length);
  $header.html(numbersHtml);

  animateToNotAvailable(domain); 

}

function showApi1SearchError(e,domain){
  $('.search-message').hide();
  $('.api-A-failure').show();
}

function displayInvlidTldMessage($this){
  $('.search-message').hide();
  $('.invalid-TLD-entered').show();
}

function showApi2SearchError(e,domain){
  // TODO!
  alert('TODO showApi2SearchError()');
}

function showApi3SearchError(e,domain){
  
  // alert box
  alert('API 3 error!');

}

function showDomainRegistrationFailure() {
  $('.search-message').hide();
  $('.domain-eligibility-fail').show();
}

function showTypeYourDomain() {  
  $('.search-message').hide();
  $('.type-your-business-name').show();
}