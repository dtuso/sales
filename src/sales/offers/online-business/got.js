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

var got1Page = {
  tldInfo: {
    defaultTld: 'com', 
    lastTldInList: 'org', 
    tlds: [@T[appSetting:<setting name="SALES_GOT_TLD_EVERYONE_LIST" />]@T],   
    possibleAdditionalTlds: [@T[appSetting:<setting name="SALES_GOT_TLD_RESTRICTED_LIST" />]@T],  
    isPossibleAdditionalTld: function(tld) {return -1 !== $.inArray(tld, got1Page.tldInfo.possibleAdditionalTlds);},
    addTldIf: function(tld, isDefault) {if(got1Page.tldInfo.isPossibleAdditionalTld(tld)) {got1Page.tldInfo.tlds.push(tld);if(isDefault) got1Page.tldInfo.defaultTld = tld;}}
  },
  sfDialogErrorButtons: [{text: 'OK', onClick: function($sfDialog) { $sfDialog.sfDialog('close'); } }],
  maxNumberOfSpinsToShowByDefault: 3,
  totalSpinResults: 0,
  dppErrorReturnUrl: '[@T[link:<relative path="~/offers/online-business.aspx"><param name="tldRegErr" value="tldRegErr" /><param name="dppDom" value="dppDom" /></relative>]@T]',   
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
  canOfferOls: true,
  animationTime: 800,
  animationEasingType: 'swing',
  isEnUs: '[@T[localization:<language full='true' />]@T]'.toLowerCase() === 'en-us'
};

##if(!productIsOffered(105))
  got1Page.canOfferOls = false;
##endif

##if(countrySiteAny(ca) || isManager())
  got1Page.tldInfo.addTldIf('ca', false);
##endif
##if(countrySiteAny(br) || isManager())
  got1Page.tldInfo.addTldIf('br', true);
##endif
##if(countrySiteAny(in) || isManager())
  got1Page.tldInfo.addTldIf('in', false);
##endif
##if(countrySiteAny(uk) || isManager())
  got1Page.tldInfo.addTldIf('co.uk', false);
  got1Page.tldInfo.addTldIf('uk',    false);
##endif
##if(countrySiteAny(fr) || isManager())
  got1Page.tldInfo.addTldIf('fr', true);
##endif
##if(countrySiteAny(it) || isManager())
  got1Page.tldInfo.addTldIf('it', true);
##endif
##if(countrySiteAny(at) || isManager())
  got1Page.tldInfo.addTldIf('at', true);
##endif
##if(countrySiteAny(es) || isManager())
  got1Page.tldInfo.addTldIf('es', true);
##endif
##if(countrySiteAny(nl) || isManager())
  got1Page.tldInfo.addTldIf('nl', true);
##endif
##if(countrySiteAny(de) || isManager())
  got1Page.tldInfo.addTldIf('de', true);
##endif
##if(countrySiteAny(ch) || isManager())
  got1Page.tldInfo.addTldIf('ch', true);
##endif
##if(countrySiteAny(be) || isManager())
  got1Page.tldInfo.addTldIf('be', true);
##endif
##if(countrySiteAny(pl) || isManager())
  got1Page.tldInfo.addTldIf('pl', true);
##endif
##if(countrySiteAny(ru) || isManager())
  got1Page.tldInfo.addTldIf('ru', true);
##endif
##if(countrySiteAny(dk) || isManager())
  got1Page.tldInfo.addTldIf('dk', true);
##endif

//- sort the list of TLDs, keeping default at the head of the list and lastTldInList at the end of the list
got1Page.tldInfo.tlds.sort();
got1Page.tldInfo.tlds.splice(got1Page.tldInfo.tlds.indexOf(got1Page.tldInfo.defaultTld), 1); //- remove default from list
got1Page.tldInfo.tlds.unshift(got1Page.tldInfo.defaultTld); //- add default to the beginning
got1Page.tldInfo.tlds.splice(got1Page.tldInfo.tlds.indexOf(got1Page.tldInfo.lastTldInList), 1); //- remove  lastTldInList from list
got1Page.tldInfo.tlds.push(got1Page.tldInfo.lastTldInList); //- add to the end of the list

