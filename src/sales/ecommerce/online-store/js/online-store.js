 
 $(document).ready(function() {
     		//	setPricing(".main-banner-onlinestore"), 
     		//	setPricing(".main-call-to-action-bar"), 
     		//	setPricing(".main-plan-tiers"), 

          $('.select-box').setSelectBox(),
     			activateSlides("#tools-slider"), 
     			activateSlides("#customer-slider"), 
     			setVideo(".ols-video-click-wrapper");

                $('div.faq-icon a').on('click',function(){
                    var link = $(this);
                    if (link.closest('div.row') && link.closest('div.row').siblings('div.faq-content'))
                        {
                            link.closest('div.row').siblings('div.faq-content').toggle();
                        }
                    link.toggleClass('faq-content-minus');
                });
                $('.more-text a').click(
                        function(){
                            $(this).hide();
                            if($(this).hasClass("more") )
                                { $('#lessLink').show();$('li.morefaqLinks').show(); } 
                               else { $('#moreLink').show();$('li.morefaqLinks').hide(); }
                        }
                );
                $('.addtocart-form').on('submit', function (e) {
                  $('button[type="submit"]', this).addClass('waiting');
                  e.preventDefault();
                  var $form = $(this);
                  var fields = $form.serializeObject();
                  var params = [fields['itc'], fields['ci'], fields['qty'], fields['package']];
                  var isManager = fields['isManager'];
                  $.ajax({
                         type: "GET",
                         url: $form.data('addtocart'),
                         contentType: "application/json",
                         data: "requestData=" + JSON.stringify({ pkgid: fields['package'], qty: fields['qty'], itc: fields['itc'], ci: fields['ci'] }),
                         dataType: "jsonp",
                         success: function (response) { 
                           if(isManager === "true")
                           {
                            var carturl = managerURL;
                           }
                           else
                           {
                            var carturl = cartURL;
                           }
                           window.location = carturl;
                         },
                         failure: function (response) { 
                           if(isManager === "true")
                           {
                            var carturl = managerURL;
                           }
                           else
                           {
                            var carturl = cartURL;
                           }
                           window.location = carturl;
                         }
                        });
                });
 });

 function setPricing(e) {
     var i = '[@T[productprice:<template productid="40941" period="monthly"><nostrike><![CDATA[{0}]]></nostrike><strike><![CDATA[{0}]]></strike></template>]@T]',
         t = '[@T[productprice:<template productid="40941" period="monthly"><nostrike><![CDATA[{1}]]></nostrike><strike><![CDATA[{1}]]></strike></template>]@T]',
         r = i !== t,
         o = '[@T[productcompare:<percent primaryproductid="40941" secondaryproductid="40941" hidebelow="1"><html><![CDATA[{0}]]></html></percent>]@T]';
     o = "85", r = !0, t = "$97.98";
     var n = $(e + " p.pricing");
     tokenizeThis(n, [i, t, o]), n.show();
     var r = i !== t;
     r && $(e + " p.pricing span.old-price").show()
 }

 function activateSlides(e) {
     var i = $(e + " .gd-swipe");
     i.attr("data-gd-swipe", '{"auto":0}'), i.gdSwipe()
 }

 function setVideo(e) {
     function i(e) {
         var i = e.outerWidth(),
             t = e.outerHeight(),
             r = e.children(".slv").data("slv-video-id"),
             o = e.children(".slv").data("slv-params") || "";
         e.on("click", function(n) {
             n.preventDefault(), e.html('<iframe width="' + i + '" height="' + t + '" src="//www.youtube.com/embed/' + r + "?autoplay=1&" + o + '" scrolling="no" frameborder="0" allowfullscreen></iframe>').removeClass("slv-hidden").addClass("slv-shown")
         })
     }
     $.fn.solazyVideo = function() {
         return this.each(function() {
             var e = $(this);
             i(e)
         })
     }, $(e).solazyVideo()
 }
 var tokenizeThis = function(e, i) {
     for (var t = e.html(), r = 0; r < i.length; r++) t = t.replace("{" + r + "}", i[r]);
     e.html(t)
 }; 
// var loadReviews = function(){
//   if (typeof $BV != "undefined") {
//     $BV.configure("global", {
//       allowSamePageSubmission: true,
//       userToken: "[@P[userControl:<Data location="~/Shared/BazaarVoice/SessionUserToken.ascx"></Data>]@P]",
//       doLogin: function(successCallback, successUrl) {
//         $('#login-modal').modal();
//       },
//       doScrollSubmission: function () {
//         return false;
//       }
//     });
//     $BV.ui("rr", "show_reviews", {
//       productId: "web_hosting",
//       num: 4,
//       doShowContent: function() {
//         $('.bv-loading').hide();
//       }
//     });
//   }
// };
// $('a[href="#reviews"]').on('shown.bs.tab', function (e) {
//   e.preventDefault();
//   (function() {
//     if (!document.getElementById('bvapi')) {
//       var bv = document.createElement('script');
//       bv.type = 'text/javascript';
//       bv.id = 'bvapi';
//       bv.async = true;
//       bv.src = '[@P[userControl:<Data location="~/Scripts/BVScriptUrlOnly.ascx"></Data>]@P]';
//       bv.onload = loadReviews;
//       (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bv);
//     }
//   })();
// });