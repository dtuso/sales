<!DOCTYPE html>
<html lang="[@T[localization:<language full='true' />]@T]">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta http-equiv="content-language" content="[@T[localization:<language full='true' />]@T]">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="google-site-verification" content="odAW2IckEFXrJjMrVxmnpjRPGNxEJp_xnCb7iBydgBY">
    <meta name="msvalidate.01" content="9D246CEFA0D8894D78306DF6FBA618D9">
    <link href="https://plus.google.com/108306343581548568740" rel="publisher">
    <meta name="verify-v1" content="dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I=">
    <meta name="y_key" content="1e39c508e0d87750">
    <link rel="canonical" href="[@T[link:<relative parammode='explicit' />]@T]">
    <link rel="shortcut icon" href="[@T[link:<imageroot />]@T]assets/godaddy.ico">
    <link rel="stylesheet" type="text/css" href="//cloud.typography.com/7914312/697366/css/fonts.css">
    <title>[@L[cds.sales/page:page-title]@L]</title>
    <meta name="description" content="[@L[cds.sales/page:page-description]@L]">
    <meta name="keywords" content="[@L[cds.sales/page:page-keywords]@L]">
    <meta property="og:title" content="[@L[cds.sales/page:page-openGraph-title]@L]">
    <meta property="og:description" content="[@L[cds.sales/page:page-openGraph-description]@L]">
    <meta property="og:type" content="website">
    <meta property="og:url" content="[@T[link:<relative parammode='explicit' />]@T]">
    <meta property="og:image" content="[@T[link:<imageroot />]@T]fos/hp/rebrand/img/gd_rebrand_og.png">
    <meta property="og:site_name" content="[@T[link:<relative parammode='explicit' />]@T]">
    <meta property="fb:app_id" content="115696031791232">
    <meta property="fb:admins" content="633356800"> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.HeadTags"><Parameters><Parameter key="manifest" value="salesheader" /><Parameter key="split" value="brand2.0" /></Parameters></Data>]@P]
    <script src="[@T[link:<javascriptroot />]@T]/ux/dev-brand/js/uxcore.en.min.js"></script>
    <script>
      var head = (typeof document.head !== 'undefined' ? document.head : document.getElementsByTagName('head')[0]);
      var insertBefore = head.insertBefore;
      var delayLoader = (function(headNode) {
        var elements = [];
        var fnOnDelayLoadComplete = [];
      
        function addElement(element) {
          elements.unshift(element);  // Insert in the order received
        }
      
        return {
          addElement: function(element) {
            addElement(element);
          },
          addScript: function(url, params) {
            params = params || {};
      
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.async = true;
            if (typeof params.id !== 'undefined') {
              script.id = params.id;
            }
            addElement(script);
            for (var i = 0; i < fnOnDelayLoadComplete.length; i++) {
              fnOnDelayLoadComplete[i]();
            }
          },
          onDelayLoadComplete: function(callback) {
            fnOnDelayLoadComplete.unshift(callback);
          },
          load: function() {
            for (var i = 0; i < elements.length; i++) {
              insertBefore.call(headNode, elements[i], headNode.firstChild);
            }
            head.insertBefore = insertBefore;
          }
        };
      })(head);
      
      var oldOnload = window.onload;
      window.onload = function() {
        delayLoader.load();
        if (oldOnload) {
          oldOnload();
        }
      };
      
      head.insertBefore = function (newElement, referenceElement) {
        if (newElement.tagName === 'SCRIPT') {
          delayLoader.addElement(newElement);
        } else {
          insertBefore.call(head, newElement, referenceElement);
        }
      };
      
      function endOfPageScripts() {
      
        // jquery.domainscout.1.0.0.js
        if("undefined"==typeof domainscout){var domainscout={version:"1.0.2"};$(document).ready(function(){function b(a){var b=a,d=b.data("domainscout")||b.data("domainsearch");if(b[0]["ds-domain"]=b.find(d["search-element"]),b[0]["ds-placeholder"]=b.find(d["placeholder-element"]),b[0]["ds-button"]=b.find(d.button),b[0]["ds-url"]=d.url,b[0]["ds-ci"]=d.ci,b[0]["ds-hide-label"]=d["hide-label"],b[0]["ds-empty-redirect"]=d["empty-redirect"],"undefined"==typeof b[0]["ds-hide-label"]&&(b[0]["ds-hide-label"]=!0),1==b[0]["ds-domain"].length&&(b[0]["ds-domain"].is("input")||b[0]["ds-domain"].is("textarea"))){if(domainscout.items=domainscout.items.add(b),b[0]["ds-placeholder"].is("label")){var e=b[0]["ds-domain"].attr("id");"undefined"==typeof e&&(e="ds-"+domainscout.items.length,b[0]["ds-domain"].attr("id",e)),b[0]["ds-placeholder"].attr("for",e)}else b[0]["ds-placeholder"].bind("click",function(){b[0]["ds-domain"].focus()});b[0]["ds-domain"].val(""),b[0]["ds-domain"].bind("focus.ds-event",function(){b.addClass("ds-focus"),b[0]["ds-domain"].bind("keydown.ds-event",function(a){var d=[16,27,20,8,37,38,39,40];13==a.which?(c(b),a.preventDefault()):-1==d.indexOf(a.which)&&b[0]["ds-hide-label"]&&b[0]["ds-placeholder"].css("display","none")})}),b[0]["ds-domain"].bind("blur.ds-event",function(){b.removeClass("ds-focus"),b[0]["ds-domain"].unbind("keydown.ds-event"),b[0]["ds-hide-label"]&&""==b[0]["ds-domain"].val()&&"none"==b[0]["ds-placeholder"].css("display")&&b[0]["ds-placeholder"].css("display","block")})}b[0]["ds-button"].bind("click",function(a){a.stopPropagation(),a.preventDefault(),"undefined"!=typeof _trfq&&_trfq.push(["cmdLogPageEvent","click","","",b[0]]),c(b)})}function c(a){var b=$(a),c=!0,e=!1,g=b[0]["ds-url"];"undefined"==typeof b[0]["ds-url"]&&(g=b.attr("action"),("undefined"==typeof g||"#"==g)&&(c=!1));var h;c&&1==b[0]["ds-domain"].length?(h=b[0]["ds-domain"].val(),"undefined"!=typeof h&&""!=h?(g=g.split("?")[0],g=g+"?domainToCheck="+d(h)):(g=b[0]["ds-empty-redirect"],g.indexOf(location.protocol)&&(g=location.protocol+g),e=!0,"undefined"==typeof g&&(c=!1))):c=!1,c&&(e||(g+="&checkAvail=1","undefined"==b[0]["ds-ci"]&&(b[0]["ds-url"]=f("ci")),"undefined"!=b[0]["ds-ci"]&&(g=g+"&"+b[0]["ds-ci"])),window.location.href=g)}function d(a){return a}function e(a){return a instanceof $||(a=$(a)),a}function f(a){var b=decodeURI((RegExp(a+"="+"(.+?)(&|$)").exec(location.search)||[,null])[1]);return"null"==b&&(b=void 0),b}var a=$("[data-domainscout],[data-domainsearch]");domainscout.items=$(),a.each(function(){b($(this))}),domainscout.add=function(a){b(e(a))},domainscout.search=function(a){c(e(a))}})}
      
        // jquery.lazyload.1.0.0.js
        !function(a){function b(a,b){"undefined"==typeof b&&(b=a.data("lazy-load"));var c=b.src||b.source;"undefined"!=typeof c&&(a[0].lazyload=b,lazyload.items=lazyload.items.add(a),e(a))}function c(){e(a(window)),lazyload.items.each(function(){d(a(this))})}function d(b){var c=b[0].lazyload.updatePosition||lazyload.__defaults.updatePosition,d=d||lazyload.__defaults.updateWindowScroll;b[0].lazyload.checkHorizontal||lazyload.__defaults.checkHorizontal,c&&e(b),e(a(window));var g=b[0].lazyload.positionTop,i=b[0].lazyload.positionBottom,j=lazyload.windowTop,k=lazyload.windowBottom;g<k+lazyload.__defaults.loadBufferDistance&&i>j-lazyload.__defaults.loadBufferDistance&&h(b)}function e(a){var b=a[0];if(b==window)lazyload.updateWindowPosition&&(lazyload.windowTop=a.scrollTop(),lazyload.windowLeft=a.scrollLeft(),lazyload.windowRight=lazyload.windowLeft+a.width(),lazyload.windowBottom=lazyload.windowTop+a.height(),lazyload.updateWindowPosition=!1,clearTimeout(lazyload.windowPositionDelayTimer),lazyload.windowPositionDelayTimer=setTimeout(function(){lazyload.updateWindowPosition=!0},lazyload.__defaults.scrollCheckDelay));else{if("undefined"!=typeof b.lazyload.watch){var c=a.parents(b.lazyload.watch);c.length>=1&&(a=c)}b.lazyload.positionTop=a.offset().top,b.lazyload.positionLeft=a.offset().left,b.lazyload.positionRight=b.lazyload.positionLeft+a.width(),b.lazyload.positionBottom=b.lazyload.positionTop+a.height()}}function f(a){function e(a,b){try{"undefined"!=typeof b&&b.length>=1?a.apply(null,b):a.call(null)}catch(d){}}if("string"==typeof a){var b=a.split(","),c=b.shift();c=g(c),e(c,b,a)}else if("object"==typeof a)for(var d=0;d<a.length;d++)!function(){var b=a[d].split(","),c=b.shift(),f=c;c=g(c),e(c,b,f)}()}function g(a){for(var b=window,c=a.split("."),d=c.pop(),e=!0,f=0;f<c.length;f++)"undefined"!=typeof b[c[f]]?b=b[c[f]]:e=!1;return e?b[d]:null}function h(a){var b=a[0].lazyload.src||a[0].lazyload.source,c=a[0].lazyload.callback,d=a[0].lazyload.callbackAfter;lazyload.items=lazyload.items.not(a),-1==lazyload.loadedSrc.indexOf(b)&&lazyload.loadedSrc.push(b);var e=new Image;e.onload=function(){function j(a){var b=document.createElement("canvas");b.width=a.width,b.height=a.height;var c=b.getContext("2d");c.drawImage(a,0,0);var d=b.toDataURL("image/png");return d.replace(/^data:image\/(png|jpg);base64,/,"")}if("undefined"!=typeof c&&(a.trigger("lazyloaded").addClass("lazyloaded"),f(c)),a.is("img"))a.css({opacity:0}).attr("src",b).delay(lazyload.__defaults.fadeInDelay).animate({opacity:1},lazyload.__defaults.fadeInSpeed,function(){"undefined"!=typeof d&&setTimeout(function(){a.trigger("lazyloadedafter"),f(d)},lazyload.__defaults.fadeInSpeed)});else{var g=200;try{var h="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",i=new Image;i.src=h,i.height=e.height,i.width=e.width;var k=j(i);a.css({"background-image":"url(data:image/gif;base64,"+k+")","-moz-transition":"all "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out"})}catch(l){g=0}setTimeout(function(){a.css({"background-image":"url("+b+")","-webkit-transition":"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out","-moz-transition":"all "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out","-o-transition":"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out",transition:"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out"}),"undefined"!=typeof d&&setTimeout(function(){a.trigger("lazyloadafter"),f(d)},lazyload.__defaults.fadeInSpeed)},g)}},e.src=b}"undefined"==typeof lazyload&&(window.lazyload={version:"1.0.0",items:a(),__defaults:{updatePosition:!0,checkHorizontal:!1,scrollCheckDelay:300,loadBufferDistance:0,fadeInDelay:0,fadeInSpeed:500}},a(document).ready(function(){lazyload.updateWindowPosition=!0,lazyload.scrollCheck=!0,lazyload.loadedSrc=[],$foundItems=a("[data-lazy-load]"),$foundItems.length>=1&&(lazyload.scrollElements=a("div,ul"),lazyload.scrollElements.each(function(){var b=a(this),c=b.css("overflow"),d=b.css("overflow-x"),e=b.css("overflow-y"),f=["hidden","scroll","auto"];0==b.find("[data-lazy-load]").length&&-1==f.indexOf(c)&&-1==f.indexOf(e)&&-1==f.indexOf(d)&&(lazyload.scrollElements=lazyload.scrollElements.not(b))}),lazyload.scrollElements=lazyload.scrollElements.add(window),lazyload.scrollElements.bind("scroll.lazyload",function(){lazyload.scrollCheck&&(c(),lazyload.scrollCheck=!1,clearTimeout(lazyload.scrollCheckDelayTimer),lazyload.scrollCheckDelayTimer=setTimeout(function(){lazyload.scrollCheck=!0},lazyload.__defaults.scrollCheckDelay))}),$foundItems.each(function(){b(a(this))}),c())}),lazyload.check=function(){c()},lazyload.add=function(c,d){b(a(c),d)},lazyload.load=function(){h(a($item))})}(jQuery);
      
        $(document).ready(function(){
          // fix centering elements
          window.triggerResize = function(){
            setTimeout(function(){
              $(window).trigger('resize');
            },50);
          }
          setTimeout(function(){
            triggerResize();
          },200);
      
          // Wire up tooltips
          $(document).sfTipper({ wireup: true });
        });
      
        $('.jump-arrow-icon, .jump-arrow-btn').click(function(){
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          }, 500);
          return false;
        });
      
        // Track all the icodes (tcodes handled by gtm.js)
        window._trfq = window._trfq || [];
        $('[data-icode]').each(function(index, element) {
          window._trfq.push(['cmdLogImpression', $(element).attr('data-icode'), null, element]);
        });
      }
      
    </script>
    <link href="[@T[link:<cssroot />]@T]/fos/mike/0.7.0/css/sahara.css" rel="stylesheet">
    <link href="[@T[link:<cssroot />]@T]/fos/liveperson/css/chat-window_20140205.css" rel="stylesheet" type="text/css">
    <style>
.plan-tile { 
  margin-top: -145px; 
}
.sf-droplist-msg {
  text-align: inherit;
}
.bg-black {
  background-color: #333333;
}
.bg-gray-light {
    background-color: #d9d9d9;
}
    </style><!--[if lt IE 9]>
    <link href="/respond.proxy.gif" id="respond-redirect" rel="respond-redirect">
    <link href="[@T[link:<javascriptroot />]@T]/fos/respond/respond-proxy.min.html" id="respond-proxy" rel="respond-proxy">
    <script src="[@T[link:<javascriptroot />]@T]/fos/respond/respond-proxy-combo.min.js"></script><![endif]-->
    <script type="text/javascript">
      delayLoader.addScript('[@T[link:<javascriptroot />]@T]/fos/liveperson/js/liveperson_20141013a.min.js')
      
    </script>
    <!-- Google Tag Manager-->
    <!-- End Google Tag Manager-->
    <script type="text/javascript">
      var utag_data = { source_code:"gtnila43",pl_id:"1",app_name:"desktop.sales",authenticated:"false",page_type:"home_page" };
      (function (a, b, c, d) {
      a = '//tags.tiqcdn.com/utag/godaddy/godaddy/prod/utag.js';
      b = document; c = 'script'; d = b.createElement(c); d.src = a; d.type = 'text/java' + c; d.async = true;
      delayLoader.addElement(d);
      //$ a = b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d, a);
      })();
      
    </script>
  </head>
  <body>
    <!-- HEADERBEGIN--> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Header"><Parameters><Parameter key="manifest" value="salesheader" /><Parameter key="split" value="brand2.0" /></Parameters></Data>]@P]
    <!-- HEADEREND-->
    <section id="marquee"> 
      <atlantis:webstash type="css">
        <style>
.marquee {
    background-position: top center;
}

.marquee .marquee-product-img {
    margin-bottom: 10px;
}

.marquee .jump-arrow-btn {
    margin-top: 10px;
}

.marquee .marquee-buttons a {
    margin-right: 20px;
}

.marquee .marquee-buttons a:last-child {
    margin-right: 0;
}

.marquee .marquee-product-review {
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1;
}

.marquee .marquee-product-review a {
    text-decoration: none;
    padding-left: 10px;
    color: #333333;
    text-transform: uppercase;
    font-size: 12px;
    font-size: 1.2rem;
}

