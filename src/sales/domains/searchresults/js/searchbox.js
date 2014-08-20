
gbl.ns.register('domains.controls');
if (!domains.controls.cds_search) {
  domains.controls.cds_search = function() {
    "use strict";
    // instance variables
    var settings = {},
      defaults = {
        $doc: $(document),
        $domainSearchInput: $('#domain_search_input'),
        $domainToCheckHdn: $('#domainToCheck'),
        $domainSearchForm: $('#domain_search_form'),
        $searchboxBtn: $('.searchbox-search.searchbox-btn'),
        searchUrl: 'http://fullpath.com/domains/actions/searchhandler.ashx',
        searchCompleteEvt: 'domains.controls.cds_search.searchCompleteEvt',
        isSearchResultsPage: false,
        fastballFn: function(){},
        btnInactiveClass: 'flt-btn-inactive'
      },
      _this = this;

    // PRIVATE function

    function consoleLog(str) {
      window.console && window.console.log && window.console.log(str);
    }
    function consoleDir(obj) {
      window.console && window.console.dir && window.console.dir(obj);
    }

    function _validateDomainNames(onFailed, domainToCheck) {
      if (domainToCheck.length == 0) {
        onFailed('Enter a domain name to search.');
        return false;
      }
      return true;
    };

    function _showErrorMessage(m) {
      if (m.length > 0) {
        alert(m);
        return;
      }
    };

    function _beforeSearch() {

      if($.isFunction(settings.fastballFn)) {
        settings.fastballFn();
      }

      _disableSearchBtn();

    }

    function _disableSearchBtn() {
      settings.$searchboxBtn
        .addClass(settings.btnInactiveClass)
        .attr("onclick", "")
        .unbind('click');
    }


    function _activateSearchBtnClick() {

      // only remove the inactive class from button if this is not the results page

      if(settings.isSearchResultsPage === false) {
        settings.$searchboxBtn.removeClass(settings.btnInactiveClass);
      }

      // wire up btn click
      settings.$searchboxBtn.click( _this.ValidateAndDoSearch );

      // wire up enter presses on input
      settings.$domainSearchInput.keypress(function(e) {
        if(e.which===13) {
          e.preventDefault();
          _this.ValidateAndDoSearch();
          return false;
        }

        if(settings.isSearchResultsPage === true) {
          settings.isSearchResultsPage = false;
          settings.$searchboxBtn.removeClass(settings.btnInactiveClass);
          //_activateSearchBtnClick();
        }

      });
    }

    function _searchComplete(data){
      _activateSearchBtnClick();
      if (data) {
        if (data.Success) {
          if (data.NextStepUrl != null && data.NextStepUrl.length > 0) {
            if(pathIsDeals2())
            {
              window.location = addQueryParam( data.NextStepUrl,'path','deals2');
            }
            else
              window.location = data.NextStepUrl;
          }
          else if (data.Warnings != null) {
            var searchResultsWarnings = '';
            $.each(data.Warnings, function (i) {
              searchResultsWarnings += data.Warnings[i] + '\\n';
            });
            _showErrorMessage(searchResultsWarnings);
          }
        }
      }
    }
    // PUBLIC functions
    _this.Initialize = function(options) {

      // OVERRIDE DEFAULTS TO BUILD THE SETTINGS
      settings = $.extend({}, defaults, options);
      // consoleDir(settings);

      _activateSearchBtnClick();


    };

    _this.ValidateAndDoSearch = function() {
      //var domainToCheck = settings.$domainSearchInput.val().replace(/ /g, '');
      var domainToCheck = settings.$domainSearchInput.val();
      if (domainToCheck.length) {
        if (_validateDomainNames(_showErrorMessage, domainToCheck)) {

          settings.$domainToCheckHdn.val(domainToCheck);

          _beforeSearch();

          $.ajax({
            url: settings.searchUrl,
            type: 'POST',
            data: settings.$domainSearchForm.serialize(),
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              var data = { Error: errorThrown, Success: false };
              _searchComplete(data);
            },
            success: function (data) {
              _searchComplete(data);
            }
          });
        }
      }
      return false;
    };
  }
}

var searchClient = new domains.controls.cds_search();

function pathIsDeals2(){
  if(getQueryParams()['path'] !== undefined){
    return getQueryParams()['path'] === 'deals2';
  }

    return false;
}
function getQueryParams(){
  var url = window.location.href;
  var params = {};
  var queryParams = (url.substr(url.indexOf('?')+1,url.length)).split('&');
  for(var i = 0; i < queryParams.length; i++)
  {
    var param = queryParams[i].split('=');
    params[param[0]] = param[1].replace('#','');
  }
  return params;
}

function addQueryParam(url,name,value){
  return url + (url.indexOf('?') !== -1 ? '&' : '?') + name + '=' + value;
}