gbl.ns.register('domains.controls');

if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str) {
    return this.indexOf(str) == 0;
  };
}

if (!domains.controls.cds_gtld_registration) {
  domains.controls.cds_gtld_registration = function() {
    "use strict";
    // instance variables
    var settings = {},
      defaults = {
        $currentDomainNameDiv: $('#current-domain-name'),
        $cancelBtn: $('#registration-cancel-btn'),
        $continueBtn: $('#registration-continue-btn'),
        $searchAgainBtn: $('#registration-search-btn'),
        $smdFileDiv: $('#upload-smd-file'),
        $spinnerArea: $('#main-wrap'),
        $dppArea: $('#eligibility-form'),
        $claimsArea: $('#claims-form'),
        $trusteeArea: $('#trustee-form'),
        $trademarkArea: $('#trademark-owner'),
        $headerArea: $('#head-wrap'),
        $bodyArea: $('#body-wrap'),
        $errorArea: $('#msgError'),
        $ukDomainsList: $('#uk-domains-list'),
        $ukForm: $('#uk-form'),
        $ukAlertClose: $('#uk-alert-close'),
        $ukAlertForm: $('#uk-alert'),
        activeBtnCss: 'flt-btn-orng',
        inactiveContinueBtnCss: 'flt-btn-inactive-orng',
        inactiveCancelBtnCss: 'flt-btn-inactive-grey',
        monitorMs: 250,
        apiUrl: '{siteurl}/api/tui/{action}/{domainname}/{regapptoken}',
        waitSpinnerText: 'Loading...',
        ajaxErrorText: 'Ajax error!',
        genericErrorText: 'An unknown error occurred.',
        domainExtension: '',
        registrationInformationText: '',
        formValidationError: '',
        continueBtnText: 'Continue',
        cancelBtnText: 'Cancel',
        removeDomainText: 'Remove Domain',
        acknowledgeText: 'Acknowledge Claim',
        chooseOptionText: 'chooseOption'
      },
      currentDomain,
      currentDomainName,
      currentDomainTLD,
      currentFormType,
      actionsEnum = {
        getNext: 1,
        remove: 2,
        add: 3,
        validate: 4
      };

    // PRIVATE function

    function consoleLog(str) {
      window.console && window.console.log && window.console.log(str);
    }

    function consoleDir(obj) {
      window.console && window.console.dir && window.console.dir(obj);
    }

    function displayError(err) {
      consoleLog(err);
      settings.$headerArea.show();
      settings.$errorArea.html(err ? err : settings.genericErrorText);
      require("starfield/sf.alerts", function() {
        settings.$errorArea.sfAlert();
      });
    }

    function appendQueryString(url, qstring) {
      var queryStringDelimiter = "?";
      if (url.indexOf("?") >= 0) {
        queryStringDelimiter = "&";
      }
      return url + queryStringDelimiter + qstring;
    }

    function showSpinner(msg) {
      require("starfield/sf.msg.overlay", function() {
        settings.$spinnerArea.sfMsgOverlay({
          message: msg,
          style: 'progress'
        });
      });
    }

    function removeSpinner() {
      require("starfield/sf.msg.overlay", function() {
        settings.$spinnerArea.sfMsgOverlay({ message: null });
      });
    }

    function setCancelButtonText(text) {
      settings.$cancelBtn.html(text);
    }

    function setContinueButtonText(text) {
      settings.$continueBtn.html(text);
    }

    function callWebService(actionType) {
      showSpinner(settings.waitSpinnerText);
      removeErrors();

      var url = '';
      if (actionType == actionsEnum.getNext) {
        url = settings.apiUrlNext;
      } else if (actionType == actionsEnum.remove) {
        url = settings.apiUrlCancel.replace('{0}', encodeURIComponent(currentDomain));
      } else if (actionType == actionsEnum.add) {
        url = settings.apiUrlAdd.replace('{0}', encodeURIComponent(currentDomain));
        url = appendQueryString(url, 'regapptoken=' + encodeURIComponent(TUI.AppToken));
      } else if (actionType == actionsEnum.validate) {
        url = settings.apiUrlValidate.replace('{0}', encodeURIComponent(currentDomain));
        url = appendQueryString(url, serializeCurrentDomain());
      }

      $.getJSON(url, handleTuiInfo)
        .error(function(jqxhr, textStatus, error) {
          removeSpinner();
          displayError(settings.ajaxErrorText);
        })
        .complete(function() {
          // wireup cancel button
          settings.$cancelBtn.unbind().click(function() { callWebService(actionsEnum.remove); });
          settings.$cancelBtn.removeClass(settings.inactiveCancelBtnCss);
        }
        );
    }

    function handleTuiInfo(data) {
      /*var testJson = '{"DomainName":"49ers.guru","FormType":"claims","FormHtml":"{\"0\":{\"Type\":\"Label\",\"Name\":\"tui-claimhtml-claims-49ers.guru\",\"Value\":\"\\u003cdiv class=\\\"sf-accordion-inner\\\"\\u003e  \\u003cdiv class=\\\"disclaimer-container\\\" data-hash=\\\"Tuy9JceYpVcZ2N4slwJkI5qTYCmtR6cTCGPDUcq9fwqQSUYOmkMnE4qxmNlXmNll\\\" style=\\\"overflow-y: auto;\\\"\\u003e    \\u003cp class=\\\"text-center\\\"\\u003e\\u003cstrong\\u003e\\u003cu\\u003e\\u003c/u\\u003e\\u003c/strong\\u003e\\u003c/p\\u003e    \\u003cp\\u003e          \\u003c/p\\u003e    \\u003cp\\u003e\\u003cstrong\\u003e\\u003cem\\u003e\\u003c/em\\u003e\\u003c/strong\\u003e\\u003c/p\\u003e    \\u003cp\\u003e          \\u003c/p\\u003e    \\u003cp\\u003e\\u003c/p\\u003e      \\u003cdiv\\u003e        \\u003ctable class=\\\"claim-table\\\"\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e1.\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003eMark:\\u003c/td\\u003e            \\u003ctd\\u003e49ERS\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003eJurisdiction:\\u003c/td\\u003e            \\u003ctd\\u003eUnited States of America\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd colspan=\\\"2\\\"\\u003eGoods and Services:\\u003c/td\\u003e            \\u003ctd\\u003e\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eIC 025. US 022 039. G \\u0026amp; S: Men\\u0026#39;s, women\\u0026#39;s and children\\u0026#39;s clothing, namely, fleece tops and bottoms, headwear, caps, knit hats, t-shirts, sweatshirts, shorts, tank tops, pants, jackets, turtlenecks, golf shirts, woven shirts, knit shirts, jerseys, wristbands, raincoats, parkas, gloves, ties, cloth bibs, sleepwear, namely, robes, pajamas, aprons, headbands and underwear, used in connection with the sport of professional football. FIRST USE: 19830930. FIRST USE IN COMMERCE: 19830930\\u003c/td\\u003e          \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd colspan=\\\"2\\\"\\u003eInternational Class of Goods and Services or Equivalent if applicable:\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003e25 - Clothing, footwear, headgear. \\u003c/td\\u003e            \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd colspan=\\\"2\\\"\\u003eTrademark Registrant:\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eOrganization: FORTY NINERS FOOTBALL COMPANY LLC\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eAddress: 4949 Centennial Boulevard\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eCity: santa clara\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eState: ca\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e     
       \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003ePostal Code: 95054\\u003c/td\\u003e          \\u003c/tr\\u003e          \\u003ctr\\u003e            \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e            \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e            \\u003ctd\\u003eCountry: US\\u003c/td\\u003e          \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd colspan=\\\"2\\\"\\u003eTrademark Registrant Contact:\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eName: Matt Serlin\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eOrganization: MarkMonitor Inc.\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eAddress: 391 N. Ancestor Pl.\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eCity: Boise\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eState: Idaho\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003ePostal Code: 83704\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eCountry: US\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003ePhone: +1.2083895740\\u003c/td\\u003e            \\u003c/tr\\u003e            \\u003ctr\\u003e              \\u003ctd class=\\\"col1\\\"\\u003e\\u003c/td\\u003e              \\u003ctd class=\\\"col2\\\"\\u003e\\u003c/td\\u003e              \\u003ctd\\u003eEmail: registry.admin@markmonitor.com\\u003c/td\\u003e            \\u003c/tr\\u003e        \\u003c/table\\u003e      \\u003c/div\\u003e  \\u003c/div\\u003e\\u003c/div\\u003e\",\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"1\":{\"Type\":\"Hidden\",\"Name\":\"tui-claimxml-claims-49ers.guru\",\"Value\":null,\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"2\":{\"Type\":\"Hidden\",\"Name\":\"tui-acceptedDate\",\"Value\":\"2014-01-27T19:43:30.7439339Z\",\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"3\":{\"Type\":\"Hidden\",\"Name\":\"tui-acceptedDate-novalidate\",\"Value\":null,\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"4\":{\"Type\":\"Hidden\",\"Name\":\"tui-clientapp\",\"Value\":\"fos\",\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"5\":{\"Type\":\"Hidden\",\"Name\":\"tui-tld\",\"Value\":\"guru\",\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null},\"6\":{\"Type\":\"Hidden\",\"Name\":\"tui-phase\",\"Value\":\"er1\",\"LabelText\":null,\"DescriptionText\":null,\"ItemCollection\":null}}","NextStepUrl":null,"FormJson":null}';
      var testHtml = {"t9standvalidate.PREMIUMCLAIMSGD":[{"Type":"Label","Name":"tui-claimhtml-claims-t9standvalidate.PREMIUMCLAIMSGD","Value":"<div class=\"sf-accordion-inner\">  <div class=\"disclaimer-container\" data-hash=\"9jzNriy7FTNH/JH9BIVMTM4kqM3bH0mZrdTxck5wnHQiZw3FyxjlBK2VEfkhplQJuox6vD+/u829STYojDwM6GUzTbYR5912\" style=\"overflow-y: auto;\">    <p class=\"text-center\"><strong><u>TRADEMARK NOTICE</u></strong></p>    <p>      You have received this Trademark Notice because you have applied for a domain name which matches at least one trademark record submitted to the Trademark Clearinghouse.    </p>    <p><strong><em>You may or may not be entitled to register the domain name depending on your intended use and whether it is the same or significantly overlaps with the trademarks listed below. Your rights to register this domain name may or may not be protected as noncommercial use or \"fair use\" by the laws of your country.</em></strong></p>    <p>      Please read the trademark information below carefully, including the trademarks, jurisdictions, and goods and services for which the trademarks are registered. Please be aware that not all jurisdictions review trademark applications closely, so some of the trademark information below may exist in a national or regional registry which does not conduct a thorough or substantive review of trademark rights prior to registration. If you have questions, you may want to consult an attorney or legal expert on trademarks and intellectual property for guidance.    </p>    <p>If you continue with this registration, you represent that, you have received and you understand this notice and to the best of your knowledge, your registration and use of the requested domain name will not infringe on the trademark rights listed below. The following marks are listed in the Trademark Clearinghouse:</p>      <div>        <table class=\"claim-table\">          <tr>            <td class=\"col1\">1.</td>            <td class=\"col2\">Mark:</td>            <td>Test & Validate</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\">Jurisdiction:</td>            <td>United States of America</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td colspan=\"2\">Goods and Services:</td>            <td></td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>guitar</td>          </tr>            <tr>              <td class=\"col1\"></td>              <td colspan=\"2\">International Class of Goods and Services or Equivalent if applicable:</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>15 - Musical instruments. </td>            </tr>          <tr>            <td class=\"col1\"></td>            <td colspan=\"2\">Trademark Registrant:</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>Organization: Ag corporation</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>Address: 1305 Bright Avenue</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>City: Arcadia</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>State: CA</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>Postal Code: 90028</td>          </tr>          <tr>            <td class=\"col1\"></td>            <td class=\"col2\"></td>            <td>Country: US</td>          </tr>            <tr>              <td class=\"col1\"></td>              <td colspan=\"2\">Trademark Registrant Contact:</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Name: Tony Holland</td>            </tr>            <tr>        
      <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Organization: Ag corporation</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Address: 1305 Bright Avenue</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>City: Arcadia</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>State: CA</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Postal Code: 90028</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Country: US</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Phone: +1.2025562302</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td class=\"col2\"></td>              <td>Email: info@agcorporation.com</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td colspan=\"2\">This domain name label has previously been found to be used or registered abusively against the following trademarks according to the referenced decisions:</td>            </tr>            <tr>              <td class=\"col1\"></td>              <td colspan=\"2\">Case No: </td>            </tr>            <tr>              <td class=\"col1\"></td>              <td colspan=\"2\">UDRP Provider: </td>            </tr>        </table>      </div>  </div></div>","LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-claimxml-claims-t9standvalidate.PREMIUMCLAIMSGD","Value":null,"LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-acceptedDate","Value":"2014-01-15T22:17:27.9529557Z","LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-acceptedDate-novalidate","Value":null,"LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-clientapp","Value":"fos","LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-tld","Value":"PREMIUMCLAIMSGD","LabelText":null,"DescriptionText":null,"ItemCollection":null},{"Type":"Hidden","Name":"tui-phase","Value":"ga","LabelText":null,"DescriptionText":null,"ItemCollection":null}]};
      data.DomainName = 'james.n.borg';
      data.DomainName = 't9standvalidate.PREMIUMCLAIMSGD';
      data.FormJson = testJson;
      data.FormHtml = testHtml;
      data.FormType = "claims";
      data.AllDomainsCheckbox = '';*/

      // check for redirect
      if (data.NextStepUrl) {
        window.location = data.NextStepUrl;
        return;
      }

      // remove spinner if not a redirect and not errors
      removeSpinner();

      // check for errors 
      if (data.Errors || data.errors) {
        var err = 'compute it from the errors!';
        displayError(settings.ajaxErrorText);
        $("input[id*='tui-']").removeClass('inputErrors');
        $.each(data.Errors, function(i, error) {
          $("#tui-" + i).addClass('inputErrors');
          $("#tui-" + i).after($('<h3 class="error">' + error + '</h3>'));
        });
        return;
      }

      // check for tld/tui form html
      if (data.DomainName) {
        // change domain name
        currentDomain = data.DomainName;

        if (currentDomain.indexOf('.') > -1) {
          currentDomainName = currentDomain.substr(0, currentDomain.indexOf('.'));
          currentDomainTLD = currentDomain.substr((currentDomain.indexOf('.') + 1), currentDomain.length);
        } else {
          currentDomainName = currentDomain;
        }

        settings.$currentDomainNameDiv.html(currentDomainName + '<span id="extension">.' + currentDomainTLD + '</span>');
      }

      setupContinueClick(false); // Disable continue button

      settings.$dppArea.hide();
      settings.$trusteeArea.hide();
      settings.$trademarkArea.hide();
      settings.$claimsArea.hide().find('form').remove();

      settings.$cancelBtn.show();
      settings.$headerArea.find('h1').hide();

      setCancelButtonText(settings.cancelBtnText);
      setContinueButtonText(settings.continueBtnText);

      if (!data.ShowSearchButton) {
        settings.$searchAgainBtn.hide(true);
      }

      currentFormType = data.FormType;

      if (data.FormType == "dpp") {
        settings.$dppArea.empty();

        if (data.FormJson && data.FormJson != null) {
          settings.$headerArea.find(':not(.error)').hide();
          parseDPPJson(data.FormJson);
          return;
        }
      } else if (data.FormType == "trustee") {
        settings.$trusteeArea.show();
        if (!data.FormJson || data.FormJson == null) {
          settings.$trusteeArea.find('#trustee-error').show();
          setupContinueClick(true, actionsEnum.remove);
          settings.$headerArea.find(':not(.error)').show();
          settings.$headerArea.find('h1').hide();
          settings.$cancelBtn.hide();
          return;
        }
      } else if (data.FormType == "trademark") {
        settings.$trademarkArea.show();
        settings.$headerArea.find('h1:not(.claims)').show();
        settings.$headerArea.show();
        var html = data.FormHtml ? data.FormHtml : '<script>var TUI = {};</script>'; // manipulate it??
        settings.$smdFileDiv
          .html(html)
          .show();

        setupContinueClick(false); // Disable continue button
        setupAppTokenMonitor();
        return;
      } else if (data.FormType == "claims") {
        settings.$headerArea.show();
        settings.$headerArea.show().find('h1:not(.claims)').hide();
        settings.$headerArea.show().find('h1.claims').show();
        settings.$claimsArea.show();

        setCancelButtonText(settings.removeDomainText);
        setContinueButtonText(settings.acknowledgeText);

        if (data.FormHtml && data.FormHtml != null) {
          parseClaimsJson(data.FormHtml);

          setupContinueClick(true, actionsEnum.validate); // Disable continue button
          return;
        }
      } else if (data.FormType == "uk") {
        settings.$ukAlertClose.bind('click', function() {
          settings.$ukAlertForm.hide(true);
        });

        settings.$ukForm.show(true);
        settings.$cancelBtn.hide(true);

        if (data.ShowSearchButton) {
          settings.$continueBtn.hide(true);
          setCancelButtonText(settings.cancelBtnText);
        } else {
          setContinueButtonText(settings.continueBtnText);
          setupContinueClick(true, actionsEnum.getNext);
        }

        var ukDomainsHtml = '';

        $.each(data.UkDomains, function(index, domainName) {
          ukDomainsHtml += domainName.toLowerCase() + '</br>';
        });

        settings.$ukDomainsList.html(ukDomainsHtml);
        return;
      }

      displayError(settings.ajaxErrorText);
    }

    function setupAppTokenMonitor() {
      var timeoutFn = function() {
        if (TUI.AppToken && TUI.AppToken.length > 0) {
          setupContinueClick(true, actionsEnum.add); // activate continue button
        } else {
          window.setTimeout(timeoutFn, settings.monitorMs);
        }
      };
      timeoutFn();
    }

    function doSelectBoxChange() {
        if(typeof selectstyle == 'undefined'){
        var selectstyle = {};
          (function(jQuery){
            $(document).ready(function(){
              // constants
              var LISTENERLOOPTIME = 900;
              var DEFAULTSHOW = 5;
              // events
              var eventMutated = $.Event('mutate');
              var eventReady = $.Event('ss-ready');
              var $selectElements = $('#eligibility-form  .selectstyles');
              
              $selectElements.each(function(){
                var $this = $(this);
                hideSelectElement($this);
                buildSelectUi($this);
                addMutationListener($this);
                $this.trigger('ss-ready');
                $this[0]['ss-ready'] = true;
              });
              // listen for clicks
              $(document).click(function(event){
                // trigger page click
                $(this).trigger('ss-click');
              });
              function rebuildSelectUi($selectElement){
                // remove from dom
                $selectElement[0]['select-ui'].remove();
                // delete object
                try{
                  delete $selectElement[0]['select-ui'];
                }
                catch(error){}
                // build new select UI
                buildSelectUi($selectElement);
              }
              function buildSelectUi($selectElement){
                var settings = $selectElement.data('selectstyle');
                if(typeof settings == 'undefined'){
                  settings = '';
                }
                var $selectElementOptions = $selectElement.find('option');
                var $selectedOption;
                // construct new select UI
                var $newSelectUi = $('<div class="selectstyleui"><div class="ss-value"><span class="ss-before"></span><span class="ss-content" data-value=""></span><span class="ss-after"></span></div><ul class="ss-options"></ul></div>');
                var $newSelectUiContent = $newSelectUi.find('.ss-value > .ss-content');
                var $newSelectUiOptionsContainer = $newSelectUi.find('.ss-options');
                // create and insert UI options
                $selectElementOptions.each(function(){
                  var $selectElementOption = $(this);
                  var $selectElementContent = $selectElementOption.html();
                  var $newOption = $('<li class="ss-option"><span class="ss-before"></span><span class="ss-content">'+$selectElementContent+'</span><span class="ss-after"></span></li>');
                  $newOption[0]['select-ui'] = $newSelectUi; // quick reference to select ui
                  $newOption[0]['select-element'] = $selectElement; // quick reference to select element
                  // insert new UI option
                  $newOption.appendTo($newSelectUiOptionsContainer);
                  // add option select click event
                  $newOption.click(function(){
                    var $this = $(this);
                    changeByOption($this);
                    closeOptions($this[0]['select-ui']);
                  }).css('cursor','pointer');
                });
                $newSelectUi[0]['options-container-ui'] = $newSelectUiOptionsContainer; // quick reference to options container
                $selectElement[0]['select-ui'] = $newSelectUi; // quick reference to select ui
                // insert new select UI into dom
                $newSelectUi.insertAfter($selectElement);
                $selectElement[0]['options-ui'] = $newSelectUi.find('.ss-option'); // quick reference to options ui
                // update UI to reflect any changes to select element
                updateUi($selectElement);
                // capture html state for mutation detection
                $selectElement[0]['last-html'] = $selectElement
                // add toggle click event
                $newSelectUi.find('.ss-value').click(function(){
                  toggleOptions($(this).parent());
                }).css('cursor','pointer');
                // add change event listener to update UI
                $selectElement.bind('change',function(){
                  updateUi($(this));
                });
                // page click event listener
                $(document).bind('ss-click',function(){
                  closeOptions($newSelectUi);
                });
                // set max height of options container
                var setShow = DEFAULTSHOW;
                if(typeof settings.show != 'undefined'){
                  if(settings.show == 'all' || settings.show >= $selectElement[0]['options-ui'].length){
                    setShow = null;
                  }else{
                    setShow = settings.show;
                  }
                }
              }
              function updateUi($selectElement){
                var selectedIndex = getIndexFromValue($selectElement,$selectElement.val());
                // move selected class
                $selectElement[0]['options-ui'].removeClass('selected');
                $selectElement[0]['options-ui'].eq(selectedIndex).addClass('selected');
                // update field text
                $selectElement[0]['select-ui'].find('.ss-value > .ss-content').html($selectElement.find('option').eq(selectedIndex).html());
              }
              function toggleOptions($selectUi){
                var $options = $selectUi[0]['options-container-ui'];
                var display = $options.css('display');
                if(display == 'none'){
                  openOptions($selectUi);
                }else if(display == 'block'){
                  closeOptions($selectUi);
                }
              }
              function openOptions($selectUi){
                var $options = $selectUi[0]['options-container-ui'];
                if($options.css('display') == 'none'){
                  // trigger click to close other open select boxes
                  $(document).trigger('ss-click');
                  // show options
                  $options.css('display','block');
                  // scroll to selected
                  $options.scrollTop(0);
                  var scrollTo = $options.find('.selected').position().top;
                  $options.scrollTop(scrollTo);
                  // disable outside click event for select box
                  $selectUi.click(function(event){
                    event.stopPropagation();
                  });
                }
              }
              function closeOptions($selectUi){
                var $options = $selectUi[0]['options-container-ui'];
                if($options.css('display') == 'block'){
                  // hide options
                  $options.css('display','none');
                  $selectUi.unbind('click');
                }
              }
              function hideSelectElement($selectElement){
                $selectElement.css({visibility:'hidden',position:'absolute'});
              }
              function changeByIndex($selectElement,index){
                // changed value of hidden select element
                $selectElement[0].selectedIndex = index;
                // let everyone know something has changed
                triggerChangeEvent($selectElement);
              }
              function changeByValue($selectElement,value){
                changeByIndex($selectElement,getIndexFromValue($selectElement,value));
              }
              function changeByOption($option){
                changeByIndex($option[0]['select-element'],$option.index());
              }
              function getIndexFromValue($selectElement,value){
                var selectIndex;
                $selectElement.find('option[value="'+value+'"], option:contains("'+value+'")').each(function(){
                  selectIndex = $(this).index();
                  return false; // stop each loop
                });
                return selectIndex;
              }
              function addMutationListener($selectElement){
                // listen for changes in select element
                // detect changes in markup like new options or changed values
                $selectElement[0]['mutate-interval'] = setInterval(function(){
                  var lastHtml = $selectElement[0]['last-html'];
                  var currentHtml = $selectElement.html();
                  if(typeof $selectElement[0]['last-html'] != 'undefined' && $selectElement[0]['last-html'] != currentHtml){
                    // tigger mutate event on select element
                    $selectElement.trigger('mutate');
                    rebuildSelectUi($selectElement);
                  }
                  $selectElement[0]['last-html'] = currentHtml;
                },LISTENERLOOPTIME);
              }
              function triggerChangeEvent($selectElement){
                try{ $selectElement.change(); }
                catch(error){}
              }
              function forceJquery($object){
                if(!($object instanceof $)){
                  // convert to jQuery object
                  $object = $($object);
                }
                return $object;
              }
              // create public paths to private functions
              $.extend(selectstyle,{
                changeByValue:function($selectElement,value){
                  changeByValue(forceJquery($selectElement),value);
                },
                changeByOption:function($option){
                  changeByOption(forceJquery($option));
                },
                changeByIndex:function($option){
                  changeByIndex(forceJquery($selectElement),index);
                },
                rebuildSelectUi:function($selectElement){
                  rebuildSelectUi(forceJquery($selectElement));
                },
                updateUi:function($selectElement){
                  updateUi(forceJquery($selectElement));
                }
              });
            });
          }(selectstyle.$));
        }
      }

    function parseDPPJson(data) {
      var parsedData = JSON.parse(data);
      var html = '';
      var currentFormTld = '';

      if (parsedData && parsedData !== undefined && parsedData != null) {
        var newSelect = false;

        if (parsedData.FormFieldsByDomain) {
          var FormFieldsByDomain = parsedData.FormFieldsByDomain;
        } else {
          var FormFieldsByDomain = parsedData;
        }

        $.each(FormFieldsByDomain, function(dIndex, domain) {
          currentDomainName = "";
          currentDomainTLD = "";

          if (dIndex.indexOf('.') > -1) {
            currentDomainName = dIndex.substr(0, dIndex.indexOf('.'));
            currentDomainTLD = dIndex.substr((dIndex.indexOf('.') + 1), dIndex.length);
            currentFormTld = currentDomainTLD;
          } else {
            currentDomainName = dIndex;
          }

          if (parsedData.FormFieldsByDomain) {
          html += '<form id="form' + currentDomainName + '" class=' + parsedData.FormItems.FormName.toLowerCase() + '>';
          } else {
          html += '<form id="form' + currentDomainName + '">';
          }

          if (parsedData.FormItems && parsedData.FormItems.FormLabel) {
            html += "<h1>";
            html += parsedData.FormItems.FormLabel;
            html += "</h1>";
          } else {
            html += '<h1>';
            html += "." + currentDomainTLD.toUpperCase() + " " + settings.registrationInformationText;
            html += '</h1>';
          }

          if (parsedData.FormItems && parsedData.FormItems.ValidationLevel == "domain") {
            html += '<div id="applyToAll"><p>';
            html += settings.needMoreInformationText;
            html += '</p><div><label class="toggle"><input type="checkbox" class="toggle" id="AllDomainsCheckbox" name="AllDomainsCheckbox" value="1" checked="checked" /><div class="toggle checked"></div><label for="AllDomainsCheckbox">';
            html += settings.applyToAllLabelText;
            html += '</label></label></div></div>';
          }

          if (parsedData.FormItems && parsedData.FormItems.FormDescription) {
            html += "<div class='headingText'>";
            html += parsedData.FormItems.FormDescription;
            html += "</div>";
          }

          if (parsedData.FormItems && parsedData.FormItems.FieldsLabel) {
            html += "<div class='headingText'>";
            html += parsedData.FormItems.FieldsLabel;
            html += "</div>";
          }   
          
          $.each(domain, function (igIndex, itemGroup) {
            
            $.each(itemGroup, function(iIndex, item) {

              var dependsOn = "", dependsValue = "";
              if (item.DependsCollection != null) {
                $.each(item.DependsCollection, function (icIndex, option) {
                  dependsOn = 'data-dependson="tui-' + option.FieldName + '"';
                  dependsValue = 'data-dependsval="' + option.FieldValue + '"';
                });
              }

              html += '<div class="field ' + item.Name + '" ' + dependsOn + ' ' + dependsValue + '>';

              var text = '';
              switch ((item.Type.toLowerCase().startsWith("input") ? "input" : item.Type.toLowerCase())) {
              case "input":
                text += '<h2 for="' + item.Name + '">' + item.LabelText;
                if (item.DescriptionText && item.DescriptionText !== undefined && item.DescriptionText != null) {
                  text += '<span class="g-toolTip"><span>' + item.DescriptionText + '</span></span>';
                }
                var type = item.Type.toLowerCase().substr(5, item.Type.toLowerCase().length);
                text += '</h2><input type="' + type + '" id="' + item.Name + '" name="' + item.Name + '"';
                if (item.Required != undefined && item.Required != null && item.Required === "false") {
                  text += ' data-optional="true"';
                }
                if (item.DefaultValue != undefined && item.DefaultValue != null) {
                  text += ' value="' + item.DefaultValue + '"';
                }
                if (type == "date") {
                  text += ' placeholder="yyyy-mm-dd" />';
                } else {
                  text += ' />';
                }
                break;
              case "select":
                var selections = '';

                if (item.ItemCollection.length < 5) {
                  selections = ' data-selectshow="' + (item.ItemCollection.length + 1) + '"';
                }

                text += '<h2 for="' + item.Name + '">' + item.LabelText;
                if (item.DescriptionText && item.DescriptionText !== undefined && item.DescriptionText != null) {
                  text += '<span class="g-toolTip"><span>' + item.DescriptionText + '</span></span>';
                }
                text += '</h2><select class="selectstyles" id="' + item.Name + '" name="' + item.Name + '"' + selections + '><option id="defaultOption" value="chooseOption">' + settings.chooseOptionText + '</option>';
                $.each(item.ItemCollection, function(icIndex, option) {
                  var selected = "";
                  if (item.DefaultValue == option.ItemId) {
                    selected = 'selected';
                  }
                  text += '<option value="' + option.ItemId + '"' + selected + '>' + option.ItemLabel + '</option>';
                });
                text += '</select>';

                newSelect = true;
                break;
              case "checkbox":
                text += '<div><label class="toggle"><input type="checkbox" class= "toggle" id="' + item.Name + '" name="' + item.Name + '" ';

                if (item.Value == null) {
                  text += 'value="0" />';
                } else {
                  text += 'value="' + item.Value + '" />';
                }

                text += '<div class = "toggle"/><label for="' + item.Name + '">' + item.LabelText + '</label>';
                if (item.DescriptionText && item.DescriptionText !== undefined && item.DescriptionText != null) {
                  text += '<p>' + item.DescriptionText + '</p>';
                }
                text += '</label></div>';
                break;
              case "radio":
                text += '<div class="radioBtnGroup">';
                text += '<h2>' + item.LabelText + '</h2>';
                $.each(item.ItemCollection, function (icIndex, option) {
                  var checked = "";
                  var doublecheck = "";
                  if (item.DefaultValue && item.DefaultValue == option.ItemId) {
                    checked = "checked";
                    doublecheck = 'checked="checked"';
                  }
                  text += '<div><label><input type="radio" id="' + item.Name + '_' + option.ItemId + '" name="' + item.Name + '" value="' + option.ItemId + '" class="radio"' + doublecheck + '  />';
                  text += '<span class = "radio '+checked+'"/><h3 for="' + item.Name + '_' + option.ItemId + '">' + option.ItemLabel + '</h3></label></div>';
                });
                text += '</div>';
                break;
              case "hidden":
                if (item.Name != 'tui-formtype') {
                  text += '<input type="hidden" name="' + item.Name + '" id="' + item.Name + '" id="' + item.Name + '" value="' + item.Value + '" />';
                }
                break;
                case "label":
                  text += '<div class="sub-label">' + item.LabelText + '</div>';
                  break;
              default:
                text += JSON.stringify(item);
                break;
              }
              html += text;
            });
            html += '</div>';
          });
          html += '</form>';

        });

        settings.$dppArea.html(html);
        $('.tld').text('.' + currentFormTld);
        doSelectBoxChange();
        settings.$dppArea.show();

        checkDependables();

        settings.$dppArea.find('form').submit(function(event) {
          event.stopPropagation();
          event.preventDefault();

          if (ValidateDPPForm($(this), true)) {
            setupContinueClick(true, actionsEnum.validate); // Enable continue button
            callWebService(actionsEnum.validate);
          } else {
            displayError(settings.formValidationError);
            setupContinueClick(false); // Disable continue button
          }
          return false;
        });

        settings.$dppArea.find('form input, form select, form textarea').each(function() {
          if (ValidateDPPForm($(this).parents('form'), false)) {
            setupContinueClick(true, actionsEnum.validate); // Enable continue button
          } else {
            setupContinueClick(false); // Disable continue button
          }
          $(this).parents('div.field').find('.invalid').removeClass('invalid');
        });

        settings.$dppArea.find('form input, form select, form textarea').change(function () {
          checkDependables();
          if (ValidateDPPForm($(this).parents('form'), false)) {
            setupContinueClick(true, actionsEnum.validate); // Enable continue button
          } else {
            setupContinueClick(false); // Disable continue button
          }
          $(this).parents('div.field').find('.invalid').removeClass('invalid');
        });

        settings.$dppArea.find('form input').keyup(function(event) {
          if (ValidateDPPForm($(this).parents('form'), false)) {
            setupContinueClick(true, actionsEnum.validate); // Enable continue button
          } else {
            setupContinueClick(false); // Disable continue button
          }
          if (event.keyCode != '13') $(this).parents('div.field').find('.invalid').removeClass('invalid');
        });
      }
    }

    function parseClaimsJson(data) {
      var parsedData = JSON.parse(data);
      var html = '';

      if (parsedData && parsedData !== undefined && parsedData != null) {
        var newSelect = false;
        html += '<form id="form' + currentDomainName + '">';
        $.each(parsedData, function(dIndex, item) {
          html += '<div class="field">';
          var text = '';
          switch ((item.Type.toLowerCase().startsWith("input") ? "input" : item.Type.toLowerCase())) {
          case "label":
            text += item.Value;
            break;
          case "hidden":
            text += '<input type="hidden" name="' + item.Name + '" id="' + item.Name + '" id="' + item.Name + '" value="' + item.Value + '" />';
            break;
          default:
            break;
          }
          html += text;
          html += "</div>";
        });
        html += '</form>';
        settings.$claimsArea.append($(html));
      }
    }

    function parseTrademarkJson(data) {
      if (data.DomainName) {
        // change domain name
        currentDomain = data.DomainName;

        if (currentDomain.indexOf('.') > -1) {
          currentDomainName = currentDomain.substr(0, currentDomain.indexOf('.'));
          currentDomainTLD = currentDomain.substr((currentDomain.indexOf('.') + 1), currentDomain.length);
        } else {
          currentDomainName = currentDomain;
        }

        settings.$currentDomainNameDiv.html(currentDomainName + '<span id="extension">.' + currentDomainTLD + '</span>');
      }
    }

    function setupContinueClick(activateBtn, action) {
      settings.$continueBtn.unbind();
      if (activateBtn) {
        settings.$continueBtn.click(function() { callWebService(action); });
        settings.$continueBtn.addClass(settings.activeBtnCss).removeClass(settings.inactiveContinueBtnCss);
      } else {
        settings.$continueBtn.addClass(settings.inactiveContinueBtnCss).removeClass(settings.activeBtnCss);
      }
    }

    function serializeCurrentDomain() {
      verifyAndSubmitDependables();
      var serialization = $("#form" + currentDomainName).serialize();
      verifyAndRenameDependables();
      return serialization;
    }

    function ValidateDPPForm(form, showInvalid) {
      
      var valid = true;

      if (showInvalid) form.find('.invalid').removeClass('invalid');

      $.each(form.find('input[type!="hidden"][type!="radio"], textarea'), function (i, field) {
        var $field = $(field);
        var isVisible = $field.parent().is(":visible");
        
        var isOptional = $field.attr("data-optional") != undefined && $field.attr("data-optional") === "true";
        if (isVisible && !isOptional && ($field.val() === undefined || $field.val() == null || $field.val() == "" || $field.val().length <= 0)) {
          valid = false;
          if (showInvalid) $field.addClass('invalid');
        }
      });

      

      $.each(form.find('input[type="radio"]'), function(i, field) {
        var $field = $(field);
        if (form.find("input[name='" + field.name + "']:checked").length < 0) {
          valid = false;
          if (showInvalid) $field.next('span.radio').addClass('invalid');
        }
      });

      

      $.each(form.find('input[type="checkbox"]'), function(i, field) {
        var $field = $(field);
        if (!$field.is(':checked') && $field.is(':required')) {
            valid = false;
            if (showInvalid) $field.next('div.toggle').addClass('invalid');
        }
      });

      

      $.each(form.find('select'), function(i, field) {
        var $field = $(field);

        if ($field.val() === undefined || $field.val() == null || $field.val() == "" || $field.val().length <= 0 || $field.val().toLowerCase() == defaults.chooseOptionText.toLowerCase()) {
          valid = false;
          if (showInvalid) $field.next('.selectstyleui').find('.ss-value').addClass('invalid');
        }
      });

      
      return valid;
    }

    function removeErrors() {
      settings.$errorArea.slideUp();
      $("h3.error").remove();
    }

    function checkDependables(changedElement, changedValue) {
      
      var dependables = $("[data-dependson]");
      if (changedElement != null) {
        dependables = $("[data-dependson='" + changedElement.name + "']");
      }

      dependables.each(function () {
        var $depender = $(this);
        var dependValue = $depender.attr("data-dependsval");

        if (changedValue == null) {
          var dependsOn = $depender.attr("data-dependson");
          var $dependee = $("input[name='" + dependsOn + "']");
          changedValue = $dependee.filter(":checked").val();
        }

        if (dependValue == changedValue) {
          $depender.show();
        }
        else {
          $depender.hide();
          $depender.val("");
        }
      });
    }

    function verifyAndSubmitDependables() {

      var dependables = $("[data-dependson]");

      dependables.each(function(){
        var $dependerDiv = $(this);
        var dependerValue = $dependerDiv.attr("data-dependsval");
        var $dependerInput = $dependerDiv.find("input");
        var $dependee = $("input[name='" + $dependerDiv.attr("data-dependson") + "']");
        var dependeeValue = $dependee.filter(":checked").val();

        if (dependerValue != dependeeValue) {
          $dependerInput.attr("data-oldname", $dependerInput.attr("name"));
          $dependerInput.removeAttr("name");
        }
      });
    }

    function verifyAndRenameDependables(){
      var dependables = $("[data-dependson]");

      dependables.each(function(){
        if ($(this).find("input").attr("data-oldname")){
          $(this).find("input").attr("name", $(this).find("input").attr("data-oldname"));
          $(this).find("input").removeAttr("data-oldname");
        }
      });
    }

    // PUBLIC functions
    this.Initialize = function(options) {
      // OVERRIDE DEFAULTS TO BUILD THE SETTINGS 
      settings = $.extend({}, defaults, options);
    };

    this.SetupPage = function() {
      settings.$dppArea.hide();
      settings.$trusteeArea.hide();
      settings.$trademarkArea.hide();
      settings.$claimsArea.hide().find('form').remove();
      settings.$headerArea.hide();



      // call the server to find out what our first unit of work will be
      callWebService(actionsEnum.getNext);
      settings.$cancelBtn.click(function() {
        callWebService(actionsEnum.remove);
      });

      //checkbox event handler
      $('#eligibility-form').delegate('input.toggle', 'change', function(e) {
        if (!e) e = window.event;
        $(e.target).parent().find('div.toggle').toggleClass('checked');

        if ($(e.target).parent().find('div.toggle').hasClass('checked')) {
          $(e.target).parent().find('input.toggle').attr('value', '1');
        } else {
          $(e.target).parent().find('input.toggle').attr('value', '0');
        }
      });
      //radio button event handler
      $('#eligibility-form').delegate('div>label>input[type="radio"]', 'change', function(e) {
        if (!e) e = window.event;
        checkDependables(this, $(this).val());
        $.each($(e.target).parent().parent().parent().find('input[type="radio"]'), function() {
          if ($(this).is(':checked'))
            $(this).parent().find('span.radio').addClass('checked');
          else
            $(this).parent().find('span.radio').removeClass('checked');
        });
      });
    };
  };
}

var gtldRegistrationClient = new domains.controls.cds_gtld_registration();