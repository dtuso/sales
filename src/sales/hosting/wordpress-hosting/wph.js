var wpHosting = {
  sfDialogOkButton: {text: 'OK', onClick: function($sfDialog) { $sfDialog.sfDialog('close'); } },  
  offersCodes: {
    packageId: 'gybo_1email_1yr',
    itc: 'slp_GYBO1'
  },
  supportPhone: '[@T[support:<tes.CLOUDSERVERCONCIERGE_PHONE />]@T]',
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

  activateHref("cloudspecator-link", "#{page.ci.cloudSpeculator}" , "", "_blank");
  activateHref("see-latest-results-btn", "#{page.ci.seeUpToDateResults}", "", "_blank");
  activateHref("sidekick-link", "#{page.ci.poweredBySidekick}", "", "_blank");
  activateHref("visitor-overprotection-link", "#{page.ci.visitorOverprotection}", "", "_blank");
  activateHref("wordpress-plugins-link", "#{page.ci.wordpressPlugins}", "", "_self");
  function activateHref(id, ciCode, url, target){
    $('#' + id)
      .attr('data-ci', ciCode)
      .attr('href', url)
      .attr('target', target);
  }
  
  //tokenizeDisclaimerModal('#step2-choose-product-ols-modal.tokenizable-disclaimer-modal','TODO!');

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