.marquee .marquee-product-review a:hover {
    text-decoration: none;
}

.marquee.marquee-app-landing {
    min-height: 655px;
}

.marquee.marquee-app-landing .marquee-product-name {
    margin-top: 0;
}

.marquee.marquee-app-landing .marquee-check-bullets {
    list-style: none;
    margin-bottom: 20px;
    padding-left: 0;
    font-size: 16px;
    font-size: 1.6rem;
}

.marquee.marquee-app-landing .marquee-check-bullets li {
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
}

.marquee.marquee-app-landing .marquee-check-bullets li:before {
    content: "";
    background-image: url(//img1.wsimg-com.ide/fos/hp/sahara-rebrand-sprite-20141114.png);
    background-position: 0 -668px;
    background-size: 205px auto;
    width: 25px;
    height: 27px;
    padding-right: 5px;
    position: absolute;
    left: 0;
    top: -6px;
}

.marquee.marquee-app-landing .marquee-pro-left-text {
    padding-top: 45px;
}

.marquee.marquee-app-landing .marquee-product-description {
    font-family: 'Walsheim-Bold';
    margin-top: 10px;
}

.marquee.marquee-app-landing .marquee-product-name {
    font-size: 20px;
    font-size: 2rem;
    text-transform: uppercase;
    color: #ef6c0f;
    font-family: 'Walsheim-Bold';
    margin-bottom: 10px;
}

.marquee-pro-signup {
    min-height: 584px;
}

.marquee-pro-signup .marquee-pro-signup-wrap {
    margin-bottom: 75px;
}

@media only screen and (max-width: 992px) {
    .marquee-pro-signup h2 {
        font-size: 40px;
        font-size: 4rem;
    }
}

.marquee-pro-signup h3 {
    margin-top: 0;
}

@media only screen and (max-width: 992px) {
    .marquee-pro-signup .marquee-pro-signup-img img {
        width: 50%;
        margin: 30px 0;
    }
}

@media only screen and (max-width: 768px) {
    .marquee-pro-signup .marquee-pro-signup-img img {
        width: 80%;
    }
}

.marquee-pro-signup .marquee-pro-signup-check-wrap {
    margin-top: 30px;
}

.marquee-pro-signup .jump-to-plans {
    position: absolute;
    bottom: -60px;
    margin: 0 auto;
    text-align: center;
    right: 0;
    left: 0;
}

.marquee-pro-signup .jump-to-plans .marquee-jump-text {
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1;
    font-family: 'Walsheim-Bold';
    font-size: 20px;
    font-size: 2rem;
}

@media only screen and (max-width: 992px) {
    .marquee-pro-signup .jump-to-plans .marquee-jump-text {
        margin-bottom: 5px;
    }
}

@media only screen and (max-width: 992px) {
    .marquee-pro-signup .marquee-pro-signup-buttons {
        text-align: center;
        padding-bottom: 10px;
    }
}

.marquee-pro-signup .marquee-pro-signup-buttons a:first-child {
    margin-right: 20px;
}

.marquee-pro-signup .marquee-pro-signup-check {
    padding-left: 35px;
    font-family: 'Walsheim-Bold';
    position: relative;
    font-size: 18px;
    font-size: 1.8rem;
    margin-bottom: 30px;
}

.marquee-pro-signup .marquee-pro-signup-check:before {
    content: '';
    background-position: 0px -234px;
    background-size: 205px auto;
    width: 25px;
    height: 27px;
    display: block;
    position: absolute;
    left: 0;
    top: -3px;
}

.marquee-pro-rebrand {
    min-height: 378px;
}

@media only screen and (max-width: 992px) {
    .marquee-pro-rebrand {
        padding-bottom: 50px;
    }
}

.marquee-pro-rebrand .marquee-pro-left-text {
    margin-bottom: 65px;
}

.marquee-pro-rebrand .marquee-pro-left-text h1 {
    font-size: 20px;
    font-size: 2rem;
    text-transform: uppercase;
    color: #ef6c0f;
    font-family: 'Walsheim-Bold';
    margin-bottom: 10px;
}

.marquee-pro-rebrand .marquee-pro-left-text h2 {
    font-size: 40px;
    font-size: 4rem;
    text-transform: uppercase;
    font-family: 'Walsheim-Bold';
    margin-top: 10px;
    line-height: 1;
}

.marquee-pro {
    min-height: 450px;
}

@media only screen and (max-width: 992px) {
    .marquee-pro {
        padding-bottom: 50px;
    }
}

.marquee-pro .well {
    background-color: rgba(239, 108, 15, 0.8);
    border: none;
    color: #fff;
    padding: 30px;
    min-height: 275px;
}

@media only screen and (max-width: 992px) {
    .marquee-pro .well {
        min-height: 0;
        margin-top: 20px;
    }
}

.marquee-pro .well .row {
    min-height: 0 !important;
}

.marquee-pro .well .marquee-pro-icon-wrap {
    border-left: 1px solid #fff;
}

@media only screen and (max-width: 768px) {
    .marquee-pro .well .marquee-pro-icon-wrap {
        border-left: 0;
    }

    .marquee-pro .well .marquee-pro-icon-wrap:not(:first-child) {
        margin-top: 30px;
    }
}

.marquee-pro .well .marquee-pro-icon-wrap .marquee-pro-icon-height {
    height: 95px;
}

.marquee-pro .well .marquee-pro-icon-wrap .marquee-pro-icon-height img {
    max-width: 75%;
    max-height: 75%;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
}

.marquee-pro .well .marquee-pro-icon-wrap h5 {
    font-weight: 500;
}

.marquee-pro .well .marquee-pro-icon-wrap:first-child {
    border-left: 0;
}

.marquee-pro .well .marquee-pro-icon-wrap .marquee-pro-icon {
    margin: 0 auto 15px;
    max-height: 85px;
}

.marquee-pro .well.marquee-pro-centered a {
    font-weight: 500;
}

.marquee-pro .well.marquee-pro-centered h1 {
    font-size: 20px;
    font-size: 2rem;
    font-family: 'Walsheim-Bold';
    text-transform: uppercase;
    margin: 0 0 10px 0;
}

.marquee-pro .well.marquee-pro-centered h2 {
    margin-top: 0;
    word-wrap: break-word;
    word-break: break-word;
    white-space: -moz-pre-wrap;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals {
    border-top: 1px solid #fff;
    font-weight: 700;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal {
    margin-top: 20px;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal .pro-marquee-deal-text,
.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal .pro-marquee-deal-savings {
    font-size: 18px;
    font-size: 1.8rem;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal-price {
    margin-top: 15px;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal-price .marquee-price-small-text {
    font-size: 15px;
    font-size: 1.5rem;
    font-weight: 500;
}

.marquee-pro .well.marquee-pro-centered .pro-marquee-home-deals .pro-marquee-deal-price .marquee-price {
    font-size: 35px;
    font-size: 3.5rem;
    line-height: 1;
    font-family: 'Walsheim-Bold';
}

.marquee-pro .well.marquee-pro-centered .search-template-box {
    border: 3px solid #fff;
    margin-top: 10px;
}

.marquee-pro .marquee-pro-first-area h1 {
    font-size: 20px;
    font-size: 2rem;
    font-family: 'Walsheim-Bold';
    margin: 0 0 10px 0;
}

.marquee-pro .marquee-pro-first-area h2 {
    margin-top: 12px;
}

.marquee-pro .marquee-pro-first-area .marquee-pro-product-text {
    padding-top: 10px;
    border-top: 1px solid #fff;
}

.marquee-pro .marquee-product-text {
    margin-bottom: 20px;
}

.marquee-pro .jump-to-plans {
    position: absolute;
    bottom: -60px;
    margin: 0 auto;
    text-align: center;
    right: 0;
    left: 0;
}

.marquee-pro .jump-to-plans .marquee-jump-text {
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1;
    color: #333333;
    font-size: 20px;
    font-size: 2rem;
}

@media only screen and (max-width: 992px) {
    .marquee-pro .jump-to-plans .marquee-jump-text {
        margin-bottom: 5px;
    }
}

.marquee-table-grid > .row {
    display: table;
}

@media only screen and (max-width: 768px) {
    .marquee-table-grid > .row {
        display: block;
    }
}

.marquee-table-grid > .row > [class*="col-"] {
    float: none;
    display: table-cell;
    vertical-align: top;
}

@media only screen and (max-width: 768px) {
    .marquee-table-grid > .row > [class*="col-"] {
        display: block;
        float: none;
        border-left: none;
        border-right: none;
        padding: 20px inherit;
        border-top: 1px solid #fff;
    }

    .marquee-table-grid > .row > [class*="col-"]:first-child {
        border-top: 0;
    }
}
.marquee {
    background-size: cover !important;
    position: relative;
    background-position: bottom center;
    background-color: #fff;
  /* Ribbon */
}

.marquee .relative-position {
    position: relative;
}

.marquee .marquee-all-centered {
    text-align: center;
}

.marquee .marquee-two-col-txt ul.marquee-product-bullets {
    text-align: left;
}

.marquee.marquee-short {
    min-height: 368px;
}

.marquee.marquee-short .container {
    min-height: inherit;
}

.marquee.marquee-short .container .row {
    min-height: inherit;
}

.marquee.marquee-short .container .row .col-sm-pull-6 {
    min-height: inherit;
}

@media only screen and (max-width: 767px) {
    .marquee.marquee-short .container .row .col-sm-pull-6 {
        min-height: 100px;
    }
}

@media only screen and (max-width: 992px) {
    .marquee.marquee-short .vertical-height.marquee-sm-vertical-fix {
        height: auto !important;
    }
}

@media only screen and (max-width: 992px) {
    .marquee.marquee-short .vertical-height.marquee-sm-vertical-fix .vertical-text {
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
        transform: translateY(0%);
        top: 0%;
    }
}

.marquee.marquee-tall {
    min-height: 523px;
}

.marquee.marquee-tall .container {
    min-height: inherit;
}

.marquee.marquee-tall .container .row {
    min-height: inherit;
}

.marquee.marquee-tall .container .row .col-sm-pull-6 {
    min-height: inherit;
}

@media only screen and (max-width: 767px) {
    .marquee.marquee-tall .container .row .col-sm-pull-6 {
        min-height: 100px;
    }
}

@media only screen and (max-width: 992px) {
    .marquee.marquee-tall {
        min-height: 400px;
    }
}

.marquee.marquee-img-tall-left-txt {
    height: 523px;
}

@media only screen and (max-width: 1200px) {
    .marquee.marquee-img-tall-left-txt {
        height: 430px;
    }
}

@media only screen and (max-width: 992px) {
    .marquee.marquee-img-tall-left-txt {
        height: 332px;
    }
}

@media only screen and (max-width: 768px) {
    .marquee.marquee-img-tall-left-txt {
        height: 332px;
        background-position: -160px;
    }
}

.marquee.marquee-img-short-left-txt {
    height: 368px;
}

@media only screen and (max-width: 1200px) {
    .marquee.marquee-img-short-left-txt {
        height: 300px;
    }
}

@media only screen and (max-width: 992px) {
    .marquee.marquee-img-short-left-txt {
        height: 234px;
    }
}

@media only screen and (max-width: 768px) {
    .marquee.marquee-img-short-left-txt {
        height: 234px;
        background-position: -160px;
    }
}

.marquee.marquee-white {
    color: #fff;
}

.marquee.marquee-white h1,
.marquee.marquee-white h2,
.marquee.marquee-white h3,
.marquee.marquee-white h4,
.marquee.marquee-white h5,
.marquee.marquee-white h6 {
    color: #fff;
}

.marquee.marquee-white .dashed-underline {
    border-bottom-color: #fff;
}

.marquee.marquee-white a:not(.btn) {
    color: #fff;
    text-decoration: underline;
}

.marquee.marquee-white a:not(.btn):hover {
    text-decoration: none;
}

@media only screen and (max-width: 480px) {
    .marquee .marquee-customer-wrap {
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 480px) {
    .marquee .marquee-customer-wrap .vertical-height {
        height: auto !important;
    }
}

.marquee .img-center {
    margin: 0 auto;
}

.marquee .marquee-corner-img {
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 165px;
    min-height: 169px;
}

.marquee .marquee-product-img {
    max-width: 100%;
}

.marquee .marquee-product-review {
    font-size: 18px;
    font-size: 1.8rem;
}

.marquee .marquee-product-review a {
    text-decoration: underline;
    padding-left: 10px;
    color: #808080;
}

.marquee .marquee-product-review a:hover {
    text-decoration: none;
}

.marquee .marquee-product-description {
    font-size: 56px;
    font-size: 5.6rem;
    font-weight: 100;
    line-height: 1.1;
    margin-bottom: 10px;
}

@media only screen and (max-width: 992px) {
    .marquee .marquee-product-description {
        font-size: 40px;
        font-size: 4rem;
    }
}

.marquee .marquee-product-text {
    font-size: 18px;
    font-size: 1.8rem;
    padding: 0 0 14px;
}

.marquee ul.marquee-product-bullets {
    font-size: 18px;
    font-size: 1.8rem;
    text-align: center;
    list-style-position: inside;
    padding: 0;
}

.marquee .marquee-restrictions-text {
    font-size: 14px;
    font-size: 1.4rem;
    margin-bottom: 15px;
}

.marquee .marquee-ribbon {
    width: 112px;
    position: absolute;
    top: 0;
    right: 0;
    background-repeat: no-repeat;
    z-index: 100;
}

@media only screen and (max-width: 992px) {
    .marquee .marquee-ribbon {
        position: relative;
        margin: 0 auto;
    }
}

.marquee .marquee-left-ribbon .marquee-ribbon {
    left: 0;
    right: auto;
}

.marquee .marquee-price-btn-wrap {
    color: #ef6c0f;
    line-height: 1;
    font-weight: 400;
    padding: 5px 0 20px;
}

@media only screen and (max-width: 768px) {
    .marquee .marquee-price-btn-wrap {
        line-height: 1.2;
    }
}

.marquee .marquee-price-btn-wrap .btn {
    margin-right: 10px;
}

.marquee .marquee-price-btn-wrap .marquee-price-text {
    display: inline-block;
    vertical-align: middle;
}

.marquee .marquee-price-btn-wrap .marquee-price-small-text {
    font-size: 18px;
    font-size: 1.8rem;
}

@media only screen and (max-width: 768px) {
    .marquee .marquee-price-btn-wrap .marquee-price-small-text {
        font-size: 16px;
        font-size: 1.6rem;
    }
}

.marquee .marquee-price-btn-wrap .marquee-price {
    font-size: 36px;
    font-size: 3.6rem;
}

@media only screen and (max-width: 768px) {
    .marquee .marquee-price-btn-wrap .marquee-price {
        font-size: 30px;
        font-size: 3rem;
    }
}

.marquee .marquee-check-bullets {
    list-style: none;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-left: 0;
    font-size: 18px;
    font-size: 1.8rem;
}

.marquee .marquee-check-bullets span {
    font-family: 'HelveticaNeue-CondensedBold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-stretch: condensed;
    text-transform: uppercase;
}

.marquee .marquee-check-bullets li:before {
    content: "\e207";
    font-family: 'uxfont';
    padding-right: 5px;
}

.marquee .marquee-btn-wrap {
    margin-bottom: 20px;
}

.marquee .search-template .search-template-box {
    border: 1px solid #cecece;
}

.marquee .marquee-customer-name-wrap {
    position: absolute;
    bottom: 10px;
    font-size: 16px;
    font-size: 1.6rem;
}

@media only screen and (max-width: 480px) {
    .marquee .marquee-customer-name-wrap {
        position: relative;
        bottom: auto;
    }
}

.marquee .marquee-customer-name-wrap .marquee-customer-name {
    font-weight: bold;
}

.marquee .marquee-customer-name-wrap .marquee-customer-text {
    font-weight: 100;
}

.marquee .marquee-customer-name-wrap .marquee-customer-website {
    color: #008a32;
    text-decoration: underline;
}

.marquee .marquee-two-col-abstract.left-column {
    color: #fff;
}

.marquee .marquee-two-col-abstract.left-column .marquee-product-name {
    color: #fff;
    font-family: Tungsten, 'Tungsten A', 'Tungsten B', 'Helvetica Neue', 'Segoe UI', Segoe, Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 46px;
    margin: 34px 0 0 0;
}

.marquee .marquee-two-col-abstract.left-column .marquee-product-description {
    font-family: "Walsheim-Bold";
    font-size: 22px;
}

.marquee .marquee-two-col-abstract.left-column .marquee-product-text {
    font-family: "Walsheim-Medium";
    font-size: 18px;
    margin-top: 18px;
}

.marquee .marquee-two-col-abstract.left-column .marquee-product-price {
    display: block;
    font-family: "Walsheim-Black";
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}

.marquee .marquee-two-col-abstract.left-column .btn {
    font-family: "Walsheim-Medium";
    font-size: 24px;
}

.marquee .marquee-two-col-abstract.left-column .marquee-restrictions-text {
    margin: 12px 0 24px;
    font-family: "Walsheim-Regular";
}

.marquee .marquee-two-col-abstract.left-column .marquee-restrictions-text ul {
    padding-left: 0;
}

.marquee .marquee-two-col-abstract.left-column .marquee-restrictions-text ul li {
    list-style: none;
}

.marquee .marquee-two-col-abstract.right-column {
    position: absolute;
    right: 0;
    height: 100%;
    background-position: top center;
    background-size: cover;
}

.marquee .marquee-two-col-abstract.right-column img.abstract-left {
    position: absolute;
    left: 0;
    height: 100%;
}

.marquee .marquee-two-col-abstract.right-column img.abstract-right {
    position: absolute;
    right: 0;
    height: 100%;
}

@media only screen and (max-width: 768px) {
    .marquee .marquee-two-col-abstract.right-column {
        position: relative;
        min-height: 200px;
    }
}

h1.marquee-product-name,
h2.marquee-product-name,
.marquee-product-name {
    font-size: 24px;
    font-size: 2.4rem;
    font-family: 'HelveticaNeue-CondensedBold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-stretch: condensed;
    text-transform: uppercase;
}

@media only screen and (max-width: 992px) {
    h1.marquee-product-name,
  h2.marquee-product-name,
  .marquee-product-name {
        font-size: 20px;
        font-size: 2rem;
        margin-top: 10px;
    }
}
        </style>
        <style>
          .marquee { background: url([@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/GD_WebsiteBuilder_Marquee.jpg) no-repeat top center;); }
          
        </style>
      </atlantis:webstash>
      <div data-onclick="#" data-icode="" class="marquee marquee-app-landing ">
        <div class="container relative-position">
          <div class="row">
            <div class="col-sm-12">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.marquee-www-rebrand-wrap&quot;},&quot;verticalStyle&quot;:&quot;padding-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="row">
                  <div class="col-md-7 col-sm-12">
                    <div class="marquee-pro-left-text">
                            <h2 class="marquee-product-description">[@L[cds.sales/gd/hosting/website-builder:header_subtitle_1]@L]</br>[@L[cds.sales/gd/hosting/website-builder:header_subtitle_2]@L]</h2>
                            <ul class="marquee-check-bullets">
                              <li>[@L[cds.sales/gd/hosting/website-builder:wsb-main-listitem-1]@L],[@L[cds.sales/gd/hosting/website-builder:wsb-main-listitem-2]@L],[@L[cds.sales/gd/hosting/website-builder:wsb-main-listitem-3]@L]</li>
                            </ul><a href="[@T[link:<relative path='~/hosting/website-builder-config.aspx' secure='true'><param name='ci' value='' /><param name='plan' value='wsb_personal_12month' /></relative>]@T]" class="btn btn-primary jump-arrow-btn">[@L[cds.sales/gd/hosting/website-builder:get-started-btn-general]@L]</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="plans">
      <style>
.pro-plans {
    margin-top: 0px;
    padding-bottom: 80px;
}

.pro-plans .tld-col-title {
    text-transform: uppercase;
}

.pro-plans .non-input-group {
    margin-bottom: 10px;
}

.pro-plans .non-input-group .form-control {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-family: 'Walsheim-Black';
    font-size: 30px;
    font-size: 3rem;
    padding: 4px 20px;
    height: 44px;
    line-height: 1;
    color: #333333;
}

.pro-plans .sub-plan-text {
    margin-top: 30px;
    margin-bottom: -30px;
}

.pro-plans h2 {
    margin-top: 0;
}

.pro-plans h2.domains-plans-mid-title {
    margin: 40px 0;
}

@media only screen and (max-width: 768px) {
    .pro-plans {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

.pro-plans.plan-container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}

.pro-plans.plan-container:before,
.pro-plans.plan-container:after {
    content: " ";
  /* 1 */
    display: table;
  /* 2 */
}

.pro-plans.plan-container:after {
    clear: both;
}

@media only screen and (max-width: 1535px) {
    .pro-plans.plan-container {
        max-width: 1170px;
    }
}

@media only screen and (max-width: 1200px) {
    .pro-plans.plan-container {
        max-width: 970px;
    }
}

@media only screen and (max-width: 992px) {
    .pro-plans.plan-container {
        max-width: 750px;
    }
}

.pro-plans.plan-container .plan-col-15 {
    width: 20%;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
}

@media only screen and (max-width: 1535px) {
    .pro-plans.plan-container .plan-col-15 {
        width: 33.3333%;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(4n) {
        border: 0;
        margin-left: 16.66666666667%;
        clear: left;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(1) {
        border: 0;
    }
}

@media only screen and (max-width: 992px) {
    .pro-plans.plan-container .plan-col-15 {
        width: 50%;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(4n) {
        clear: none;
        margin-left: 0;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(3) {
        clear: left;
        border-left: 0;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(5) {
        clear: left;
        border-left: 0;
        margin-left: 25%;
    }
}

@media only screen and (max-width: 768px) {
    .pro-plans.plan-container .plan-col-15 {
        width: 100%;
        border: 0;
        clear: none;
        float: none;
    }

    .pro-plans.plan-container .plan-col-15:nth-child(5) {
        margin-left: 0;
    }
}

.pro-plans.plan-container .plan-col-2 {
    width: 16.66666666667%;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
}

@media only screen and (max-width: 1535px) {
    .pro-plans.plan-container .plan-col-2 {
        width: 33.3333%;
    }

    .pro-plans.plan-container .plan-col-2:nth-child(4n) {
        border: 0;
        clear: left;
    }

    .pro-plans.plan-container .plan-col-2:nth-child(1) {
        border-left: 0;
    }
}

@media only screen and (max-width: 992px) {
    .pro-plans.plan-container .plan-col-2 {
        width: 50%;
    }

    .pro-plans.plan-container .plan-col-2:nth-child(4n) {
        clear: none;
    }

    .pro-plans.plan-container .plan-col-2:nth-child(3) {
        clear: left;
        border-left: 0;
    }

    .pro-plans.plan-container .plan-col-2:nth-child(5) {
        clear: left;
        border-left: 0;
    }
}

@media only screen and (max-width: 768px) {
    .pro-plans.plan-container .plan-col-2 {
        width: 100%;
        border: 0;
        clear: none;
        float: none;
    }
}

.pro-plans .pro-plan-wrap {
    border-top: 10px solid #008a32;
    padding: 40px;
    background-color: #fff;
    -webkit-box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 992px) {
    .pro-plans .pro-plan-wrap {
        padding: 40px 30px;
    }
}

@media only screen and (max-width: 768px) {
    .pro-plans .pro-plan-wrap {
        margin-bottom: 40px;
    }
}

.pro-plans .pro-plan-wrap .features-row {
    margin-bottom: 30px;
}

@media only screen and (max-width: 768px) {
    .pro-plans .pro-plan-wrap .features-row {
        margin-bottom: 0;
    }
}

@media only screen and (max-width: 768px) {
    .pro-plans .pro-plan-wrap .features-row .col-sm-6 {
        margin-bottom: 20px;
    }
}

@media only screen and (max-width: 992px) {
    .pro-plans .pro-plan-wrap .features-row .col-sm-6 img {
        margin: 0 auto 20px;
    }
}

.pro-plans .pro-plan-wrap .plan-flag {
    color: #000;
    font-family: Tungsten, 'Tungsten A', 'Tungsten B', 'Helvetica Neue', 'Segoe UI', Segoe, Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-size: 28px;
    font-size: 2.8rem;
    padding: 10px 20px;
    text-transform: uppercase;
    line-height: 1;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTgxLjggNjQuMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTgxLjggNjQuMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBmaWxsPSIjRkVEQzQ1IiBwb2ludHM9IjE3LDAgMCwyNC4yIDMsNTYgMTY0LjUsNjQuMiAxODEuOCw0My44IDE4MSw0LjMgIi8+DQo8L3N2Zz4NCg==) no-repeat center center;
    background-size: cover;
    overflow: visible;
}

.pro-plans .pro-plan-wrap .plan-flag:before {
    content: '';
}

.plan-tile .plan-flag {
    position: absolute;
    top: -20px;
    right: 30px;
    color: #fff;
    display: inline-block;
    padding: 0 15px;
    line-height: 2.5;
}

.pro-plans .pro-plan-wrap h6 {
    margin-top: 0;
}

.pro-plans .pro-plan-wrap h2 {
    margin-bottom: 14px;
}

.pro-plans .pro-plan-wrap .plan-title {
    font-size: 30px;
    font-size: 3rem;
    margin-top: 0;
    font-family: 'Walsheim-Bold';
    text-transform: none;
    word-wrap: break-word;
    word-break: break-word;
    white-space: -moz-pre-wrap;
}

.pro-plans .pro-plan-wrap .plan-subtitle {
    color: #b3b3b3;
    font-weight: 700;
}

.pro-plans .pro-plan-wrap .plan-text {
    min-height: 44px;
    margin-bottom: 5px;
}

.pro-plans .pro-plan-wrap .plan-tile-top {
    padding: 0px;
}

.pro-plans .pro-plan-wrap .plan-disclaimers {
    font-size: 14px;
    font-size: 1.4rem;
    margin-bottom: 5px;
}

.pro-plans .pro-plan-wrap .plan-price-wrap {
    min-height: 92px;
}

.pro-plans .pro-plan-wrap .plan-price-wrap .plan-price {
    font-size: 45px;
    font-size: 4.5rem;
    font-weight: 700;
    color: #ef6c0f;
    font-family: 'Walsheim-Bold';
}

.pro-plans .pro-plan-wrap .plan-price-wrap .plan-duration {
    font-size: 24px;
    font-size: 2.4rem;
    font-weight: 700;
    color: #ef6c0f;
}

.pro-plans .pro-plan-wrap .btn {
    margin-bottom: 20px;
}

.pro-plans .pro-plan-wrap .plan-item {
    border-top: 0 none;
    min-height: 0;
    padding: 5px 0;
    text-align: left;
    font-size: 16px;
    font-size: 1.6rem;
    margin-bottom: 15px;
}

.pro-plans .include-check {
    position: relative;
    padding-left: 45px;
    margin-top: 20px;
}

.pro-plans .include-check:before {
    content: "";
    background-image: url([@T[link:<imageroot />]@T]fos/hp/sahara-rebrand-sprite-20141114.png);
    background-position: 0 -668px;
    background-size: 205px auto;
    width: 25px;
    height: 27px;
    padding-right: 5px;
    position: absolute;
    left: 0;
    top: -6px;
}

.pro-plans .sf-tipper-target {
    background-image: url([@T[link:<imageroot />]@T]fos/hp/sahara-rebrand-sprite-20141114.png);
    background-position: 0 -864px;
    width: 15px;
    height: 16px;
    display: inline-block;
    background-size: 205px auto;
    vertical-align: baseline;
}
      </style>
      <div class="pro-plans-wrap bg-gray-light">
        <div id="plans" data-icode="" class="container pro-plans">
           
           
          ##if(if(countrySiteAny(uk)))
           
          <div class="col-sm-4 plan-tile plan-pro">
            <atlantis:webstash type="css">
              <style>
                .pro-plans { margin-top: 0; }
                .form-control { margin-bottom: 10px; }
                
              </style>
            </atlantis:webstash>
            <div class="pro-plan-wrap">
              <h2 class="plan-title">[@L[cds.sales/gd/hosting/website-builder:economy-title]@L]</h2>
              <p class="plan-text">[@L[cds.sales/gd/hosting/website-builder:economy-description]@L]</p>
              <div class="plan-price-wrap"><span class="plan-price text-warning">[@T[productprice:<current productid="7524" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</span><span class="plan-duration text-warning">/[@L[cds.sales/_common:month]@L]</span> 
                ##if(productHasSavingsMoreThan(7524, 7524, 0))
                 <br><strong>[@L[cds.sales/_common:was]@L] 
                  <strike>[@T[productprice:<list productid="7524" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</strike> <span class="text-primary">[@L[cds.sales/_common:save-cap]@L] [@T[productcompare:<percent primaryproductid="7524" secondaryproductid="7524" showsymbol="true" hidebelow="5"><html><![CDATA[{0}]]></html></percent>]@T]</span></strong> 
                ##endif
                 
              </div>
              <button id="product-A" data-tcode="" data-plan="wsb_personal_12month" class="btn btn-purchase btn-plan btn-lg btn-block">[@L[cds.sales/_common:add-to-cart-cap]@L]</button>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:plan-domain]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-width='400' data-content='[@L[cds.sales/gd/hosting/website-builder:restristions-apply-tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-themes]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-pages]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-diskspace]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-bandwidth]@L]</div>
            </div>
          </div> 
          ##else
           
          <div class="col-sm-4 plan-tile plan-pro">
            <atlantis:webstash type="css">
              <style>
                .pro-plans { margin-top: 0; }
                .form-control { margin-bottom: 10px; }
                
              </style>
            </atlantis:webstash>
            <div class="pro-plan-wrap">
              <h2 class="plan-title">[@L[cds.sales/gd/hosting/website-builder:personal-title]@L]</h2>
              <p class="plan-text">[@L[cds.sales/gd/hosting/website-builder:personal-description]@L]</p>
              <div class="plan-price-wrap"><span class="plan-price text-warning">[@T[productprice:<current productid="7524" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</span><span class="plan-duration text-warning">/[@L[cds.sales/_common:month]@L]</span> 
                ##if(productHasSavingsMoreThan(7524, 7524, 0))
                 <br><strong>[@L[cds.sales/_common:was]@L] 
                  <strike>[@T[productprice:<list productid="7524" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</strike> <span class="text-primary">[@L[cds.sales/_common:save-cap]@L] [@T[productcompare:<percent primaryproductid="7524" secondaryproductid="7524" showsymbol="true" hidebelow="5"><html><![CDATA[{0}]]></html></percent>]@T]</span></strong> 
                ##endif
                 
              </div>
              <button id="product-A" data-tcode="" data-plan="wsb_personal_12month" class="btn btn-purchase btn-plan btn-lg btn-block">[@L[cds.sales/_common:add-to-cart-cap]@L]</button>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:plan-domain]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-width='400' data-content='[@L[cds.sales/gd/hosting/website-builder:restristions-apply-tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:personal-themes]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-pages]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-diskspace]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:economy-bandwidth]@L]</div>
            </div>
          </div> 
          ##endif
           
          <div class="col-sm-4 plan-tile plan-pro">
            <atlantis:webstash type="css">
              <style>
                .pro-plans { margin-top: 0; }
                .form-control { margin-bottom: 10px; }
                
              </style>
            </atlantis:webstash>
            <div class="pro-plan-wrap">
              <div class="plan-flag">[@L[cds.sales/gd/hosting/website-builder:popular-tag]@L]</div>
              <h2 class="plan-title">[@L[cds.sales/gd/hosting/website-builder:business-title]@L]</h2>
              <p class="plan-text">[@L[cds.sales/gd/hosting/website-builder:business-description]@L]</p>
              <div class="plan-price-wrap"><span class="plan-price text-warning">[@T[productprice:<current productid="7509" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</span><span class="plan-duration text-warning">/[@L[cds.sales/_common:month]@L]</span> 
                ##if(productHasSavingsMoreThan(7509, 7509, 0))
                 <br><strong>[@L[cds.sales/_common:was]@L] 
                  <strike>[@T[productprice:<list productid="7509" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</strike> <span class="text-primary">[@L[cds.sales/_common:save-cap]@L] [@T[productcompare:<percent primaryproductid="7509" secondaryproductid="7509" showsymbol="true" hidebelow="5"><html><![CDATA[{0}]]></html></percent>]@T]</span></strong> 
                ##endif
                 
              </div>
              <button id="product-B" data-tcode="" data-plan="wsb_business_12month" class="btn btn-purchase btn-plan btn-lg btn-block">[@L[cds.sales/_common:add-to-cart-cap]@L]</button>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:plan-domain]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-width='400' data-content='[@L[cds.sales/gd/hosting/website-builder:restristions-apply-tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:business-themes]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:business-pages]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:business-diskspace]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:business-bandwidth]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_5_business_emails]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_5_business_emails_tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_mobile_site]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_mobile_site_tooltip]@L]'></span></div>
            </div>
          </div>
          <div class="col-sm-4 plan-tile plan-pro">
            <atlantis:webstash type="css">
              <style>
                .pro-plans { margin-top: 0; }
                .form-control { margin-bottom: 10px; }
                
              </style>
            </atlantis:webstash>
            <div class="pro-plan-wrap">
              <div class="plan-flag">[@L[cds.sales/gd/hosting/website-builder:wsb-plus-seo]@L]</div>
              <h2 class="plan-title">[@L[cds.sales/gd/hosting/website-builder:unlimited-plan-title]@L]</h2>
              <p class="plan-text">[@L[cds.sales/gd/hosting/website-builder:unlimited-description]@L]</p>
              <div class="plan-price-wrap"><span class="plan-price text-warning">[@T[productprice:<current productid="7514" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</span><span class="plan-duration text-warning">/[@L[cds.sales/_common:month]@L]</span> 
                ##if(productHasSavingsMoreThan(7514, 7514, 0))
                 <br><strong>[@L[cds.sales/_common:was]@L] 
                  <strike>[@T[productprice:<list productid="7514" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]</strike> <span class="text-primary">[@L[cds.sales/_common:save-cap]@L] [@T[productcompare:<percent primaryproductid="7514" secondaryproductid="7514" showsymbol="true" hidebelow="5"><html><![CDATA[{0}]]></html></percent>]@T]</span></strong> 
                ##endif
                 
              </div>
              <button id="product-C" data-tcode="" data-plan="wsb_businessplus_12month" class="btn btn-purchase btn-plan btn-lg btn-block">[@L[cds.sales/_common:add-to-cart-cap]@L]</button>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:plan-domain]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-width='400' data-content='[@L[cds.sales/gd/hosting/website-builder:restristions-apply-tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:unlimited-themes]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:unlimited-pages]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:unlimited-diskspace]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:unlimited-bandwidth]@L]</div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_10_business_emails]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_5_business_emails_tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_mobile_site]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_mobile_site_tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_seo]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_seo_tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_oneclick]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_oneclick_tooltip]@L]'></span></div>
              <div class="plan-item">[@L[cds.sales/gd/hosting/website-builder:rb_ssl]@L] <span class='sf-tip sf-tipper-target' data-style='qt' data-width='300' data-content='[@L[cds.sales/gd/hosting/website-builder:rb_ssl_tooltip]@L]'></span></div>
            </div>
          </div>
          <atlantis:webstash type="js">
            <script type="text/javascript">
              var itemTrackingCode = "slp_wst_3";
              
              $(".btn-plan").click(function() {
              
                if ("false" != "false"){
                  var productTile = $(this).data("ul");
              
                  var productPackage = $("ul#"+productTile+" li").filter('[data-selected="true"]').attr('data-plan');
                }
                else{
                  var productPackage = $(this).data("plan");
                }
              
                var url = "[@T[link:<external linktype="SALESPRODUCTSURL" path="/v1/pl/1/cart/packages" />]@T]";
              
                $.ajax({
                  type: "POST",
                  url: url,
                  contentType: "application/json",
                  data: "requestData=" + JSON.stringify({
                    pkgid: productPackage,
                    qty: 1,
                    itc: itemTrackingCode
                  }),
                  dataType: "jsonp"
                })
                .done(function(data) {
                  var redirectUrl = "[@T[link:<relative path='~/hosting/website-builder-config.aspx' />]@T]";
                  if (redirectUrl.indexOf("?") === -1) {
                    redirectUrl += "?plan=";
                  } else {
                    redirectUrl += "&plan=";
                  }
                  redirectUrl += productPackage;
              
                  window.location.href = redirectUrl;
                })
                .fail(function(xhr, status, error) {
                  alert('Failed to add to the cart. Please try again later.')
                });
              });
            </script>
          </atlantis:webstash>
        </div>
      </div>
    </section>
    <style>.fix-body {
  margin-top: 130px;
}
.mid-page-nav {
  background-color: #333333;
  font-family: 'Walsheim-Bold';
  height: 130px;
  color: #fff;
  -webkit-box-shadow: 0px 3px 0 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 0 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 0 0 rgba(0, 0, 0, 0.1);
}
@media only screen and (max-width: 768px) {
  .mid-page-nav {
    display: none;
  }
}
.mid-page-nav .navbar-collapse {
  margin-left: -15px;
  margin-right: -15px;
}
.mid-page-nav.sticky {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
}
.mid-page-nav .nav {
  height: 130px;
}
.mid-page-nav .nav > li {
  display: table;
}
.mid-page-nav .nav > li.open > a {
  background-color: #232323;
}
.mid-page-nav .nav > li.open > a:before {
  content: '';
  width: 0;
  height: 0;
  border-top: 15px solid #008a32;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: 14px;
  margin-left: -20px;
  left: 50%;
}
.mid-page-nav .nav > li > a {
  display: table-cell;
  height: 130px;
  vertical-align: middle;
}
.mid-page-nav .nav > li > a.active,
.mid-page-nav .nav > li > a:focus,
.mid-page-nav .nav > li > a:hover {
  background-color: #232323;
}
.mid-page-nav .nav > li > a.active:before,
.mid-page-nav .nav > li > a:focus:before,
.mid-page-nav .nav > li > a:hover:before {
  content: '';
  width: 0;
  height: 0;
  border-top: 15px solid #008a32;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: 14px;
  margin-left: -20px;
  left: 50%;
}
.mid-page-nav .nav > li a {
  font-size: 24px;
  font-size: 2.4rem;
  font-family: 'Walsheim-Bold';
  color: #808080;
  padding: 0;
  text-align: center;
}
.mid-page-nav .nav > li a span {
  display: table-cell;
  vertical-align: middle;
  border-left: 1px solid #232323;
  padding: 7px 40px;
}
.mid-page-nav .nav > li a span > em {
  font-size: 40px;
  font-size: 4rem;
  color: #555555;
  display: inline-block;
  margin-top: -5px;
  border: 0;
  padding: 0;
  font-style: normal;
}
.mid-page-nav .nav > li:first-child a span {
  border-left: 0;
}
.mid-page-nav .nav .open > .dropdown-menu {
  opacity: 1;
  -webkit-transform: scale(1, 1) rotateX(0deg);
  -moz-transform: scale(1, 1) rotateX(0deg);
  -ms-transform: scale(1, 1) rotateX(0deg);
  transform: scale(1, 1) rotateX(0deg);
}
.mid-page-nav .nav .dropdown-menu {
  background-clip: padding-box;
  border: 0;
  background-color: #333333;
  display: block;
  opacity: 0;
  -webkit-transform: scale(1, 0) rotateX(90deg);
  -moz-transform: scale(1, 0) rotateX(90deg);
  -ms-transform: scale(1, 0) rotateX(90deg);
  transform: scale(1, 0) rotateX(90deg);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.mid-page-nav .nav .dropdown-menu li > a {
  display: block;
  background-color: #333333;
  padding: 20px;
  border-bottom: #333333;
}
.mid-page-nav .nav .dropdown-menu li > a:hover {
  background-color: #232323;
}
.mid-page-nav .price-text {
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 1;
}
.mid-page-nav .price {
  font-size: 24px;
  font-size: 2.4rem;
}
.mid-page-nav .price span {
  font-size: 14px;
  font-size: 1.4rem;
}
    </style>
    <div class="mid-page-nav">
      <div class="container">
        <div class="navbar-header">
          <button type="button" data-toggle="collapse" data-target="" class="navbar-toggle collapsed"></button>
        </div>
        <div id="midPageNav" class="collapse navbar-collapse">
          <ul class="nav navbar-nav"></ul>
          <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.mid-page-nav&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}" class="navbar-right">
            <div class="price-text">Plans starting at</div>
            <div class="price">[@T[productprice:<current productid="7514" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]<span>/year</span></div><a href="#marquee" class="btn-purchase btn btn-sm">See the plans</a>
          </div>
        </div>
      </div>
    </div>
    <script>
      $(function(){ 
        var midPageNavItemTemplate = _.template('<li><a href="#<%= url %>" data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.nav&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}" style="margin-top: 0px;"><span><%= text %></span></a></li>');
        $('[data-mid-nav-title]').each(function(index) {
          var itemData = { text: $(this).data('mid-nav-title'), url: this.id };
          var itemElement = midPageNavItemTemplate(itemData);
          $('#midPageNav ul.nav').append(itemElement);
        });
      });
      $(window).load(function() {
        var midPageMenuItem = 0;
        $(".mid-page-nav .nav > li a span").each(function(index, tab) {
          midPageMenuItem = $(tab).outerHeight() > midPageMenuItem ? $(tab).outerHeight() : midPageMenuItem;
        }).css("height", midPageMenuItem);
      });
      $(document).ready(function(){
        // this sets the nav to fixed when scrolled past and fixes the body for the height of the nav
        var nav = $('.mid-page-nav');
        var pos = nav.offset().top;
        var sections = []
      
        $('[data-mid-nav-title]').each(function(){
          //titles.push($(this).data('mid-nav-title'));
          sections.push($(this).attr('id'));
        });
        $(window).scroll(function () {
          var scroll = $(this).scrollTop();
          var fix = ($(this).scrollTop() > pos) ? true : false;
          nav.toggleClass("sticky", fix);
          $('body').toggleClass("fix-body", fix);
      
          if(fix){
            $.each(sections,function(index,value){
                var top = ((scroll+131) > $('#'+value).offset().top) ? true : false;
                var bottom = ((scroll+131) < $('#'+value).offset().top + $('#'+value).outerHeight()) ? true : false;
                var activeNav = (top && bottom) ? true : false;
                $('a[href="#'+value+'"').toggleClass("active",activeNav);
                $('.mid-page-nav a').each(function(i,v){
                    if(v!=value){
                      $(this).blur();
                    }
                  });
              });
          }
      
        });
        $('#midPageNav .dropdown-toggle').dropdown()
      });
      function scroll_if_anchor(href) {
        href = typeof(href) == "string" ? href : $(this).attr("href");
      
        var fromTop = 130;
      
        if(href.indexOf("#") == 0) {
          var $target = $(href);
      
          // Older browser without pushState might flicker here, as they momentarily
          // jump to the wrong position (IE < 10)
          if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop }, 1000);
            if(history && "pushState" in history) {
              history.pushState({}, document.title, window.location.pathname + window.location.search + href);
              return false;
            }
          }
        }
      }
      
      scroll_if_anchor(window.location.hash);
      
      $("#midPageNav").on("click", "a", scroll_if_anchor);
    </script>
    <section id="templates" class="tile-section">view templates </section>
        <style>.video-marquee {
	background-position: top center;
}
.video-marquee {
	background-size: cover;
	position: relative;
	background-position: bottom center;
	background-color: #fff;
}
.video-marquee.video-marquee-white {
color: #fff;
}
.video-marquee.full-video {
height: 535px;
padding-top: 1px;
}
.video-marquee.full-video .video-info {
margin-top: 150px;
}
.video-marquee .relative-position {
position: relative;
}
.video-marquee .video-marquee-all-centered {
text-align: center;
}
.video-marquee.video-marquee-white h1, .video-marquee.video-marquee-white h2, .video-marquee.video-marquee-white h3, .video-marquee.video-marquee-white h4, .video-marquee.video-marquee-white h5, .video-marquee.video-marquee-white h6 {
color: #fff;
}
.video-marquee.full-video .video-info .cta {
font-family: 'Walsheim-Black';
text-transform: uppercase;
}
        </style>
        <atlantis:webstash type="js">
          <script>
            // https://developers.google.com/youtube/player_parameters#IFrame_Player_API
            $(document).ready(function(){
              if(typeof youtubeVideo === 'undefined'){
                window.youtubeVideo = {
                  _src: 'https://www.youtube.com/embed/',
                  loadVideo: function(videoId, height, width, callback, parameters, container, insertType){
                    if(typeof parameters === 'object'){
                      var paramString = '';
                      
                      // add origin to src
                      parameters.origin = window.location.protocol+'//'+window.location.host
            
                      if(youtubeVideo._src.indexOf('?') === -1){
                        paramString += '?';
                      }else{
                        paramString += '&';
                      }
            
                      for(param in parameters){
                        if(paramString.length > 2){
                          paramString += '&';
                        }
                        paramString += param+'='+parameters[param];
                      }
                      parameters = paramString;
                    }
                    
                    var $video = $('<iframe height="'+height+'" width="'+width+'" style="position:absolute" frameBorder="0" src="'+youtubeVideo._src+videoId+parameters+'" />');
            
                    // append/prepend to container
                    if(typeof container === 'string'){
                      container = $(container);
                    }
            
                    if(typeof insertType === 'undefined' || insertType === 'append'){
                      container.append($video);
                    }else{
                      container.prepend($video);
                    }
            
                    if(typeof callback === 'function'){
                      $video.load(function(){
                        callback($video[0]);
                      });
                    }
            
                    return $video[0];
                  }
                };
              }
              
              var $containers = $('[data-tile="wsbVideo"]');
              $containers.each(function(){
                var $this = $(this);
                var videoId = $this.data('youtube-id');
                $this.find('.play-button, .cta').bind('click.youtube',function(event){
                  // remove this event
                  $(event.target).unbind(event.type+'.'+event.handleObj.namespace);
            
                  // load the video
                  youtubeVideo.loadVideo(
                      videoId,
                      '100%',
                      '100%',
                      function(video){
                          var $videoInfo = $this.find('.video-info');
                          $videoInfo.animate({'opacity':0.0},1000,function(){
                              $videoInfo.css({'display':'none'});
                          });
                          //$(video).css({'opacity':0.0}).animate({'opacity':1.0});
                      },
                      {'autoplay':1,'controls':0,'showinfo':0,'playsinline':1,'modestbranding':1,'rel':0},
                      $this,
                      'prepend'
                  );
                }).css({'cursor':'pointer'});
              });
            });
          </script>
        </atlantis:webstash>
        <div style="background-image: url([@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/bg-video.jpg);" data-lazy-load="" data-icode="code" data-tile="wsbVideo" data-youtube-id="-HtVJyxSQmw" class="video-marquee video-marquee-white full-video">
          <div class="container relative-position video-info">
            <div class="row">
              <div class="col-sm-10 col-sm-offset-1 col-xs-12 video-marquee-all-centered"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/rb-play-button.png" class="play-button">
                <h4>Make it your way ---- Assuming you want it uncomplicated and gorgeous</h4><span class="cta">We give you intuitive design tools; you plug in some info and create the site you've always wanted easier than you ever imagined.</span>
              </div>
            </div>
          </div>
        </div>
    <section id="features" data-mid-nav-title="Features">
      <div data-icode="" class="carousel-panel container">
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1 col-xs-12">
            <div></div>
          </div>
        </div>
      </div>
            <div data-begin="0" data-end="0" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-facebook-box"></span></div>
                <div class="feature-text">facebook</div>
              </div>
            </div>
            <div data-begin="1" data-end="1" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-twitter"></span></div>
                <div class="feature-text">twitter</div>
              </div>
            </div>
            <div data-begin="2" data-end="2" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-youtube-box"></span></div>
                <div class="feature-text">youtube</div>
              </div>
            </div>
            <div data-begin="3" data-end="3" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-yelp"></span></div>
                <div class="feature-text">yelp</div>
              </div>
            </div>
            <div data-begin="4" data-end="4" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-paypal"></span></div>
                <div class="feature-text">paypal</div>
              </div>
            </div>
            <div data-begin="5" data-end="5" class="features-tabbed-carousel-icon">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.features-tabbed-carousel-icon&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}">
                <div class="feature-carousel-icon"><span class="uxicon uxicon-homefinder"></span></div>
                <div class="feature-text">home owner</div>
              </div>
            </div>
            <style>.item-wrapper { padding: 70px 0 20px; }

.carousel-wrap { padding-bottom: 70px; }

@media only screen and (min-width: 768px){
  .carousel-container .carousel {
    padding: 0 120px;
  }
}

.carousel {
  position: relative;
  padding: 0 0 45px 0;
}

.carousel-container .carousel .carousel-indicators {
  bottom: -60px;
}

@media screen and (min-width: 768px){
  .carousel-indicators {
    bottom: -5px;
  }
}
.carousel-indicators {
  position: absolute;
  bottom: -5px;
  left: 50%;
  z-index: 15;
  width: 80%;
  margin-left: -40%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}

.carousel-container .carousel .carousel-indicators li.active {
  background-color: #77c043;
}

.carousel-container .carousel .carousel-indicators li.active {
  background-color: #77c043;
}
.carousel-container .carousel .carousel-indicators li {
  width: 15px;
  height: 15px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 5px;
  background-color: #d9d9d9;
}
.carousel-indicators .active {
  background-color: #008a32;
}
.carousel-indicators li {
  display: inline-block;
  width: 32px;
  height: 10px;
  margin: 8px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #d9d9d9;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .active {
  
}
.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {
  display: block;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: left 0.6s ease-in-out;
  -moz-transition: left 0.6s ease-in-out;
  transition: left 0.6s ease-in-out;
  overflow: hidden;
}
.carousel-container .carousel-panel, .carousel-container .testimonial {
  padding: 0;
}
.carousel-panel .img-center {
  margin: 50px auto;
}
.carousel-panel .carousel-panel-text {
  margin-bottom: 25px;
}
.carousel-panel h2 {
  margin-top: 0px;
}

.carousel-container .carousel-control.left {
  left: 0px;
}
.carousel-control {
  position: absolute;
  top: -11%;
  bottom: 0;
  color: #999999;
  text-align: center;
}
.carousel-icon.arrow-left-icon {
  background-position: 0 0;
  width: 51px;
  height: 50px;
}

.carousel-control .uxicon-chevron-left-lt, .carousel-control .arrow-left-icon, .carousel-control .arrow-left-white-icon {
  left: 50%;
}
.carousel-control .arrow-left-white-icon, .carousel-control .arrow-right-white-icon, .carousel-control .arrow-left-icon, .carousel-control .arrow-right-icon {
  position: absolute;
  top: 50%;
}
.carousel-icon {
  background-image: url('[@T[link:<imageroot />]@T]/fos/hp/sahara-rebrand-sprite-20141114.png');
  display: inline-block;
  background-size: 205px auto;
}
.carousel-container .carousel-control.right {
  right: 0px;
}
.carousel-icon.arrow-right-icon {
  background-position: 0 -52px;
  width: 51px;
  height: 50px;
}
.carousel-control .arrow-left-white-icon, .carousel-control .arrow-right-white-icon, .carousel-control .arrow-left-icon, .carousel-control .arrow-right-icon {
  position: absolute;
  top: 50%;
}

.carousel {
    position: relative;
    padding: 0 0 45px 0;
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-inner > .item {
    display: none;
    position: relative;
    -webkit-transition: left 0.6s ease-in-out;
    -moz-transition: left 0.6s ease-in-out;
    transition: left 0.6s ease-in-out;
    overflow: hidden;
}

.carousel-inner > .item.show-item {
    display: block;
}

.carousel-inner > .item > h1,
.carousel-inner > .item > h2,
.carousel-inner > .item > h3,
.carousel-inner > .item > h4,
.carousel-inner > .item > h5,
.carousel-inner > .item > h6 {
    margin-top: 0;
}

.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
    display: block;
}

.carousel-inner > .active {
    left: 0;
}

.carousel-inner > .next,
.carousel-inner > .prev {
    position: absolute;
    top: 0;
    width: 100%;
}

.carousel-inner > .next {
    left: 100%;
}

.carousel-inner > .prev {
    left: -100%;
}

.carousel-inner > .next.left,
.carousel-inner > .prev.right {
    left: 0;
}

.carousel-inner > .active.left {
    left: -100%;
}

.carousel-inner > .active.right {
    left: 100%;
}

.carousel-text-item {
    margin-bottom: 20px;
}

.carousel-text-item h1 {
    font-size: 14px;
    display: inline;
    margin: 0;
    font-weight: bold;
    font-weight: 600;
}

.carousel-control {
    position: absolute;
    top: -11%;
    bottom: 0;
    color: #999999;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .carousel-control {
        top: -6%;
    }
}

.carousel-control:hover,
.carousel-control:focus {
    outline: none;
    color: #000;
    text-decoration: none;
}

.carousel-control .uxicon-chevron-left-lt,
.carousel-control .uxicon-chevron-right-lt {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: inline-block;
    width: 40px;
    height: 40px;
    font-size: 40px;
    margin-top: -15px;
}

.carousel-control .arrow-left-white-icon,
.carousel-control .arrow-right-white-icon,
.carousel-control .arrow-left-icon,
.carousel-control .arrow-right-icon {
    position: absolute;
    top: 50%;
}

.carousel-control .uxicon-chevron-left-lt,
.carousel-control .arrow-left-icon {
    left: 50%;
}

.carousel-control .uxicon-chevron-right-lt,
.carousel-control .arrow-right-icon {
    right: 50%;
}

.carousel-control.left {
    left: -40px;
}
@media only screen and (max-width: 768px){
  .carousel-container .carousel-control {
    display: none;
  }
}
@media only screen and (max-width: 768px) {
    .carousel-control.left {
        left: -10px;
    }
}

.carousel-control.right {
    right: -40px;
}

@media only screen and (max-width: 768px) {
    .carousel-control.right {
        right: -10px;
    }
}

.carousel-indicators {
    position: absolute;
    bottom: -5px;
    left: 50%;
    z-index: 15;
    width: 80%;
    margin-left: -40%;
    padding-left: 0;
    list-style: none;
    text-align: center;
}

.carousel-indicators li {
    display: inline-block;
    width: 32px;
    height: 10px;
    margin: 8px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #d9d9d9;
}

.carousel-indicators .active {
    background-color: #008a32;
}

@media screen and (min-width: 768px) {
    .carousel-indicators {
        bottom: -5px;
    }
}
.carousel-panel .include-check {
position: relative;
padding-left: 45px;
margin-top: 20px;
}
.carousel-panel .include-check:before {
content: "";
background-image: url([@T[link:<imageroot />]@T]fos/hp/sahara-rebrand-sprite-20141114.png);
background-position: 0 -668px;
background-size: 205px auto;
width: 25px;
height: 27px;
padding-right: 5px;
position: absolute;
left: 0;
top: -6px;
}
            </style>
            <div class="carousel-wrap">
              <div class="carousel-container container">
                <div id="carousel-social-media" data-ride="carousel" data-interval="false" class="carousel slide">
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-social-media" data-slide-to="0"></li>
                    <li data-target="#carousel-social-media" data-slide-to="1"></li>
                    <li data-target="#carousel-social-media" data-slide-to="2"></li>
                    <li data-target="#carousel-social-media" data-slide-to="3"></li>
                    <li data-target="#carousel-social-media" data-slide-to="4"></li>
                    <li data-target="#carousel-social-media" data-slide-to="5"></li>
                  </ol>
                  <div class="carousel-inner">
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-facebook-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>FACEBOOK</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-twitter-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>TWITTER</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-youtube-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>YOUTUBE</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-facebook-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>YELP</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-facebook-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>PAYPAL</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/wsb-apps-image-facebook-int.jpg" class="img-responsive img-center">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>HOMEOWNER</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">Share your status updates or photos.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                  </div><a href="#carousel-social-media" data-slide="prev" class="left carousel-control"><span class="carousel-icon arrow-left-icon"></span></a><a href="#carousel-social-media" data-slide="next" class="right carousel-control"><span class="carousel-icon arrow-right-icon"></span></a>
                </div>
                <script>
                  $('.carousel .carousel-indicators li:first-child').addClass("active");
                  $('.carousel .carousel-inner .item:first-child').addClass("active");
                </script>
              </div>
            </div>
      <div class="bg-pro-gray">
                <style>
.features-two-up {
  min-height: 940px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 100px 0;
}
.features-two-up .feature-row-height {
margin-top: 50px;
}
.features-two-up .feature-row {
margin-bottom: 60px;
}
.features-two-up .feature-image {
margin-top: 15px;
margin-bottom: 20px;
}
.features-two-up .feature-title {
font-size: 24px;
font-size: 2.4rem;
margin-bottom: 10px;
font-family: 'Walsheim-Bold';
line-height: 1.1;
}
.features-two-up .feature-row-text {
margin-bottom: 20px;
}
                </style>
                <div style="background-image: url([@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/rebrand-features-bg-ph.jpg);" data-lazy-load="" class="features-two-up   ">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12">
                        <h1>Business Exclusives Section</h1>
                      </div>
                              <div class="row feature-row-height">
                                <div class="col-sm-7">
                                  <div class="row feature-row">
                                    <div class="col-sm-5"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/rebrand-features-img1-ph.png" data-lazy-load="" alt="" class="feature-image img-responsive">
                                    </div>
                                    <div class="col-sm-7">
                                      <div class="feature-title">Get more than just a website</div>
                                      <div class="feature-row-text">With our One-Click Social Media Manager, we'll instantly match your Facebook.....</div><a href="http://godaddy.com" class="btn btn-default-dark">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row feature-row-height">
                                <div class="col-sm-7">
                                  <div class="row feature-row">
                                    <div class="col-sm-5"><img src="[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/rebrand-features-img1-ph.png" data-lazy-load="" alt="" class="feature-image img-responsive">
                                    </div>
                                    <div class="col-sm-7">
                                      <div class="feature-title">Get on Google in 3 easy steps with our built-in SEO tool</div>
                                      <div class="feature-row-text">See how the built-in Search Engine Optimization (SEO) tool in our Business Plus plan will help you show up on Google<sup>&reg;</sup>, Yahoo!<sup>&reg;</sup> and more.</div><a href="http://godaddy.com" class="btn btn-default-dark">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                    </div>
                  </div>
                </div>
      </div>
      <div class="bg-black">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h3 class="text-center text-muted">Business Plus Starting at [@T[productprice:<current productid="7514" dropdecimal="false" period="monthly" htmlsymbol="false" negative="parentheses" />]@T]/mo</h3>
            </div>
            <div class="col-sm-4">
              <div data-center-element="{&quot;vertical&quot;:{&quot;target&quot;:{&quot;method&quot;:&quot;parents&quot;,&quot;selector&quot;:&quot;.bg-black&quot;},&quot;verticalStyle&quot;:&quot;margin-top&quot;,&quot;elementHeightMethod&quot;:&quot;outerHeight&quot;,&quot;targetWidthMethod&quot;:&quot;height&quot;}}" class="right">
                <button data-tcode="" data-plan="wsb_businessplus_12month" class="btn btn-purchase btn-plan btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" data-mid-nav-title="Testimonials">
            <div class="carousel-wrap">
              <div class="carousel-container container">
                <div id="carousel-testimonials" data-ride="carousel" data-interval="false" class="carousel slide">
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-testimonials" data-slide-to="0"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>Quote</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">GoDaddy is Awesome.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>Quote</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">GoDaddy is Awesome.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="item">
                            <div class="item-wrapper text-center">
                              <div data-icode="" class="carousel-panel container">
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <h2>Quote</h2>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-sm-10 col-sm-offset-1 col-xs-12">
                                    <div class="carousel-panel-text">GoDaddy is Awesome.</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                  </div><a href="#carousel-testimonials" data-slide="prev" class="left carousel-control"><span class="carousel-icon arrow-left-icon"></span></a><a href="#carousel-testimonials" data-slide="next" class="right carousel-control"><span class="carousel-icon arrow-right-icon"></span></a>
                </div>
                <script>
                  $('.carousel .carousel-indicators li:first-child').addClass("active");
                  $('.carousel .carousel-inner .item:first-child').addClass("active");
                </script>
              </div>
            </div>
    </section>
    <section id="faq" data-mid-nav-title="FAQ">
      <style>.accordion-group {
  border-top: 2px solid #e8e8e8;
  border-bottom: 2px solid #e8e8e8;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: 'Walsheim-Bold';
}

.accordion-group h2 {
  margin-top: 40px;
  text-align: center;
}

.accordion-group button {
  margin-bottom: 40px;
}

.accordion-group li.accordion-dropdown {
  padding: 20px 0;
  cursor: pointer;
}

.accordion-group li.accordion-dropdown span {
  font-size: 19px;
  text-transform: uppercase;
}

.accordion-group li.accordion-dropdown .carett {
  display: inline-block;
  vertical-align: middle;
  float: left;
  margin-top: 7px;
  margin-right: 10px;
}

.accordion-group li.accordion-dropdown .carett.caret-down {
  border-top: 8px solid;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
}

.accordion-group li.accordion-dropdown .carett.caret-right {
  border-left: 8px solid;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-top: 4px;
}

.accordion-group li.accordion-dropdown.active > span:first-child {
  color: #008a32;
}

.accordion-group li.accordion-dropdown {
  margin: 10px 0 0 0;
  padding: 20px 0;
  font-size: 18px;
  font-size: 1.8rem;
  line-height: 1;
}

.accordion-group li.accordion-dropdown .dropdown {
  margin: 10px 0 0 0;
  padding: 10px 0;
  font-size: 18px;
  font-size: 1.8rem;
  line-height: 1;
  list-style: none;
}

.accordion-group li.accordion-dropdown ul.dropdown > li div {  
  padding-left: 30px;
  transition: all 300ms;
}

.dropdown li {
  font-family: Arial;
}
      </style>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul id="test-faq" class="accordion-group ">
              <h2>FAQ!</h2>
              <li class="accordion-dropdown"><span class="carett caret-right"></span><span>Where am I?</span>
                <ul class="dropdown">
                  <li>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, nisl a lacinia gravida, velit elit convallis ex, ac fringilla ante erat eu ante. Duis pellentesque, dolor et laoreet feugiat, ligula lacus tincidunt ante, id malesuada purus nulla vel erat. Vivamus viverra velit vel imperdiet imperdiet. Morbi fermentum et justo id convallis. Fusce fringilla neque ut vestibulum ornare. Maecenas eleifend diam sit amet cursus finibus. Donec tellus massa, sollicitudin vitae lacus in, posuere suscipit leo. Donec vel dolor sapien. Pellentesque sit amet eleifend justo. Curabitur sed neque ligula. Phasellus vestibulum malesuada erat id elementum. Sed cursus neque et congue accumsan. </p>
                      <p>Cras varius, tellus eu tristique ultrices, sapien enim ullamcorper odio, nec euismod metus massa vel leo. Praesent finibus lacus purus, in ultrices metus rutrum sed. Vestibulum purus mauris, efficitur id quam vel, consequat malesuada nisi. Duis eu mauris vitae mauris pulvinar maximus eu ac odio. Pellentesque et purus sed lectus dictum auctor non et ligula. Sed pellentesque a urna nec sodales. Vestibulum dignissim iaculis tincidunt. Pellentesque facilisis nec lorem in venenatis. Cras scelerisque aliquet libero, a viverra enim pulvinar id. Maecenas pharetra tortor id quam imperdiet, id accumsan velit dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur euismod vulputate enim ac scelerisque. Nunc blandit lectus mattis velit ornare, quis malesuada ex sollicitudin. Phasellus auctor risus et nisl dignissim faucibus vel sit amet ex. Nulla tempor eros et pellentesque maximus. Aliquam finibus auctor justo, quis porta ex vulputate sit amet. </p>
                      <p>Fusce viverra eget massa ac posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras vel ligula venenatis, fringilla purus sit amet, semper ante. Vivamus bibendum maximus dui et finibus. Integer in dignissim dolor, in malesuada massa. Nam accumsan feugiat tortor, eu tincidunt mauris laoreet a. Fusce fermentum dolor eu odio volutpat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sed augue pretium, ultrices nisi non, maximus tortor. Praesent auctor euismod fringilla.</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="accordion-dropdown"><span class="carett caret-right"></span><span>What's the purpose of life?</span>
                <ul class="dropdown">
                  <li>
                    <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, nisl a lacinia gravida, velit elit convallis ex, ac fringilla ante erat eu ante. Duis pellentesque, dolor et laoreet feugiat, ligula lacus tincidunt ante, id malesuada purus nulla vel erat. Vivamus viverra velit vel imperdiet imperdiet. Morbi fermentum et justo id convallis. Fusce fringilla neque ut vestibulum ornare. Maecenas eleifend diam sit amet cursus finibus. Donec tellus massa, sollicitudin vitae lacus in, posuere suscipit leo. Donec vel dolor sapien. Pellentesque sit amet eleifend justo. Curabitur sed neque ligula. Phasellus vestibulum malesuada erat id elementum. Sed cursus neque et congue accumsan. </p>
                      <p>Cras varius, tellus eu tristique ultrices, sapien enim ullamcorper odio, nec euismod metus massa vel leo. Praesent finibus lacus purus, in ultrices metus rutrum sed. Vestibulum purus mauris, efficitur id quam vel, consequat malesuada nisi. Duis eu mauris vitae mauris pulvinar maximus eu ac odio. Pellentesque et purus sed lectus dictum auctor non et ligula. Sed pellentesque a urna nec sodales. Vestibulum dignissim iaculis tincidunt. Pellentesque facilisis nec lorem in venenatis. Cras scelerisque aliquet libero, a viverra enim pulvinar id. Maecenas pharetra tortor id quam imperdiet, id accumsan velit dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur euismod vulputate enim ac scelerisque. Nunc blandit lectus mattis velit ornare, quis malesuada ex sollicitudin. Phasellus auctor risus et nisl dignissim faucibus vel sit amet ex. Nulla tempor eros et pellentesque maximus. Aliquam finibus auctor justo, quis porta ex vulputate sit amet. </p>
                      <p>Fusce viverra eget massa ac posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras vel ligula venenatis, fringilla purus sit amet, semper ante. Vivamus bibendum maximus dui et finibus. Integer in dignissim dolor, in malesuada massa. Nam accumsan feugiat tortor, eu tincidunt mauris laoreet a. Fusce fermentum dolor eu odio volutpat varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sed augue pretium, ultrices nisi non, maximus tortor. Praesent auctor euismod fringilla.</p>
                    </div>
                  </li>
                </ul>
              </li>
              <div class="text-center">
                <button id="test-button" class="btn btn-default-dark">hey you</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <script type="text/javascript">
        $(".accordion-dropdown").click(function() {
          var dropdownGroup = $(this).parent(".accordion-group");
          var dropdownOptions = $(this).find(".dropdown");
          var dropdownCaret = $(this).find(".carett");
          var dropdowns = $(dropdownGroup).find(".accordion-dropdown");
        
          $(dropdowns).removeClass("active");
          $(dropdownGroup).find(".dropdown").slideUp();
          $(dropdownGroup).find(".carett")
                          .removeClass("caret-down")
                          .addClass("caret-right");
        
          if (!$(dropdownOptions).is(":visible")) {
            $(this).addClass("active");
            $(dropdownOptions).slideDown();
            $(dropdownCaret).removeClass("caret-right").addClass("caret-down");
            event.stopPropagation();
          }
        });
        $(window).load(function() {
          $("#test-faq .accordion-dropdown:first").click();
        });
        $("#test-button").click(function() {
          $('#test-faq').find('.dropdown').slideDown();
          $('#test-faq').find('.accordion-dropdown').find('.carett')
                          .removeClass("caret-right")
                          .addClass("caret-down");
          $('#test-faq').find('.accordion-dropdown').addClass("active");
         });
      </script>
    </section>
    <section id="other-products">
      <style>
.two-up-title-wrap.bg-white {
  background-color: #fff;
}
.two-up-title-wrap.bg-yellow {
  background-color: #ffde2d;
}
.two-up-title-wrap.bg-gray-lighter,
.two-up-title-wrap.bg-pro-gray {
  background-color: #e8e8e8;
}
.two-up-title-wrap.bg-gray-light {
  background-color: #d9d9d9;
}
.two-up-title-wrap.bg-green-official {
  background-color: #77c043;
}
.two-up-title-wrap.bg-green-new {
  background-color: #5caf2b;
}
.two-up-title-wrap.bg-green-official-light {
  background-color: #84D54A;
}
.two-up-title-wrap.bg-gray-darkest {
  background-color: #333333;
}

.two-up-wrap-compare {
  min-height: 980px;
  background-repeat: no-repeat;
  background-size: cover !important;
  background-position: center top;
  position: relative;
}
@media (min-width: 768px) {
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-white {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-yellow {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-lighter,
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-pro-gray {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-light {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-official {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-new {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-official-light {
    background-color: transparent;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-darkest {
    background-color: transparent;
  }
}
@media (max-width: 767px) {
  .two-up-wrap-compare {
    background-image: none !important;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-white {
    background-color: #fff;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-yellow {
    background-color: #ffde2d;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-lighter,
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-pro-gray {
    background-color: #e8e8e8;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-light {
    background-color: #d9d9d9;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-official {
    background-color: #77c043;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-new {
    background-color: #5caf2b;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-green-official-light {
    background-color: #84D54A;
  }
  .two-up-wrap-compare .col-md-5.col-sm-6.bg-gray-darkest {
    background-color: #333333;
  }
}
.two-up-wrap-compare:after {
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
@media only (max-width: 767px) {
  .two-up-wrap-compare:after {
    display: none;
  }
}
.two-up-wrap-compare .two-up-text-wrap {
  padding: 30px;
}
@media (max-width: 767px) {
  .two-up-wrap-compare .two-up-text-wrap {
    padding: 60px 0;
  }
}
.two-up-wrap-compare h2 {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: 'Walsheim-Black';
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 300;
  line-height: 1.1;
  color: #333;
}
.two-up-wrap-compare h3 {
  font-size: 3rem;
  text-transform: uppercase;
  font-family: 'Walsheim-Black';
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 300;
  line-height: 1.1;
}
.two-up-wrap-compare .white-text {
  color: #fff;
}
.two-up-wrap-compare .white-text h2{
  color: #fff;
}
.two-up-wrap-compare .two-up-text-wrap h3.subtitle {
  text-transform: none;
}
.two-up-wrap-compare .check-bullets li {
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
}
.two-up-wrap-compare .check-bullets li:before {
  content: '';
  background-image: ;
  background-size: 205px auto;
  background-position: 0 -700px;
  width: 25px;
  height: 27px;
  position: absolute;
  left: 0;
}
.two-up-wrap-compare .check-bullets li h5 {
  margin-bottom: 5px;
}
.or-container-none:after {
  content: '';
  width: 94px;
  height: 94px;
  background-image: url(//img1.wsimg-com.ide/fos/hp/sahara-rebrand-sprite-20141114.png);
  background-size: 205px auto;
  background-position: 0 -896px;
  position: absolute;
  bottom: -50px;
  margin: 0 auto;
  display: none;
  margin-left: -50px;
  z-index: 1;
}
.or-container:after {
  content: '';
  width: 94px;
  height: 94px;
  background-image: url(//img1.wsimg-com.ide/fos/hp/sahara-rebrand-sprite-20141114.png);
  background-size: 205px auto;
  background-position: 0 -896px;
  position: absolute;
  bottom: -50px;
  margin: 0 auto;
  display: block;
  margin-left: -50px;
  z-index: 1;
}
@media (max-width: 767px) {
  .or-container:after {
    display: block;
    -webkit-transform: 90deg;
    -moz-transform: 90deg;
    transform: rotate(90deg);
    left: 50%
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .or-container:after {
    left: 101%;
    bottom: 50%;
  }
}
@media (min-width: 992px) {
  .or-container:after {
    left: 121%;
    bottom: 50%;
  }
}

.two-up-title {
  margin: 40px 0;
  line-height: 1;
  font-size: 4rem;
  text-transform: uppercase;
  font-family: 'Walsheim-Black';
  font-weight: 300;
}
.two-up-speech-shape {
  font-family: 'Walsheim-Bold';
  font-size: 18px;
  font-size: 1.8rem;
  padding: 5px 10px 5px 17px;
  color: #fff;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  z-index: 2;
}
.two-up-speech-shape .shape-text {
  position: relative;
  z-index: 40;
}
.two-up-speech-shape:before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  border-top: 15px solid;
  border-right: 15px solid transparent;
}
.two-up-speech-shape:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 99%;
  top: 0;
  transform: skew(-12deg, 0);
  z-index: 1;
}
.two-up-speech-shape.two-up-speech-shape-green {
  background-color: #008a32;
}
.two-up-speech-shape.two-up-speech-shape-green:before {
  border-top-color: #008a32;
}
.two-up-speech-shape.two-up-speech-shape-green:after {
  background-color: #008a32;
}
.two-up-speech-shape.two-up-speech-shape-orange {
  background-color: #ef6c0f;
}
.two-up-speech-shape.two-up-speech-shape-orange:before {
  border-top-color: #ef6c0f;
}
.two-up-speech-shape.two-up-speech-shape-orange:after {
  background-color: #ef6c0f;
}
.two-up-speech-shape.two-up-speech-shape-white {
  background-color: #fff;
}
.two-up-speech-shape.two-up-speech-shape-white:before {
  border-top-color: #fff;
}
.two-up-speech-shape.two-up-speech-shape-white:after {
  background-color: #fff;
}
.two-up-speech-shape.two-up-speech-shape-yellow {
  background-color: #ffde2d;
}
.two-up-speech-shape.two-up-speech-shape-yellow:before {
  border-top-color: #ffde2d;
}
.two-up-speech-shape.two-up-speech-shape-yellow:after {
  background-color: #ffde2d;
}

      </style>
      <div id="two-up" class="two-up-title-wrap bg-white">
        <div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <h2 class="text-center two-up-title">Not finding what you need?</h2>
              </div>
            </div>
          </div>
        </div>
        <div style="background-image: url('[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/hosting/website-builder/two-up-bg-wsb.jpg'); min-height: 100%;" class="two-up-wrap-compare bg-green-official">
          <div class="container">
            <div class="row">
              <div class="col-md-5 or-container-none col-sm-6  gb-green-official-light">
                <div style="" class="two-up-text-wrap ">
                  <div class="two-up-speech-shape two-up-speech-shape-orange">
                    <div class="shape-text">Managed Wordpress</div>
                  </div>
                  <h2>Get the power of Wordpress with the ease of Fully-Managed Hosting and Security</h2>
                  <div class="row">
                    <div class="col-sm-12">
                      <p>Perfect for: Bloggers, start-ups, small businesses, and designers</p><a class="btn btn-default-dark">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 col-md-offset-2 col-sm-6  bg-gray-darkest">
                <div style="" class="two-up-text-wrap white-text">
                  <div class="two-up-speech-shape two-up-speech-shape-orange">
                    <div class="shape-text">Quick Shopping Cart</div>
                  </div>
                  <h2>Everything you need to open your own online store - no technical skills required.</h2>
                  <div class="row">
                    <div class="col-sm-12">
                      <p>Perfect for: eCommerce businesses and those looking to add online sales to their site</p><a class="btn btn-default-light">LEARN MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="disclaimers">disclaimers</section>
    <!-- FOOTERBEGIN--> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Footer"><Parameters><Parameter key="manifest" value="salesheader" /><Parameter key="split" value="brand2.0" /></Parameters></Data>]@P]
    <!-- FOOTEREND-->
     
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Bottom"><Parameters><Parameter key="manifest" value="salesheader" /><Parameter key="split" value="brand2.0" /></Parameters></Data>]@P]
    <!-- liveperson includes -->
    <div id="lpButtonDiv"></div><!-- End Main Content -->
    <script type="text/javascript">
      endOfPageScripts();
      
    </script>
    <script type="text/javascript">
      $(window).load(function() {
        var maxTitleHeight = 0;
        $(".plan-title").each(function(index, title) {
          maxTitleHeight = $(title).height() > maxTitleHeight ? $(title).height() : maxTitleHeight;
        }).css("min-height", maxTitleHeight);
      
        var maxIconHeight = 0;
        $(".plan-image").each(function(index, image) {
          maxIconHeight = $(image).height() > maxIconHeight ? $(image).height() : maxIconHeight;
        }).css({height: maxIconHeight, marginBottom: 10});
      
        if ($(window).width() > 768){
          $(".pro-plans").each(function(index, outerPlan) {
            var maxHeight = 0;
            $(outerPlan).find(".pro-plan-wrap").each(function(index, plan) {
              maxHeight = $(plan).outerHeight() > maxHeight ? $(plan).outerHeight() : maxHeight;
            });
            if( maxHeight > 0 )$(outerPlan).find(".pro-plan-wrap").css("height", maxHeight);
          });
        }
      });
      
    </script>
    <script type="text/javascript">
      delayLoader.addScript("[@T[link:<javascriptroot />]@T]starfield/fos.share/v1.3/fos.share-20140213.min.js", { "id": "fosShareScript" });
      
    </script>
    <script type="text/javascript">jQuery.query={get:function(c){var b=window.location.search.substring(1);var a=b.split("&");for(i=0;i<a.length;i++){ft=a[i].split("=");if(ft[0]==c){return ft[1]}}return""}};(function(a){a.fn.wresize=function(b){version="1.1";wresize={fired:false,width:0};function d(){if(a.browser.msie){if(!wresize.fired){wresize.fired=true}else{var e=parseInt(a.browser.version,10);wresize.fired=false;if(e<7){return false}else{if(e==7){var f=a(window).width();if(f!=wresize.width){wresize.width=f;return false}}}}}return true}function c(f){if(d()){return b.apply(this,[f])}}this.each(function(){if(this==window){a(this).resize(c)}else{a(this).resize(b)}});return this}})(jQuery);function getMaxZ(){var a=Math.max.apply(null,$.map($("body > *"),function(b,c){if($(b).css("position")=="absolute"){return parseInt($(b).css("z-index"),10)||1}else{return 1}}));return a}function getMaxZ(a){var c="body *:not(#"+a+")";var b=Math.max.apply(null,$.map($(c),function(d,f){if($(d).css("position")=="absolute"){return parseInt($(d).css("z-index"),10)||1}else{return 1}}));return b}jQuery.fn.currentMousePosition=function(b){var a=$("#[isjsonrendercontainer]");if(b!==null&&b!==undefined){$(a).data("currentMousePosition",b)}else{if($(a).data("currentMousePosition")==null||$(a).data("currentMousePosition")==undefined){$(a).data("currentMousePosition",{left:0,top:0})}return $(a).data("currentMousePosition")}};jQuery.fn.lockMousePosition=function(b){var a=$(this).getJsonContainerDiv();$(a).data("lockedMousePosition",$(a).currentMousePosition())};jQuery.fn.lockedMousePosition=function(){return $(this).getJsonContainerDiv().data("lockedMousePosition")};jQuery.fn.getJsonContainerDiv=function(){var a=$(this).parents().andSelf().filter("#[isjsonrendercontainer]:first");return a};var atl_HideInvoked=false;function atl_ToggleDisplay(b){var a=document.getElementById(b);if(a){a.style.display=(a.style.display=="block"?"none":"block")}return true}function atl_SwapDisplay(a,b){atl_ToggleDisplay(a);atl_ToggleDisplay(b);return true}function atl_Go(b,a){if((a==null)||(a=="")){a="_self"}window.open(b,a)}function atl_PopHelp(a){var b=window.open(a,"spop","left=20,top=20,resizable=yes,scrollbars=yes,width=610,height=620")}function atl_PopUp(c,b,a){var d=window.open(c,b,a)}var atl_quickhelp_source;function atl_OnQuickHelpError(a){}function atl_GetQuickHelpContent(b,d,c,e){if(typeof(atl_GetQuickHelpUrl)!="undefined"){var f=atl_GetQuickHelpUrl();var a=(f.indexOf("?")<0)?"?":"&";atl_quickhelp_source=e;$.ajax({type:"GET",url:f+a+"targetDivId=qh&name="+b,contentType:"application/json; charset=utf-8",dataType:"json",success:d,error:c})}}function atl_ShowDivContent(a){if(a!=null&&!atl_HideInvoked){a.style.display="block";a.style.visibility="visible"}}function atl_ShowHelp(a){var c=a.offsetTop;var b=a.offsetParent;while(b){c+=b.offsetTop;b=b.offsetParent}return c}function atl_getOffsetLeft(a){var b=a.offsetLeft;var c=a.offsetParent;while(c){b+=c.offsetLeft;c=c.offsetParent}return b}function atl_getScrollY(){var a=0;if(typeof(window.pageYOffset)=="number"){a=window.pageYOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){a=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){a=document.documentElement.scrollTop}}}return a}function atl_ShowHelpById(d,c){if(c){var b=340;var e=atl_getOffsetLeft(d);var h=(window.innerWidth)?window.innerWidth-25:document.body.clientWidth;if((e+b)>h){e=h-b}newX=e;var a=c.offsetHeight;var f=atl_ShowHelp(d)+d.offsetHeight;var g=(window.innerHeight)?window.innerHeight-25:document.body.clientHeight;if((f+a)>g+atl_getScrollY()){f=atl_ShowHelp(d)-a}newY=f;c.style.top=newY+"px";c.style.left=newX+"px";c.left=newX+"px";c.left=newY+"px"}}function atl_SetQuickHelpDiv(b,c){c=atl_quickhelp_source;var a=document.getElementById("atl_quickhelp");if(a!=null&&b!=null){a.innerHTML=b.Html;atl_ShowHelpById(c,a);atl_ShowDivContent(a);if(!$.jCache.hasItem(b.Data)){$.jCache.setItem(b.Data,b.Html)}}}function atl_ShowQuickHelp(a,c,e){atl_HideInvoked=false;var d=document.getElementById("atl_quickhelp");if(d==null){return}var f;if(a.target!=null){f=a.target}else{if(a.srcElement!=null){f=a.srcElement}else{return}}if(e){var b=getMaxZ(d.id);if(d.style.zIndex<=b){d.style.zIndex=b+1}}if(!$.jCache.hasItem(c)){atl_GetQuickHelpContent(c,atl_SetQuickHelpDiv,atl_OnQuickHelpError,f)}else{d.innerHTML=$.jCache.getItem(c);atl_ShowHelpById(f,d);atl_ShowDivContent(d)}}function atl_HideQuickHelp(){atl_HideInvoked=true;var a=document.getElementById("atl_quickhelp");if(a!=null){a.style.display="none";a.style.visibility="hidden"}}function atlCookieDomain(){var b=window.location.hostname;var c=b.lastIndexOf(".");if(c<0){return"."+b}else{var a="";if(b.lastIndexOf(".",c-1)>-1){a=b.substr(b.lastIndexOf(".",c-1))}else{a="."+b}return a}}function atlSetMemCookie(c,d,e){var b=new Date();var a=c+"="+d+"; path=/; domain="+atlCookieDomain();document.cookie=a}function atlSetCookie(d,e,f){var b=new Date();var c=new Date(Date.parse(b.getDay()+"/"+b.getMonth()+"/"+(b.getFullYear()+f)));var a=d+"="+e+"; expires="+c.toGMTString()+"; path=/; domain="+atlCookieDomain();document.cookie=a}function atlReadCookie(e){var b="";if(document.cookie.length>0){var d=e+"=";var a=document.cookie.indexOf(d);var c=0;if(a>-1){a+=d.length;c=document.cookie.indexOf(";",a);if(c<a){c=document.cookie.length}b=document.cookie.substring(a,c)}}return unescape(b)}function atl_isemailvalid(c){var a="@";var b=".";var d=c.indexOf(a);var f=c.length;var e=c.indexOf(b);if(c.indexOf(a)==-1){return false}if(c.indexOf(a)==-1||c.indexOf(a)==0||c.indexOf(a)==f){return false}if(c.indexOf(b)==-1||c.indexOf(b)==0||c.indexOf(b)==f){return false}if(c.indexOf(a,(d+1))!=-1){return false}if(c.substring(d-1,d)==b||c.substring(d+1,d+2)==b){return false}if(c.indexOf(b,(d+2))==-1){return false}if(c.indexOf(" ")!=-1){return false}return true}function atl_isnoscript(b){var a=/[<>]+/;if(a.test(b)){return false}return true}function atl_textarea_trim(a,b){if(a.value.length<=b){return}a.value=a.value.substr(0,b)}function atl_textarea_canaddchar(b,d){var c=null;if(typeof(b.onkeypress.arguments[0])!="undefined"){c=b.onkeypress.arguments[0].keyCode}else{if(document.selection.createRange().text.length!=0){return true}var c=event.keyCode}var a=[8,37,38,39,40,46];for(var e=0;e<a.length;e++){if(a[e]==c){return true}}if(b.value.length<d){return true}return false}(function(a){this.version="(beta)(0.0.1)";this.maxSize=10;this.keys=[];this.cache_length=0;this.items=[];this.setItem=function(b,c){if(typeof(c)!="undefined"){if(typeof(this.items[b])=="undefined"){this.cache_length++}this.keys.push(b);this.items[b]=c;if(this.cache_length>this.maxSize){this.removeOldestItem()}}return c};this.removeItem=function(b){var c;if(typeof(this.items[b])!="undefined"){this.cache_length--;var c=this.items[b];delete this.items[b]}return c};this.getItem=function(b){return this.items[b]};this.hasItem=function(b){return typeof(this.items[b])!="undefined"};this.removeOldestItem=function(){this.removeItem(this.keys.shift())};this.clear=function(){var b=this.cache_length;this.keys=[];this.cache_length=0;this.items=[];return b};a.jCache=this;return a})(jQuery);var stDivsLoadedList="";function piPositionDiv(c){var d=-1;var e=-1;if($(c).args().doCenterToScreen===true){$(c).centerToScreen()}else{var b=$(c).lockedMousePosition();if(b!==undefined&&b!==null){d=b.left-10;e=b.top-10}if($(c).args().overridePosition!==undefined&&$(c).args().overridePosition!==null){e=$(c).args().overridePosition.top;d=$(c).args().overridePosition.left}var a=document.body.clientWidth;if((d+$(c).width())>a){d=d-$(c).width()+20}if($(c).args().doOffsetFromBottom===true){e-=$(c).height()-20}if(d>0&&e>0){$(c).css({position:"absolute",top:e,left:d})}}}function stHideElement(a,b){for(i=0;i<document.getElementsByTagName(a).length;i++){obj=document.getElementsByTagName(a)[i];if(!obj||!obj.offsetParent){continue}objLeft=obj.offsetLeft-b.offsetParent.offsetLeft;objTop=obj.offsetTop;objParent=obj.offsetParent;while((objParent.tagName.toUpperCase()!="BODY")&&(objParent.tagName.toUpperCase()!="HTML")){objLeft+=objParent.offsetLeft;objTop+=objParent.offsetTop;objParent=objParent.offsetParent}objHeight=obj.offsetHeight;objWidth=obj.offsetWidth;if((b.offsetLeft+b.offsetWidth)<=objLeft){}else{if((b.offsetParent.offsetTop+b.offsetHeight+20)<=objTop){}else{if(b.offsetParent.offsetTop>=objTop+objHeight){}else{if(b.offsetLeft>=objLeft+objWidth){}else{obj.style.visibility="hidden"}}}}}}function getJsonCallback(a,c){var b=document.getElementById(a.TargetDivID);if(jQuery.trim(a.Html)==""){$(b).trigger("popInLoadCompleteWithNoData",a)}$(b).html(a.Html);if($(b).args()==undefined&&$(b).doCacheContent===false){return}if(stDivsLoadedList.indexOf(a.TargetDivID+";")<0){stDivsLoadedList+=a.TargetDivID+";"}$(b).trigger("jsonCallbackComplete",a)}function stShowTarget(a){if(a!=null){$(a).show()}}function stContentIsLoaded(a){if(a!=null){return stDivsLoadedList.indexOf(a.id+";")>=0}else{return true}}function stHideSiblings(a){if(a!=null){$(a).siblings().hide()}}function stShowInt(a){if(a!=null){stHideSiblings(a);stShowTarget(a)}}function stShow(a,c){var b=document.getElementById(c);stShowInt(b);if(a!=""&&!stContentIsLoaded(b)){$.ajax({url:a,dataType:"json",success:getJsonCallback,error:function(){var d=$("#"+c);$(d).html("<div style='width:100%; text-align:center; padding:14px;'>No Results Available.</div>");stShowTarget(d)}})}}function stTabActivate(b){var c=document.getElementById(b);var a=$(c).attr("src");var e=$(c).attr("targetdiv");$(c).parent().siblings(".simple_tab_active").addClass("simple_tab_inactive");$(c).parent().siblings(".simple_tab_active").removeClass("simple_tab_active");$(c).parent().addClass("simple_tab_active");$(c).parent().removeClass("simple_tab_inactive");var d=$("#"+e);stShow(a,e)}jQuery.fn.jsonGet=function(b){if(b==undefined||b==null){b=$(this).args()}var c=b.cache!==false;var d=b.url;if(d==undefined||d==null){d=$(this).attr("src")}if(d==undefined||d==null||d.length<=0){handleJsonError("failed","No URL Specified on jsonGet call")}d=appendQueryStringArguments(b,d);var a={url:d,dataType:"json",cache:b.doCacheContent==true,success:b.success,error:function(g,f,e){handleJsonError(f,b,e,g)}};$.ajax(a)};function appendQueryStringArguments(a,c){if(a.queryStringArguments!=undefined&&a.queryStringArguments!=null){c+=(c.indexOf("?")>=0)?"&":"?";var b;for(b in a.queryStringArguments){c+=b+"="+escape(a.queryStringArguments[b])+"&"}c=c.substring(0,c.length-1)}return c}function jsonPost(b){var c=appendQueryStringArguments(b,b.url);var a={url:c,type:"POST",dataType:"json",data:b.postData,success:b.success,error:function(f,e,d){handleJsonError(e,b)}};$.ajax(a)}jQuery.fn.jsonPost=function(){var a=$(this).args().url;if(a==undefined||a==null){$(this).args().url=$(this).attr("src")}jsonPost($(this).args())};function handleJsonError(c,a,b,d){if(c=="timeout"&&a.timeoutFunction!=undefined&&a.timeoutFunction!=null){a.timeoutFunction()}else{if(a.generalErrorFunction!=undefined&&a.generalErrorFunction!=null){a.generalErrorFunction(c,a)}else{}}}jQuery.fn.args=function(a,b){if(a!==null&&a!==undefined){if(typeof(a)=="object"){this.data("args",a);this.data("lockedMousePosition",null)}else{if(b!=undefined){arguments=this.data("args");arguments[a]=b}else{return this.data("args")[a]}}}else{a=this.data("args");if((a==null)||(a==undefined)){a={};this.data("args",a)}return a}};jQuery.fn.showAndSetVisible=function(){$(this).getJsonContainerDiv().show();this.css({visibility:"visible"});this.show()};jQuery.fn.piSetTimeout=function(){var a="piHidePopIn({targetDivId:'"+this[0].id+"', doNotCloseModal: true})";var b=setTimeout(a,2000);if($(this).args().timerIds==null&&$(this).args().timerIds==undefined){$(this).args().timerIds=[]}$(this).args().timerIds.push(b)};jQuery.fn.piClearMousedOverPopInTimeout=function(){if($(this).args().timerIds!=null){$.each($(this).args().timerIds,function(){clearTimeout(this)})}};function piJsonCallback(a,c){var b=$("#"+a.TargetDivID);getJsonCallback(a,c);if(jQuery.trim(a.Html)==""){return}else{$(b).piClearMousedOverPopInTimeout();$(b).trigger("popInLoadCompleteInternal");$(b).trigger("popInLoadComplete")}}function piRenderPopIn(d){var a=$(d).args();if(a.showBeforeContentLoaded===true){$(d).getJsonContainerDiv().showAndSetVisible();piPositionDiv(d)}if(a.sourceUrl!=null&&a.sourceUrl!=""){var c="?";if(a.sourceUrl.indexOf("?")>=0){c="&"}var b=a.sourceUrl+c+"TargetDivID="+a.targetDivId;a.url=b;a.success=piJsonCallback;if(a.postData!=null&&a.postData!=undefined&&a.postData.length>0){$(d).jsonPost()}else{$(d).jsonGet()}}}jQuery.fn.hideSelectsForIE6PopIn=function(){if($.browser.msie&&$.browser.version.substr(0,1)<7){$("select:visible").each(function(){$(this).attr("hideForIE6PopIn",1);$(this).hide()});$(this).bind("popInHideComplete",function(){$(this).showSelectsForIE6PopIn()});$(this).bind("dialogclose",function(){$(this).showSelectsForIE6PopIn()})}};jQuery.fn.showSelectsForIE6PopIn=function(){$("select[hideForIE6PopIn=1]").each(function(){$(this).attr("hideForIE6PopIn","");$(this).show()})};function piShowPopIn(b,a){var c=$("#"+a.targetDivId);if(a.sourceUrl){$(c).attr("isJsonTargetDiv",true)}$(c).piClearMousedOverPopInTimeout();$(c).hideSelectsForIE6PopIn();$(c).args(a);if(a.doMoveToMousePosition==true){b=b||window.event;$(c).currentMousePosition({left:b.clientX+$(document).scrollLeft(),top:b.clientY+$(document).scrollTop()});$(c).lockMousePosition();if(a.showBeforeContentLoaded===true){$(c).getJsonContainerDiv().showAndSetVisible();piPositionDiv(c)}}piRenderPopIn(c);if(a.doAutoHideOnMouseLeave){$(c).mouseover(function(){$(c).piClearMousedOverPopInTimeout()});$(c).mouseenter(function(){if($(c).is(":visible")){$(c).piClearMousedOverPopInTimeout()}});$(c).mouseleave(function(){if($(c).is(":visible")){$(c).piClearMousedOverPopInTimeout();$(c).piSetTimeout()}})}$(c).one("popInLoadCompleteInternal",function(d){if($(c).args().doCenterToScreen===true){$(c).centerToScreen();$(c).getJsonContainerDiv().showAndSetVisible()}else{piPositionDiv(c);$(c).getJsonContainerDiv().showAndSetVisible()}})}function piShowPopInWithStaticContent(b,a){var c=$("#"+a.targetDivId);piShowPopIn(b,a);piPositionDiv(c);$(c).getJsonContainerDiv().showAndSetVisible()}function piHidePopIn(a){var c=$("#"+a.targetDivId);a=$(c).mergeArgs(a);var b=$(c).data("forcePageRefreshOnClose");if(b!=undefined&&b!=null&&(b===true||b===false)){a.forcePageRefreshOnClose=b}$(c).piClearMousedOverPopInTimeout();if($(c).args().forcePageRefreshOnClose===true){reloadPage()}$(c).getJsonContainerDiv().fadeOut("fast");if(a.doNotCloseModal!==true){$(".ui-widget-overlay").fadeOut("fast",function(){if(typeof($(c).dialog)=="function"){$(c).dialog("close")}})}$(c).args({});$(c).trigger("popInHideComplete",a)}jQuery.fn.hideJsonPopIn=function(a){if(a==null||a==undefined){a={}}var b=$(this).parents("[isJsonTargetDiv]");if(a.targetDivId==undefined||a.targetDivId==null){a.targetDivId=$(b).attr("id")}piHidePopIn(a)};function piShowPopInModal(a){var c=a.targetDivId;var b=$("#"+c);if(a.sourceUrl){$(b).attr("isJsonTargetDiv",true)}$(b).args(a);$(b).hideSelectsForIE6PopIn();$(b).showAndSetVisible();$(b).css("z-index",getMaxZ()+100);$(b).dialog({draggable:false,resizable:false,modal:true,position:"center",width:$(b).width()+10,closeOnEscape:false});$(b).bind("popInLoadCompleteInternal",function(d){piBindContainerDivToAutoHideOnClick(a);if($(b).args().doCenterToScreen===true){$(b).dialog("option","position",$(b).dialog("option","position"))}});$(b).dialog("open");piRenderPopIn(b);if(a.autoHideOnClickOutBeforeLoadComplete!==false){piBindContainerDivToAutoHideOnClick(a)}$(b).click=function(d){$(d).stopPropagation()}}function piBindContainerDivToAutoHideOnClick(a){var b=$(".ui-widget-overlay");var c=$(b).data("events");var d=$("#"+a.targetDivId);if(c==null||c.click==null){$(b).bind("click",function(){if($(d).args().autoHideOnClickOut!==false){piHidePopIn(a)}})}}jQuery.fn.centerToScreen=function(){return this.each(function(){var k=$(this).width();var e=$(this).height();var d=$(window).width();var a=d/2;var b=$(window).height();var c=b/2;var g=$(document).scrollLeft();var h=$(document).scrollTop();var j=c+h-(e/2);var f=a+g-(k/2);$(this).css({top:j+"px"});$(this).css({left:f+"px"})})};jQuery.fn.setAutoEllipseDomain=function(a){$(this).each(function(){var c=$.trim($(this).html());$(this).html("");$(this).show();if(a==null||a==undefined){a=$(this).width()}var e=document.createElement("label");$(e).attr("title",c);var h=c.split(".",2)[1];if(h==undefined){h=""}$(e).html(c);$(this)[0].appendChild(e);var g=$(e).width();if(g>=a){var d=10;var f;$(e).html("");while(e.offsetWidth<a&&d<c.length){var b=c.substr(0,d)+"..."+h;$(e).html(b);d++;g=e.offsetWidth;if(g>a){break}f=b}$(e).html(f)}})};function reloadPage(){document.body.style.cursor="wait";var a=location.toString().replace(window.location.hash,"");document.location.replace(a)}jQuery.fn.mergeArgs=function(a){if(a&&a!=null){var b;for(b in a){$(this).args(b,a[b])}}return $(this).args()};jQuery.fn.rebind=function(b,a){$(this).unbind(b).bind(b,a);return this};function formatCurrency(f,b,h,d,m,j){if(b===undefined){b="$"}if(h===undefined){h=2}if(d===undefined){d="."}if(m===undefined){m=","}if(j===undefined){j=true}function g(n,p,o){var q=""+n;while(q.length<p){q=o+q}return q}f=f.toString().replace(/\$|\,/g,"");if(isNaN(f)){f="0"}var c=Math.pow(10,h);var l=(f==(f=Math.abs(f)));f=Math.floor(f*c+0.50000000001);var a=(f%c);f=Math.floor(f/c).toString();a=g(a,h,"0");for(var e=0;e<Math.floor((f.length-(1+e))/3);e++){f=f.substring(0,f.length-(4*e+3))+m+f.substring(f.length-(4*e+3))}var k=(((l)?"":"-")+f);if(h>0){k=k+d+a}if(j){k=b+k}else{k=k+b}return k}jQuery.fn.onenter=function(a){$(this).live("keypress",function(b){if((b.which&&b.which==13)||(b.keyCode&&b.keyCode==13)){a()}});return this};function LogFastballPageEvent(a,c,d){var b=new fbiEventObject(new Object(),"click",a,"");b.AddUserInput(c,d);fbiRecordFastballEvent(b)}jQuery.fn.validateDomainNames=function(b){var a=$(this).val();if(a.length==0){b("Enter a domain name to search.");return false}return true};function LogFastballEvent(a,b,c){LogFastballPageEvent(a,b,c)}function stripSpecialCharacters(b){var a=b.replace(/\s*/g,"").replace(/[^a-zA-Z0-9-\s.]+/g,"");return a}jQuery.fn.stripSpecialCharacters=function(){$(this).val(stripSpecialCharacters($(this).val()))};</script>
    <script type="text/javascript">!function(a){function c(a,b,c){var d=c.replace("px","");if(b.length>6){var e=d-4;$(a).css({"font-size":e+"px"})}else $(a).css({"font-size":c});$(a).val(b)}function e(b,c,d){a(c).length>0&&a(d).css({display:"none"})}function f(b,c){a(c).hasClass("stoggledown")?a(c).html("&#9650;").removeClass("stoggledown").addClass("stoggleup"):a(c).html("&#9660;").removeClass("stoggleup").addClass("stoggledown"),a(b).toggle()}function g(b,c,d,e,g){var h=document.layers?c.which:document.all?event.keyCode:document.getElementById?c.keyCode:0;a(e).is(":hidden")&&f(e,g);var i=a(d);if(h!==a.ui.keyCode.UP&&h!==a.ui.keyCode.DOWN){var j=i.val();a(e).is(":hidden")&&f(e,g),IntialTLD?IntialTLD=!1:a(e+" li").each(function(){a(this).html().indexOf(j)>=0?a(this).removeClass("tldhidden").addClass("tldshown").show():a(this).removeClass("tldshown").addClass("tldhidden").hide()})}}function h(b,c,d,e,f){var g=document.layers?c.which:document.all?event.keyCode:document.getElementById?c.keyCode:0,h=a(".t-hilite");(g===a.ui.keyCode.DOWN||g===a.ui.keyCode.UP)&&(0===h.length?a("li.tldshown").eq(0).addClass("t-hilite"):g===a.ui.keyCode.DOWN?a("li.t-hilite").removeClass("t-hilite").nextAll(":visible").eq(0).addClass("t-hilite"):a("li.t-hilite").removeClass("t-hilite").prevAll(":visible").eq(0).addClass("t-hilite"),null===a("li.t-hilite").html()||a(f).val(a(".t-hilite").html()))}a.gdhpSearchUI=function(){},a.gdhpSearchUI.defaults={searchUrl:null,idnUrl:null,domainInputId:"#searchDomainName",tldInputId:"#searchTldName",tldToggleId:"#searchTldToggle",tldListId:"#searchTldList",searchButton:"#searchButton",tldListHighlightColor:"#E4EFC7",domainInputLabelText:"Search for a new domain",initialTld:!0,focusOnLoad:!0},a.fn.gdhpDomainSearch=function(b){var d=a.extend({},a.gdhpSearchUI.defaults,b||{}),i=a(d.tldInputId).css("font-size"),j=d.domainInputId+"-label";a("<div id='"+j.replace("#","")+"' unselectable='on'>"+d.domainInputLabelText+"</div>").appendTo(a(d.domainInputId).parent()),a("<style type='text/css'> .t-hilite{ background-color:"+d.tldListHighlightColor+"} </style>").appendTo("head"),a(j).bind("click",function(){a(d.domainInputId).focus()}).addClass(a(d.domainInputId).attr("class")).css({position:"absolute",color:"#CCCCCC",top:"0px",left:"0px"}),d.focusOnLoad&&a(d.domainInputId).focus(),a(d.domainInputId).bind("paste",function(a){e(a,d.domainInputId,j)}).bind("click",function(a){e(a,d.domainInputId,j)}).bind("keypress",function(a){e(a,d.domainInputId,j)}).bind("focus",function(){"Start your domain search"===a(this).val()&&a(this).val("")}).bind("blur",function(){""===a(d.domainInputId).val()&&a(j).css({display:"block"})}),a(d.tldInputId).focus(function(){f(d.tldListId,d.tldToggleId)}).keyup(function(a){g(this,a,d.tldInputId,d.tldListId,d.tldToggleId)}).keydown(function(a){h(this,a,d.tldListId,d.tldToggleId,d.tldInputId)}),a(d.tldToggleId).html("&#9660;").addClass("stoggledown").bind("click",function(){f(d.tldListId,d.tldToggleId)}),a(d.tldListId+" li").each(function(){a(this).bind("click",function(){c(d.tldInputId,this.innerHTML,i),f(d.tldListId,d.tldToggleId)}).bind("mouseover mouseout",function(){a(this).toggleClass("t-hilite")})}),IntialTLD=d.initialTld,a(d.domainInputId).keypress(function(b){b&&b.which===a.ui.keyCode.ENTER&&(a(d.domainInputId),a(d.tldInputId))}),a(d.searchButton).click(function(b){var c=a(d.domainInputId),e=a(d.tldInputId);domainSearch(d.searchUrl,d.idnUrl,c,e,d.tldListId),b.preventDefault(),b.stopPropagation()})}}(jQuery);var gdhpCaptcha={showCaptcha:function(a,b,c,d,e,f,g){if(jsonModal.display(a,"gdhp-captcha-modal"),$("#captchaContentDiv").length>0){$(".captcha-submt-btn").unbind("click").bind("click",function(){gdhpCaptcha.validateCaptcha(b,c,d,e,f,g)}),$(".gdhp-captcha-input").unbind("keypress").bind("keypress",function(a){a&&13===a.which&&gdhpCaptcha.validateCaptcha(b,c,d,e,f,g)});var h=new Object,i=b;i+=i.indexOf("?")>=0?"&":"?",i+="TargetDivID=captchaContentDiv",h.url=i,h.success=function(a,b){getJsonCallback(a,b),$("#captcha").show()},h.timeout=1e4,$(this).args(h),$(this).jsonGet()}},validateCaptcha:function(a,b,c,d,e,f){var g=new Object,h=a,i=$("#captchaInputDiv");h+=h.indexOf("?")>=0?"&":"?",h+="TargetDivID=captchaContentDiv&cac="+i.val(),g.url=h,g.success=function(a,g){a.Properties.IsSolved?(modal.close("gdhp-captcha-modal",!0),$(this).gdhpBulkSearch("search",{bulkSearchUrl:b,domains:c,tlds:d,searchtype:e,pageSource:f})):(alertBox.showAlertErrorBox("107"),getJsonCallback(a,g),__initiateCaptcha=!1,i.focus())},g.timeout=1e4,$(this).args(g),$(this).jsonGet()}};$("[data-ci]").click(function(a){$this=$(this),FastballEvent_MouseClick(a,$this.attr("data-ci"),$(this)[0],"a"),fbiLibCheckQueue()});var jsonModal={display:function(a,b,c,d,e){if($("#"+b).length<=0){var f=$("<div>").attr("id",b).css({position:"absolute"}).appendTo("body");"undefined"!==d&&f.width(d),"undefined"!==e&&f.height(e)}jsonContent.load(b,a,!1),modal.display(b,"popUpDiv ui-widget-overlay",".modal_close_btn",c)}},jsonContent={load:function(a,b,c){0===$("#"+a).html().length?null!==b&&(b+=b.indexOf("?")>=0?"&":"?",b+="callback=jsonContent._fill&targetDivId="+a,jsonContent._call("jsonContent._fill",b,c)):this._fill({TargetDivID:a})},_call:function(a,b,c){$.ajax({dataType:"jsonp",jsonp:a,url:b,async:c})},_fill:function(a){if(null!==a){var b=a.TargetDivID;null!==a.Html&&$("#"+b).html(a.Html)}}},globalModal={display:function(a){$(a).modal({overlayId:"g-modal-overlay",close:!0,autoPosition:!0}),$("#g-modal-overlay").bind("click",function(){$.modal.close()})}},modal={display:function(a,b,c,d){if($("#curtain").length<=0){var e=$("<div>").attr("id","curtain").addClass(b).css({"z-index":getMaxZ(),display:"none",filter:"alpha(opacity=50)"}).height($(document).height()).width($(document).width()).bind("click",function(){d?modal.remove(a):modal.close(a)}).appendTo("body").fadeIn("slow");$(c).live("click",function(){d?modal.remove(a):modal.close(a)}),$(window).bind("resize scroll",function(){e.height($(document).height()).width($(document).width())}),$("body").css("overflow-x","hidden\0/IE9")}else $("#curtain").css("z-index",getMaxZ()-1).height($(document).height()).width($(document).width()).bind("click",function(){d?modal.remove(a):modal.close(a)}).show(),$(c).live("click",function(){d?modal.remove(a):modal.close(a)}),$("body").css("overflow-x","hidden\0/IE9");modal._center(a)},_center:function(a){var b=$(window).width()/2+$(document).scrollLeft()-$("#"+a).width()/2,c=$(window).height()/2+$(document).scrollTop()-$("#"+a).height()/2;0>c&&(c=0),0>b&&(b=0),$("#"+a).css({top:c+"px",left:b+"px","z-index":getMaxZ()+100}).show()},close:function(a){$("#"+a).hide(),$("#curtain").css("filter","alpha(opacity=50)").fadeOut("fast",function(){$(this).remove()}),$(window).unbind("resize"),$("body").css("overflow-x","auto\0/IE9")},remove:function(a){var b=$("#"+a),c=b.find("iframe");c.length&&c.attr("src","");try{setTimeout(function(){b.remove(),$("#curtain").css("filter","alpha(opacity=50)").fadeOut("fast",function(){$(this).remove()}),$(window).unbind("resize"),$("body").css("overflow-x","auto\0/IE9")},100)}catch(d){}}},alertBox={showAlertErrorBox:function(a){var b=a,c=$("#gdhp-errors\\.error\\["+a+"\\]");c.length>0&&(b=c.html()),$("#gdhp-alert-box").length<=0&&$("<div>").attr("id","gdhp-alert-box").addClass("gdhp-alert-box").css({display:"none",position:"absolute",width:"300px"}).appendTo("body"),$("#gdhp-alert-box").html("<div class='g-alert g-err'><a href='#' class='g-close-notify' onclick='alertBox.closeAlertErrorBox();return false;'><span>Close</span></a><p>"+b+"</p></div>"),alertBox._center("gdhp-alert-box")},closeAlertErrorBox:function(){$("#gdhp-alert-box").html("").css({display:"none"})},_center:function(a){var b=$(window).width()/2+$(document).scrollLeft()-$("#"+a).width()/2,c=$(window).height()/2+$(document).scrollTop()-$("#"+a).height()/2;0>c&&(c=0),0>b&&(b=0),$.browser.safari&&"523.12.9"===$.browser.version?$("#"+a).css({top:"200px",left:"320px","z-index":getMaxZ()+100,display:"block"}):$("#"+a).css({top:c+"px",left:b+"px","z-index":getMaxZ()+100,display:"block"})}},solazy={};!function(){function j(){b.each(function(){k($(this))})}function k(a){var b=a,c=b.attr("data-sl-condition");if("undefined"!=typeof c){var d=c.split("|"),e=d[1].split(":");b[0]["sl-condition-property"]=e[0],b[0]["sl-condition-css-value"]=e[1],b[0]["sl-condition-target"]=$(d[0])}}var b,c,h,d=750,e=0,f=100,g=300,i=!1;$(document).ready(function(){b=$(".solazy"),c=$(window);var a=$("div,ul"),d=c.add(a);j(),$('[data-sl-type="request"]').each(function(){b=b.not($(this))}),setTimeout(function(){solazy.check()},500),$(d).bind("scroll",function(){i||(solazy.check(),clearInterval(h),h=setInterval(function(){solazy.check(),clearInterval(h),i=!1},g)),i=!0})}),$.extend(solazy,{check:function(){var a=c.scrollTop(),d=a+c.height();b.each(function(){var b=$(this),c=b.offset().top,e=b.height(),g=!0;"undefined"!=typeof b[0]["sl-condition-target"]&&(g=!1,$(b[0]["sl-condition-target"]).css(b[0]["sl-condition-property"])===b[0]["sl-condition-css-value"]&&(g=!0)),c>a-e-f&&d+f>c&&g&&solazy.loadObject(b)})},addLazyOjects:function(a){var c=$(a).find(".solazy");c.each(function(){k($(this))}),b=b.add(c)},loadObject:function(a){var c=a.attr("data-sl-src"),f=a.attr("data-sl-alt");b=b.not(a);var g=$('<img src="'+c+'" alt="'+f+'" />').css({opacity:0,width:"100%",height:"100%"});g.load(function(){g.appendTo(a),setTimeout(function(){g.animate({opacity:1},d,function(){a.css("background-image","none")})},e)})}})}(solazy.$);</script>
    <script type="text/javascript">
      $(document).ready(function() {
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'),
                     qs = [],
                     date = new Date();
        for(var i = 0; i < hashes.length; i++) {
          var hash = hashes[i].split('=');
          qs.push(hash[0]);
          qs[hash[0]] = hash[1];
        }
      
        delayLoader.onDelayLoadComplete(function() {
          $('#shareme').fosShare({});
        }, 2000);
      });
      
    </script>
  </body>
</html>