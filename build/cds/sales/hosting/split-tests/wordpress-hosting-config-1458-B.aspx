<!DOCTYPE html>
<html lang="[@T[localization:<language full='true' />]@T]" id="" ng-app="">
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
    <link rel="canonical" href="[@T[link:<relative parammode='explicit' path='~/hosting/wordpress-hosting-config.aspx' />]@T]">
    <link rel="stylesheet" type="text/css" href="//cloud.typography.com/7914312/697366/css/fonts.css">
    <title>[@L[cds.sales/hosting/wordpress-hosting:wordpress-hosting-title]@L]</title>
    <meta name="description" content="[@L[cds.sales/hosting/wordpress-hosting:wordpress-hosting-description]@L]">
    <meta name="keywords" content=" "> 
    ##if(siteContextAny(gd))
     
    <meta property="og:title" content="[@L[cds.sales/hosting/wordpress-hosting:wordpress-hosting-og-title]@L]">
    <meta property="og:description" content="[@L[cds.sales/hosting/wordpress-hosting:wordpress-hosting-og-description]@L]">
    <meta property="og:type" content="website">
    <meta property="og:url" content="[@T[link:<relative parammode='explicit' />]@T]">
    <meta property="og:image" content="[@T[link:<imageroot />]@T]fos/201401/hosting/website-builder/img/og.png">
    <meta property="og:site_name" content="[@T[link:<relative parammode='explicit' />]@T]">
    <meta property="fb:app_id" content="115696031791232">
    <meta property="fb:admins" content="633356800">
    <link rel="shortcut icon" href="[@T[link:<imageroot />]@T]assets/godaddy.ico"> 
    ##endif
     
    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
    <script>
      window.ux = window.ux || {};
      window.ux.disable = {
        'ga': true,
        'tealium': true
      };
      
    </script> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Item"><Parameters><Parameter key="Manifest" value="salesheader" /><Parameter key="Split" value="brand2.0" /><Parameter key="Name" value="css" /></Parameters></Data>]@P]
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Item"><Parameters><Parameter key="Manifest" value="salesheader" /><Parameter key="Split" value="brand2.0" /><Parameter key="Name" value="script" /></Parameters></Data>]@P]
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Item"><Parameters><Parameter key="Manifest" value="salesheader" /><Parameter key="Split" value="brand2.0" /><Parameter key="Name" value="head-ie-rsiv" /></Parameters></Data>]@P]
    
    <atlantis:webstash type="css">
      <style>
        *[data-tokenize] {visibility: hidden;}
        
      </style>
    </atlantis:webstash>
    <atlantis:webstash type="js">
      <script>
        $(document).ready(function(){
          $('[data-tokenize]').each(function(){
            var $this = $(this),
              val = $this.data('tokenize'),
              attrName = $this.data('tokenize-attr'),
              jsVar = $this.data('tokenize-jsvar'),
              text = attrName ? $this.attr(attrName) : $this.html(),
              tokenized = text.replace(/\{0\}/gi, jsVar ? eval(jsVar) : val);
        
            if(attrName) {
              $this.attr(attrName, tokenized);
            } else {
              $this.html(tokenized);
            }
        
            $this.removeAttr('data-tokenize');
          });
        });
      </script>
    </atlantis:webstash>
    <script>       (function(e){if(typeof lazyload=="undefined"){window.lazyload={version:"2.0.0",items:e(),__defaults:{updatePosition:true,checkHorizontal:false,scrollCheckDelay:300,loadBufferDistance:0,fadeInDelay:0,fadeInSpeed:500}};function t(e,t){if(typeof t=="undefined"){t={source:e.data("lazyload-source"),watch:e.data("lazyload-watch"),callback:e.data("lazyload-callback"),callbackAfter:e.data("lazyload-callbackAfter")}}if(typeof t.source!="undefined"){e[0].lazyload=t;lazyload.items=lazyload.items.add(e);i(e)}}function n(){i(e(window));lazyload.items.each(function(){r(e(this))})}function r(t){var n=t[0].lazyload.updatePosition||lazyload.__defaults.updatePosition;var r=r||lazyload.__defaults.updateWindowScroll;var s=t[0].lazyload.checkHorizontal||lazyload.__defaults.checkHorizontal;if(n){i(t)}i(e(window));var o=t[0].lazyload.positionTop;var a=t[0].lazyload.positionBottom;var f=lazyload.windowTop;var l=lazyload.windowBottom;if(o<l+lazyload.__defaults.loadBufferDistance&&a>f-lazyload.__defaults.loadBufferDistance){u(t)}}function i(e){var t=e[0];if(t==window){if(lazyload.updateWindowPosition){lazyload.windowTop=e.scrollTop();lazyload.windowLeft=e.scrollLeft();lazyload.windowRight=lazyload.windowLeft+e.width();lazyload.windowBottom=lazyload.windowTop+e.height();lazyload.updateWindowPosition=false;clearTimeout(lazyload.windowPositionDelayTimer);lazyload.windowPositionDelayTimer=setTimeout(function(){lazyload.updateWindowPosition=true},lazyload.__defaults.scrollCheckDelay)}}else{if(typeof t.lazyload.watch!="undefined"){var n=e.parents(t.lazyload.watch);if(n.length>=1){e=n}}t.lazyload.positionTop=e.offset().top;t.lazyload.positionLeft=e.offset().left;t.lazyload.positionRight=t.lazyload.positionLeft+e.width();t.lazyload.positionBottom=t.lazyload.positionTop+e.height()}}function s(e){function i(e,t,n){try{if(typeof t!="undefined"&&t.length>=1){e.apply(null,t)}else{e.call(null)}}catch(r){}}if(typeof e=="string"){var t=e.split(",");var n=t.shift();n=o(n);i(n,t,e)}else if(typeof e=="object"){for(var r=0;r<e.length;r++){(function(){var t=e[r].split(",");var n=t.shift();var s=n;n=o(n);i(n,t,s)})()}}}function o(e){var t=window;var n=e.split(".");var r=n.pop();var i=true;for(var s=0;s<n.length;s++){if(typeof t[n[s]]!="undefined"){t=t[n[s]]}else{i=false}}if(i){return t[r]}else{return null}}function u(e){var t=e[0].lazyload.src||e[0].lazyload.source;var n=e[0].lazyload.callback;var r=e[0].lazyload.callbackAfter;lazyload.items=lazyload.items.not(e);if(lazyload.loadedSrc.indexOf(t)==-1){lazyload.loadedSrc.push(t)}var i=new Image;i.onload=function(){if(typeof n!="undefined"){e.trigger("lazyloaded").addClass("lazyloaded");s(n)}if(e.is("img")){e.css({opacity:0}).attr("src",t).delay(lazyload.__defaults.fadeInDelay).animate({opacity:1},lazyload.__defaults.fadeInSpeed,function(){if(typeof r!="undefined"){setTimeout(function(){e.trigger("lazyloadedafter");s(r)},lazyload.__defaults.fadeInSpeed)}})}else{var o=200;try{var u="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";var a=new Image;a.src=u;a.height=i.height;a.width=i.width;function f(e){var t=document.createElement("canvas");t.width=e.width;t.height=e.height;var n=t.getContext("2d");n.drawImage(e,0,0);var r=t.toDataURL("image/png");return r.replace(/^data:image\/(png|jpg);base64,/,"")}var l=f(a);e.css({"background-image":"url(data:image/gif;base64,"+l+")","-moz-transition":"all "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out"})}catch(c){o=0}setTimeout(function(){e.css({"background-image":"url("+t+")","-webkit-transition":"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out","-moz-transition":"all "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out","-o-transition":"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out",transition:"background "+lazyload.__defaults.fadeInSpeed+"ms ease-in-out"});if(typeof r!="undefined"){setTimeout(function(){e.trigger("lazyloadafter");s(r)},lazyload.__defaults.fadeInSpeed)}},o)}};i.src=t}e(document).ready(function(){lazyload.updateWindowPosition=true;lazyload.scrollCheck=true;lazyload.loadedSrc=[];$foundItems=e(".lazyload");if($foundItems.length>=1){lazyload.scrollElements=e("div,ul");lazyload.scrollElements.each(function(){var t=e(this);var n=t.css("overflow");var r=t.css("overflow-x");var i=t.css("overflow-y");var s=["hidden","scroll","auto"];if(t.find("[data-lazy-load]").length==0&&s.indexOf(n)==-1&&s.indexOf(i)==-1&&s.indexOf(r)==-1){lazyload.scrollElements=lazyload.scrollElements.not(t)}});lazyload.scrollElements=lazyload.scrollElements.add(window);lazyload.scrollElements.bind("scroll.lazyload",function(e){if(lazyload.scrollCheck){n();lazyload.scrollCheck=false;clearTimeout(lazyload.scrollCheckDelayTimer);lazyload.scrollCheckDelayTimer=setTimeout(function(){lazyload.scrollCheck=true},lazyload.__defaults.scrollCheckDelay)}});$foundItems.each(function(){t(e(this))});n()}});lazyload.check=function(){n()};lazyload.add=function(n,r){t(e(n),r)};lazyload.load=function(){u(e($item))}}})(jQuery);if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=this.length>>>0;var n=Number(arguments[1])||0;n=n<0?Math.ceil(n):Math.floor(n);if(n<0)n+=t;for(;n<t;n++){if(n in this&&this[n]===e)return n}return-1}}
    </script>
    <script>
      function loadJsAsync(sourceUrl, id) {
         var js, fjs = document.getElementsByTagName('script')[0];
         if (document.getElementById(id)) {return;}
         js = document.createElement('script'); js.type = 'text/javascript'; js.ansyc = true;
         js.id = id;
         js.src = sourceUrl;
         fjs.parentNode.insertBefore(js, fjs);
      }
      
      function endOfPageScripts() {
      
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
          if($(document).sfTipper){
            $(document).sfTipper({ wireup: true });
          }
          
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
      
    </script><!--[if lt IE 9]>
    <link href="/respond.proxy.gif" id="respond-redirect" rel="respond-redirect">
    <link href="[@T[link:<javascriptroot />]@T]fos/respond/respond-proxy.min.html" id="respond-proxy" rel="respond-proxy">
    <script src="[@T[link:<javascriptroot />]@T]fos/respond/respond-proxy-combo.min.js"></script><![endif]-->
    <script type="text/javascript">
      loadJsAsync("[@T[link:<javascriptroot />]@T]fastball/js_lib/FastballLibrary0006.min.js?version=2", 'fastballLibrary');
      ##if(siteContextAny(gd))
      loadJsAsync("[@T[link:<javascriptroot />]@T]fos/liveperson/js/[@T[appSetting:<setting name="sales_livepersonchat_file_js" />]@T]", 'livepersonLibrary');
      ##endif
      
    </script>
    <link href="[@T[link:<cssroot />]@T]fos/liveperson/css/chat-window_20140205.css" rel="stylesheet" type="text/css">
    <link href="[@T[link:<cssroot />]@T]fos/liveperson/css/chat-window_20140205.css" rel="stylesheet" type="text/css"> 
    ##if(IsManager())
    <link rel="Stylesheet" type="text/css" href="[@T[link:<javascriptroot />]@T]pc_css/gd_20110801_https.min.css" />
    ##endif
  </head>
  <body ng-controller="">
    <!-- HEADERBEGIN--> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Item"><Parameters><Parameter key="Manifest" value="salesheader" /><Parameter key="Split" value="brand2.0" /><Parameter key="Name" value="header" /></Parameters></Data>]@P]
    <!-- HEADEREND-->
    <div class="container configuration-container">
      <div class="row">
        <div class="col-sm-12">
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9">
        </div>
        <div class="col-sm-3">
        </div>
      </div>
      <div class="row">
      </div>
    </div>
    <div style="display:none" class="container domain-search-container">
      <div class="row">
        <div class="col-sm-12"> 
          <h4 class="get-a-domain-text">[@L[cds.sales/hosting/fosconfigcommon:domainheader]@L] <span class="tool-tip-black sf-tip sf-tipper-target" data-style="qt" data-width="400" data-content="[@L[cds.sales/hosting/fosconfigcommon:domainhover]@L]" ></span></h4>
        </div>
      </div>
      <atlantis:webstash type="css">
        <style>
          .search-icon {
              font-size: 22px;
          }
          .search-text {
            display: none;
            font-weight: bold;
          }
          .search-disclaimers{
            margin-top: 10px;
          }
          .searchable-tlds{
            font-weight:600;
          }
          .continue-icon {
            background: url('[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/shared/lp_sprite-v2.png') no-repeat -57px -200px;
            width: 7px;
            height: 11px;
            display: inline-block;
            margin-top: 20px;
            margin-right: 10px;
          }
          .select-and-continue{
            font-weight:bold;
          }
          .unavailable-icon {
            background: url('[@T[link:<imageroot />]@T]fos/sales/themes/montezuma/shared/dpp_sprite_rebrand.png') no-repeat -50px -62px;
            width: 29px;
            height: 27px;
            display: inline-block;
            margin: 5px 10px 0 0;
          }
          @media (min-width: 768px){
            .search-icon {
              display: none;
            }
            .search-text {
              display: inline;
            }
            .continue-text{
              text-align: right;
            }
          }
          @media (max-width: 767px){
            .form-control{
              font-size:10px;
            }
          }
          .hide-flt-btn {
            display: none;
          }
          .unavailableCopy {
            color: #333;
            font-size: 30px;
            padding-top: 25px;
            font-family: walsheim-Regular;
            line-height: 100%;
            margin: 0 auto 30px;
            width: 1140px;
          }
          .unavailableCopy .domainName {
            color: #ff7802;
            font-size: 34px;
            font-family: walsheim-Bold;
          }
          .domain-search{background-color:#fff;border:1px solid #a4a4a4;height:34px;position:relative;margin-right:10px;min-width:375px;display:table;*display:block;float:left}
          .domain-search>div{display:inline-block;*display:block;vertical-align:top}
          .tld-input{border:0 none;float:none;font-size:18px;height:34px;outline:medium none;position:relative;min-width:114px;z-index:2;  border: 1px solid #bebebe; -webkit-box-shadow: inset 0 2px 0 0 #bebebe;box-shadow: inset 0 2px 0 0 #bebebe;}
          .search-input-wrapper{*float:left;*width:277px;overflow:hidden;padding:6px 9px 0 9px;position:relative}
          .search-input{background-color:transparent;border:0 none;color:#333;font-family:"Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;font-size:18px;font-weight:300;height:24px;left:9px;outline:medium none;padding:0;position:absolute;right:9px;top:5px;width:96%}
          .search-input.allow-placeholder{background-color:transparent}
          .search-input-label{color:#333;display:block;font-size:18px;font-weight:300;outline:medium none;overflow:hidden;padding:3px 0;white-space:nowrap}
          .domain-check-hidden{display:none}
          .domain-check span{font-weight:bold}
          .domain-check .available{color:#70a100}
          .tld-input-selected{float:left;padding:8px 0 4px 14px;width:75px}
          .tld-input.droplist-open{overflow:visible}
          .tld-input>ul{padding:0;margin:0;list-style:none;cursor:pointer;margin:-1px;border:1px solid #bcbcbc;background-color:#fff;font-size:14px;position:absolute;overflow:hidden;*top:35px;top:-9999em;*left:-9999em;width:112px;z-index:3}
          .tld-input.droplist-open>ul{*left:0;width:114px;top:58px;z-index:1000}
          .tld-input.droplist-open>ul>li{padding:5px 10px}
          .tld-input.droplist-open>ul>li:hover{background:#f5f5f5}
          .tld-input.droplist-open>ul>li.selected:hover,.tld-input.droplist-open>ul>li.selected{background:#e4efc7}
          .domain-arrow{cursor:pointer;float:left;font-size:1px;height:30px;margin:2px 2px 2px 0;min-width:23px;padding:0;position:relative}
          .domain-arrow span{border-color:#6B6B6B transparent transparent;border-style:solid;border-width:5px 5px 0;display:block;height:0;width:0;position:absolute;top:13px;left:7px}
          .available-tld-wrap {  min-height: 120px;border: solid 1px #cccccc;margin-bottom: 15px;margin-top:10px; border-top: 10px solid #008a32;padding: 30px;  background-color: #fff;-webkit-box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);-moz-box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.1);}
          .available-result .domain-name-display {font-size: 30px;color: #333;font-weight: bold;text-transform: lowercase;margin-bottom: 0px;margin-top: 0px; font-family: 'Walsheim-Bold';}
          .word-break {word-wrap: break-word;word-break: break-all;}
          .available-result .domain-name-display-tld{font-size:40px;}
          .available-result .select-and-continue{margin-top:15px;}
          #add-domain-btn { margin-left:10px;}
          #no-domain-link{text-decoration: none;color: #000;cursor: pointer;margin-top:15px;}
          .available-result , .unavailable-result {display:none;}
          .input-group-btn > .btn { position:static; margin-left:15px;}
        </style>
      </atlantis:webstash>
      <div class="row">
        <div class="col-xs-12">
          <form id="domainsearchoffersinput" method="get" action="[@T[link:<relative path='domains/actions/json/domainavailabilitycheck.aspx'><param name='promoCode' value='wordpress-promo' /></relative>]@T]" class="domain-search-form">
            <input type="hidden" name="targetdivid" value="x"/>
            <input type="hidden" name="source" value="domaincheck"/>
            <input id="token" type="hidden" name="token"/>
            <input id="domaintoadd" type="hidden" name="domaintoadd"/>
            <input type="hidden" name="formSubmitButton" value="Add-to-Cart"/>
            <div class="input-group">
              <label for="domain-name-input" class="searchInput sr-only">[@L[cds.sales/hosting/fosconfigcommon:domainsearchtext]@L]</label>
              <input id="domain-name-input" type="text" placeholder="[@L[cds.sales/hosting/fosconfigcommon:domainsearchtext]@L]" name="sld" maxlength="63" class="searchInput input-lg form-control"/><span class="tld-input input-group-btn">
                <div class="tld-input-selected"><span>.com</span></div>
                <input id="txtTld" type="hidden" name="tld" value="com"/>
                <input type="hidden" name="addIfAvailable" value="true"/><a href="javascript:void(0)" class="domain-arrow g-btn-sm g-btn-sec"><span></span></a>
                <ul>
                  <li data-main=".com" data-view="com" class="availabletld selected">
                    <div data-main="true"><span>.com</span></div>
                  </li> 
                  ##if(countrySiteAny(br) ||isManager())
                   
                  <li data-main=".com.br" data-view="com.br" class="availabletld">
                    <div data-main="true"><span>.com.br</span></div>
                  </li> 
                  ##endif
                   
                   
                  ##if(countrySiteAny(mx) || isManager())
                   
                  <li data-main=".com.mx" data-view="com.mx" class="availabletld">
                    <div data-main="true"><span>.com.mx</span></div>
                  </li> 
                  ##endif
                   
                   
                  ##if(countrySiteAny(au) || isManager())
                   
                  <li data-main=".com.au" data-view="com.au" class="availabletld">
                    <div data-main="true"><span>.com.au</span></div>
                  </li> 
                  ##endif
                   
                  <li data-main=".co" data-view="co" class="availabletld">
                    <div data-main="true"><span>.co</span></div>
                  </li> 
                  ##if(countrySiteAny(ca) || isManager())
                   
                  <li data-main=".ca" data-view="ca" class="availabletld">
                    <div data-main="true"><span>.ca</span></div>
                  </li> 
                  ##endif
                   
                   
                  ##if(countrySiteAny(in) || isManager())
                   
                  <li data-main=".in" data-view="in" class="availabletld">
                    <div data-main="true"><span>.in</span></div>
                  </li> 
                  ##endif
                   
                  <li data-main=".net" data-view="net" class="availabletld">
                    <div data-main="true"><span>.net</span></div>
                  </li>
                  <li data-main=".org" data-view="org" class="availabletld">
                    <div data-main="true"><span>.org</span></div>
                  </li> 
                  ##if(countrySiteAny(uk) || isManager())
                   
                  <li data-main="co.uk" data-view="co.uk" class="availabletld">
                    <div data-main="true"><span>.co.uk</span></div>
                  </li>
                  <li data-main=".uk" data-view="uk" class="availabletld">
                    <div data-main="true"><span>.uk</span></div>
                  </li> 
                  ##endif
                   
                </ul></span><span class="input-group-btn">
                <button type="submit" data-ci="" class="btn btn-primary btn-lg offer-search-btn"> <span class="search-icon uxicon uxicon-magnifying-glass"></span><span class="search-text">[@L[cds.sales/_common:search]@L]</span></button></span>
            </div>
            <div id="search-btn-loading" style="display: none" class="loading"></div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12"><a id="no-domain-link" data-ci="" class="pull-right">[@L[cds.sales/hosting/fosconfigcommon:nodomainbtn]@L] </a><span class="continue-icon pull-right"></span>
          <div id="no-domain-loading" style="display: none" class="loading floatleft"></div>
          <div id="add-domain-loading" style="display: none" class="loading floatleft"></div>
        </div>
      </div>
      <div class="available-result">
        <div class="row">
          <div class="col-sm-12">
            <h3>[@L[cds.sales/_common:domain-available]@L]</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="available-tld-wrap">
              <div class="row">
                <div class="col-md-8 col-sm-12">
                  <h4 class="word-break domain-name-display domain-name-display-domain"> </h4>
                  <h2 class="word-break domain-name-display domain-name-display-tld"> </h2>
                </div>
                <div class="col-md-4 col-sm-12 text-right">
                  <button data-ci="" class="btn btn-primary select-and-continue">[@L[cds.sales/_common:select-continue]@L]  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="unavailable-result">
        <div class="row">
          <div class="col-sm-12">
            <p class="unavailableCopy"><span class="unavailable-icon"></span><span id="domain-searched"></span></p>
          </div>
        </div>
      </div>
      <atlantis:webstash type="js"></atlantis:webstash>
      <script>
        var nextStepUrl;
        var srcIsPro = window.location.href.indexOf("pro") > -1;
        var ConfigSearch = {
          showTerm: function (li) {
              if (li) {
                  var viewData = li.attr('data-view').split("|");
              }
          }, 
          changeSelected: function (li, parent) {
              var content = li.find('div[data-main=true]').html();
              parent.find('div:first').html(content);
              if (li.hasClass('availabletld')) {
                  $('#txtTld').val(li.attr('data-view'));
              }
          },
          removeDoamin: function () {
            ##if(isManager())
              var url = '[@T[link:<relative path="/cds/widgets/widgetsposthandlers/domainposthandler.ashx"><param name="itc" value="" /></relative>]@T]';
            ##else
              var url = '[@T[link:<relative path="cds/widgets/widgetsposthandlers/domainposthandler.ashx"><param name="itc" value="" /></relative>]@T]';
            ##endif
            var domaintoadd = $('#domaintoadd').val();
        
            url += (url.indexOf('?') >= 0) ? "&" : "?";
            url += '&domaintoremove=' + domaintoadd;
        
            $.getJSON(url, function (data) {
                if (data == 'removed') {
                  ##if(isManager())
                    if(srcIsPro){
                      window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
                    }
                    else{
                      window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" />]@T]';
                    }
                  ##else
                    if(srcIsPro){
                      window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
                    }
                    else{
                      window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" />]@T]';
                    }
                  ##endif
                }
            });
          }
        };
        
        $(document).ready(function () {
          $('.tld-input').click(function () {
            var wrap = $(this);
            if (wrap.hasClass('droplist-open')) {
            wrap.removeClass('droplist-open');
            } else {
            wrap.addClass('droplist-open');
            }
          });
        
          $('.tld-input').mouseleave(function () {
            $(this).removeClass('droplist-open');
          });
        
          $('.tld-input > ul > li').click(function () {
            var li = $(this);
            var parent = li.parents('.tld-input');
            li.siblings('li').removeClass('selected');
            li.addClass('selected');
            ConfigSearch.showTerm(li);
            ConfigSearch.changeSelected(li, parent);
          });
        
          $('#no-domain-link').bind('click', function (e) {
                var domaintoadd = $('#domaintoadd').val();
        
                if (domaintoadd == '') {
                     ##if(isManager())
                      if(srcIsPro){
                        window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
                      }
                      else{
                        window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" />]@T]';
                      }
                    ##else
                      if(srcIsPro){
                        window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
                      }
                      else{
                        window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" />]@T]';
                      }
                    ##endif
            } else {
                ConfigSearch.removeDoamin();
            }
            });
        
            $('.select-and-continue').bind('click', function () {
              if(srcIsPro){
                nextStepUrl += (nextStepUrl.indexOf('?') >= 0) ? "&" : "?";
                nextStepUrl += 'pro=1';
              }
              window.location = nextStepUrl;       
            });
        });
        
        $(function () {
            $('form[id=domainsearchoffersinput]').submit(function (e) {
              var domaintoremove = $('#domaintoadd').val();
              var domaintoadd = $('#domaintoadd').val();
        
                var tld = $('#txtTld');
                var domain = $('#domain-name-input').val();
                var domainSplit = domain.split('.');
                var newtld = '';
                if (domainSplit.length > 1) {
                  for (var i = 1; i < domainSplit.length; i++) {
                    newtld += domainSplit[i];
                    if (i !== domainSplit.length - 1)
                      newtld += '.';
                  }
                }
                else {
                  newtld = tld.val();
                }
                var valid = false;
        
                if (domain.length > 0 && (domain != "[@L[fosconfigcommon:domainsearchtext]@L]")) {
        
                    if (tld.val() == '') {
                        tld.val('com');
                    } else if (newtld != undefined) {
                        tld.val(newtld);
                        $('#domain-name-input').val(domain.split('.')[0]);
                    }
        
                    
                    $('.availabletld').each(function () {
                        if ($(this).attr('data-view') == tld.val()) {
                            valid = true;
                        }
                    });
        
                    if (!valid) {
                        var url = '[@T[link:<relative path="domains/search.aspx"></relative>]@T]';
                        url += (url.indexOf('?') >= 0) ? "&" : "?";
                        url += 'domaintocheck=' + domain;
                        url += '&tld=' + tld.val();
        
                        var premiumText = "[@L[cds.sales/_common:domain-premium]@L]";
                        var domainText = ' <span class="domainName"> '+domain.toLowerCase()+'</span>';
                        $('#domain-searched').html(premiumText.replace(/\{0\}/gi,domainText).replace(/\{1\}/gi,url));
                        $('.unavailable-result').show();
        
                        tld.val('com');
                    } else {
                        $.get($(this).attr('action')+'&domaintoremove='+domaintoremove, $(this).serialize(), function (jsonData) {
                            $('.available-result').hide();
                            $('.unavailable-result').hide();
        
                            var safeShortName = $('<div>').text(jsonData.Properties.domainInfo[0].shortName).html().toLowerCase();
        
                            if (jsonData.Properties.anyAreAvailable === false && jsonData.Properties.domainInfo[0].error === "Domain name is already taken") {
                                $('#no-domain-link').html('[@L[cds.sales/_common:continue-no-free-domain]@L]')
                                var takenText = '[@L[cds.sales/_common:domain-unavailable]@L]';
                                var domainText = ' <span class="domainName"> '+safeShortName+'</span>';
                                $('#domain-searched').html(takenText.replace(/\{0\}/gi,domainText));
                                $('.unavailable-result').show();
                            } else if (jsonData.Properties.domainInfo[0].isPremium) {
                                var url = '[@T[link:<relative path="domains/search.aspx"></relative>]@T]';
                                url += (url.indexOf('?') >= 0) ? "&" : "?";
                                url += 'domaintocheck=' + domain;
                                url += '&tld=' + tld.val();
                                $('#no-domain-link').html('[@L[cds.sales/_common:continue-no-free-domain]@L]'); 
                                var premiumText = "[@L[cds.sales/_common:domain-premium]@L]";
                                var domainText = ' <span class="domainName"> '+safeShortName+'</span>';
                                $('#domain-searched').html(premiumText.replace(/\{0\}/gi,domainText).replace(/\{1\}/gi,url));
                                $('.unavailable-result').show();
        
                            } else if (jsonData.Properties.domainInfo[0].error.indexOf('Invalid') >= 0) {
                                $('#no-domain-link').html('[@L[cds.sales/_common:continue-no-free-domain]@L]');
                                var invalidText = '[@L[cds.sales/_common:domain-invalid]@L]';
                                var domainText = ' <span class="domainName"> '+safeShortName+'</span>';
                                $('#domain-searched').html(invalidText.replace(/\{0\}/gi,domainText));
                                $('.unavailable-result').show();
                            } 
                            else if (jsonData.Properties.domainInfo[0].error != '') {
                                $('#no-domain-link').html('[@L[cds.sales/_common:continue-no-free-domain]@L]');
                                var takenText = '[@L[cds.sales/_common:domain-not-available]@L]';
                                var domainText = ' <span class="domainName"> ' +safeShortName+'</span>';
                                $('#domain-searched').html(takenText.replace(/\{0\}/gi,domainText));
                                $('.unavailable-result').show();
                            } else {
                                $('#no-domain-link').html('[@L[cds.sales/_common:continue-no-free-domain]@L]');
                                var availableDomain = safeShortName.split('.')[0];
                                var availableTld = '.'+safeShortName.split('.')[1];
                                if (safeShortName.split('.')[2] != undefined){
                                  availableTld += '.'+safeShortName.split('.')[2];
                                }
                                $('.domain-name-display-domain').html(availableDomain);
                                $('.domain-name-display-tld').html(availableTld);
                                $('.available-result').show();
                            }
                            nextStepUrl = jsonData.Properties.nextStepUrl;
                        }, 'json');
                        return false;
                    }
                }
                return false;
            });
        });
      </script>
      <script>
        var plan = (getParameterByName('plan') != '') ? getParameterByName('plan') : "mwp_basic_12month";
        var isPro = plan.indexOf('wordpress') >= 0
        var itc = isPro ? "pro_wordpress" : "slp_wordpress";
        
        function getParameterByName(name){
          name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          if(!jQuery.isEmptyObject(results))
            return  decodeURIComponent(results[1].replace(/\+/g, " "));
          else
            return '';
        }
        
        $(document).ready(function(){
          $('.domain-search-container').show();
        });
        
        $('#noFreeDomain').click(function(){
          ##if(isManager())
            if(isPro){
              window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
            }
            else{
              window.location = '[@T[link:<external linktype="MANAGERCARTURL" path="/basket.aspx" secure="true" />]@T]';
            }
          ##else
            if(isPro){
              window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" ><param name="pro" value="1" /></external>]@T]';
            }
            else{
              window.location = '[@T[link:<external linktype="carturl" path="/basket.aspx" secure="true" />]@T]';
            }
          ##endif
        
        });
      </script>
    </div>
    <!-- FOOTERBEGIN--> 
    [@P[webControl:<Data assembly="App_Code" type="WebControls.PresentationCentral.Item"><Parameters><Parameter key="Manifest" value="salesheader" /><Parameter key="Split" value="brand2.0" /><Parameter key="Name" value="footer" /></Parameters></Data>]@P]
    <!-- FOOTEREND-     -->
    <!-- liveperson includes -->
    <div id="lpButtonDiv"></div><!-- End Main Content -->
    <atlantis:webstash type="css">
      <!-- page styling -->
      <style>section {
  padding-top: 50px;
  padding-bottom: 50px;
}
section h2 {
  font-size: 4rem;
  text-transform: uppercase;
  font-family: 'Walsheim-Black';
  font-weight: 100;
  line-height: 1.1;
  color: inherit;
}
section h3 {
  font-size: 3rem;
  text-transform: uppercase;
  font-family: 'Walsheim-Bold';
  font-weight: 300;
  line-height: 1.1;
  color: inherit;
}
.feature img {
  height: 100px;
  max-width: 100%;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .feature img {
    height: 150px;
  }
}
.svgfallback {
  display: none;
}
.svgfallback:not(old) {
  display: block;
}
ul.green-check li,
li.green-check,
ul.no-check li,
li.no-check {
  padding: 0.4em 0 0.4em 35px;
  list-style: none;
  background-repeat: no-repeat;
}
ul.green-check li,
li.green-check {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wEUERcjd6fRgQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACiElEQVRIx62WP0wTcRTHv+93tBIUaQwxKoOzGifj4mB+LT3AxUHD4uBgXDBR42BaiAFTEtufgw4OTsTg4oCJGuMf4I7r5KAmLkYJGgcFozYiRVBp6T0HrTalv7v+4ba79373yefee7/fEdbpiqWjdwHeB+AVQK8BfgNgWrjGO2r05YPjvcgHFjtcsTqrSXlB62RxG+CjmvBBatTCFfkt+cD3r5qUl0raexs2iTvRUSY+rgmbxMKiRiwAtK5smF+snEHvlbR2AoCoF5LoHkMu+O2KR8rZuGP+wdVr0bTa0ry8cfanxuKTktb24p2o1+JHy5yHBceKFnVB/tYCTNynSVlW0r6ZCk/+96pzLi4DfF4TPkksRkohTWBgYKqHCkb+EIAHAHUK13CSkXGuZJHoHoMHYEVJe2RNhS7d6wtk22a+AAiVPC8Qiz3Exkwy8pjLLIYAvqiBnCIW10stAEBk22YelgEAwGByp12R/xB3utoB4NyT/cWi6gBQ0l4DAAChpG0CWNKs62AqZGLp6POrB54hlo4OeA2/LkAA0D/VtcMVhTmferteHamkrW0iAQDJyMRHYuOwD0ToW56G/RYCAFLhifsAJeppaSWtweL8eEIGx3uhpDUEwKkNQaniLuALSXSPIe6YUNKOAJivwaLfy6LixJ9+uhuhhV2bc8GFbBWMa0raZ3xd9YeR2cPkPvJa3Pxr6yam1WWvT+W7d8XS0WGAL1RcyHQjFbZOVFU1/82w0wEgy58Hc20hYiPrZ+ELiTsmUuFJxNKdGQDtJRa3UmHrWNX9V4UJiI12pkLmX0u6gW2BfOvnaixqOk/ijimZXAegO0paR2qapBp/f4YBGg3mQm+rtQCA38MA8KA+FQdhAAAAAElFTkSuQmCC);
}
ul.green-check li:not(old),
li.green-check:not(old) {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4cHgiIHZpZXdCb3g9IjAgMCA1MCA1NSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gZmlsbD0iIzc3YzA0MyIgcG9pbnRzPSIzNywwIDQ5LDIgMjMsNTQgMCwyNSA3LDIyIDIyLDMwIi8+PC9zdmc+);
}
ul li.no-check {
  background-image: none !important;
}

      </style>
      <style>
        /* fix the greek font styling issue here */
        ##if(countrySiteAny(gr))
        * {
          font-family: arial !important;
        }
        .close {
          font-family: uxfont !important;
        }
        .uxicon {
          font-family: uxfont !important;
        }
        ##endif
        /* uxcore doesn't include col-xs-offset-x */
        @media (max-width: 768px) {
          .col-xs-pull-12 {
            right: 100%;
          }
          .col-xs-pull-11 {
            right: 91.66666667%;
          }
          .col-xs-pull-10 {
            right: 83.33333333%;
          }
          .col-xs-pull-9 {
            right: 75%;
          }
          .col-xs-pull-8 {
            right: 66.66666667%;
          }
          .col-xs-pull-7 {
            right: 58.33333333%;
          }
          .col-xs-pull-6 {
            right: 50%;
          }
          .col-xs-pull-5 {
            right: 41.66666667%;
          }
          .col-xs-pull-4 {
            right: 33.33333333%;
          }
          .col-xs-pull-3 {
            right: 25%;
          }
          .col-xs-pull-2 {
            right: 16.66666667%;
          }
          .col-xs-pull-1 {
            right: 8.33333333%;
          }
          .col-xs-pull-0 {
            right: auto;
          }
          .col-xs-push-12 {
            left: 100%;
          }
          .col-xs-push-11 {
            left: 91.66666667%;
          }
          .col-xs-push-10 {
            left: 83.33333333%;
          }
          .col-xs-push-9 {
            left: 75%;
          }
          .col-xs-push-8 {
            left: 66.66666667%;
          }
          .col-xs-push-7 {
            left: 58.33333333%;
          }
          .col-xs-push-6 {
            left: 50%;
          }
          .col-xs-push-5 {
            left: 41.66666667%;
          }
          .col-xs-push-4 {
            left: 33.33333333%;
          }
          .col-xs-push-3 {
            left: 25%;
          }
          .col-xs-push-2 {
            left: 16.66666667%;
          }
          .col-xs-push-1 {
            left: 8.33333333%;
          }
          .col-xs-push-0 {
            left: auto;
          }
          .col-xs-offset-12 {
            margin-left: 100%;
          }
          .col-xs-offset-11 {
            margin-left: 91.66666667%;
          }
          .col-xs-offset-10 {
            margin-left: 83.33333333%;
          }
          .col-xs-offset-9 {
            margin-left: 75%;
          }
          .col-xs-offset-8 {
            margin-left: 66.66666667%;
          }
          .col-xs-offset-7 {
            margin-left: 58.33333333%;
          }
          .col-xs-offset-6 {
            margin-left: 50%;
          }
          .col-xs-offset-5 {
            margin-left: 41.66666667%;
          }
          .col-xs-offset-4 {
            margin-left: 33.33333333%;
          }
          .col-xs-offset-3 {
            margin-left: 25%;
          }
          .col-xs-offset-2 {
            margin-left: 16.66666667%;
          }
          .col-xs-offset-1 {
            margin-left: 8.33333333%;
          }
          .col-xs-offset-0 {
            margin-left: 0;
          }
        }
        /* override UXCORE font settings for all LPs */
        h2 {
          margin-bottom: 40px;
          margin-top: 0;
          font-size: 4rem;
          text-transform: uppercase;
          font-family: 'Walsheim-Black';
          font-weight: 300;
          line-height: 1.1;
          color: #333;
        }
        h3 {
          font-size: 3rem;
          text-transform: uppercase;
          font-family: 'Walsheim-Black';
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 300;
          line-height: 1.1;
        }
        
        .sf-tipper-target {
          background-image: url([@T[link:<imageroot />]@T]fos/mike/img/hosting/img-tootip-.png);
          width: 14px;
          height: 14px;
          display: inline-block;
          vertical-align: baseline;
          cursor: pointer;
        }
        .domain-search-container{
          margin-bottom:200px;
        }
        .config-step {
          font-family: "Helvetica Neue","Segoe UI",Segoe,Helvetica,Arial,"Lucida Grande",sans-serif;
        }
        .config-step .step-title {
        font-size: 36px;
        margin-top: 40px;
        margin-bottom: 15px;
        margin-left: 15px;
        font-weight: 100;
        line-height: 1.1;
        color: #333;
        }
        .config-step .step-subtitle {
        margin-left: 15px;
        }
        .config-text-primary {
          font-size: 25px;
          font-weight: 200;
        }
        .config-text-secondary {
          font-size: 24px;
          font-weight: 200;
        }
        .config-text-lead {
          font-size: 16px;
        }
        .bold{
          font-weight: 600;
        }
        .config-text-lead-secondary {
          font-size: 14px;
        
        }
        .config-step{
          display: none;
        }
        .vertical-align {
            display: flex;
            align-items: center;
        }   
        .product-options li {
          border-bottom: 1px solid #C3C3C3;
          padding-bottom: 25px;
          padding-top: 10px;
        }
        .product-options li:last-child{
          border-bottom:none;
        }
        .product-options {
        list-style: none;
        }
        
        .input_hidden {
            position: absolute;
            left: -9999px;
        }
        
        
        @media (max-width: 1024px) { 
            .vertical-align {
                display: block;
                align-items: inherit;
            }
            .text-md-right{
              text-align: right;
            }
            .config-text-primary {
              font-size: 20px;
            }
            .config-text-secondary {
              font-size: 20px;
            }
            .config-text-lead {
              font-size: 16px;
            }
            .config-text-save {
              font-size: 14px;
            }
            .config-text-disclaimer {
              font-size: 14px;
            }
            .product-radio {
              margin-top :0;
            } 
        }
        @media (max-width: 428px) { 
            .text-xs-right {
              text-align: right;
            }
            .text-md-right{
              text-align: inherit;
            }
        
        }
      </style>
      <style>
.green-check {
  color:#679B08;
  position: relative;
  font-size:2em;
  margin-bottom: 10px;
}
.disclaimers-section{
  margin-top: -30px;
  margin-bottom: 30px;
}
.product-added-to-cart-text{
  position: relative;
  left:10px;
  font-size: 30px;
}
.product-added-to-cart{
  padding:0 10px;
  float:left;
  color:#679B08;
  position: relative;
  margin-bottom: 15px;
}
input[type=radio]:checked + label{
  color: #579006;
}

#officeOption{
  text-decoration: line-through;
}
.config-step .sitelock-title{
  margin-bottom: 0;
}
.security-small{
  margin: 0;
  font-size: 14px;
}
.security-desc{
  margin-top: 20px;
}
#officeStep .sf-tipper-target {
  margin-bottom: 6px;
}
input[type=checkbox]
{
height: 28px;
width: 28px;
}
input[type="checkbox"]:not(:checked),
input[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}

input[type=checkbox]:not(:checked) + label{
  right: 3px;
  top: 2px;
  color: #333;
}

input[type=checkbox] + label{
  font-size: 2.5em;
  color: #579006;
}

.domain-search-container {
  margin-bottom: 150px;
}

@media (min-width: 768px) and (max-width: 991px) { 
  input[type=checkbox] + label{
    font-size: 2.5em;
    color: #579006;
    right: 25px !important;
  }
  input[type=checkbox]:not(:checked) + label{
    right: 28px !important;
  }
}

@media (max-width: 767px){ 
  input[type=checkbox] + label{
    font-size: 2.5em;
    color: #579006;
    right: 15px !important;
  }
  input[type=checkbox]:not(:checked) + label{
    right: 18px !important;
  }
}
      </style>
      <style>
        ##if(countrysiteany(in))
        .domain-search-container{
          margin-bottom: 200px;
        }
        ##endif
        ##if(countrysiteany(mx))
        .domain-search-container{
          margin-bottom: 200px;
        }
        ##endif
        ##if(countrysiteany(br))
        .domain-search-container{
          margin-bottom: 200px;
        }
        ##endif
        ##if(siteContextAny(pl))
        input[type=radio]:checked + label {
          color: #a92728!important;
        }
        input[type=checkbox] + label {
          color: #a92728;
        }
        .green-check,.product-added-to-cart,.text-secondary,.text-secondary-o {
          color: #a92728;
        }
        .order-total-wrapper, .scroll-down-wrapper p{
          color: #0090FC;
        }
        .container{
          width: 1000px;
          max-width: 1000px;
          min-width: 1000px;
        }
        .config-text-primary{
          font-size:26px;
        }
        .config-text-lead{
          font-size:14px;
        }
        .btn-continue,.btn-continue:hover{
          background-color: #0090FC !important;
          border-color: #0090FC !important;
        }
        .product-added-to-cart{
          margin-top:15px;
        }
        ##endif
        
      </style>
    </atlantis:webstash>
    <script type="text/javascript">
      endOfPageScripts();
      
    </script>
    <script type="text/javascript">
      jQuery.query={get:function(c){var b=window.location.search.substring(1);var a=b.split("&");for(i=0;i<a.length;i++){ft=a[i].split("=");if(ft[0]==c){return ft[1]}}return""}};(function(a){a.fn.wresize=function(b){version="1.1";wresize={fired:false,width:0};function d(){if(a.browser.msie){if(!wresize.fired){wresize.fired=true}else{var e=parseInt(a.browser.version,10);wresize.fired=false;if(e<7){return false}else{if(e==7){var f=a(window).width();if(f!=wresize.width){wresize.width=f;return false}}}}}return true}function c(f){if(d()){return b.apply(this,[f])}}this.each(function(){if(this==window){a(this).resize(c)}else{a(this).resize(b)}});return this}})(jQuery);function getMaxZ(){var a=Math.max.apply(null,$.map($("body > *"),function(b,c){if($(b).css("position")=="absolute"){return parseInt($(b).css("z-index"),10)||1}else{return 1}}));return a}function getMaxZ(a){var c="body *:not(#"+a+")";var b=Math.max.apply(null,$.map($(c),function(d,f){if($(d).css("position")=="absolute"){return parseInt($(d).css("z-index"),10)||1}else{return 1}}));return b}jQuery.fn.currentMousePosition=function(b){var a=$("#[isjsonrendercontainer]");if(b!==null&&b!==undefined){$(a).data("currentMousePosition",b)}else{if($(a).data("currentMousePosition")==null||$(a).data("currentMousePosition")==undefined){$(a).data("currentMousePosition",{left:0,top:0})}return $(a).data("currentMousePosition")}};jQuery.fn.lockMousePosition=function(b){var a=$(this).getJsonContainerDiv();$(a).data("lockedMousePosition",$(a).currentMousePosition())};jQuery.fn.lockedMousePosition=function(){return $(this).getJsonContainerDiv().data("lockedMousePosition")};jQuery.fn.getJsonContainerDiv=function(){var a=$(this).parents().andSelf().filter("#[isjsonrendercontainer]:first");return a};var atl_HideInvoked=false;function atl_ToggleDisplay(b){var a=document.getElementById(b);if(a){a.style.display=(a.style.display=="block"?"none":"block")}return true}function atl_SwapDisplay(a,b){atl_ToggleDisplay(a);atl_ToggleDisplay(b);return true}function atl_Go(b,a){if((a==null)||(a=="")){a="_self"}window.open(b,a)}function atl_PopHelp(a){var b=window.open(a,"spop","left=20,top=20,resizable=yes,scrollbars=yes,width=610,height=620")}function atl_PopUp(c,b,a){var d=window.open(c,b,a)}var atl_quickhelp_source;function atl_OnQuickHelpError(a){}function atl_GetQuickHelpContent(b,d,c,e){if(typeof(atl_GetQuickHelpUrl)!="undefined"){var f=atl_GetQuickHelpUrl();var a=(f.indexOf("?")<0)?"?":"&";atl_quickhelp_source=e;$.ajax({type:"GET",url:f+a+"targetDivId=qh&name="+b,contentType:"application/json; charset=utf-8",dataType:"json",success:d,error:c})}}function atl_ShowDivContent(a){if(a!=null&&!atl_HideInvoked){a.style.display="block";a.style.visibility="visible"}}function atl_ShowHelp(a){var c=a.offsetTop;var b=a.offsetParent;while(b){c+=b.offsetTop;b=b.offsetParent}return c}function atl_getOffsetLeft(a){var b=a.offsetLeft;var c=a.offsetParent;while(c){b+=c.offsetLeft;c=c.offsetParent}return b}function atl_getScrollY(){var a=0;if(typeof(window.pageYOffset)=="number"){a=window.pageYOffset}else{if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){a=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){a=document.documentElement.scrollTop}}}return a}function atl_ShowHelpById(d,c){if(c){var b=340;var e=atl_getOffsetLeft(d);var h=(window.innerWidth)?window.innerWidth-25:document.body.clientWidth;if((e+b)>h){e=h-b}newX=e;var a=c.offsetHeight;var f=atl_ShowHelp(d)+d.offsetHeight;var g=(window.innerHeight)?window.innerHeight-25:document.body.clientHeight;if((f+a)>g+atl_getScrollY()){f=atl_ShowHelp(d)-a}newY=f;c.style.top=newY+"px";c.style.left=newX+"px";c.left=newX+"px";c.left=newY+"px"}}function atl_SetQuickHelpDiv(b,c){c=atl_quickhelp_source;var a=document.getElementById("atl_quickhelp");if(a!=null&&b!=null){a.innerHTML=b.Html;atl_ShowHelpById(c,a);atl_ShowDivContent(a);if(!$.jCache.hasItem(b.Data)){$.jCache.setItem(b.Data,b.Html)}}}function atl_ShowQuickHelp(a,c,e){atl_HideInvoked=false;var d=document.getElementById("atl_quickhelp");if(d==null){return}var f;if(a.target!=null){f=a.target}else{if(a.srcElement!=null){f=a.srcElement}else{return}}if(e){var b=getMaxZ(d.id);if(d.style.zIndex<=b){d.style.zIndex=b+1}}if(!$.jCache.hasItem(c)){atl_GetQuickHelpContent(c,atl_SetQuickHelpDiv,atl_OnQuickHelpError,f)}else{d.innerHTML=$.jCache.getItem(c);atl_ShowHelpById(f,d);atl_ShowDivContent(d)}}function atl_HideQuickHelp(){atl_HideInvoked=true;var a=document.getElementById("atl_quickhelp");if(a!=null){a.style.display="none";a.style.visibility="hidden"}}function atlCookieDomain(){var b=window.location.hostname;var c=b.lastIndexOf(".");if(c<0){return"."+b}else{var a="";if(b.lastIndexOf(".",c-1)>-1){a=b.substr(b.lastIndexOf(".",c-1))}else{a="."+b}return a}}function atlSetMemCookie(c,d,e){var b=new Date();var a=c+"="+d+"; path=/; domain="+atlCookieDomain();document.cookie=a}function atlSetCookie(d,e,f){var b=new Date();var c=new Date(Date.parse(b.getDay()+"/"+b.getMonth()+"/"+(b.getFullYear()+f)));var a=d+"="+e+"; expires="+c.toGMTString()+"; path=/; domain="+atlCookieDomain();document.cookie=a}function atlReadCookie(e){var b="";if(document.cookie.length>0){var d=e+"=";var a=document.cookie.indexOf(d);var c=0;if(a>-1){a+=d.length;c=document.cookie.indexOf(";",a);if(c<a){c=document.cookie.length}b=document.cookie.substring(a,c)}}return unescape(b)}function atl_isemailvalid(c){var a="@";var b=".";var d=c.indexOf(a);var f=c.length;var e=c.indexOf(b);if(c.indexOf(a)==-1){return false}if(c.indexOf(a)==-1||c.indexOf(a)==0||c.indexOf(a)==f){return false}if(c.indexOf(b)==-1||c.indexOf(b)==0||c.indexOf(b)==f){return false}if(c.indexOf(a,(d+1))!=-1){return false}if(c.substring(d-1,d)==b||c.substring(d+1,d+2)==b){return false}if(c.indexOf(b,(d+2))==-1){return false}if(c.indexOf(" ")!=-1){return false}return true}function atl_isnoscript(b){var a=/[<>]+/;if(a.test(b)){return false}return true}function atl_textarea_trim(a,b){if(a.value.length<=b){return}a.value=a.value.substr(0,b)}function atl_textarea_canaddchar(b,d){var c=null;if(typeof(b.onkeypress.arguments[0])!="undefined"){c=b.onkeypress.arguments[0].keyCode}else{if(document.selection.createRange().text.length!=0){return true}var c=event.keyCode}var a=[8,37,38,39,40,46];for(var e=0;e<a.length;e++){if(a[e]==c){return true}}if(b.value.length<d){return true}return false}(function(a){this.version="(beta)(0.0.1)";this.maxSize=10;this.keys=[];this.cache_length=0;this.items=[];this.setItem=function(b,c){if(typeof(c)!="undefined"){if(typeof(this.items[b])=="undefined"){this.cache_length++}this.keys.push(b);this.items[b]=c;if(this.cache_length>this.maxSize){this.removeOldestItem()}}return c};this.removeItem=function(b){var c;if(typeof(this.items[b])!="undefined"){this.cache_length--;var c=this.items[b];delete this.items[b]}return c};this.getItem=function(b){return this.items[b]};this.hasItem=function(b){return typeof(this.items[b])!="undefined"};this.removeOldestItem=function(){this.removeItem(this.keys.shift())};this.clear=function(){var b=this.cache_length;this.keys=[];this.cache_length=0;this.items=[];return b};a.jCache=this;return a})(jQuery);var stDivsLoadedList="";function piPositionDiv(c){var d=-1;var e=-1;if($(c).args().doCenterToScreen===true){$(c).centerToScreen()}else{var b=$(c).lockedMousePosition();if(b!==undefined&&b!==null){d=b.left-10;e=b.top-10}if($(c).args().overridePosition!==undefined&&$(c).args().overridePosition!==null){e=$(c).args().overridePosition.top;d=$(c).args().overridePosition.left}var a=document.body.clientWidth;if((d+$(c).width())>a){d=d-$(c).width()+20}if($(c).args().doOffsetFromBottom===true){e-=$(c).height()-20}if(d>0&&e>0){$(c).css({position:"absolute",top:e,left:d})}}}function stHideElement(a,b){for(i=0;i<document.getElementsByTagName(a).length;i++){obj=document.getElementsByTagName(a)[i];if(!obj||!obj.offsetParent){continue}objLeft=obj.offsetLeft-b.offsetParent.offsetLeft;objTop=obj.offsetTop;objParent=obj.offsetParent;while((objParent.tagName.toUpperCase()!="BODY")&&(objParent.tagName.toUpperCase()!="HTML")){objLeft+=objParent.offsetLeft;objTop+=objParent.offsetTop;objParent=objParent.offsetParent}objHeight=obj.offsetHeight;objWidth=obj.offsetWidth;if((b.offsetLeft+b.offsetWidth)<=objLeft){}else{if((b.offsetParent.offsetTop+b.offsetHeight+20)<=objTop){}else{if(b.offsetParent.offsetTop>=objTop+objHeight){}else{if(b.offsetLeft>=objLeft+objWidth){}else{obj.style.visibility="hidden"}}}}}}function getJsonCallback(a,c){var b=document.getElementById(a.TargetDivID);if(jQuery.trim(a.Html)==""){$(b).trigger("popInLoadCompleteWithNoData",a)}$(b).html(a.Html);if($(b).args()==undefined&&$(b).doCacheContent===false){return}if(stDivsLoadedList.indexOf(a.TargetDivID+";")<0){stDivsLoadedList+=a.TargetDivID+";"}$(b).trigger("jsonCallbackComplete",a)}function stShowTarget(a){if(a!=null){$(a).show()}}function stContentIsLoaded(a){if(a!=null){return stDivsLoadedList.indexOf(a.id+";")>=0}else{return true}}function stHideSiblings(a){if(a!=null){$(a).siblings().hide()}}function stShowInt(a){if(a!=null){stHideSiblings(a);stShowTarget(a)}}function stShow(a,c){var b=document.getElementById(c);stShowInt(b);if(a!=""&&!stContentIsLoaded(b)){$.ajax({url:a,dataType:"json",success:getJsonCallback,error:function(){var d=$("#"+c);$(d).html("<div style='width:100%; text-align:center; padding:14px;'>No Results Available.</div>");stShowTarget(d)}})}}function stTabActivate(b){var c=document.getElementById(b);var a=$(c).attr("src");var e=$(c).attr("targetdiv");$(c).parent().siblings(".simple_tab_active").addClass("simple_tab_inactive");$(c).parent().siblings(".simple_tab_active").removeClass("simple_tab_active");$(c).parent().addClass("simple_tab_active");$(c).parent().removeClass("simple_tab_inactive");var d=$("#"+e);stShow(a,e)}jQuery.fn.jsonGet=function(b){if(b==undefined||b==null){b=$(this).args()}var c=b.cache!==false;var d=b.url;if(d==undefined||d==null){d=$(this).attr("src")}if(d==undefined||d==null||d.length<=0){handleJsonError("failed","No URL Specified on jsonGet call")}d=appendQueryStringArguments(b,d);var a={url:d,dataType:"json",cache:b.doCacheContent==true,success:b.success,error:function(g,f,e){handleJsonError(f,b,e,g)}};$.ajax(a)};function appendQueryStringArguments(a,c){if(a.queryStringArguments!=undefined&&a.queryStringArguments!=null){c+=(c.indexOf("?")>=0)?"&":"?";var b;for(b in a.queryStringArguments){c+=b+"="+escape(a.queryStringArguments[b])+"&"}c=c.substring(0,c.length-1)}return c}function jsonPost(b){var c=appendQueryStringArguments(b,b.url);var a={url:c,type:"POST",dataType:"json",data:b.postData,success:b.success,error:function(f,e,d){handleJsonError(e,b)}};$.ajax(a)}jQuery.fn.jsonPost=function(){var a=$(this).args().url;if(a==undefined||a==null){$(this).args().url=$(this).attr("src")}jsonPost($(this).args())};function handleJsonError(c,a,b,d){if(c=="timeout"&&a.timeoutFunction!=undefined&&a.timeoutFunction!=null){a.timeoutFunction()}else{if(a.generalErrorFunction!=undefined&&a.generalErrorFunction!=null){a.generalErrorFunction(c,a)}else{}}}jQuery.fn.args=function(a,b){if(a!==null&&a!==undefined){if(typeof(a)=="object"){this.data("args",a);this.data("lockedMousePosition",null)}else{if(b!=undefined){arguments=this.data("args");arguments[a]=b}else{return this.data("args")[a]}}}else{a=this.data("args");if((a==null)||(a==undefined)){a={};this.data("args",a)}return a}};jQuery.fn.showAndSetVisible=function(){$(this).getJsonContainerDiv().show();this.css({visibility:"visible"});this.show()};jQuery.fn.piSetTimeout=function(){var a="piHidePopIn({targetDivId:'"+this[0].id+"', doNotCloseModal: true})";var b=setTimeout(a,2000);if($(this).args().timerIds==null&&$(this).args().timerIds==undefined){$(this).args().timerIds=[]}$(this).args().timerIds.push(b)};jQuery.fn.piClearMousedOverPopInTimeout=function(){if($(this).args().timerIds!=null){$.each($(this).args().timerIds,function(){clearTimeout(this)})}};function piJsonCallback(a,c){var b=$("#"+a.TargetDivID);getJsonCallback(a,c);if(jQuery.trim(a.Html)==""){return}else{$(b).piClearMousedOverPopInTimeout();$(b).trigger("popInLoadCompleteInternal");$(b).trigger("popInLoadComplete")}}function piRenderPopIn(d){var a=$(d).args();if(a.showBeforeContentLoaded===true){$(d).getJsonContainerDiv().showAndSetVisible();piPositionDiv(d)}if(a.sourceUrl!=null&&a.sourceUrl!=""){var c="?";if(a.sourceUrl.indexOf("?")>=0){c="&"}var b=a.sourceUrl+c+"TargetDivID="+a.targetDivId;a.url=b;a.success=piJsonCallback;if(a.postData!=null&&a.postData!=undefined&&a.postData.length>0){$(d).jsonPost()}else{$(d).jsonGet()}}}jQuery.fn.hideSelectsForIE6PopIn=function(){if($.browser.msie&&$.browser.version.substr(0,1)<7){$("select:visible").each(function(){$(this).attr("hideForIE6PopIn",1);$(this).hide()});$(this).bind("popInHideComplete",function(){$(this).showSelectsForIE6PopIn()});$(this).bind("dialogclose",function(){$(this).showSelectsForIE6PopIn()})}};jQuery.fn.showSelectsForIE6PopIn=function(){$("select[hideForIE6PopIn=1]").each(function(){$(this).attr("hideForIE6PopIn","");$(this).show()})};function piShowPopIn(b,a){var c=$("#"+a.targetDivId);if(a.sourceUrl){$(c).attr("isJsonTargetDiv",true)}$(c).piClearMousedOverPopInTimeout();$(c).hideSelectsForIE6PopIn();$(c).args(a);if(a.doMoveToMousePosition==true){b=b||window.event;$(c).currentMousePosition({left:b.clientX+$(document).scrollLeft(),top:b.clientY+$(document).scrollTop()});$(c).lockMousePosition();if(a.showBeforeContentLoaded===true){$(c).getJsonContainerDiv().showAndSetVisible();piPositionDiv(c)}}piRenderPopIn(c);if(a.doAutoHideOnMouseLeave){$(c).mouseover(function(){$(c).piClearMousedOverPopInTimeout()});$(c).mouseenter(function(){if($(c).is(":visible")){$(c).piClearMousedOverPopInTimeout()}});$(c).mouseleave(function(){if($(c).is(":visible")){$(c).piClearMousedOverPopInTimeout();$(c).piSetTimeout()}})}$(c).one("popInLoadCompleteInternal",function(d){if($(c).args().doCenterToScreen===true){$(c).centerToScreen();$(c).getJsonContainerDiv().showAndSetVisible()}else{piPositionDiv(c);$(c).getJsonContainerDiv().showAndSetVisible()}})}function piShowPopInWithStaticContent(b,a){var c=$("#"+a.targetDivId);piShowPopIn(b,a);piPositionDiv(c);$(c).getJsonContainerDiv().showAndSetVisible()}function piHidePopIn(a){var c=$("#"+a.targetDivId);a=$(c).mergeArgs(a);var b=$(c).data("forcePageRefreshOnClose");if(b!=undefined&&b!=null&&(b===true||b===false)){a.forcePageRefreshOnClose=b}$(c).piClearMousedOverPopInTimeout();if($(c).args().forcePageRefreshOnClose===true){reloadPage()}$(c).getJsonContainerDiv().fadeOut("fast");if(a.doNotCloseModal!==true){$(".ui-widget-overlay").fadeOut("fast",function(){if(typeof($(c).dialog)=="function"){$(c).dialog("close")}})}$(c).args({});$(c).trigger("popInHideComplete",a)}jQuery.fn.hideJsonPopIn=function(a){if(a==null||a==undefined){a={}}var b=$(this).parents("[isJsonTargetDiv]");if(a.targetDivId==undefined||a.targetDivId==null){a.targetDivId=$(b).attr("id")}piHidePopIn(a)};function piShowPopInModal(a){var c=a.targetDivId;var b=$("#"+c);if(a.sourceUrl){$(b).attr("isJsonTargetDiv",true)}$(b).args(a);$(b).hideSelectsForIE6PopIn();$(b).showAndSetVisible();$(b).css("z-index",getMaxZ()+100);$(b).dialog({draggable:false,resizable:false,modal:true,position:"center",width:$(b).width()+10,closeOnEscape:false});$(b).bind("popInLoadCompleteInternal",function(d){piBindContainerDivToAutoHideOnClick(a);if($(b).args().doCenterToScreen===true){$(b).dialog("option","position",$(b).dialog("option","position"))}});$(b).dialog("open");piRenderPopIn(b);if(a.autoHideOnClickOutBeforeLoadComplete!==false){piBindContainerDivToAutoHideOnClick(a)}$(b).click=function(d){$(d).stopPropagation()}}function piBindContainerDivToAutoHideOnClick(a){var b=$(".ui-widget-overlay");var c=$(b).data("events");var d=$("#"+a.targetDivId);if(c==null||c.click==null){$(b).bind("click",function(){if($(d).args().autoHideOnClickOut!==false){piHidePopIn(a)}})}}jQuery.fn.centerToScreen=function(){return this.each(function(){var k=$(this).width();var e=$(this).height();var d=$(window).width();var a=d/2;var b=$(window).height();var c=b/2;var g=$(document).scrollLeft();var h=$(document).scrollTop();var j=c+h-(e/2);var f=a+g-(k/2);$(this).css({top:j+"px"});$(this).css({left:f+"px"})})};jQuery.fn.setAutoEllipseDomain=function(a){$(this).each(function(){var c=$.trim($(this).html());$(this).html("");$(this).show();if(a==null||a==undefined){a=$(this).width()}var e=document.createElement("label");$(e).attr("title",c);var h=c.split(".",2)[1];if(h==undefined){h=""}$(e).html(c);$(this)[0].appendChild(e);var g=$(e).width();if(g>=a){var d=10;var f;$(e).html("");while(e.offsetWidth<a&&d<c.length){var b=c.substr(0,d)+"..."+h;$(e).html(b);d++;g=e.offsetWidth;if(g>a){break}f=b}$(e).html(f)}})};function reloadPage(){document.body.style.cursor="wait";var a=location.toString().replace(window.location.hash,"");document.location.replace(a)}jQuery.fn.mergeArgs=function(a){if(a&&a!=null){var b;for(b in a){$(this).args(b,a[b])}}return $(this).args()};jQuery.fn.rebind=function(b,a){$(this).unbind(b).bind(b,a);return this};function formatCurrency(f,b,h,d,m,j){if(b===undefined){b="$"}if(h===undefined){h=2}if(d===undefined){d="."}if(m===undefined){m=","}if(j===undefined){j=true}function g(n,p,o){var q=""+n;while(q.length<p){q=o+q}return q}f=f.toString().replace(/\$|\,/g,"");if(isNaN(f)){f="0"}var c=Math.pow(10,h);var l=(f==(f=Math.abs(f)));f=Math.floor(f*c+0.50000000001);var a=(f%c);f=Math.floor(f/c).toString();a=g(a,h,"0");for(var e=0;e<Math.floor((f.length-(1+e))/3);e++){f=f.substring(0,f.length-(4*e+3))+m+f.substring(f.length-(4*e+3))}var k=(((l)?"":"-")+f);if(h>0){k=k+d+a}if(j){k=b+k}else{k=k+b}return k}jQuery.fn.onenter=function(a){$(this).live("keypress",function(b){if((b.which&&b.which==13)||(b.keyCode&&b.keyCode==13)){a()}});return this};function LogFastballPageEvent(a,c,d){var b=new fbiEventObject(new Object(),"click",a,"");b.AddUserInput(c,d);fbiRecordFastballEvent(b)}jQuery.fn.validateDomainNames=function(b){var a=$(this).val();if(a.length==0){b("Enter a domain name to search.");return false}return true};function LogFastballEvent(a,b,c){LogFastballPageEvent(a,b,c)}function stripSpecialCharacters(b){var a=b.replace(/\s*/g,"").replace(/[^a-zA-Z0-9-\s.]+/g,"");return a}jQuery.fn.stripSpecialCharacters=function(){$(this).val(stripSpecialCharacters($(this).val()))};
      
    </script>
    <script type="text/javascript">
      !function(a){function c(a,b,c){var d=c.replace("px","");if(b.length>6){var e=d-4;$(a).css({"font-size":e+"px"})}else $(a).css({"font-size":c});$(a).val(b)}function e(b,c,d){a(c).length>0&&a(d).css({display:"none"})}function f(b,c){a(c).hasClass("stoggledown")?a(c).html("&#9650;").removeClass("stoggledown").addClass("stoggleup"):a(c).html("&#9660;").removeClass("stoggleup").addClass("stoggledown"),a(b).toggle()}function g(b,c,d,e,g){var h=document.layers?c.which:document.all?event.keyCode:document.getElementById?c.keyCode:0;a(e).is(":hidden")&&f(e,g);var i=a(d);if(h!==a.ui.keyCode.UP&&h!==a.ui.keyCode.DOWN){var j=i.val();a(e).is(":hidden")&&f(e,g),IntialTLD?IntialTLD=!1:a(e+" li").each(function(){a(this).html().indexOf(j)>=0?a(this).removeClass("tldhidden").addClass("tldshown").show():a(this).removeClass("tldshown").addClass("tldhidden").hide()})}}function h(b,c,d,e,f){var g=document.layers?c.which:document.all?event.keyCode:document.getElementById?c.keyCode:0,h=a(".t-hilite");(g===a.ui.keyCode.DOWN||g===a.ui.keyCode.UP)&&(0===h.length?a("li.tldshown").eq(0).addClass("t-hilite"):g===a.ui.keyCode.DOWN?a("li.t-hilite").removeClass("t-hilite").nextAll(":visible").eq(0).addClass("t-hilite"):a("li.t-hilite").removeClass("t-hilite").prevAll(":visible").eq(0).addClass("t-hilite"),null===a("li.t-hilite").html()||a(f).val(a(".t-hilite").html()))}a.gdhpSearchUI=function(){},a.gdhpSearchUI.defaults={searchUrl:null,idnUrl:null,domainInputId:"#searchDomainName",tldInputId:"#searchTldName",tldToggleId:"#searchTldToggle",tldListId:"#searchTldList",searchButton:"#searchButton",tldListHighlightColor:"#E4EFC7",domainInputLabelText:"Search for a new domain",initialTld:!0,focusOnLoad:!0},a.fn.gdhpDomainSearch=function(b){var d=a.extend({},a.gdhpSearchUI.defaults,b||{}),i=a(d.tldInputId).css("font-size"),j=d.domainInputId+"-label";a("<div id='"+j.replace("#","")+"' unselectable='on'>"+d.domainInputLabelText+"</div>").appendTo(a(d.domainInputId).parent()),a("<style type='text/css'> .t-hilite{ background-color:"+d.tldListHighlightColor+"} </style>").appendTo("head"),a(j).bind("click",function(){a(d.domainInputId).focus()}).addClass(a(d.domainInputId).attr("class")).css({position:"absolute",color:"#CCCCCC",top:"0px",left:"0px"}),d.focusOnLoad&&a(d.domainInputId).focus(),a(d.domainInputId).bind("paste",function(a){e(a,d.domainInputId,j)}).bind("click",function(a){e(a,d.domainInputId,j)}).bind("keypress",function(a){e(a,d.domainInputId,j)}).bind("focus",function(){"Start your domain search"===a(this).val()&&a(this).val("")}).bind("blur",function(){""===a(d.domainInputId).val()&&a(j).css({display:"block"})}),a(d.tldInputId).focus(function(){f(d.tldListId,d.tldToggleId)}).keyup(function(a){g(this,a,d.tldInputId,d.tldListId,d.tldToggleId)}).keydown(function(a){h(this,a,d.tldListId,d.tldToggleId,d.tldInputId)}),a(d.tldToggleId).html("&#9660;").addClass("stoggledown").bind("click",function(){f(d.tldListId,d.tldToggleId)}),a(d.tldListId+" li").each(function(){a(this).bind("click",function(){c(d.tldInputId,this.innerHTML,i),f(d.tldListId,d.tldToggleId)}).bind("mouseover mouseout",function(){a(this).toggleClass("t-hilite")})}),IntialTLD=d.initialTld,a(d.domainInputId).keypress(function(b){b&&b.which===a.ui.keyCode.ENTER&&(a(d.domainInputId),a(d.tldInputId))}),a(d.searchButton).click(function(b){var c=a(d.domainInputId),e=a(d.tldInputId);domainSearch(d.searchUrl,d.idnUrl,c,e,d.tldListId),b.preventDefault(),b.stopPropagation()})}}(jQuery);var gdhpCaptcha={showCaptcha:function(a,b,c,d,e,f,g){if(jsonModal.display(a,"gdhp-captcha-modal"),$("#captchaContentDiv").length>0){$(".captcha-submt-btn").unbind("click").bind("click",function(){gdhpCaptcha.validateCaptcha(b,c,d,e,f,g)}),$(".gdhp-captcha-input").unbind("keypress").bind("keypress",function(a){a&&13===a.which&&gdhpCaptcha.validateCaptcha(b,c,d,e,f,g)});var h=new Object,i=b;i+=i.indexOf("?")>=0?"&":"?",i+="TargetDivID=captchaContentDiv",h.url=i,h.success=function(a,b){getJsonCallback(a,b),$("#captcha").show()},h.timeout=1e4,$(this).args(h),$(this).jsonGet()}},validateCaptcha:function(a,b,c,d,e,f){var g=new Object,h=a,i=$("#captchaInputDiv");h+=h.indexOf("?")>=0?"&":"?",h+="TargetDivID=captchaContentDiv&cac="+i.val(),g.url=h,g.success=function(a,g){a.Properties.IsSolved?(modal.close("gdhp-captcha-modal",!0),$(this).gdhpBulkSearch("search",{bulkSearchUrl:b,domains:c,tlds:d,searchtype:e,pageSource:f})):(alertBox.showAlertErrorBox("107"),getJsonCallback(a,g),__initiateCaptcha=!1,i.focus())},g.timeout=1e4,$(this).args(g),$(this).jsonGet()}};$("[data-ci]").click(function(a){$this=$(this),FastballEvent_MouseClick(a,$this.attr("data-ci"),$(this)[0],"a"),fbiLibCheckQueue()});var jsonModal={display:function(a,b,c,d,e){if($("#"+b).length<=0){var f=$("<div>").attr("id",b).css({position:"absolute"}).appendTo("body");"undefined"!==d&&f.width(d),"undefined"!==e&&f.height(e)}jsonContent.load(b,a,!1),modal.display(b,"popUpDiv ui-widget-overlay",".modal_close_btn",c)}},jsonContent={load:function(a,b,c){0===$("#"+a).html().length?null!==b&&(b+=b.indexOf("?")>=0?"&":"?",b+="callback=jsonContent._fill&targetDivId="+a,jsonContent._call("jsonContent._fill",b,c)):this._fill({TargetDivID:a})},_call:function(a,b,c){$.ajax({dataType:"jsonp",jsonp:a,url:b,async:c})},_fill:function(a){if(null!==a){var b=a.TargetDivID;null!==a.Html&&$("#"+b).html(a.Html)}}},globalModal={display:function(a){$(a).modal({overlayId:"g-modal-overlay",close:!0,autoPosition:!0}),$("#g-modal-overlay").bind("click",function(){$.modal.close()})}},modal={display:function(a,b,c,d){if($("#curtain").length<=0){var e=$("<div>").attr("id","curtain").addClass(b).css({"z-index":getMaxZ(),display:"none",filter:"alpha(opacity=50)"}).height($(document).height()).width($(document).width()).bind("click",function(){d?modal.remove(a):modal.close(a)}).appendTo("body").fadeIn("slow");$(c).live("click",function(){d?modal.remove(a):modal.close(a)}),$(window).bind("resize scroll",function(){e.height($(document).height()).width($(document).width())}),$("body").css("overflow-x","hidden\0/IE9")}else $("#curtain").css("z-index",getMaxZ()-1).height($(document).height()).width($(document).width()).bind("click",function(){d?modal.remove(a):modal.close(a)}).show(),$(c).live("click",function(){d?modal.remove(a):modal.close(a)}),$("body").css("overflow-x","hidden\0/IE9");modal._center(a)},_center:function(a){var b=$(window).width()/2+$(document).scrollLeft()-$("#"+a).width()/2,c=$(window).height()/2+$(document).scrollTop()-$("#"+a).height()/2;0>c&&(c=0),0>b&&(b=0),$("#"+a).css({top:c+"px",left:b+"px","z-index":getMaxZ()+100}).show()},close:function(a){$("#"+a).hide(),$("#curtain").css("filter","alpha(opacity=50)").fadeOut("fast",function(){$(this).remove()}),$(window).unbind("resize"),$("body").css("overflow-x","auto\0/IE9")},remove:function(a){var b=$("#"+a),c=b.find("iframe");c.length&&c.attr("src","");try{setTimeout(function(){b.remove(),$("#curtain").css("filter","alpha(opacity=50)").fadeOut("fast",function(){$(this).remove()}),$(window).unbind("resize"),$("body").css("overflow-x","auto\0/IE9")},100)}catch(d){}}},alertBox={showAlertErrorBox:function(a){var b=a,c=$("#gdhp-errors\\.error\\["+a+"\\]");c.length>0&&(b=c.html()),$("#gdhp-alert-box").length<=0&&$("<div>").attr("id","gdhp-alert-box").addClass("gdhp-alert-box").css({display:"none",position:"absolute",width:"300px"}).appendTo("body"),$("#gdhp-alert-box").html("<div class='g-alert g-err'><a href='#' class='g-close-notify' onclick='alertBox.closeAlertErrorBox();return false;'><span>Close</span></a><p>"+b+"</p></div>"),alertBox._center("gdhp-alert-box")},closeAlertErrorBox:function(){$("#gdhp-alert-box").html("").css({display:"none"})},_center:function(a){var b=$(window).width()/2+$(document).scrollLeft()-$("#"+a).width()/2,c=$(window).height()/2+$(document).scrollTop()-$("#"+a).height()/2;0>c&&(c=0),0>b&&(b=0),$.browser.safari&&"523.12.9"===$.browser.version?$("#"+a).css({top:"200px",left:"320px","z-index":getMaxZ()+100,display:"block"}):$("#"+a).css({top:c+"px",left:b+"px","z-index":getMaxZ()+100,display:"block"})}},solazy={};!function(){function j(){b.each(function(){k($(this))})}function k(a){var b=a,c=b.attr("data-sl-condition");if("undefined"!=typeof c){var d=c.split("|"),e=d[1].split(":");b[0]["sl-condition-property"]=e[0],b[0]["sl-condition-css-value"]=e[1],b[0]["sl-condition-target"]=$(d[0])}}var b,c,h,d=750,e=0,f=100,g=300,i=!1;$(document).ready(function(){b=$(".solazy"),c=$(window);var a=$("div,ul"),d=c.add(a);j(),$('[data-sl-type="request"]').each(function(){b=b.not($(this))}),setTimeout(function(){solazy.check()},500),$(d).bind("scroll",function(){i||(solazy.check(),clearInterval(h),h=setInterval(function(){solazy.check(),clearInterval(h),i=!1},g)),i=!0})}),$.extend(solazy,{check:function(){var a=c.scrollTop(),d=a+c.height();b.each(function(){var b=$(this),c=b.offset().top,e=b.height(),g=!0;"undefined"!=typeof b[0]["sl-condition-target"]&&(g=!1,$(b[0]["sl-condition-target"]).css(b[0]["sl-condition-property"])===b[0]["sl-condition-css-value"]&&(g=!0)),c>a-e-f&&d+f>c&&g&&solazy.loadObject(b)})},addLazyOjects:function(a){var c=$(a).find(".solazy");c.each(function(){k($(this))}),b=b.add(c)},loadObject:function(a){var c=a.attr("data-sl-src"),f=a.attr("data-sl-alt");b=b.not(a);var g=$('<img src="'+c+'" alt="'+f+'" />').css({opacity:0,width:"100%",height:"100%"});g.load(function(){g.appendTo(a),setTimeout(function(){g.animate({opacity:1},d,function(){a.css("background-image","none")})},e)})}})}(solazy.$);
      
    </script>
    <script src="[@T[link:<javascriptroot />]@T]starfield/fos.share/v1.3/fos.share-20140505.min.js" id="fosShareScript"></script>
    <script src="[@T[link:<javascriptroot />]@T]fos/office365/js/currency-calc.v1.0.3.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      if(typeof currencyCalc != "undefined"){
        currencyCalc.base = "[@T[currencyprice:<price usdamount="1000000000" dropdecimal="false" dropsymbol="false" htmlsymbol="false" negative="parenthesis" />]@T]";
      }
      
      $(document).ready(function() {
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'),
                     qs = [],
                     date = new Date();
        for(var i = 0; i < hashes.length; i++) {
          var hash = hashes[i].split('=');
          qs.push(hash[0]);
          qs[hash[0]] = hash[1];
        }
      
        window.setTimeout(function() {
          $('#shareme').fosShare({});
        }, 2000);
      });
      
    </script>
  </body>
</html>