$(document).ready(function() {

  showTldImagesInDomainArea(); //- dynamically build the tld images in the #findYourPerfectDomain section
  
  //- fix up list of valid tlds from lang files
  showAndOrderDynamicTldsInList("#products .TLD-token");
  showAndOrderDynamicTldsInList("#default-marquee-details-modal-wsb-only p");
  showAndOrderDynamicTldsInList("#default-marquee-details-modal p");
  showAndOrderDynamicTldsInList("#site-choice-wsb-modal p");
  showAndOrderDynamicTldsInList("#step2-choose-product-wsb-modal p");
  if(got1Page.canOfferOls) {
    showAndOrderDynamicTldsInList("#site-choice-ols-modal p");
    showAndOrderDynamicTldsInList("#step2-choose-product-ols-modal p"); 
  }
  showAndOrderDynamicTldsInList("#default-marquee-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-available-marquee-view .invalid-TLD-entered");
  showAndOrderDynamicTldsInList("#domain-not-available-marquee-view .invalid-TLD-entered");

  tokenizeDisclaimerModals();

  wireupModals();

  // when on the English page (US only) show the words OR rather than the universal OR graphic
  if(got1Page.isEnUs) {
    $("#site-choice-compare, #step2-choose-product").find('.or-container').addClass('or-container-en-us');
  }

  // set up verify buttons on spin results to do validation before sending to DPP
  $('#domain-available-marquee-view').on('click', '.purchase-btn', showChoicesScreen);
  
  $('#domain-not-available-marquee-view').on('click', '.select-and-continue', verifyDomainIsStillAvailable);
  $('#step2-choose-product').on('click','.btn-purchase', goToDppCheckoutPage);

  displayMoreResultsLinks();

  $('#show-more-section').on('click', '.clickable-show-more', displayMoreResultsArea);
  $('#domain-not-available-marquee-view').on('click', '.view-all-button', displayMoreResultsArea);

  $('#default-marquee-view').find('.see-details-disclaimer-link').attr('data-ci', got1Page.canOfferOls ? "95734" : "95736");

  $("[data-ci-workaround]").click(function(a){
    var $this=$(this);
    FastballEvent_MouseClick(a,$this.attr("data-ci-workaround"),$(this)[0],"a");
    fbiLibCheckQueue();
  });

});

