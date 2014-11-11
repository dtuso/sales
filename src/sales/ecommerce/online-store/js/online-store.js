 
 $(document).ready(function() {
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
            if(managerView && $form.hasClass('mgr-view'))
            {
               fields['package'] = $('div.select-box',$form).find('ul li.selected').find('input[name="package"]').val();
            }
            var params = [fields['itc'], fields['ci'], fields['qty'], fields['package']];
            $.ajax({
                   type: "GET",
                   url: $form.data('addtocart'),
                   contentType: "application/json",
                   data: "requestData=" + JSON.stringify({ pkgid: fields['package'], qty: fields['qty'], itc: fields['itc'], ci: fields['ci'] }),
                   dataType: "jsonp",
                   success: function (response) { 
                     window.location = (managerView === true) ? managerCartUrl : cartURL;
                   },
                   failure: function (response) { 
                      window.location = (managerView === true) ? managerCartUrl : cartURL;
                   }
                  });
          });
           $("#disclaimers  p  a.simple-link").click(function (event) {
            var $disclaimerModal = $("#product-disclaimer-modal");
            $disclaimerModal.show();
            $disclaimerModal.universalModal({ "width": 800,"height":600 });
            // IE will not show the modal at first, triggering the window resize fixes this
            $(window).trigger("resize");
            $(".close").bind("click", function () {
              $(".universal-modal-close").trigger("click.universalModal")
            })
          });

        $('.isToolTip').tooltip({ placement: 'right', html: true});
        $('.tooltip-delay').tooltip({placement: 'bottom',html: true, delay:{hide:3000}}).on('show.bs.tooltip',function(){
            $('.tooltip-delay').tooltip('hide');
        });
 });

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
             n.preventDefault(), e.html('<iframe id="player" width="' + i + '" height="' + t + '" src="//www.youtube.com/embed/' + r + "?rel=0&autoplay=1&" + o + '" scrolling="no" frameborder="0" allowfullscreen></iframe>').removeClass("slv-hidden").addClass("slv-shown")
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