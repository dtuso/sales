


var got1Page = {
  tlds: ['com','org','co','net'],
  defaultTld: 'com',
  maxNumberOfSpinsToShowByDefault: 3,
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
  }
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
      console.log(1);
      domainSearchFormSubmit(e);
    },0);
    return false;
  });

  // set up verify buttons on spin results to do validation before sending to DPP
  $('#marquee').on('click', '.spin-domain-action-button', verifyDomainIsStillAvailable);

  $('#marquee').on('click', '.purchase-btn', showChoicesScreen);

  $('#marquee').on('click', '.select-and-continue', verifyDomainIsStillAvailable);


  // track ci codes
  $('[data-ci]').click(function (e) {
      var $this = $(this);
      var ci = $this.attr('data-ci');
      FastballEvent_MouseClick(e, ci, $(this)[0], 'a');
      fbiLibCheckQueue();
  });

});

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
function formatDomainWithDefaultTld(domain) {
  alert("todo: formatDomainWithDefaultTld() ");
  // TODO: check to see fi there's already a TLD on it
  return domain + '.' + got1Page.defaultTld;
}
function isTldValid(domain) {
  //TODO: check list of valid TLDs
  alert("todo: isTldValid() ");
  return true;
}
function displayInvlidTldMessage($this){
  alert("todo: displayInvlidTldMessage() ");
}

function domainSearchFormSubmit(e) {
 
  var $this = $(e.target),
    $textInput = $this.siblings('.search-form-input'),
    domain = $textInput.val(), 
    sucessful = false;

  if((domain && domain.length==0) || !domain) return;
  
  domain = formatDomainWithDefaultTld(domain);

  if(!isTldValid(domain)) {
    displayInvlidTldMessage($this);
    return;
  }

  var apiEndpoint = '[@T[link:<relative path="~/domainsapi/v1/search/free"><param name="domain" value="domain" /><param name="itc" value="itc" /></relative>]@T]';
      apiEndpoint = apiEndpoint.replace('domain=domain', 'q=' + domain);
      apiEndpoint = apiEndpoint.replace('itc=itc', 'key=' + got1Page.offersCodes.itc_wsb);

  $this.addClass('disabled');

  $.ajaxSetup({cache:false});
  $.ajax({
    url: apiEndpoint,
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
          showSuccessfulSearch(exactMatchDomain);
        } else {

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
    domain = $this.data('domain');

  // TODO!
  alert('TODO verifyDomainIsStillAvailable(' + domain.Fqdn + ')');

}

function showChoicesScreen(e){
  var $this = $(e.target),
    domain = $this.data('domain');

  alert('TODO showChoicesScreen(' + domain.Fqdn + ')');

}

function goToDppCheckoutPage(e) {
  var $this = $(e.target),
    domain = $this.data('domain');

  alert('TODO goToDppCheckoutPage(' + domain.Fqdn + ')');

}

function showSuccessfulSearch(domain){  

  $('#available-domain-name').text(domain.Fqdn);
  animateToAvailable(domain);

}

function showSearchSpins(domain, alternateDomains){  

  var $spinResults = $('#spin-results');
  var $spinTemplate = $spinResults.find('.spin-template');
  $.each(alternateDomains, function(idx,domain){
    var $newSpin = $spinTemplate.clone().removeClass('spin-template');
    $newSpin.find('.domain-name-display').text(domain.NameWithoutExtension);
    $newSpin.find('.domain-name-display-tld').text(domain.Extension);
    $newSpin.find('.btn-primary').data('domain', domain);
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
  // TODO!
  alert('TODO showApi1SearchError()');
}

function showApi2SearchError(e,domain){
  // TODO!
  alert('TODO showApi2SearchError()');
}

function showApi3SearchError(e,domain){
  // TODO!
  alert('TODO showApi3SearchError()');
}

function showDomainRegistrationFailure() {
  // TODO!
  alert('TODO showDomainRegistrationFailure()');
}