function showAndOrderDynamicTldsInList(selector) {

  //- <span class="sorted-tld-list"><span class="tld-list tld-ca">.CA, </span>
  //- <span class="tld-list tld-club">.CLUB, </span></span>or .ORG

  var $this = $(selector),
    formatTldSelector = function(tld) { return '.tld-' + tld.replace('.','-')},
    tldList = got1Page.tldInfo.tlds,
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
  
  if(got1Page.canOfferOls) tokenizeDisclaimerModal('#default-marquee-details-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb,got1Page.pricing.bundleRenewal_ols);
  tokenizeDisclaimerModal('#default-marquee-details-modal-wsb-only.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);
  tokenizeDisclaimerModal('#default-marquee-details-modal-wsb-only-choice.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);  
  tokenizeDisclaimerModal('#site-choice-wsb-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);  
  if(got1Page.canOfferOls) tokenizeDisclaimerModal('#site-choice-ols-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_ols);
  tokenizeDisclaimerModal('#step2-choose-product-wsb-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_wsb);
  if(got1Page.canOfferOls) tokenizeDisclaimerModal('#step2-choose-product-ols-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_ols);
}

function wireupModals() {

  // wire up see details links  

  $('#default-marquee-view').on('click', '.see-details-disclaimer-link', function(){
    $(got1Page.canOfferOls ? "#default-marquee-details-modal" : "#default-marquee-details-modal-wsb-only")
      .sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });

  // product split modals
  $('#site-choice, #wsb-only-choice').on('click', '.see-wsb-disclaimer-link', function(){
    $("#site-choice-wsb-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });

  if(got1Page.canOfferOls) {
    $('#site-choice').on('click', '.see-ols-disclaimer-link', function(){
      $("#site-choice-ols-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
    });
  }

  // choose product screen
  $('#step2-choose-product').on('click', '.see-wsb-disclaimer-link', function(){
    $("#step2-choose-product-wsb-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
  });
  if(got1Page.canOfferOls) {
    $('#step2-choose-product').on('click', '.see-ols-disclaimer-link', function(){
      $("#step2-choose-product-ols-modal").sfDialog({buttons: got1Page.sfDialogErrorButtons});
    });
  }

  if(got1Page.canOfferOls) {
    $('#ols-stores-btn').on('click', function(){
      $("#site-choice-ols-stores-modal").sfDialog({titleHidden:true, dialogWidthIdeal:1230, buttons: []});
      $('#site-choice-ols-stores-modal').parent().css({ "overflow": "hidden" });
      window.triggerResize(); // force equalHeightSlides when modal is showing (otherwise they have no height when display:none)
    });
  }

}


function showTldImagesInDomainArea() {
  //dynamically build the tld images in the #findYourPerfectDomain section
  var $imageDiv = $('#findYourPerfectDomain').find(".features-img").parent().empty().addClass('tld-images');
  $.each(got1Page.tldInfo.tlds, function(idx, tld){
    var $img = $('<img>')
      .addClass('tld-image lazyload')
      .attr('data-lazyload-source', got1Page.imagePath + 'tld-' + tld + '.png');
    $imageDiv.append($img);
    lazyload.add($img);
  });

  // rerun the height alignment
  $('#findYourPerfectDomain [data-center-element]').css({marginTop:"0px"});
  $(window).trigger('resize');
}

function domainSearchFormSubmit(e, domain) { 

  var $this = $(e.target);

  var newItc = got1Page.offersCodes.itc_wsb;
  ##if(isManager())
    newItc = 'mgr_' + newItc;
  ##endif

  apiEndpoint1 = '[@T[link:<relative path="~/domainsapi/v1/search/free"><param name="domain" value="domain" /><param name="itc" value="itc" /></relative>]@T]';
  apiEndpoint1 = apiEndpoint1.replace('domain=domain', 'q=' + encodeURIComponent(domain) );
  apiEndpoint1 = apiEndpoint1.replace('itc=itc', 'key=' + newItc);

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
        $('#marquee').find('.search-form-input').val(''); 

        // tokenize header on search available page
        $('#available-domain-name').text(exactMatchDomain.Fqdn);

        var $thisSection = $this.closest('.js-marquee-section'); 

        var $toView = $('#domain-available-marquee-view');
        $toView.find('.purchase-btn').data('domain', exactMatchDomain);
        $toView.find('.search-message').hide();
        $toView.find('.search-message.type-your-business-name').show();

        animateMarquee($thisSection, $toView /*toView*/);

      } else {

        // tokenize header on search available page
        $('#not-available-domain-name').text(exactMatchDomain.Fqdn);

        // Domain is taken, show spins if possible
        if(alternateDomains.length > 0) {

          // SHOW SPINS
          showSearchSpins($this, exactMatchDomain, alternateDomains);

          $('#marquee').find('.search-form-input').val(''); 
          
        } else {
          // NO SPINS
          showApi1or2SearchError(e, domain);
        }

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
        showChoicesScreen(e);
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

function showChoicesScreen(e){

  // bypass the choices if OLS is not available for their market
  if(!got1Page.canOfferOls) {
    goToDppCheckoutPage(e);
    return;
  }
  var $this = $(e.target),
    domain = $this.data('domain');

  $('#step2-choose-product').find('.btn-purchase').data('domain', domain);
  $('#products, #domains').hide();
  var $thisSection = $this.closest('.js-marquee-section');

  animateMarquee($thisSection, $('#step2-choose-product') /*toView*/);

  // FOR IE we need to resize the plan boxes that were previously hidden
  // code taken from landing-page.jade to auto height these two modules  
  var $proPlanWraps = $("#step2-choose-product").find(".pro-plans").find(".pro-plan-wrap"),
    maxHeight = 0;
  $proPlanWraps
    .css({"height":"auto"})
    .each(function(index, plan) {
      maxHeight = $(plan).outerHeight() > maxHeight ? $(plan).outerHeight() : maxHeight;
  });
  if( maxHeight > 0 ) $proPlanWraps.find(".pro-plan-wrap").css("height", maxHeight);

}

function goToDppCheckoutPage(e) {
  var $this = $(e.target),
    domain = $this.data('domain'),
    isOLS = $this.hasClass('product-ols'),
    apiEndpoint3,
    returnUrl = encodeURIComponent(got1Page.dppErrorReturnUrl.replace('tldRegErr=tldRegErr', 'tldRegErr=.' + domain.Extension).replace('dppDom=dppDom', 'dppDom=' + encodeURIComponent(domain.Fqdn)));

  apiEndpoint3 = '[@T[link:<relative path="~/api/dpp/searchresultscart/11/"><param name="domain" value="domain" /><param name="packageid" value="packageid" /><param name="itc" value="itc" /><param name="returnUrl" value="returnUrl" /></relative>]@T]';
  apiEndpoint3 = apiEndpoint3.replace('domain=domain', 'domain=' + encodeURIComponent(domain.Fqdn));
  apiEndpoint3 = apiEndpoint3.replace('packageid=packageid', 'packageid=' + (isOLS ? got1Page.offersCodes.packageId_ols : got1Page.offersCodes.packageId_wsb));
  apiEndpoint3 = apiEndpoint3.replace('itc=itc', 'itc=' + (isOLS ? got1Page.offersCodes.itc_ols : got1Page.offersCodes.itc_wsb));
  apiEndpoint3 = apiEndpoint3.replace('returnUrl=returnUrl', 'returnUrl=' +  returnUrl );

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

function showSearchSpins($this, domain, alternateDomains){  

  displayMoreResultsLinks(alternateDomains.length);

  // clear any spins from the DOM
  $('#spin-results .spin-result').remove();
  totalSpinResults =  0;
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
  got1Page.totalSpinResults = alternateDomains.length;
  
  if(got1Page.totalSpinResults <= got1Page.maxNumberOfSpinsToShowByDefault) {
    hideMoreResultsLinks();
  } else {
    updateDomainCountText(got1Page.maxNumberOfSpinsToShowByDefault);
  }
  
  $("#spin-results .spin-result:lt(" + got1Page.maxNumberOfSpinsToShowByDefault + ")").show(); // show first 3 results

  var $thisSection = $this.closest('.js-marquee-section');
  var $toView = $('#domain-not-available-marquee-view');
  $toView.find('.search-message').hide();
  $toView.find('.search-message.type-your-business-name').show();
  animateMarquee($thisSection, $toView /*toView*/);

}

function showApi1or2SearchError(e,domain){
  var $modal = $("#api-failure");
  $modal.sfDialog({titleHidden:true, buttons: got1Page.sfDialogErrorButtons});
}

function showApi3SearchError(e,domain){  
  var $modal = $("#step2-choose-product .api-c-failure-modal");
  $modal.sfDialog({titleHidden:true, buttons: got1Page.sfDialogErrorButtons});
}

function displayMoreResultsLinks() {
  $("#domain-not-available-marquee-view .view-all-button").show();
  $("#show-more-section").show();
}

function hideMoreResultsLinks() {
  $("#domain-not-available-marquee-view .view-all-button").hide();
  $("#show-more-section").hide();
}

function displayMoreResultsArea() {
  $("#spin-results .spin-result").slideDown(got1Page.animationTime);
  hideMoreResultsLinks();
  updateDomainCountText(got1Page.totalSpinResults);
}

function updateDomainCountText(numberShowing) {
  var $spinCounts = $('#spin-counts');
  var templateHtml = $spinCounts.data("result-count-template");
  templateHtml = templateHtml.replace(/\{0\}/gi, numberShowing); 
  templateHtml = templateHtml.replace(/\{1\}/gi, got1Page.totalSpinResults);
  $spinCounts.html(templateHtml);
}

function animateMarquee($currentView, $animateToView) {  

  if($currentView[0].id === $animateToView[0].id) return; // we're there!

  var currentViewHeight = $currentView.height(),
    windowWidth = $(window).width(),
    $marquee = $('#marquee'),
    marqueeHeight = $('#marquee').height();

  // show view offscreen to get height
  $animateToView.css({"position":"absolute", "left": windowWidth + "px", "width": windowWidth + "px"}).show();
  // can only get height when shown      
  var toViewHeight = $animateToView.height(),
    maxHeight = Math.max(currentViewHeight, toViewHeight),
    minHeight = Math.min(currentViewHeight, toViewHeight);
  
  //run the animations
  animateHeight($marquee, marqueeHeight, toViewHeight, 1);  
  animateObjectOffToTheLeft($currentView, windowWidth, 2);
  animateObjectInFromTheRight($animateToView, windowWidth, 3);
}

function animateHeight($obj, startHeight, finishHeight, zIndex) {
  $obj
    .css({"height": startHeight + "px", "z-index": zIndex})
    .animate({
      "height": finishHeight + "px"
    },{ 
      duration: got1Page.animationTime, 
      easing: got1Page.animationEasingType, 
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
      duration: got1Page.animationTime, 
      easing: got1Page.animationEasingType, 
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
      duration: got1Page.animationTime , 
      easing: got1Page.animationEasingType, 
      complete:function(){
        $obj.css({"position":"relative", "width": "auto", "left": "0px", "z-index": "1"}).show();  
      }
    });
  $(document).trigger('resize');
}

$(window).load(function () {
  $('.bigtext').bigtext({maxfontsize: 160});
  setTimeout( "$('.bigtext').bigtext().css('visibility', 'visible');",500 );
});