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

function disclaimersModal() {
  $('#disclaimersModal').sfDialog({ buttons: [wpHosting.sfDialogOkButton] });
}
function tokenizeDisclaimerModal(selector, price0, price1) {

  $(selector).each(function(idx, modal) {
    var $modal = $(modal);
    var htmlTokenized = $modal.html();
    htmlTokenized = htmlTokenized.replace(/\{0\}/gi, price0);
    htmlTokenized = htmlTokenized.replace(/\{1\}/gi, price1);
    $modal.html(htmlTokenized);
  });

}

function activateHref(id, ciCode, url, target){
  $(id).attr('data-ci', ciCode);
  switch (target) {
    case "_blank":
      $(id).attr('href','javascript:void(0);');
      $(id).on('click', function(){
        window.open(url);
      });
      break;
    case "_self":
    default:
      $(id).attr('href',url);
      break;
  }
}

$(document).ready(function(){

  //tokenizeDisclaimerModal('#step2-choose-product-ols-modal.tokenizable-disclaimer-modal','TODO!');

  $('#disclaimers').on('click', '.see-product-disclaimer-link', function(){
    $("#disclaimers-modal").sfDialog({
      buttons: [wpHosting.sfDialogOkButton]
    });
  });

  activateHref("#cloudspecator-link",          "96207", "https://portal.cloudspectator.com/godaddy/#dashboard", "_blank");
  activateHref("#see-latest-results-btn",      "96221", "https://portal.cloudspectator.com/godaddy/#dashboard", "_blank");
  activateHref("#sidekick-link",               "96225", "https://wordpress.org/plugins/sidekick/", "_blank");
  activateHref("#visitor-overprotection-link", "97105", "[@T[link:<external linktype='communityurl' path='help/article/12460/' secure='false'><param name='ci' value='97105' /></external>]@T]", "_self"); 
  activateHref("#wordpress-plugins-link",      "97106", "[@T[link:<external linktype='communityurl' path='help/article/8964/' secure='false'><param name='ci' value='97106' /></external>]@T]", "_self");
  activateHref("#uptime-promise-link",         "97456", "[@T[link:<relative path='agreements/showdoc.aspx' secure='false'><param name='ci' value='97456' /><param name='pageid' value='HOSTING_SA' /></relative>]@T]", "_self");
  

});