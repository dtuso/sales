gbl.ns.register('domains.controls');
if (!domains.controls.cds_gtld_templates) {
  domains.controls.cds_gtld_templates = function() {

    "use strict";

    // instance variables
    var settings = {},
      defaults = {
        gtld: 'com',
        ssoSpkey: '',
        tldLogoImageExists: true,
        tldLogoImageFileName: '',
        hasProductLimitations: true,
        watchAuthUrl: 'http://example.com/endpointAuth.asmx',
        watchDataUrl: 'http://example.com/endpointData.asmx',
        watchButtonFollow: 'Follow',
        watchButtonFollowing: 'Following',
        watchButtonUnfollow: 'Unfollow',
        watchErrorMsg: 'Unable to change your following status at this time.',
        gTldPreRegPhaseDataJson: [],
        $lrEarlyAccessDiv: $('#lr-earlyaccess'),
        $lrNotEarlyAccessDiv: $('#lr-not-earlyaccess'),
        tldH1TagExists: true,
        tldMarketingContentTagExists: true,
        tldUKLogo:''
      },
      isUserWatchingGtld = false,
      modalObject = null,
      modalContainerName = "gtld-modalHtmlContent",
      phaseStatus = {BEFORE: 1, DURING: 2, CLOSED: 3};


    // private functions
    function setupSocialSharing() {
      $('#shareme').fosShare();
    }

    function setupLimitationsModal() {
      $('.g-modal-close').click(function() {
        $.modal.close();
      });
      $("#limitations > p > a").click(function() {
        $("#g-modal").modal({
          overlayId: "g-modal-overlay",
          close: "false", 
          autoPosition: "true"
        });
      });
    }

    function getUrlParameter(name){
      var result = decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
      if(result == 'null'){ result = undefined };
      return result;
    } 

    function setupSearchbox() {

      function submitForm(){
        var domainToCheck = $searchField.val();
        if(domainToCheck === '' || domainToCheck === placeholder){
          return;
        }
        if(domainToCheck.indexOf('.') > -1){
          $('#tld').val('');  // checking if tld was submitted in search and if it was, removing default tld value
        }
        $searchForm.submit();
      }

      if(typeof getUrlParameter('mgrshopper') != 'undefined'){
        $('#gtld-domain-search-form #mgrshopper').val(getUrlParameter('mgrshopper'));
      };

      var $searchForm = $('#gtld-domain-search-form'),
        $searchField = $('#gtld-domain-search-input'),
        placeholder = $searchField.attr('placeholder');
      if (typeof placeholder == 'undefined') {
        placeholder = '';
      }
      $searchField.keypress(function(event) {
        if (event.which === 13) {
          event.preventDefault();
          submitForm();
        }
      });
      var $searchButton = $('#gtld-domain-search-btn');
      $searchButton.attr('href', 'javascript:void(0)').bind('click', submitForm);
    }


    function setWatchButtonState() {    
      var $watchBtn = $('#watch-button');
      var mEnterFn = function(){
        $watchBtn.text(settings.watchButtonUnfollow);
      };
      var mLeaveFn = function(){
        $watchBtn.text(settings.watchButtonFollowing);
      };
      if(isUserWatchingGtld === true) {
        $watchBtn
          .text(settings.watchButtonFollowing)
          .mouseenter(mEnterFn)
          .mouseleave(mLeaveFn);
      } else {
        $watchBtn
          .text(settings.watchButtonFollow)
          .unbind() // turns off the hover() effects
          .click(watchButton_click);
      }
    }


    function watchButton_click(e) {    
      if (isUserAuthenticated() === true) {
        if(isUserWatchingGtld === false) {
          addToWatchList();
        } else {
          removeFromWatchList();
        }
      } else {
        showAuthentication(modalContainerName, false);
      }
    }
    function isUserWatchingGtldFn() {    
      var rtnValue = false;
      $.ajaxSetup({ async: false });
      var url = appendQueryString(settings.watchDataUrl, "act=10&name=" + encodeURIComponent(settings.gtld));
      $.getJSON(url, function (data) {
        if (data) {
          rtnValue = data;
        }
      });
      $.ajaxSetup({ async: true });
      return rtnValue;
    }

    function showAuthentication(modalContainerName, showCreateAccount) {
      if (!modalObject) {
        $.get(settings.watchAuthUrl + "/modalinit.aspx?version=7", function (data) {
            var modal = $('#' + modalContainerName);
            if (0 == modal.length) {
              modal = $("<div>", { id: modalContainerName });
              modal.prependTo("body");
            }
            modal.html(data.content);
            $.getScript(data.scripts[0], function () {
              modalObject = new idp.login.modal();
              showAuthModal(modalContainerName, showCreateAccount);
            });
          },
          'jsonp'
        );
      } else {
        showAuthModal(modalContainerName, showCreateAccount)
      }
    };

    function showAuthModal(modalContainerName, showCreateAccount) {
      if (!modalObject) {
        return;
      }

      modalObject.launchModal({
        elementName: modalContainerName,
        idpContentUrl: settings.watchAuthUrl + "/login.aspx?version=7&spkey=" + settings.ssoSpkey,
        launchCreateAccount: showCreateAccount,
        ciCodes: {
          li_submit: '82916',
          li_signup: '82915',
          li_help: '82914',
          li_launch: '82909',
          li_close: '82912',
          ca_submit: '82913'
        },
        successCallback: function (data) {
          if (data) {
            var login = $("#pc-login-wrapper");
            var logout = $("#pc-logout-wrapper");
            if (login && logout) {
              login.toggle(!data.IsValid);
              logout.toggle(data.IsValid);
            }

            isUserWatchingGtld = isUserWatchingGtldFn();
            
            if(isUserWatchingGtld === false) {
              addToWatchList();  
            } else {
              setWatchButtonState();
            }
          }
        },
        reloadData: false
      });    
    }



    function addToWatchList() {
      var url = appendQueryString(settings.watchDataUrl, "act=3&name=" + encodeURIComponent(settings.gtld));
      $.getJSON(
        url,
        function (data) {
          // change button since successful
          isUserWatchingGtld = data === true;
          setWatchButtonState();
        }
      );    
    };

    function removeFromWatchList() {
      var url = appendQueryString(settings.watchDataUrl, "act=4&name=" + encodeURIComponent(settings.gtld));
      $.getJSON(
        url,
        function (data) {
          // change button since successfully removed the watch
          isUserWatchingGtld = data !== true;
          setWatchButtonState();
        }
      );    
    };

    function appendQueryString(url, qstring) {
      var queryStringDelimiter = "?";
      if (url.indexOf("?") >= 0) {
        queryStringDelimiter = "&";
      }
      return url + queryStringDelimiter + qstring;
    }

    function isUserAuthenticated () {
      // check if logged in
      var rtnValue = false;
      $.ajaxSetup({ async: false });

      var url = settings.relativePcDataSetUrl;
      $.getJSON(url, function (data) {
        if (data) {          
          rtnValue = data.pcIsTrusted;
        }  
      });

      $.ajaxSetup({ async: true });
      return rtnValue;
    }

    function getPhaseData(phaseCode) {
      if(typeof settings.gTldPreRegPhaseDataJson === 'undefined'){       
        return null;
      }
      var items = $.grep(settings.gTldPreRegPhaseDataJson, function(item,idx) {return item.Code.substring(0,2).toLowerCase()===phaseCode.substring(0,2).toLowerCase()}); 
      return (items.length == 0) ? null : items[0];
    }

    function getEarlyAccessPhaseData(phaseCode) {
      if(typeof settings.gTldPreRegPhaseDataJson === 'undefined'){       
        return null;
      }
      var items = $.grep(settings.gTldPreRegPhaseDataJson, function(item,idx) {return item.Code.toLowerCase()===phaseCode.toLowerCase()}); 
      return (items.length == 0) ? null : items[0];
    }

    function getCurrentPrice(phaseData) {       
      if(typeof phaseData === 'undefined' || phaseData === null) {
        return 'nill';
      }
      if(typeof phaseData.Prices === 'undefined' || phaseData.Prices === null) {
        return 'null';
      }
      if(typeof phaseData.Prices.TotalCurrent !== 'undefined') {

        if(phaseData.HasIcannFee)
        {
          $('#tld-pricetagline').append('<span> <strong style="text-decoration:line-through">'+phaseData.Prices.TotalList+'</em>*</strong>');
           
          return phaseData.Prices.TotalCurrent  +'*'      
        }
        else
        {
          $('#tld-pricetagline').append('<span> <strong style="text-decoration:line-through">'+phaseData.Prices.TotalList+'</em></strong>');
          $('#limitations-wrap').remove();
           
          return phaseData.Prices.TotalCurrent;          
        }
      }
      if(typeof phaseData.Prices.TotalList !== 'undefined') {
        if(phaseData.HasIcannFee)
          return phaseData.Prices.TotalList +'*'
        else
        {
          $('#limitations-wrap').remove();
          return phaseData.Prices.TotalList;
        }
      }
      return 'missing';
    }
    $('#tld-priceline span:nth-child(2)').remove();
    
    function showHideLogoImage() {
      // hide the logo div if image doesn't exist
      if(settings.tldLogoImageExists === true) {
        $('#gtld-logo > img').attr('src',settings.tldLogoImageFileName);
      } else {
        $('#gtld-logo').hide();
      }
    }

    // function hideProductLimtations() {
    //   // hide the product limitations div if they don't exist
    //   if(settings.hasProductLimitations === false) {
    //     $('#limitations-wrap').remove();
    //   }
    // }

    function consoleLog(str) {    
      window.console && window.console.log && window.console.log(str); 
    }
    function consoleDir(obj) {    
      window.console && window.console.dir && window.console.dir(obj); 
    }
    
    function needToRedirect() {
      var needsToRedirect = (settings.tldH1TagExists !== true);
      if(needsToRedirect) {
        window.location = settings.redirectUrl;
      }
      return needsToRedirect;
    }
    // PUBLIC functions

    this.Initialize = function(options) {    
      
      // OVERRIDE DEFAULTS TO BUILD THE SETTINGS 
      settings = $.extend({}, defaults, options);
      //consoleDir(settings);

      // do the common things. 
      showHideLogoImage();
      setupSocialSharing();
      setupLimitationsModal();
      hideProductLimtations();
/*
      settings.gTldPreRegPhaseDataJson = [
      {"Code":"SRA","StartDate":"Wednesday, September 18, 2013","StartTime":"4:00 PM UTC","EndDate":"Thursday, September 19, 2013","EndTime":"4:00 PM UTC","Status":3,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$159.99","TotalList":"$199.98"}},
      {"Code":"ER1","StartDate":"Wednesday, November 20, 2013","StartTime":"4:00 PM UTC","EndDate":"Monday, September 21, 2020","EndTime":"4:00 PM UTC","Status":2,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$19,999.99","TotalList":"$20,039.98"}},
      {"Code":"ER2","StartDate":"Wednesday, November 20, 2013","StartTime":"4:00 PM UTC","EndDate":"Tuesday, September 22, 2020","EndTime":"4:00 PM UTC","Status":3,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$4,999.99","TotalList":"$5,039.98"}},
      {"Code":"ER5","StartDate":"Wednesday, November 20, 2013","StartTime":"4:00 PM UTC","EndDate":"Friday, September 25, 2020","EndTime":"4:00 PM UTC","Status":2,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$199.99","TotalList":"$239.98"}},{"Code":"ER4","StartDate":"Wednesday, November 20, 2013","StartTime":"4:00 PM UTC","EndDate":"Thursday, September 24, 2020","EndTime":"4:00 PM UTC","Status":2,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$999.99","TotalList":"$1,039.98"}},{"Code":"ER3","StartDate":"Wednesday, November 20, 2013","StartTime":"4:00 PM UTC","EndDate":"Wednesday, September 23, 2020","EndTime":"4:00 PM UTC","Status":2,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","ApplicationFee":"$1,899.99","TotalList":"$1,939.98"}},
      {"Code":"GA","StartDate":"Friday, September 25, 2020","StartTime":"4:00 PM UTC","EndDate":"Friday, September 25, 2020","EndTime":"4:00 PM UTC","Status":1,"HasIcannFee":false,"IsSelected":false,"Prices":{"DomainRegList":"$39.99","DomainRenewList":"$39.99","TotalList":"$39.99"}}];
*/

    };

    this.SetupGeneralAvailability = function() {

      if(needToRedirect()) return ; 

      setupSearchbox();

      var gaPhaseData = getPhaseData('ga');
      var gaPrice = getCurrentPrice(gaPhaseData);
      $('#ga-head-price').html(gaPrice);
      $('#tld-pricetagline,#tld-priceline').show(); //show after pricing has been tokenized to prevent FOUC
      
    };

    this.SetupPreReg = function() {


      if(needToRedirect()) return ; 

      setupSearchbox();

      var gaPhaseData = getPhaseData('ga');
      $('#div-ga-pre-registration').show();
      $('#ga-dates-before').hide(); // per comps (and phone convo with Marshall) hide both dates
      $('#ga-dates-during').hide(); // per comps (and phone convo with Marshall) hide both dates

      var gaPrice = getCurrentPrice(gaPhaseData);
      $('#ga-price').html(gaPrice);
      $('#pre-reg-price').html(gaPrice); // use GA pricing for header
      $('#tld-pricetagline,#tld-priceline').show(); //show after pricing has been tokenized to prevent FOUC

      var lrPhaseData = getPhaseData('lr');

      if(lrPhaseData === null || lrPhaseData.Status === phaseStatus.CLOSED) {

        var hasEarlyAccess = getPhaseData('er') != null;
        if(hasEarlyAccess) {
          var html ='';
          var hasOpenPhase = false;     
          for(var n = 1; n <= 5; n++) {
            var phase = getEarlyAccessPhaseData('er' + n);
            if(phase && phase.Status != phaseStatus.CLOSED) {
              /* 
               <phrase key="prereg.phase.AsLowAs"/> earlyAccessPricingTemplate
               <span class="pre-reg-phase-title">Phase {0}</span> - <span class="pre-reg-phase-aslowas">As low as </span><span class="pre-reg-phase-price">{1}/yr</span>
               <phrase key="prereg.phase.dates"/> earlyAccessDateTemplate
               <span class="pre-reg-phase-dates">Ends: {0}</span> 
              */
              var price = getCurrentPrice(phase);
              var starts = phase.LiveStartDate + ' ' + phase.LiveStartTime;

              html += settings.earlyAccessPricingTemplate.replace('{0}',n).replace('{1}',price);
              html += settings.earlyAccessDateTemplate.replace('{0}',starts);
              hasOpenPhase = true;
            }      
          }
          if(html.length > 0) {
            settings.$lrEarlyAccessDiv.html(html).show();
            settings.$lrNotEarlyAccessDiv.hide();
          }
          if(hasOpenPhase){
            $('#div-lr-priority').show(); //show after pricing has been tokenized to prevent FOUC
          }

        } else {
          $('#div-lr-priority').hide();
        }
      } else {
        $('#lr-dates-before').hide(); // per comps (and phone convo with Marshall) always hide before 
        $('#prereg-lr-before').text(lrPhaseData.StartDate + ' ' + lrPhaseData.StartTime);
        $('#prereg-lr-during').text(lrPhaseData.EndDate + ' ' + lrPhaseData.EndTime);  
        $('#lr-price').html(getCurrentPrice(lrPhaseData));
        $('#div-lr-priority').show(); //show after pricing has been tokenized to prevent FOUC
      }

      var srPhaseData = getPhaseData('sr');
      if(srPhaseData === null || srPhaseData.Status === phaseStatus.CLOSED) {
        $('#div-sr-trademark').hide();      
      } else {
        $('#sr-dates-before').hide(); // per comps (and phone convo with Marshall) hide both dates
        $('#sr-dates-during').hide(); // per comps (and phone convo with Marshall) hide both dates
        $('#prereg-sr-before').text(srPhaseData.StartDate + ' ' + srPhaseData.StartTime);
        $('#prereg-sr-during').text(srPhaseData.EndDate + ' ' + srPhaseData.EndTime);      
        $('#sr-price').html(getCurrentPrice(srPhaseData));
        $('#div-sr-trademark').show(); //show after pricing has been tokenized to prevent FOUC
      }



    };

    this.SetupWatch = function() {

      if(needToRedirect()) return ; 

      $.ajaxSetup({ cache: false });

      // if they are authenticated, then see if they're watching this gtld
      if(isUserAuthenticated() === true) {
        isUserWatchingGtld = isUserWatchingGtldFn();
      }

      $('#watch-button').show().click(watchButton_click);
      
      setWatchButtonState();
      
    };

  };
}

domains.controls.gtldTemplatesClient = new domains.controls.cds_gtld_templates();