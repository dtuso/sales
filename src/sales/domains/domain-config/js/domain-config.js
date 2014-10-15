gbl.ns.register('domains.controls');
if (!domains.controls.cds_domain_configuration) {
  domains.controls.cds_domain_configuration = function() {
    "use strict";

    // instance variables
    var settings = {},
      defaults = {
        apiUrlLoad: 'http://example.com/endpointData.asmx/1?isc=XXXXX',
        apiUrlUpdate: 'http://example.com/endpointData.asmx/2?isc=XXXXX',
        apiUrlToCart: 'http://example.com/endpointData.asmx/3?isc=XXXXX',
        $orderSummary: $("#order-summary"),
        $subtotalSpan: $('#order-summary p.total span.price'),
        $hostmywebsite: $("#hostmywebsite"),
        $hostmywebsiteOptions: $("#hostmywebsite-options"),
        $buildmywebsite: $("#buildmywebsite"),
        $buildmywebsiteOptions: $("#buildmywebsite-options"),
        $buildandhostflag: $("#step-websitebuilderandhosting h2.flag"),
        $or: $("#or"),
        $domainsAdded1: $('#domains-added-1'),
        $domainsAddedX: $('#domains-added-x'),
        stepWrapperSelector: '.step-wrapper',
        stepNumberSelector: '.number-template',
        osTldTemplateSelector: '.os-tld-template',
        osTldFeeTemplateSelector: '.os-tldfee-template',
        osItemTemplateSelector: '.os-item-template',
        osBundleTemplateSelector: '.os-bundle-template',
        classToIndicateClickUpdatesOrderSummary: '.plan-option,.radio,.icon',
        normalizedNames: {
          dpp_xs_hosting_diablo_economy_linux: 'Economy Hosting',
          dpp_xs_hosting_diablo_deluxe_linux: 'Deluxe Hosting',
          dpp_xs_hosting_diablo_ultimate_linux: 'Ultimate Hosting',
          dpp_xs_hosting_economy_linux: 'Economy Hosting',
          dpp_xs_hosting_deluxe_linux: 'Deluxe Hosting',
          dpp_xs_hosting_ultimate_linux: 'Ultimate Hosting'
        },
        $orderSummaryItemsDiv: $('#order-summary-items'),
        splitTest1163: null,
        splitTest1167: null,
        splitTest1177: null
      },
      OfferCodes = [
        /* PL only */
        'dpp_xs_hosting_economy_linux',
        'dpp_xs_hosting_deluxe_linux',
        'dpp_xs_hosting_ultimate_linux',
        'dpp_xs_hosting_diablo_economy_linux',
        'dpp_xs_hosting_diablo_deluxe_linux',
        'dpp_xs_hosting_diablo_ultimate_linux',
        'dpp_xs_wst_economy',
        'dpp_xs_wst_deluxe',
        'dpp_xs_wst_premium',
        'dpp_xs_email_deluxe',
        'dpp_xs_email_unlimited',
        'dpp_xs_email_suite',
        'dpp_xs_o365_email',
        'dpp_xs_o365_business',
        'dpp_xs_o365_premium',
        'dpp_privacy_bundle', /* privacy only!  "Privacy" */
        'dpp_business_bundle', /* business, protected/privacy, and certified (if eligible) "Privacy & Business "*/
        'dpp_business_only_bundle' /* business and certified (if eligible) "Business Reg" "Business Reg & Certified"*/
      ],
      configStepTypes = {
        TERM: 'Term',
        WEBSITEBUILDER: 'WebsiteBuilder',
        EMAIL: 'Email',
        O365: 'O365',
        WEBSITEBUILDER_AND_HOSTING: 'WebSiteBuilderAndHosting',
        HOSTING: 'Hosting',
        PRIVACY_PROTECTION: 'PrivacyProtection',
        LOCU_PRIVACY_PROTECTION: 'LocuPrivacyProtection',
        BUSINESS_PROTECTION: 'BusinessProtection',
        BUSINESS_AND_CERTIFIED: 'BusinessAndCertified'
      },
      pageData = {},
      mockData = {
        "ConfigSteps": [
          {
            "Type": "Term",
            "ItemPricing": null,
            "Term": {
              "TermsItems": [
                { "Id": "term-2", "Duration": 2 },
                { "Id": "term-3", "Duration": 3 },
                { "Id": "term-5", "Duration": 5 },
                { "Id": "term-10", "Duration": 10 }],
              "DefaultTerm": "-2"
            }
          },
          {
            "Type": "PrivacyProtection",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_privacy_bundle", "Price": "$4.69", "ListPrice": "$45.69", "Selected": true, "Default": true },
                { "Id": "dpp_business_bundle", "Price": "$7.54", "ListPrice": "$78.54", "Selected": false, "Default": false }],
              "LowesetPrices": [{ "Id": "PrivacyProtection", "Price": "$4.69" }]
            },
            "Term": null
          },
          {
            "Type": "LocuPrivacyProtection",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_privacy_bundle", "Price": "$45.69", "ListPrice": "$145.69", "Selected": true, "Default": true },
                { "Id": "dpp_business_bundle", "Price": "$78.54", "ListPrice": "$278.54", "Selected": false, "Default": false }],
              "LowesetPrices": [{ "Id": "LocuPrivacyProtection", "Price": "$45.69" }]
            },
            "Term": null
          },
          {
            "Type": "BusinessProtection",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_business_only_bundle", "Price": "$55.24", "Selected": false, "Default": true }],
              "LowesetPrices": [{ "Id": "WebsiteBuilder", "Price": "$55.24" }]
            },
            "Term": null
          },
          {
            "Type": "BusinessAndCertified",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_business_only_bundle", "Price": "$214.69", "Selected": false, "Default": true }],
              "LowesetPrices": [{ "Id": "WebsiteBuilder", "Price": "$214.69" }]
            },
            "Term": null
          },
          {
            "Type": "WebsiteBuilder",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_xs_wst_economy", "Price": "$105.69", "Selected": false, "Default": false },
                { "Id": "dpp_xs_wst_deluxe", "Price": "$108.54", "Selected": false, "Default": true },
                { "Id": "dpp_xs_wst_premium", "Price": "$214.24", "Selected": false, "Default": false }],
              "LowesetPrices": [{ "Id": "WebsiteBuilder", "Price": "$105.69" }]
            },
            "Term": null
          },
          {
            "Type": "Hosting",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_xs_hosting_economy_linux", "Price": "$16.99", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_deluxe_linux", "Price": "$18.99", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_ultimate_linux", "Price": "$24.99", "Selected": false }],
              "LowesetPrices": [{ "Id": "Hosting", "Price": "$16.69" }]
            },
            "Term": null
          },          
          {
            "Type": "WebSiteBuilderAndHosting",
            "DefaultSelection": "wsb",
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_xs_wst_economy", "Price": "$5.99", "ListPrice": "$78.54", "Selected": false, "Default": false },
                { "Id": "dpp_xs_wst_deluxe", "Price": "$8.54", "ListPrice": "$85.40", "Selected": false, "Default": true },
                { "Id": "dpp_xs_wst_premium", "Price": "$14.24", "ListPrice": "$145.40", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_diablo_economy_linux", "Price": "$6.99", "ListPrice": "$69.90", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_diablo_deluxe_linux", "Price": "$8.99","ListPrice": "$89.90", "Selected": false, "Default": true },
                { "Id": "dpp_xs_hosting_diablo_ultimate_linux", "Price": "$14.99", "ListPrice": "$149.90", "Selected": false, "Default": false },
                 { "Id": "dpp_xs_hosting_economy_linux", "Price": "$16.99", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_deluxe_linux", "Price": "$18.99", "Selected": false, "Default": false },
                { "Id": "dpp_xs_hosting_ultimate_linux", "Price": "$24.99", "Selected": false }],
              "LowesetPrices": [
                { "Id": "WebsiteBuilder", "Price": "$6.99" }, { "Id": "Hosting", "Price": "$5.89" }]
            },
            "Term": null
          },
          {
            "Type": "Email",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_xs_email_deluxe", "Price": "$2.59", "Selected": false, "Default": true },
                { "Id": "dpp_xs_email_unlimited", "Price": "$3.19", "Selected": false, "Default": false },
                { "Id": "dpp_xs_email_suite", "Price": "$5.49", "Selected": false, "Default": false }],
              "LowesetPrices": [
                { "Id": "Email", "Price": "$2.59" }]
            },
            "Term": null
          },
         {

            "Type": "O365",
            "DefaultSelection": null,
            "ItemPricing": {
              "PlanPrices": [
                { "Id": "dpp_xs_o365_email", "Price": "$12.59", "Selected": false, "Default": true },
                { "Id": "dpp_xs_o365_business", "Price": "$33.19", "Selected": false, "Default": false },
                { "Id": "dpp_xs_o365_premium", "Price": "$105.49", "Selected": false, "Default": false }],
              "LowesetPrices": [
                { "Id": "Email", "Price": "$2.59" }]
            },
            "Term": null
          }

          ],
        "OrderSummary":
        {
          "OrderSummaryItems": [
            { "Template": "DOMAIN", "Id": null, "Count": 3, "TermYears": 10, "Price": "$149.90", "ProductFriendlyName": ".COM Domain Registration" },
            { "Template": "DOMAIN", "Id": null, "Count": 2, "TermYears": 10, "Price": "$119.90", "ProductFriendlyName": ".INFO Domain Registration" },
            { "Template": "DOMAIN", "Id": null, "Count": 1, "TermYears": 0, "Price": "$149.90", "ProductFriendlyName": ".NET Domain Backorder" },
            { "Template": "DOMAIN_FEE", "Id": null, "Count": 1, "TermYears": 10, "Price": "$149.90", "ProductFriendlyName": ".COMPANY Domain Registration" },
            { "Template": "DOMAIN_BUNDLE", "Id": null, "Count": 0, "TermYears": 2, "Price": "$326.00", "ProductFriendlyName": null },
            { "Template": "LINE_ITEM", "Id": "dpp_privacy_bundle", "Count": 4, "TermYears": 10, "Price": "$39.96", "ProductFriendlyName": "Privacy Protection" },
            { "Template": "LINE_ITEM", "Id": "dpp_xs_hosting_diablo_economy_linux", "Count": 4, "TermYears": 10, "Price": "$139.96", "ProductFriendlyName": null },
            { "Template": "LINE_ITEM", "Id": "dpp_xs_hosting_economy_linux", "Count": 4, "TermYears": 10, "Price": "$139.96", "ProductFriendlyName": null },
            { "Template": "LINE_ITEM", "Id": "dpp_xs_wst_economy", "Count": 1, "TermYears": 1, "Price": "$372.96", "ProductFriendlyName": "Business Email" }],
          "OrderSummarySubTotal": "$1,771.91"
        },
        "NumberOfDomains": 4
      };

    // private functions

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function consoleLog(str) {
      window.console && window.console.log && window.console.log(str);
    }

    function consoleDir(obj) {
      window.console && window.console.dir && window.console.dir(obj);
    }

    function tokenizeViewData(data) {
      pageData = data;
      consoleDir(pageData);

      // Fix up data inconsistencies (a hack based upon data inconsistencies from the .net side)
      // 0a) convert "Email" to "O365" if the ItemPricings contains an o365 offer id
      $.each(data.ConfigSteps, function(idx, item) {
        if(item.Type != 'Email') return;
        var hasO365 = 0 < $.grep(item.ItemPricing.PlanPrices, function(prices,idx){
          return -1 < prices.Id.indexOf('_o365_');
        }).length;
        if(hasO365) {
          item.Type = 'O365';
        }
      });

      // upon successful loading
      // 1) Replace number of domains
      var numberOfDomains = pageData.NumberOfDomains;
      if (numberOfDomains == 1) {
        settings.$domainsAdded1.show();
      } else {
        var template = settings.$domainsAddedX.html();
        var tokenized = template.replace('{0}', numberOfDomains);
        settings.$domainsAddedX.html(tokenized).show();
      }

      // 2) Tokenize the step placards 
      tokenizeStepPlacards();

      // 3) Add Step numbers to step placards
      var showing = $(settings.stepWrapperSelector);
      showing.each(function(idx, item) {
        var span = $(item).find(settings.stepNumberSelector);
        var template = span.html();
        span.html(template.replace('{0}', idx + 1));
      });

      // 4) Tokenize order summary
      tokenizeOrderSummary();
      LogConfigResults(data);
      return;
    }

 function LogConfigResults(data){
     if ('function' === typeof (fbiRecordFastballEvent)) {
    var e = new fbiEventObject(new Object(), "tokenizeViewData", 84427,'');     
    var privacy = data.TmsConfigLogging.displays.Privacy?data.TmsConfigLogging.displays.Privacy:"";     
    var Hosting = data.TmsConfigLogging.displays.Hosting?data.TmsConfigLogging.displays.Hosting:"";
    var Email=data.TmsConfigLogging.displays.Email?data.TmsConfigLogging.displays.Email:"";
     e.AddUserInput("DbpAvailable", data.TmsConfigLogging.conditions.IsDbpAvailable);
     e.AddUserInput("BackorderDbsOnly", data.TmsConfigLogging.conditions.BackorderDbsOnly);
     e.AddUserInput("BusinessOffered", data.TmsConfigLogging.conditions.IsBusinessOffered);
     e.AddUserInput("CertifiedOffered",data.TmsConfigLogging.conditions.IsCertifiedOffered);
     e.AddUserInput("EmailOffered",data.TmsConfigLogging.conditions.IsEmailOffered);
     e.AddUserInput("LocuOffered",data.TmsConfigLogging.conditions.IsLocuOffered);
     e.AddUserInput("O365Offered",data.TmsConfigLogging.conditions.IsO365Offered);
     e.AddUserInput("WebHostingOffered",data.TmsConfigLogging.conditions.IsWebHostingOffered);
     e.AddUserInput("WstOffered",data.TmsConfigLogging.conditions.IsWstOffered);
     e.AddUserInput("Tlds", data.TmsConfigLogging.conditions.Tlds); 
     e.AddUserInput("Privacy", privacy); 
     e.AddUserInput("Hosting", Hosting);
     e.AddUserInput("Email",Email);

     fbiRecordFastballEvent(e);
   console.log(e);
  }
 }
    function tokenize($this, value) {
      if ($this.html() != null)
      {
      var tokenized = $this.html().replace('{0}', value);
      $this.html(tokenized);
      }
    }

    function getPlanPriceById(planPrices, id) {
      if ( planPrices !== undefined && planPrices != null ) {
        var matched = $.grep(planPrices, function(priceItem, idx) {
          return priceItem.Id.toLowerCase() === id.toLowerCase();
        });
        if (matched && matched.length == 1) {
          return matched[0].Price;
        }
      }
      return 'error';
    }

    function tokenizeStepPlacards() {
      var tokenizeStepDataWithCallback = function(name, callback) {
        var stepData = $.grep(pageData.ConfigSteps, function(item, idx) { return item.Type == name; });
        if (stepData && stepData.length > 0 && $.isFunction(callback)) {
          callback(stepData[0]);
        } else {
          // remove the placard from the DOM as it won't be used
          $("#step-" + name.toLowerCase()).remove();
        }
      };
      
      var selectDefaultOrNoThanks = function(idPrefix, planPricesArr) {
        var selectedPlan = $.grep(planPricesArr, function(item,idx){ return item.Selected === true });
        var defaultPlan = $.grep(planPricesArr, function(item,idx){ return item.Default === true });
        var plan = (selectedPlan.length === 0) ? ((defaultPlan.length === 0) ? 'nothanks' : defaultPlan[0].Id ) : selectedPlan[0].Id;
        $('#' + idPrefix + '-' + plan + ' span.radio').addClass('checked');
      }

      var selectDefault = function(idPrefix, planPricesArr) {
        var selectedPlan = $.grep(planPricesArr, function(item,idx){ return item.Selected === true });
        var defaultPlan = $.grep(planPricesArr, function(item,idx){ return item.Default === true });
        var plan = (selectedPlan.length === 0) ? ((defaultPlan.length === 0) ? null : defaultPlan[0].Id ) : selectedPlan[0].Id;
        if (plan != null) {
          $('#' + idPrefix + '-' + plan + ' span.radio').addClass('checked');
        }
      }

      var selectDefaultToggleApply = function(idPrefix, planPricesArr, button) {
        var selectedPlan = $.grep(planPricesArr, function(item,idx){ return item.Selected === true });
        var defaultPlan = $.grep(planPricesArr, function(item,idx){ return item.Default === true });

        var plan = null;
        if ( selectedPlan.length === 0 ) {
          plan = (defaultPlan.length === 0) ? planPricesArr[0].Id : defaultPlan[0].Id;
          toggleApplyButton($(button), false);
        } else {
          //console.log(button); Commented for FOS-23468
          plan = selectedPlan[0].Id;
          toggleApplyButton($(button), true);
        }
        $('#' + idPrefix + '-' + plan + ' span.radio').addClass('checked');
      }

      var selectDropdownDefaultOrNoThanks = function(idPrefix, planPricesArr) {
        var selectedPlan = $.grep(planPricesArr, function(item,idx){ return item.Selected === true });
        var defaultPlan = $.grep(planPricesArr, function(item,idx){ return item.Default === true });
        var plan = (selectedPlan.length === 0) ? ((defaultPlan.length === 0) ? 'no' : defaultPlan[0].Id ) : selectedPlan[0].Id;
        selectDropdownOption($('#' + idPrefix + '-' + plan + '.plan-option'));
      }

      var selectDropdownDefaultToggleApply = function(idPrefix, planPricesArr, button) {
        var selectedPlan = $.grep(planPricesArr, function(item,idx){ return item.Selected === true });
        var defaultPlan = $.grep(planPricesArr, function(item,idx){ return item.Default === true });

        var plan = null;
        if ( selectedPlan.length === 0 ) {
          plan = (defaultPlan.length === 0) ? planPricesArr[0].Id : defaultPlan[0].Id;
          toggleApplyButton($(button), false);
        } else {
          plan = selectedPlan[0].Id;
          toggleApplyButton($(button), true);
        }
        //console.log('#' + idPrefix + '-' + plan + ' .plan-option'); Commented for FOS-23468 
        selectDropdownOption($('#' + idPrefix + '-' + plan + '.plan-option'));
      }

      // PrivacyProtection
      tokenizeStepDataWithCallback(configStepTypes.PRIVACY_PROTECTION, function(data) {
        if ( settings.splitTest1163 == null || settings.splitTest1163 == 'A' || settings.splitTest1163 == 'C' || settings.splitTest1163 == 'D' ) {
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#privacyprotection-' + planPrice.Id + ' p.price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#privacyprotection-' + planPrice.Id + ' p.price span.list-price').html(planPrice.ListPrice);
            }
          });
          if ( settings.splitTest1163 == 'D' ) {
            selectDefaultToggleApply('privacyprotection', data.ItemPricing.PlanPrices, '#privacyprotection-apply div.btn-apply');
          } else {
            selectDefaultOrNoThanks('privacyprotection', data.ItemPricing.PlanPrices);
          }
        } else { // Split Test is B
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#privacyprotection-' + planPrice.Id + ' span.plan-droplist-price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#privacyprotection-' + planPrice.Id + ' p.price span.list-price').html(planPrice.ListPrice);
            }
          });
          var lowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'PrivacyProtection');
          tokenize($('#step-privacyprotection.split-'+settings.splitTest1163.toLowerCase()+' p.lowest-price'), lowestPrice);
          if ( settings.splitTest1163 == 'E' ) {
            selectDropdownDefaultToggleApply('privacyprotection', data.ItemPricing.PlanPrices, '#privacyprotection-apply div.btn-apply');
          } else {
            selectDropdownDefaultOrNoThanks('privacyprotection', data.ItemPricing.PlanPrices);
          }
        }
        $('#step-privacyprotection').show();
      });      

      // LocuPrivacyProtection
      tokenizeStepDataWithCallback(configStepTypes.LOCU_PRIVACY_PROTECTION, function(data) {
        if ( settings.splitTest1163 == null || settings.splitTest1163 == 'A' || settings.splitTest1163 == 'C' || settings.splitTest1163 == 'D' ) {
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#locuprivacyprotection-' + planPrice.Id + ' p.price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#locuprivacyprotection-' + planPrice.Id + ' p.price span.list-price').html(planPrice.ListPrice);
            }
          });
          if ( settings.splitTest1163 == 'D' ) {
            selectDefaultToggleApply('locuprivacyprotection', data.ItemPricing.PlanPrices, '#locuprivacyprotection-apply div.btn-apply');
          } else {
            selectDefaultOrNoThanks('locuprivacyprotection', data.ItemPricing.PlanPrices);
          }
        } else { // Split Test is B
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#locuprivacyprotection-' + planPrice.Id + ' span.plan-droplist-price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#locuprivacyprotection-' + planPrice.Id + ' span.plan-droplist-price span.list-price').html(planPrice.ListPrice);
            }
          });
          var lowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'LocuPrivacyProtection');
          tokenize($('#step-locuprivacyprotection.split-'+settings.splitTest1163.toLowerCase()+' p.lowest-price'), lowestPrice);
          if ( settings.splitTest1163 == 'E' ) {
            selectDropdownDefaultToggleApply('locuprivacyprotection', data.ItemPricing.PlanPrices, '#locuprivacyprotection-apply div.btn-apply');
          } else {
            selectDropdownDefaultOrNoThanks('locuprivacyprotection', data.ItemPricing.PlanPrices);
          }
        }
        $('#step-locuprivacyprotection').show();
      }); 

      // BusinessProtection
      tokenizeStepDataWithCallback(configStepTypes.BUSINESS_PROTECTION, function(data) {
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#businessprotection-' + planPrice.Id + ' p.price'), planPrice.Price);
        });
        selectDefaultOrNoThanks('businessprotection', data.ItemPricing.PlanPrices);
        $('#step-businessprotection').show();
      });

      // BusinessAndCertified
      tokenizeStepDataWithCallback(configStepTypes.BUSINESS_AND_CERTIFIED, function(data) {
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#businessandcertified-' + planPrice.Id + ' p.price'), planPrice.Price);
        });
        selectDefaultOrNoThanks('businessandcertified', data.ItemPricing.PlanPrices);
        $('#step-businessandcertified').show();
      });

      // WebSiteBuilderAndHosting
      tokenizeStepDataWithCallback(configStepTypes.WEBSITEBUILDER_AND_HOSTING, function(data) {
        // tokenize the radio button prices
        var buildPricings = $.grep(data.ItemPricing.PlanPrices, function(item,idx){ 
          return -1 < $.inArray(item.Id, ['dpp_xs_wst_economy', 'dpp_xs_wst_deluxe', 'dpp_xs_wst_premium']);
        });
        
        var hostPricings =  $.grep(data.ItemPricing.PlanPrices, function(item,idx){ 
            return -1 < $.inArray(item.Id, ['dpp_xs_hosting_diablo_economy_linux', 'dpp_xs_hosting_diablo_deluxe_linux', 'dpp_xs_hosting_diablo_ultimate_linux', 'dpp_xs_hosting_economy_linux', 'dpp_xs_hosting_deluxe_linux', 'dpp_xs_hosting_ultimate_linux']);
        });
         /*For doing a strike out on the prices on split A
        if(settings.splitTest1167 == 'A')
        {
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#websitebuilderandhosting-' + planPrice.Id + ' p.price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#websitebuilderandhosting-' + planPrice.Id + ' p.price span.list-price').html(planPrice.ListPrice);
            }
          });
        }*/
        if(settings.splitTest1167 == 'B')
        {
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
           // console.log(planPrice); Commented for FOS-23468 
            tokenize($('#websitebuilderandhosting-' + planPrice.Id + ' span.plan-droplist-price'), planPrice.Price);
            if ( planPrice.ListPrice !== undefined ) {
              $('#websitebuilderandhosting-' + planPrice.Id + ' span.list-price').html(planPrice.ListPrice);
            }
          });
          selectDropdownDefaultOrNoThanks('websitebuilderandhosting', buildPricings);
          selectDropdownDefaultOrNoThanks('websitebuilderandhosting', hostPricings);
        }
        else if (settings.splitTest1167 == 'A'){
          $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
            tokenize($('#websitebuilderandhosting-' + planPrice.Id + ' p.price'), planPrice.Price);
          });
          selectDefault('websitebuilderandhosting', buildPricings);
          selectDefault('websitebuilderandhosting', hostPricings);
        }
        //lowest price "build"
        var buildLowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'WebsiteBuilder');
        tokenize($('#buildmywebsite p.price'), buildLowestPrice);

        //lowest price "host"
        var hostLowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'Hosting');
        tokenize($('#hostmywebsite p.price'), hostLowestPrice);

        var $checkboxBuild = settings.$buildmywebsite.find('p.checkbox span.icon');
        var $checkboxHost = settings.$hostmywebsite.find('p.checkbox span.icon');

        if (data.DefaultSelection == 'wsb') {
          // check the checkbox and open the correct side of the panel
          $checkboxBuild.addClass('checked');
          if(settings.splitTest1167 != 'B')
            openOrCloseWebSiteBuilderPlacard($checkboxBuild, $checkboxHost);
        }

        if (data.DefaultSelection == 'hosting') {
          // check the checkbox and open the correct side of the panel
          $checkboxHost.addClass('checked');
          if(settings.splitTest1167 != 'B')
            openOrCloseHostingPlacard($checkboxBuild, $checkboxHost);
        }

        wireupWsbAndHostingOptions();
        $('#step-websitebuilderandhosting').show();
      });

      // WebsiteBuilder
      tokenizeStepDataWithCallback(configStepTypes.WEBSITEBUILDER, function(data) {
        // tokenize the radio button prices
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#websitebuilder-' + planPrice.Id + ' p.price'), planPrice.Price);
        });

        //lowest price "build"
        var buildLowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'WebsiteBuilder');
        tokenize($('#step-websitebuilder div.section.left p.price'), buildLowestPrice);

        // default option
        selectDefault('websitebuilder', data.ItemPricing.PlanPrices);
        $('#step-websitebuilder').show();
      });

      // Hosting
      tokenizeStepDataWithCallback(configStepTypes.HOSTING, function(data) {
        // tokenize the radio button prices
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#hosting-' + planPrice.Id + ' p.price'), planPrice.Price);
        });

        //lowest price "host"
        var hostLowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'Hosting');
        tokenize($('#step-hosting div.section.left p.price'), hostLowestPrice);

        // default option
        selectDefault('hosting', data.ItemPricing.PlanPrices);
        $('#step-hosting').show();
      });

      // Term
      tokenizeStepDataWithCallback(configStepTypes.TERM, function(data) {
        if(!data.Term.TermsItems || data.Term.TermsItems.length==0) {
          displayError();
          return;
        }
        var $list = $('#year-plan-list');
        var oneYearTemplate = $('#one-year-template').html();
        $('#one-year-template').remove(); // clean the dom for the select logic to work better
        var nYearsTemplate = $('#n-years-template').html();
        $('#n-years-template').remove(); // clean the dom for the select logic to work better
        var defaultDuration = data.Term.DefaultTerm;
        // ensure defaultDuration is in list of items, if not default to first one
        var defaultTermItem = $.grep(data.Term.TermsItems, function(item,idx){return item.Duration == defaultDuration});
        if(defaultTermItem.length==0) {
          defaultTermItem = data.Term.TermsItems[0]; // select the first item in the list if no duraction can be found
          defaultDuration = defaultTermItem.Duration;
        }
        $.each(data.Term.TermsItems, function(idx, term) {
          var tokenized = term.Duration == 1 ? oneYearTemplate : nYearsTemplate.replace('{0}', term.Duration);
          var $div = $(tokenized);
          $div.data('id', term.Id);
          if (term.Duration == defaultDuration) {
            $div.addClass('plan-option-selected');
            $('#year_plan div.plan-droplist-selected span').html($div.find('span.title').html());
          }
          $list.append($div);
        });
        $('#step-term').show();
      });

      // Email
      tokenizeStepDataWithCallback(configStepTypes.EMAIL, function(data) {
        // tokenize the dropdown prices
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#email-' + planPrice.Id + ' span.plan-droplist-price'), planPrice.Price);
        });
        //lowest price 
        var lowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'Email');
        tokenize($('.droplist-steptype-low-price'), lowestPrice);
        selectDropdownDefaultOrNoThanks('email', data.ItemPricing.PlanPrices);
        $('#step-email').show();
      });

      // Office 365
      tokenizeStepDataWithCallback(configStepTypes.O365, function(data) {
        // tokenize the dropdown prices
        $.each(data.ItemPricing.PlanPrices, function(idx, planPrice) {
          tokenize($('#o365-' + planPrice.Id + ' span.plan-droplist-price'), planPrice.Price);
        });
        //lowest price 
        var lowestPrice = getPlanPriceById(data.ItemPricing.LowesetPrices, 'Email');
        tokenize($('.droplist-steptype-low-price'), lowestPrice);
        selectDropdownDefaultOrNoThanks('o365', data.ItemPricing.PlanPrices);
        $('#step-o365').show();
      });
      
      // remove the separator from the last step
      $("div.step-separator:last").remove();
    }

    function tokenizeOrderSummary() {

      // for split test 1177 side for Side A don't tokenize the summary
      if(settings.splitTest1177 === 'A') {
        return;
      }
      // updates the ordersummary on the page      
      var getOrderSummaryItemDiv = function(html) {
        return $('<div class="order-summary-item" />').html(html);
      };

      settings.$orderSummaryItemsDiv.empty();

      /* Template Types: DOMAIN, DOMAIN_FEE, DOMAIN_BUNDLE, LINE_ITEM */
      var items = pageData.OrderSummary.OrderSummaryItems;      

      // TLD listing with terms 
      var tlds = $.grep(items, function(item, idx) { return item.Template === 'DOMAIN' || item.Template === 'DOMAIN_FEE'; });
      $(tlds).each(function(idx, item) {
        var tldTemplate = (item.Template === 'DOMAIN')
          ? settings.$orderSummary.find(settings.osTldTemplateSelector).html()
          : settings.$orderSummary.find(settings.osTldFeeTemplateSelector).html();
        var tokenized = tldTemplate
          .replace('{0}', item.TermYears)
          .replace('{1}', item.Count)
          .replace('{2}', item.ProductFriendlyName)
          .replace('{3}', item.Price);
        var $div = getOrderSummaryItemDiv(tokenized);
        if (item.Count > 1) {
          $div.find('.number-domains').show();
        }
        if (item.TermYears < 1) {
          $div.find('.term').html('&nbsp;');
        }
        settings.$orderSummaryItemsDiv.append($div);
      });

      // Bundles
      var bundle = $.grep(items, function(item, idx) { return item.Template === 'DOMAIN_BUNDLE'; });
      if (bundle.length > 0) {
        // only one bundle can be sent!
        var bundleTemplate = settings.$orderSummary.find(settings.osBundleTemplateSelector).html();
        var tokenized = bundleTemplate
          .replace('{0}', bundle[0].TermYears)
          .replace('{1}', bundle[0].Price);
        var $div = getOrderSummaryItemDiv(tokenized);
        settings.$orderSummaryItemsDiv.append($div);
      }

      // Item templates      
      var lineItemTemplate = settings.$orderSummary.find(settings.osItemTemplateSelector).html();
      var lineItems = $.grep(items, function(item, idx) { return item.Template === 'LINE_ITEM'; });
      $(lineItems).each(function(idx, item) {
        var pfn = item.ProductFriendlyName;
        if (!pfn || pfn == null || pfn.length == 0) {
          pfn = settings.normalizedNames[item.Id];
        }
        var tokenized = lineItemTemplate
          .replace('{0}', item.TermYears)
          .replace('{1}', item.Count)
          .replace('{2}', pfn)
          .replace('{3}', item.Price);
        var $div = getOrderSummaryItemDiv(tokenized);
        if (item.Count > 1) {
          $div.find('.number-domains').show();
        }
        settings.$orderSummaryItemsDiv.append($div);
      });

      // Update Subtotal
      settings.$subtotalSpan.html(pageData.OrderSummary.OrderSummarySubTotal);
    }

    function addSpinner() {
      // consoleLog('TODO addSpinner ' + settings.waitSpinnerText);
    }

    function removeSpinner() {
      // consoleLog('TODO removeSpinner ' + settings.waitSpinnerText);
    }

    function displayError(msg) {
      $('#error-modal > div.error-modal-message').hide();
      $('#error-modal').parent().find('.universal-modal-close').show();
      if (msg) {
        $('#error-modal > div.error-modal-message.alternate').html(msg).show();
      } else {
        $('#error-modal > div.error-modal-message.default').show();
      }
      $('#error-modal').find('')
      $('#error-modal').modal({
        overlayId: 'g-modal-overlay',
        autoPosition: true
      });
    }

    function getUserSelections() {
      var getDataObjectId = function(selector) {
        var data = $(selector).data();
        return data ? data.id : null;
      };

      var addToItemList = function(id) {
        if (id && id.length > 0 && id !== 'no') {
          selectedItemIdsToPost.push(id);
        }
      }

      var selectedItemIdsToPost = [];
      if ( settings.splitTest1163 == null || settings.splitTest1163 == 'A' || settings.splitTest1163 == 'C' ) {
        //  'PrivacyProtection'
        addToItemList(getDataObjectId('#step-privacyprotection span.checked'));
        //  'LocuPrivacyProtection'
        addToItemList(getDataObjectId('#step-locuprivacyprotection span.checked'));
      } else if ( settings.splitTest1163 == 'D' ) { // Split test is B
        if ( $('#step-privacyprotection').length > 0 && $('#step-privacyprotection .btn-apply').hasClass('action-added') ) {
          //  'PrivacyProtection'
          addToItemList(getDataObjectId('#step-privacyprotection span.checked'));
        } else if ( $('#step-locuprivacyprotection').length > 0 && $('#step-locuprivacyprotection .btn-apply').hasClass('action-added') ) {
          //  'LocuPrivacyProtection'
          addToItemList(getDataObjectId('#step-locuprivacyprotection span.checked'));
        } else {
          addToItemList('dpp_no_selection_bundle');
        }
      } else if ( settings.splitTest1163 == 'E' ) { // Split test is B
        if ( $('#step-privacyprotection').length > 0 && $('#step-privacyprotection .btn-apply').hasClass('action-added') ) {
          //  'PrivacyProtection'
          addToItemList(getDataObjectId('#privacyprotection-list div.plan-option-selected'));
        } else if ( $('#step-locuprivacyprotection').length > 0 && $('#step-locuprivacyprotection .btn-apply').hasClass('action-added') ) {
          //  'LocuPrivacyProtection'
          addToItemList(getDataObjectId('#locuprivacyprotection-list div.plan-option-selected'));
        } else {
          addToItemList('dpp_no_selection_bundle');
        }
      } else { // Split test is B
        //  'PrivacyProtection'
        addToItemList(getDataObjectId('#privacyprotection-list div.plan-option-selected'));
        //  'LocuPrivacyProtection'
        addToItemList(getDataObjectId('#locuprivacyprotection-list div.plan-option-selected'));
      }
      //  'BusinessProtection,'
      addToItemList(getDataObjectId('#step-businessprotection span.checked'));
      //  'BusinessAndCertified'
      addToItemList(getDataObjectId('#step-businessandcertified span.checked'));
      //  'Term'
      addToItemList(getDataObjectId('#year-plan-list div.plan-option-selected'));
      
      //  'WebSiteBuilderAndHosting'
      if(settings.splitTest1167 == null || settings.splitTest1167 == 'A')
      {
        if ($('#buildmywebsite p span.icon').hasClass('checked')) {
          addToItemList(getDataObjectId('#buildmywebsite-options span.checked'));
        }
        if ($('#hostmywebsite p span.icon').hasClass('checked')) {
          addToItemList(getDataObjectId('#hostmywebsite-options span.checked'));
        }
      }
      else if (settings.splitTest1167 == 'B')
      {
        if ($('#buildmywebsite p span.icon').hasClass('checked')) {
          addToItemList(getDataObjectId('#websitebuilder-list div.plan-option-selected'));
        }
        if ($('#hostmywebsite p span.icon').hasClass('checked')) {
          addToItemList(getDataObjectId('#hosting-list div.plan-option-selected'));
        }
      }

      //  'WebsiteBuilder'
      addToItemList(getDataObjectId('#step-websitebuilder span.checked'));
      //  'Hosting'
      addToItemList(getDataObjectId('#step-hosting span.checked'));
      //  'Email'
      addToItemList(getDataObjectId('#email-list div.plan-option-selected'));
      //  'o365'
      addToItemList(getDataObjectId('#o365-list div.plan-option-selected'));

      consoleDir(selectedItemIdsToPost);
      return selectedItemIdsToPost;
    }


    var handleErrorByRedirect = function() {
      // redirect the user to search 
      // (per verbal dicussion with .net engineers and marketing 1/10/2014)
      window.location = settings.errorRedirectUrl;
    };

    function loadViewData(callback) {
      // grabs the page's view date upon initial load
      addSpinner();
      var url = settings.apiUrlLoad;
      $.getJSON(url, function(data) {
        if (data.NumberOfDomains == 0) {
          var canUseMock = getParameterByName('mock').length > 0;

          if (canUseMock) {
            consoleLog("Using Mock Data");
            tokenizeViewData(mockData);
          } else {
            handleErrorByRedirect();
          }
        } else {
          tokenizeViewData(data);
        }

        callback();
      }).error(function(jqxhr, textStatus, error) {
        handleErrorByRedirect();
      })
      .complete(function() {
        removeSpinner();
      });
    }


    function saveData() {
      // calls the API to change the data in the order summary
      // returns a new view data object in which the orderSummary is refreshed with new data
      var postData = {
        selections: JSON.stringify(getUserSelections())
      };

      consoleLog(postData);

      addSpinner();

      var url = settings.apiUrlUpdate;
      $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: postData,
        success: function(data) {
          consoleDir(data);
          if (!data || data == null || !data.OrderSummaryItems || data.OrderSummaryItems == null || data.OrderSummaryItems.length == 0) {
            var canUseMock = getParameterByName('mock').length > 0;
            if (canUseMock) {
              pageData.OrderSummary = mockData.OrderSummary;
            } else {
              handleErrorByRedirect();
              return;
            }
          } else {
            pageData.OrderSummary = data;
          }
          tokenizeOrderSummary();
        }
      }).error(function(jqxhr, textStatus, error) {
        displayError(settings.ajaxErrorText);
      }).complete(function() {
        removeSpinner();
      });
    }

    function continueToCart() {
      addSpinner();

      var postData = {
        selections: JSON.stringify(getUserSelections())
      };

      var url = settings.apiUrlToCart;
      $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: postData,
        success: function(data) {
          if (data.NextStepUrl) {
            window.location = data.NextStepUrl;
            return;
          }
          displayError(settings.ajaxErrorText);
        }
      }).error(function(jqxhr, textStatus, error) {
        displayError(settings.ajaxErrorText);
      }).complete(function() {
        removeSpinner();
      });
    }

    function fixOrderSummary() {
      $(window).scroll(function() {
        updateOrderSummaryPosition();
      });
      $(window).resize(function() {
        updateOrderSummaryPosition();
      });
      updateOrderSummaryPosition();


    }

    function updateOrderSummaryPosition() {
      var paddingTop = 20/* for prettiness when scrolling */,
        scrollTop = $(window).scrollTop(),
        topStep1 = $("div.step:first").offset().top,
        topOfWindowAboveTopOfStep1 = (scrollTop <= (topStep1 - paddingTop)),
        $footer = settings.$orderSummary.find('p.summary-footer'),
        showFooter = function(){ $footer.css('visibility','visible'); },
        hideFooter = function(){ $footer.css('visibility','hidden'); };
      


      if (topOfWindowAboveTopOfStep1) {
        // keep the top of the summary at 0
        showFooter();
        settings.$orderSummary.css('top', '0px');
      } else {
        //check for if summary can fit without going below the bottom of the last step

        var proposedNewTop = scrollTop - (topStep1 - paddingTop),
          proposedNewBottom = proposedNewTop + settings.$orderSummary.height(),
          $lastStep = $("div.step:last"),
          bottomOfLastStep = $lastStep.offset().top + $lastStep.height() - topStep1,
          canFit = (proposedNewBottom <= bottomOfLastStep);
        if (canFit) {
          // keep top of summary at top of scrolling window in view for the user
          showFooter();
          settings.$orderSummary
            .css('top', proposedNewTop + 'px');
        } else {
          // affix the summary so the bottom lines up with the bottom of the last step
          hideFooter();
          var topForBottomAligned = bottomOfLastStep - settings.$orderSummary.height();
          settings.$orderSummary
            .css('top', topForBottomAligned + 'px');
        }
      }
    }


    function wireupAllRadioButtons() {
      $('div.step:not(.allow-radio-unselect) h3 span.radio').click(function(event) {
        $(this).parents('.section').find("span.radio.checked").removeClass("checked");
        $(this).addClass('checked');
        if ( settings.splitTest1163 == 'D' ) {
          var $button = $(this).parents('div.section').find('div.btn-apply');
          if ( $button.length > 0 ) {
            toggleApplyButton($button, false);
          }
        }
        saveData(this);
      });
      $('div.step.allow-radio-unselect h3 span.radio').click(function(event) {
        if ($(this).hasClass('checked')) {
          $(this).removeClass("checked");
        } else {
          $(this).parents('.section').find("span.radio.checked").removeClass("checked");
          $(this).addClass('checked');
        }
        saveData(this);
      });
    }

    function wireupWsbAndHostingOptions() {

    }

    function setDroplistZIndex (){
      var $selects = $('.plan-droplist-select');
      $selects.each(function(index){
        $(this).css('z-index',$selects.length - index + 20);
      })
    }

    function openOrCloseWebSiteBuilderPlacard($checkboxBuild, $checkboxHost) {
      if ($checkboxBuild.hasClass('checked')) {
        settings.$hostmywebsite.removeClass('open').hide();
        settings.$buildmywebsiteOptions.show();
        settings.$or.hide();
      } else {
        settings.$hostmywebsite.addClass('open').show();
        settings.$buildmywebsite.show();
        settings.$or.show();
      }
    }

    function openOrCloseHostingPlacard($checkboxBuild, $checkboxHost) {
      if ($checkboxHost.hasClass('checked')) {
        settings.$buildmywebsite.hide();
        settings.$hostmywebsiteOptions.show();
        settings.$buildandhostflag.hide();
        settings.$or.hide();
      } else {
        settings.$hostmywebsite.show();
        settings.$buildmywebsite.show();
        settings.$buildandhostflag.show();
        settings.$or.show();
      }
    }

    function wireupWebSiteBuilderHostingPlacard() {
      var $checkboxBuild = settings.$buildmywebsite.find('p.checkbox span.icon');
      var $checkboxHost = settings.$hostmywebsite.find('p.checkbox span.icon');
      if(settings.splitTest1167 == 'B'){
        settings.$hostmywebsiteOptions.hide();
        settings.$buildmywebsiteOptions.hide();
        settings.$hostmywebsite.show();
        settings.$or.show();
        $checkboxBuild.click(function(event) {
          checkWSBHostingCheckbox(false);
          saveData(this);
        });

        $checkboxHost.click(function(event) {
          checkWSBHostingCheckbox(true);
          saveData(this);
        });
      }
      else{
        $checkboxBuild.click(function(event) {
          settings.$hostmywebsiteOptions.hide();
          settings.$buildmywebsiteOptions.hide();
          checkWSBHostingCheckbox(false);
          openOrCloseWebSiteBuilderPlacard($checkboxBuild, $checkboxHost);
          saveData(this);
        });

        $checkboxHost.click(function(event) {
          settings.$hostmywebsiteOptions.hide();
          settings.$buildmywebsiteOptions.hide();
          checkWSBHostingCheckbox(true);
          openOrCloseHostingPlacard($checkboxBuild, $checkboxHost);
          saveData(this);
        });
      }
    }

    function checkWSBHostingCheckbox(hosting) {
      var $checkboxBuild = settings.$buildmywebsite.find('p.checkbox span.icon');
      var $checkboxHost = settings.$hostmywebsite.find('p.checkbox span.icon');
      
      if ( hosting ) {
        if ( !$checkboxHost.hasClass('checked') ) {
          $checkboxBuild.removeClass('checked');
          $checkboxHost.addClass('checked');
        } else {
          $checkboxHost.removeClass('checked');
        }
      } else {
        if ( !$checkboxBuild.hasClass('checked') ) {
          $checkboxBuild.addClass('checked');
          $checkboxHost.removeClass('checked');
        } else {
          $checkboxBuild.removeClass('checked');
        }
      }
    }

    function wireupPlanDropdowns() {
      $("div.plan-droplist-select").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".plan-droplist:visible").toggle();
        $(this).find(".plan-droplist").toggle();
        return false;
      });

      $(document).click(function() {
        $(".plan-droplist").hide();
      });

      $(".plan-droplist").hover(function() {}, function() {
        $(this).hide();
      });
      // hide the pricing information until something is shown
      $('div.plan-droplist-selected').find('span.price').hide();

      // when they select an option, update the one selected item
      $(document).ready(function() {
        $("div.plan-droplist").delegate("div.plan-option", "click", function(event) {
          event.stopPropagation();
          event.preventDefault();
          
          var $chkbx = $(this).parents('.split').find('.checkbox > span.icon');
          if($chkbx.length > 0 && !($chkbx.hasClass('checked')))
          {
            if ( $chkbx.parents('#hostmywebsite').length > 0 ) {
              checkWSBHostingCheckbox(true);
            } else {
              checkWSBHostingCheckbox(false);
            }
          }
          selectDropdownOption($(this));
          if ( settings.splitTest1163 == 'E' ) {
            var $button = $(this).parents('div.section').find('div.btn-apply');
            if ( $button.length > 0 ) {
              toggleApplyButton($button, false);
            }
          }
          saveData(this);
          $(".plan-droplist:visible").toggle();
          return false;
        });
      });
    }

    function wireupApplyButtons() {
      $("div.btn-apply").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        toggleApplyButton($(this));
        saveData(this);
        return false;
      });
    }

    function toggleApplyButton(button, added) {
      if ( added === undefined || added == null ) {
        button.toggleClass('flt-btn-grn flt-btn action-added btn-sec weight-bold');
      } else if ( added == true ) {
        button.removeClass('flt-btn-grn flt-btn').addClass('action-added btn-sec weight-bold');
      } else {
        button.removeClass('action-added btn-sec weight-bold').addClass('flt-btn-grn flt-btn');
      }

      if ( button.hasClass('action-added') ) {
        button.html('<span class="checkmark small"></span>'+settings.applyButtonAddedText+'<span class="remove">'+settings.applyButtonRemoveText+'</span>');
      } else {
        button.html(settings.applyButtonApplyText);
      }
    }

    function selectDropdownOption($option) {
      if ( $option !== undefined && $option != null && $option.length > 0 ) {
        $option.parent().find('div.plan-option.plan-option-selected').removeClass('plan-option-selected'); // clear all of the dropdown options
        $option.addClass('plan-option-selected'); // only add the class to the selected one

        // put the selected name into the top row
        var $dropdownSelectedDispay = $option.parents('div.plan-droplist-select').find('div.plan-droplist-selected');
        var selectedTitle = $option.find('span.title').html();
        $dropdownSelectedDispay.find('span:first').html(selectedTitle);

        // appends on a price if it can find one;
        var $priceSpan = $option.find('span.plan-droplist-price');
        if ($priceSpan.length == 0) {
          $dropdownSelectedDispay.find('span.price').hide();
        } else {
          var selectedPrice = $priceSpan.html();
          $dropdownSelectedDispay.find('span.price').show().html('- ' + selectedPrice);
        }
      }
    }

    function updateStepNumbers() {
      $("div.step:visible").each(function(index, step) {
        $("h2.flag .step_number", step).html(index + 1);
      });
    }

    function setupErrorsModal() {
      $('#error-modal .g-modal-close').click(function() {
        $.modal.close();
      });
    }

    function setupLimitationsModal() {
      $('#g-modal .g-modal-close').click(function() {
        $.modal.close();
      });
      $("#limitations-link").click(function() {
        $("#g-modal").modal({
          overlayId: "g-modal-overlay",
          close: "false",
          autoPosition: "true"
        });
      });
    }

    function wireupCiCodes() {
      $('[data-ci]').click(function(e) {
        var cicode = $(this).data('ci');
        if (cicode) {
          if (typeof(FastballEvent_MouseClick) !== "undefined") {
            FastballEvent_MouseClick(e, cicode, $(this)[0], "a");
          }
        }
      });
    }

    function setupAjax() {
      // don't cache any AJAX calls
      $.ajaxSetup({ cache: false });

      // setup the page spinner (cursor: wait) when an AJAX call is happening
      $("html").bind("ajaxStart", function() {
        $(this).addClass('busy');
      }).bind("ajaxStop", function() {
        $(this).removeClass('busy');
      });
    }

    // PUBLIC functions
    this.Initialize = function(options) {
      // OVERRIDE DEFAULTS TO BUILD THE SETTINGS 
      settings = $.extend({}, defaults, options);

      setupAjax();
      setupLimitationsModal();
      setupErrorsModal();

      wireupPlanDropdowns();
      wireupApplyButtons();
      setDroplistZIndex();
      
      loadViewData(function() {
        fixOrderSummary();
        wireupAllRadioButtons();
        wireupWebSiteBuilderHostingPlacard();

        // wire up continue to cart button
        $('#btn-continue-to-cart, #serp-header > a').click(continueToCart);

        wireupCiCodes();
      });

    };
  };
}

domains.controls.domainConfigurationClient = new domains.controls.cds_domain_configuration();