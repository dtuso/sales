var wpHosting = {
  sfDialogOkButton: {text: 'OK', onClick: function($sfDialog) { $sfDialog.sfDialog('close'); } },  
  offersCodes: {
    packageId: 'gybo_1email_1yr',
    itc: 'slp_GYBO1'
  },
  supportPhone: '[@T[support:<tes.CLOUDSERVERCONCIERGE_PHONE />]@T]',
  ci: {
    marqueeGetStarted: '96210',
    marqueeDisclaimer: '96209',
    plansAddToCartA: '96216',
    plansAddToCartB: '96217',
    plansAddToCartC: '96218',
    plansAddToCartD: '96219',
    plansLearnMore: '96220',
    midPageNavFeature: '96211',
    midPageNavPerformance: '96212',
    midPageNavSecuriy: '96213',
    midPageNavTraining: '96215',
    midPageNavSeeThePlans: '96214',
    advancedFeatureDetails: '96203',
    cloudSpeculator: '96207',
    seeUpToDateResults: '96221',
    poweredBySidekick: '96225',
    trainingCarouselSlideLeft: '96204',
    trainingCarouselSlideRight: '96205',
    trainingCarouselSlideSel: '96206',
    trainingGetStartedNow: '96222',
    alternativeWebHostingLearnMore: '96223',
    alternativeWebsiteBuilderLearnMore: '96224',
    footerDisclaimer: '96208'
  },
  pricing: {
    current: {
      A: '',
      B: '',
      C: '',
      D: ''
    },
    renewal: {
      A: '',
      B: '',
      C: '',
      D: ''
    }
  },
  imagePath: '[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/wordpress-hosting/',
  canOfferOls: true,
  animationTime: 800,
  animationEasingType: 'swing',
  showDeveloperPlan: true,
  isEnUs: '[@T[localization:<language full='true' />]@T]'.toLowerCase() === 'en-us'
};

// TODO: create split test in all three environments
##if(splitTestingSideIsActive(99999, B))
  wpHosting.showDeveloperPlan = false;
##endif


$(document).ready(function(){

  tokenizeDisclaimerModal('#step2-choose-product-ols-modal.tokenizable-disclaimer-modal',got1Page.pricing.bundleRenewal_ols);

  $('#default-marquee-view').on('click', '.see-details-disclaimer-link', function(){
    $("#default-marquee-details-modal-wsb-only").sfDialog({
      buttons: [got1Page.sfDialogOkButton]
    });
  });

});


function tokenizeDisclaimerModal(selector, price0, price1) {

  $(selector).each(function(idx, modal) {
    var $modal = $(modal);
    var htmlTokenized = $modal.html();
    htmlTokenized = htmlTokenized.replace(/\{0\}/gi, price0);
    htmlTokenized = htmlTokenized.replace(/\{1\}/gi, price1);
    $modal.html(htmlTokenized);
  });

}


