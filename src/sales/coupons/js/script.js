
$('body').on('click','[data-url]',function(event){
  event.preventDefault();
  var $clickedElement = $(event.currentTarget);
  var $clickedUrl = $clickedElement.attr('data-url');
  event.stopPropagation();
  window.location.href=$clickedUrl;
});
$('body').on('click','[data-url] a',function(event){
  event.preventDefault();
});


if($("html.lt-ie9").length != 1){
  var classStr = "currency-"+$.cookie("currency")
  $("html").addClass(classStr.toLowerCase());
}

$(function () {
  if (typeof FastballEvent_MouseClick === 'function' && typeof fbiLibCheckQueue === 'function') {
    $('[data-ci]').click(function(e){
      $this = $(this);
      FastballEvent_MouseClick(e,$this.attr('data-ci'),$(this)[0],'a');
      fbiLibCheckQueue();
    });
  }
});


$(document).ready(function() {


  $("#coupons_email").bind("focus.initiate-sign-up",function(){
    // setup these functions only once the textarea has been clicked once
    $(this).unbind('focus.initiate-sign-up');
    $("#coupons_email").bind("keypress",function(event){
      pcj_key(email_signup,event);
    });
    $("#coupons_email_button").bind("click",function(){
      email_signup();
    });
    var localization =
    {
      EmailAddressTooLong: couponsData.localization.EmailAddressTooLong,
      ThankYou: couponsData.localization.ThankYou,
      EnterValidEmail: couponsData.localization.EnterValidEmail
    };
    var redirectUrl = "coupons.aspx";
    var signupURL = couponsData.signupURL;

    function email_signup() {
      var em = document.getElementById('coupons_email');
      var message;
      if (em.value.length > 100) {
        message = localization.EmailAddressTooLong;
      } else if (validateEmail(em.value)) {
        var signupUrl = signupURL + '?EmailSub=' + em.value + '&endPage=' + encodeURIComponent(document.location) + '&finalredirectPage='+redirectUrl;
        /*+'&RedirectToPage=' + redirectUrl + "?qa--AVOID_UXCORE=true&version=sales/design/web-design.aspx|53879cb09faf7008b4687249";*/
        em.value = localization.ThankYou;
        document.location = signupUrl;
        remove_messenger($(em));
      } else {
        message = localization.EnterValidEmail;
      }
      if (typeof message != 'undefined') {
        send_messenger($(em), message);
      }
    }
    function validateEmail(val) {
      var result = true; var index = -1; var pindex = -1;
      if (result) {
        tmp = val; index = tmp.indexOf("@");
        if ((index > 0) && (tmp != "YourEmail@YourWebsite.com") && (tmp.length <= 500)) {
          pindex = tmp.indexOf(".", index);
          if (tmp.length <= pindex + 2) {
            result = false;
          }
        } else {
          result = false;
        }
      }
      return result;
    }
    function pcj_key(fcn, e) {
      if ((e && e.which && e.which == 13) || (e && e.keyCode && e.keyCode == 13)) {
        fcn();  // TODO is this really working? yes, the string, converts to a function via, I guess, eval... bad!
      }
    }
    function remove_messenger($element) {
      $element.prev('.messenger').animate({ opacity: '0.0' }, 300, function () {
        $(this).remove();
      });
    }
    function send_messenger($element, message) {
      var $messenger = $element.prev('.messenger');
      if ($messenger.length >= 1) {
        $messenger.find('.content').html(message);
      } else {
        $messenger = $('<div class="messenger"><span class="message error"><span class="arrow-down"></span><span class="content">' + message + '</span></span></div>').insertBefore($element);
        $messenger.css({ visibility: 'visible', opacity: '0.0' }).animate({ opacity: '1.0' }, 300, function () {
          setTimeout(function () {
            $element.val('').focus();
            remove_messenger($element);
          }, 2000);
        });
      }
    }

  });



  $.ajax({
    type: 'POST',
    url: couponsData.apiUrl
    ,complete: function (data) {
      var productPricing = $.parseJSON(data.responseText);
      marqueePrices("#wsb.marquee", productPricing.wsb[0]);
      marqueePrices("#gybo.marquee", productPricing.got_bundle[0]);
      createPageContent(productPricing);
    },
    dataType: 'json'
  });

  function marqueePrices(selector, productData){
   
    $(selector).find(".price").html(productData.display_price).removeClass("hide");
    $(selector).find(".price").find("span").addClass("currency-symbol");
    $(selector).find(".original-price").html(productData.list_price).removeClass("hide");

  }


  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }


  var initiatedGDSideBySideAlign;

  // gdSideBySideAlign plugin
  (function ( $, window, document, undefined ) {

    var pluginName = 'gdSideBySideAlign',
        defaults = {
          bailIfRowCountsMismatch : true
    };

    function GDSideBySideAlign( element, options ) {
      this.element = element;
      this.options = $.extend( {}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    GDSideBySideAlign.prototype.init = function () {

        // Find the columns
        var $sideBySideGroup = $(this.element);
        var $columns = $(this.element).find('[data-gd-sidebysidealign-col]');

        if($columns.length == 0) {
          return; // bail if no columns found
        }

        // Make sure columns have an equal number of rows
        var numRows = 0, equalLength = true;
        $.each($columns, function(idx,item){
          var $rows = $(item).find('[data-gd-sidebysidealign-row]');
          if(numRows == 0) {
            numRows = $rows.length;
          }
          if(equalLength) {
            if(numRows != $rows.length) equalLength = false;
          }
        });
        if(numRows==0 || !equalLength && this.options.bailIfRowCountsMismatch) {
          return; // bail if no rows, or rows are not equal length
        }

        // keep running over sideBySideGroups to see if the html has changed
        $sideBySideGroup.eq(0)[0]["html"] = $sideBySideGroup.html()
        setInterval(function(){
          var savedHTML = $sideBySideGroup.eq(0)[0]["html"];
          var currentHTML = $sideBySideGroup.html();

          if(savedHTML != currentHTML){
            $sideBySideGroup.eq(0)[0]["html"] = currentHTML;
            alignRows();
          }
        },200);
        
        function alignRows(){
          // loop thru each row and grab the largest cell height and apply to each cell in that row
          for(var i=1; i<=numRows; i++) {
            var $cells = $columns.find('[data-gd-sidebysidealign-row="' + i + '"]' );
            if($cells.is(":visible")){
              $cells.height('')
              var maxHeight = 0;
              $.each($cells,function(idx, cell){
                var cellHeight = $(cell).outerHeight() - 
                  (parseFloat($(cell).css("paddingTop")) || 0) - 
                  (parseFloat($(cell).css("paddingBottom")) || 0) -
                  (parseFloat($(cell).css("borderTopWidth")) || 0) -
                  (parseFloat($(cell).css("borderBottomWidth")) || 0);
                maxHeight = Math.max(maxHeight, cellHeight);
              });
              $cells.height(maxHeight);
            }
          }
          couponsData.correctColumns();
        }
        alignRows();
    }; /* end GDSideBySideAlign.prototype.init */

    // register the function to be used
    $.fn[pluginName] = function ( options ) {
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new GDSideBySideAlign( this, $(this).data('gd-sidebysidealign') || options ));
        }
      });
    };

    // load the plugin
    initiatedGDSideBySideAlign = function(){
      var $sideBySideGroups = $("[data-gd-sidebysidealign]");
      $sideBySideGroups.each(function(){
        var $thisGroup = $(this);
        if($thisGroup.is(":visible")){
          $thisGroup.gdSideBySideAlign();
        }
      });
    }
  })( jQuery, window, document );
  
  (function(){
    // Select Navigation Tab
    var focusedTab = "top_deals";
    var urlFocusedTab = getParameterByName("deal-section");
    if(urlFocusedTab != "" && $("#tabNavigation").find("a[href='#"+urlFocusedTab+"']").length == 1){
      focusedTab = urlFocusedTab;
    } 

    var findNavItem = $("#tabNavigation").find("a[href='#"+focusedTab+"']").length;
    if(typeof findNavItem == "number" && findNavItem != 1){
      focusedTab = $("#tabNavigation").find("a[href*='#']").eq(0).attr("href").slice(1);
    } 

    $("#tabNavigation").find("a[href='#"+focusedTab+"']").parents(".nav-tabs-item").addClass("active");
    $("#"+focusedTab).addClass("active");
  })();





  function createPageContent(productPricing){

    var qaShowNoSaleItems = (getParameterByName('qa-show-no-sale-items').toLowerCase() == "true")? true : false;

    var periodText = {
          "monthly":{
            "abbrev": couponsData.localization.PerMonthShort,
            "full": couponsData.localization.PerMonthFull
      },
          "yearly":{
            "abbrev": couponsData.localization.PerYearShort,
        "full": couponsData.localization.PerYearFull
      }
    }

    $("[class*='\"']").each(function(){
      var fixedClass = $(this).attr("class").replace(/[\'\"\\]/g,"");
      $(this).addClass(fixedClass);
    });



    $.each(productPricing,function(i,thisProduct){
      var $syncPods = $("[rel='" + i + "']");
      if($syncPods.length > 0){
        var bestPrice = 9999999999999999,
            bestPercent = 0,
            planPeriod = "yearly", 
            displayCurrentPrice,
            displayCurrentPercent = "0",
            displayListPrice,
            disableSavingCheck = false;

        $.each(thisProduct,function(i,productPlan){
          // removing everything but numbers 
          var comparePrice = productPlan.compare_price.replace(/[^0-9]/gi,'');
          var comparePercent = productPlan.compare_percent.replace(/[^0-9]/gi,'');

          // save bestPrice for comparing, save displayCurrentPrice, displayListPrice and planPeriod for this product for lowest price on landing page
          if((parseInt(comparePrice) < parseInt(bestPrice) && parseInt(comparePrice) > 0) || 
                  productPlan.disableSavingCheck == "true" || 
                  qaShowNoSaleItems == true ){
            bestPrice = comparePrice;
            displayCurrentPrice = productPlan.display_price;
            displayListPrice = productPlan.list_price;
            planPeriod = productPlan.period;
          }
          // save bestPercent for comparing, save displayCurrentPercent for highest percent on the landing page
          if(parseInt(comparePercent) > parseInt(bestPercent) || 
                  productPlan.disableSavingCheck == "true" || 
                  qaShowNoSaleItems == true ){
            bestPercent = comparePercent;
            displayCurrentPercent = productPlan.display_percent;
            if(bestPrice == 0){
              bestPrice = comparePrice;
              displayCurrentPrice = productPlan.display_price;
              displayListPrice = productPlan.list_price;
              planPeriod = productPlan.period;
            }
          }
          if(disableSavingCheck == false && (typeof productPlan.disableSavingCheck != "undefined" && productPlan.disableSavingCheck == "true")){
            disableSavingCheck = true;
          }
        });


        
        if(bestPercent != 0 || qaShowNoSaleItems == true || disableSavingCheck == true){
          $syncPods.find(".price").each(function(){
            $(this).html(displayCurrentPrice);
            $(this).find("span").addClass("currency-symbol");
          });
          $syncPods.find(".original-price").each(function(){
            if(displayCurrentPrice.replace(/<.+?>/g,"") == displayListPrice.replace(/<.+?>/g,"")){
              $(this).parent(".was-original-price").hide();
            } 
            $(this).html(displayListPrice);
          })

          $syncPods.find(".pod-price-wrapper .line-through").each(function(){$(this).html(displayListPrice);})
          $syncPods.find(".percent").each(function(){$(this).html(displayCurrentPercent);})
          $syncPods.find(".period").each(function(){$(this).html(periodText[planPeriod].abbrev);})

          if(bestPercent == 0 && disableSavingCheck != true){
            $syncPods.css({"opacity":".7"})
            $syncPods.find(".pod-content").css({"opacity":".5","background-color":"#ccc"})
          }
        } else {
          $syncPods.remove();
        }


      }
    });

    if(couponsData.qualifiedShopper){
      // true means regular shopper
      $(".ddcshow").remove();
      $(".ddchide").removeClass('ddchide');
    }else{
      $(".ddchide").remove();
      $(".ddcshow").removeClass('ddcshow');
    }


   
    
    couponsData.correctColumns = function(){
      $.each($(".tab-pane"),function(i0,thisTabWrapper){

            var thisTab = $(thisTabWrapper).find("[data-gd-sidebysidealign]");

            var tabPrefs = $(thisTabWrapper).data("tab-prefs");

            var viewMoreTrigger = tabPrefs.viewMoreTrigger || 0;

            var $allPods = $(thisTab).find(".pod-outer-wrapper");

            if($allPods.length  > viewMoreTrigger && viewMoreTrigger != 0){
              $(thisTab).parent().find(".view-more").show().bind("click",function(){
                $(this).remove();
                $allPods.removeClass("hidden");
              });
            } else {
              $(thisTab).parent().find(".view-more").hide();
            }
            $.each($allPods,function(i1,thisPod){

                    if(i1 < viewMoreTrigger || viewMoreTrigger == 0){
                        $(thisPod).removeClass("hidden");
                    } else if($(thisTab).parent().find(".view-more").length == 1) {
                      $(thisPod).addClass("hidden");
                      $(thisTab).parent().find(".view-more").show();
                    }
                    var $podRows = $(thisPod).find("[data-gd-sidebysidealign-row]");
                    var row = Math.floor(i1/3);
                    var col = i1 % 3 + 1;
                    $(thisPod)
                      .removeClass("pod-column-1")
                      .removeClass("pod-column-2")
                      .removeClass("pod-column-3")
                      .addClass("pod-column-"+col);
                    $.each($podRows,function(i2,thisRow){
                          var rowNumber = $(thisRow).data("gd-sidebysidealign-row") + (row*10);
                          $(thisRow).attr("data-gd-sidebysidealign-row",rowNumber);
                    });
            });
      });
    }
    $('a[data-toggle="tab"]').on('shown.bs.tab',function(e){
      //$('html, body').animate({ scrollTop: $("#midPageNav").offset().top }, 500);
      initiatedGDSideBySideAlign();
    });
    initiatedGDSideBySideAlign();
  }
  


  if(navigator.userAgent.match(/iPad|iPhone|iPod/i)){
    $('head').append('<meta name="viewport" content="width=1150px">');
  }
});

