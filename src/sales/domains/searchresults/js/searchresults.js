/* global ko: false */
/* global LogFastballEvent: true */
/* global require: false */
/* global searchresultsheader_js: false */
/* global showGetDomainsPopIn: false */
/* global ShowShortPathModal: false */
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp*/) {
        if (!this) {
            throw new TypeError();
        }

        var objects = Object(this);
        var len = objects.length >>> 0;
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var res = [];
        var thisp = arguments[1];
        for (var i in objects) {
            if (objects.hasOwnProperty(i)) {
                if (fun.call(thisp, objects[i], i, objects)) {
                    res.push(objects[i]);
                }
            }
        }
        return res;
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    };
}

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }

    return s;
}

//#region Knockout bindings

ko.bindingHandlers.executeOnEnter = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                event.target.blur();
                allBindings.executeOnEnter.call(viewModel, viewModel, event);
                return false;
            }
            return true;
        });
    }
};

ko.bindingHandlers.withProperties = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        // Make a modified binding context, with a extra properties, and apply it to descendant elements
        var newProperties = valueAccessor(), childBindingContext = bindingContext.createChildContext(viewModel);
        ko.utils.extend(childBindingContext, newProperties);
        ko.applyBindingsToDescendants(childBindingContext, element);
        // Also tell KO *not* to bind the descendants itself, otherwise they will be bound twice
        return { controlsDescendantBindings: true };
    }
};

ko.bindingHandlers.attrIf = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        var h = ko.utils.unwrapObservable(valueAccessor());
        var show = ko.utils.unwrapObservable(h._if);
        if (show) {
            ko.bindingHandlers.attr.update(element, valueAccessor, allBindingsAccessor);
        } else {
            for (var k in h) {
                if (h.hasOwnProperty(k) && k.indexOf('_') !== 0) {
                    $(element).removeAttr(k);
                }
            }
        }
    }
};

ko.bindingHandlers.uniqueId = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        value.id = value.id || ko.bindingHandlers.uniqueId.prefix + (++ko.bindingHandlers.uniqueId.counter);

        element.id = value.id;
    },
    counter: 0,
    prefix: 'unique'
};

ko.bindingHandlers.uniqueFor = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        value.id = value.id || ko.bindingHandlers.uniqueId.prefix + (++ko.bindingHandlers.uniqueId.counter);

        element.setAttribute('for', value.id);
    }
};

ko.bindingHandlers.cdsSlider = {
    init: function (element, valueAccessor) {
        var options = valueAccessor() || {};
        $(element).filterSlider(options);
    }
};

ko.observable.fn.eq = function (val) {
    var self = this;
    return self() === val;
};

ko.computed.fn.eq = function (val) {
    var self = this;
    return self() === val;
};

ko.observable.fn.gt = function (val) {
    var self = this;
    return self() > val;
};

ko.computed.fn.gt = function (val) {
    var self = this;
    return self() > val;
};

ko.observable.fn.gtEq = function (val) {
    var self = this;
    return self() >= val;
};

ko.computed.fn.gtEq = function (val) {
    var self = this;
    return self() >= val;
};

ko.observable.fn.lt = function (val) {
    var self = this;
    return self() < val;
};

ko.computed.fn.ltEq = function (val) {
    var self = this;
    return self() <= val;
};

ko.observable.fn.ltEq = function (val) {
    var self = this;
    return self() <= val;
};

ko.computed.fn.lt = function (val) {
    var self = this;
    return self() < val;
};

ko.observable.fn.endsWith = function (val) {
    var self = this;
    var str = self();
    return -1 !== str.indexOf(val, str.length - val.length);
};

ko.computed.fn.endsWith = function (val) {
    var self = this;
    var str = self();
    return -1 !== str.indexOf(val, str.length - val.length);
};

ko.observable.fn.startsWith = function (val) {
    var self = this;
    var string = self() || '';
    if (val.length > string.length)
        return false;
    return val === string.substring(0, val.length);
};

ko.computed.fn.startsWith = function (val) {
    var self = this;
    var string = self() || '';
    if (val.length > string.length)
        return false;
    return val === string.substring(0, val.length);
};

ko.observable.fn.lcEq = function (value) {
    var ob = this;
    return ko.computed(function () { return ob() === value; });
};

//#endregion

var sr_js = {
    addToPending: function (p, d, ci) {

        if (p && 0 < p.length && d && DomainSearchResults.ViewModel) {
            var domain = ko.utils.arrayFirst(DomainSearchResults.ViewModel.Items(), function (item) { return d === item.Id(); }) || DomainSearchResults.ViewModel.ExactMatch();
            if (domain) {
                var prevArea = domain.Area();
                domain.Area(DomainSearchResults.ViewModel.Areas().Dbs);

                if (p && -1 < p.indexOf('dbs')) {
                    domain.Status('dbs');
                }
                $.ajaxSetup({ async: false });
                domain.AddToCart(domain);
                domain.Area(prevArea);
                $.ajaxSetup({ async: true });
            }
        }
    }
};

(function (DomainSearchResults, $, undefined) {

    var AreaViewModel = function (text, flagText, value, ciCode) {
        var self = this;
        self.FlagText = flagText;
        self.Text = text;
        self.Value = value;
        self.CiCode = ciCode;
        self.CurrentVisible = ko.observable(5);
        self.IsSelected = ko.observable(false);
        self.IsVisible = ko.observable(true);
    };

    var AreaTypes = {
        Ad: new AreaViewModel('Ad', 'Ad', 'dppsr_extnd_ad', 0),
        All: new AreaViewModel('All', null, 'dppsr_extnd_all', 84300).IsSelected(true),
        Available: new AreaViewModel('Available', 'Available', 'dppsr_extnd_avail', 0).IsVisible(false),
        Recommended: new AreaViewModel('Recommended', 'Recommended', 'dppsr_extnd_strpmall', 84307),
        Variations: new AreaViewModel('Variations', null, 'dppsr_extnd_spins', 84308),
        Area: new AreaViewModel('Country/Region', 'Country/Location', 'dppsr_extnd_cctld', 84301),
        Premium: new AreaViewModel('Premium', 'Premium', 'dppsr_extnd_prem', 84305),
        Recent: new AreaViewModel('Recent', null, 'dppsr_extnd_recent', 0).IsVisible(false),
        PreReg: new AreaViewModel('Pre-Registration', 'Pre-Registration', 0).IsVisible(false),
        Unavailable: new AreaViewModel('Unavailable', null, 'dppsr_extnd_unavail', 0).IsVisible(false),
        Dbs: new AreaViewModel('Domain Buy Service', null, 'dppsr_extnd_dbsmodal', 0).IsVisible(false),
        PremiumTeir: new AreaViewModel('PremiumTier', 'Premium', 0)
    };

    var AvailabilityTypes = {
        Auction: 4,
        Available: 1,
        Backorder: 2,
        Selected: 3,
        Unavailable: 0
    };

    var CartActions = {
        Add: 1,
        AddStack: 4,
        GetNextStep: 3,
        Update: 6,
        UpdateStack: 7,
        Remove: 2,
        RemoveStack: 5
    };

    var FilterTypes = {
        And: 0,
        Or: 1
    };

    DomainSearchResults.InputTypes = {
        None: '',
        Checkbox: 'checkbox',
        Textbox: 'text',
        Radio: 'radio',
        Slider: 'slider'
    };

    var StatusTypes = {
        Ad: 'ad',
        AfterMarket: 'aftermarket',  // all auctions
        Available: 'available',      // chellisage1234
        Backorder: 'backorder',      // apple.com, chellisage
        BackorderService: 'dbs',
        Premium: 'premium',          // trailerexpress.com
        PreRegistration: 'preregistration', // *.menu
        PrivateSale: 'privatesale',  // rumcakes.com, qwertyuiop
        Unavailable: 'unavailable',  // rumfiend.com
        Unknown: 'unknown',
        PremiumTeir: 'premiumteir'
    };

    var ItemTypeViewModel = function (priority, value, displayText, areaType, statusType, templateName, initialAvailability) {
        var self = this;
        var _statusTypeMap = ko.observableArray($.isArray(statusType || [StatusTypes.Unknown]) ? ko.utils.arrayGetDistinctValues(statusType) || [StatusTypes.Unknown] : [statusType]);

        self.AreaTypeMap = ko.observable(areaType);
        self.DisplayText = displayText;
        self.InitialAvailability = initialAvailability || AvailabilityTypes.Available;
        self.IsVisible = ko.observable(true);
        self.Priority = priority;
        self.StatusTypeMap = ko.computed({
            read: function () { return _statusTypeMap(); },
            write: function (val) {
                _statusTypeMap($.isArray(val || [StatusTypes.Unknown]) ? ko.utils.arrayGetDistinctValues(val) || [StatusTypes.Unknown] : [val]);
            },
            deferEvalutation: true,
            owner: self
        }, self);
        self.TemplateName = templateName || 'available';
        self.Value = (value || (displayText || '')).toLowerCase();

        self.IsMatch = function (item) {
            var rtnVal = false;
            if (item) {
                rtnVal = !self.AreaTypeMap() || self.AreaTypeMap() && (AreaTypes.All === self.AreaTypeMap() || (item.Area() && self.AreaTypeMap() === item.Area()));
                if (self.StatusTypeMap() && 0 < self.StatusTypeMap().length && item.Status()) {
                    for (var i in self.StatusTypeMap()) {
                        rtnVal = self.StatusTypeMap()[i] && self.StatusTypeMap()[i] === item.Status();
                        if (rtnVal) {
                            break;
                        }
                    }
                }
            }
            return rtnVal;
        };
    };

    DomainSearchResults.ItemTypes = {
        Ad: new ItemTypeViewModel(16, 'ad', 'Ad', AreaTypes.Ad, StatusTypes.Ad, 'ad').IsVisible(true),
        AfterMarket: new ItemTypeViewModel(1, 'aftermarket', 'Auction', null, StatusTypes.AfterMarket, 'aftermarket', AvailabilityTypes.Auction).IsVisible(true),       // all auctions
        Available: new ItemTypeViewModel(10, 'available', 'Available', AreaTypes.Available, StatusTypes.Available, 'available').IsVisible(true),
        // TODO: Check backorder and dbs for priority
        Backorder: new ItemTypeViewModel(3, 'backorder', 'Backorder', null, [StatusTypes.Backorder, StatusTypes.BackorderService], 'backorder', AvailabilityTypes.Backorder).IsVisible(true),           // apple.com, chellisage
        // TODO: IsMatch method of CloseoutAuction needs to check the "Other" property of the item
        CloseoutAuction: new ItemTypeViewModel(2, 'closeout', 'Aftermarket - Closeout', null, [StatusTypes.AfterMarket], 'aftermarket', AvailabilityTypes.Available).IsVisible(true),
        Location: new ItemTypeViewModel(6, 'location', 'Country/Location', AreaTypes.Area, null, 'available').IsVisible(true),
        Premium: new ItemTypeViewModel(7, 'premium', 'Premium', AreaTypes.Premium, [StatusTypes.Premium, StatusTypes.PrivateSale], 'premium').IsVisible(true),                 // trailerexpress.com
        PreRegistration: new ItemTypeViewModel(4, 'preregistration', 'Pre-registration', null, StatusTypes.PreRegistration, 'preregistration').IsVisible(true),
        PrivateSale: new ItemTypeViewModel(5, 'privatesale', 'privatesale - Lead Generation', AreaTypes.Premium, StatusTypes.PrivateSale, 'privatesale').IsVisible(true), // rumcakes.com, qwertyuiop
        Recent: new ItemTypeViewModel(11, 'recent', 'Recently Searched', AreaTypes.Recent, null, 'available').IsVisible(true),
        Recommended: new ItemTypeViewModel(9, 'recommended', 'Recommended', AreaTypes.Recommended, null, 'available').IsVisible(true),
        Stack: new ItemTypeViewModel(1000, 'stack', 'Stack', 'none', 'none', 'StackTemplate', AvailabilityTypes.Available).IsVisible(true),
        Unavailable: new ItemTypeViewModel(13, 'unavailable', 'Unavailable', AreaTypes.Unavailable, [StatusTypes.Unavailable, StatusTypes.Unknown], 'unavailable', AvailabilityTypes.Unavailable).IsVisible(true),     // rumfiend.com
        Unknown: new ItemTypeViewModel(14, 'unknown', 'Unknown', null, [StatusTypes.Unknown], 'unavailable').IsVisible(true),     // rumfiend.com
        Variations: new ItemTypeViewModel(8, 'spin', 'Variation', AreaTypes.Variations, null, 'available').IsVisible(true),
        BuyNowPreRegistration: new ItemTypeViewModel(100, 'preregistration', 'Pre-registration', null, StatusTypes.PreRegistration, 'preregistration').IsVisible(true),
        PremiumTeir: new ItemTypeViewModel(15, 'premiumteir', 'PremiumTeir', AreaTypes.PremiumTeir, StatusTypes.PremiumTeir, 'premiumteir').IsVisible(true)                 // oltman.house
    };

    var DomainViewModel = function (data) {
        var self = this;
        var _isOnSale =ko.observable(false);
        var _name = ko.observable('');
        var _id = ko.observable('');
        var _initialAvailability = ko.computed({
            read: function () { return self.Type().InitialAvailability || AvailabilityTypes.Available; },
            deferEvaluation: true,
            owner: self
        }, self);

        self.ActionTemplate = function () { return 'ActionTemplate' + self.Availability(); };
        self.Area = ko.observable(AreaTypes.Unavailable);
        self.Availability = ko.observable(AvailabilityTypes.Available);
        self.CiCode = ko.observable(0);
        self.Extras = ko.observableArray([]);
        self.HidePricing = ko.computed({
            read: function () { return !self.ShowPricing(); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.Id = ko.computed({
            read: function () {
                if (0 === _id().length) {
                    _id((self.SLD() || '').toLowerCase() + (self.TLD() || '').toLowerCase());
                }
                return _id();
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.IsExpanded = ko.observable(false);
        self.IsExpandable = ko.computed({
            read: function () { return 0 < self.Extras().length && !self.Type.eq(DomainSearchResults.ItemTypes.Backorder) && !self.Type.eq(DomainSearchResults.ItemTypes.CloseoutAuction) && self.HasDbsModal() && !self.IsCloseout(); },
            deferEvaluation: true,
            owner: self
        }, self);
        //self.IsEarlyAccess = ko.computed({
        //  read: function () { },
        //  deferEvaluation: true,
        //  owner: self
        //}, self);
        self.IsOnSale = ko.computed({
            read: function () {
                return _isOnSale() || (self.Prices().CurrentPrice && self.Prices().ListPrice );
            },
            write: function (val) { 
                _isOnSale(val);
            },
            deferEvaluation: true,
            owner: self
        }, self);
        //self.IsPreReg = ko.observable(false);
        self.IsSelected = ko.computed({
            read: function () { return AvailabilityTypes.Selected === self.Availability(); },
            write: function (val) {
                self.Availability(val ? AvailabilityTypes.Selected : _initialAvailability());
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.IsVisible = ko.observable(true);
        self.Other = ko.observableArray([]);
        self.PfId = ko.observable(0);
        self.Phases = ko.observableArray([]);
        self.Prices = ko.observableArray([]);
        self.RegistrationInfo = ko.observable(null);
        self.SelectedPhase = ko.computed({
            read: function () { return ko.utils.arrayFirst(self.Phases(), function (i) { return i.IsSelected(); }); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.ShowPricing = ko.computed({
            read: function () { return !self.IsSelected(); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.SLD = ko.observable('');
        self.Stack = ko.observable(null);
        self.Status = ko.observable(StatusTypes.Unknown);
        self.TemplateName = ko.computed({
            read: function () { return 'DomainTemplate' + (self.Type() || DomainSearchResults.ItemTypes.Unknown).TemplateName; },
            deferEvaluation: true,
            owner: self
        }, self);
        self.Type = ko.observable(DomainSearchResults.ItemTypes.Unknown);
        self.TLD = ko.observable('');
        self.Name = ko.computed({
            read: function () { return self.SLD() + '.' + self.TLD(); },                    
            deferEvaluation: true,
            owner: self
        }, self);
        self.fullName = ko.computed({
            read: function(){ return _name() || self.SLD() + '.' + self.TLD(); },
            write: function (val) { 
               _name(val);               
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.VendorId = ko.observable(11);
        self.ShowStack = ko.observable(false);
        self.fullAvailCheck = ko.observable(false);
        self.fullAvailCheckError = ko.observable(false);
        self.stackFullAvailCheck = ko.observable(false);
        self.stackFullAvailCheckError = ko.observable(false);
        self.IsPremiumPrice = ko.observable(false);
        self.IsAd = ko.observable(false);
        self.HasDiscount = ko.observable(false);
        self.searchSource = ko.observable('');  // from search results json for fastball tracking
        self.AvailableValue = ko.observable('');  // from search results json for fastball tracking
        self.MatchSource = ko.observable('');  // from search results json for fastball tracking
        self.originalPosition = ko.observable(0);  // for fastball tracking - HeaderResults, ccTLD Upsell and Stack = position 0, first domain in strip mall = 1 and increment
        self.filterPosition = ko.observable(0);

        var item = function(name,parent)
        {
            this.parent=SearchResultsViewModel
        }
        //#region Methods

        function CreateCartHandlerPostUrl(domain, action) {
            var rtnVal = '';

            if (domain && action && 0 <= action && IsValidSelection(domain)) {
                rtnVal = AddApiAction(DomainSearchResults.Options.PostUrl, action);
                rtnVal = DomainSearchResults.AppendQueryString(rtnVal, 'domain=' + encodeURIComponent(domain.Name()));

                rtnVal = DomainSearchResults.AppendQueryString(rtnVal, 'domainstatus=' + domain.Status());
                rtnVal = domain.Area() ? DomainSearchResults.AppendQueryString(rtnVal, 'displayarea=' + domain.Area().Value) : rtnVal;
                rtnVal = DomainSearchResults.AppendQueryString(rtnVal, 'bundle=domain');
                rtnVal = domain.SelectedPhase() ? DomainSearchResults.AppendQueryString(rtnVal, 'launchphase=' + (domain.SelectedPhase().SelectedSubPhase() || domain.SelectedPhase()).Code()) : rtnVal;
            }

            return rtnVal;
        }

        function ValidatePhaseSelection(domain) {
            var rtnVal = false;

            if (domain) {
                rtnVal = !domain.Type.eq(DomainSearchResults.ItemTypes.PreRegistration);
                if (!rtnVal) {
                    rtnVal = null !== domain.SelectedPhase();
                    if (rtnVal && domain.SelectedPhase().HasSubPhases() && null === domain.SelectedPhase().SelectedSubPhase()) {
                        alert('Please select your early access phase');
                        rtnVal = false;
                    } else if (!rtnVal) {
                        alert('Please select your phase');
                    }
                }
            }

            return rtnVal;
        }

        function IsValidSelection(item) {
            var rtnVal = null !== item;
            if (rtnVal) {
                rtnVal = ValidatePhaseSelection(item);
            }
            return rtnVal;
        }

        self.AddToCart = function (domain, event, isCCTLD) {
            /*jshint unused:false, eqnull:true */
            if (domain) {
                if ('function' === typeof (LogFastballEvent)) {
                  LogFastballEvent(domain.CiCode(), 'searchresults', 'addtocart');
                }
                domain.fullAvailCheck(true);
                var dataUrl = CreateCartHandlerPostUrl(domain, CartActions.Add);
                if (dataUrl && 0 < dataUrl.length) {
                    $.post(dataUrl,
                        function (data) {
                            var bidSuccess = 'undefined' === typeof (data.bidIsValid) || data.bidIsValid;
                            if (data.Success && bidSuccess) {
                                domain.fullAvailCheck(false);
                                domain.IsSelected(true);
                                domain.IsOnSale(false);

                                DomainSearchResults.ViewModel.SelectedDomains(data.CurrentlyPending);

                                if (DomainSearchResults.ViewModel.ShowStacks()) {
                                    self.ShowStack(true);
                                }

                                LogDomainSelectionEvent(self, data, self.fullName(), DomainSearchResults.ViewModel.activeFilter(), DomainSearchResults.ViewModel.activeFilterValue(), (isCCTLD ? 0 : self.originalPosition()));
                            } else {
                                domain.fullAvailCheck(false);
                                domain.fullAvailCheckError(true);
                                domain.IsOnSale(false);
                            }
                        });
                }
            }
        };

        self.Collapse = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            if (domain) {
                domain.IsExpanded(false);
            }
        };

        self.Expand = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            if (domain) {
                var state = !domain.IsExpanded();
                domain.IsExpanded(state);
            }
        };

        self.RemoveFromCart = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            if (domain) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(domain.CiCode(), 'searchresults', 'removefromcart');
                }
                var dataUrl = AddApiAction(DomainSearchResults.Options.PostUrl, CartActions.Remove);
                dataUrl = DomainSearchResults.AppendQueryString(dataUrl, 'domain=' + encodeURIComponent(domain.Name()));
                $.post(dataUrl, function (data) {
                    if (data.Success) {
                        domain.IsSelected(false);
                        domain.IsExpanded(false);
                        if (domain.Stack() && domain.Stack().IsSelected()) {
                            self.Stack().IsSelected(false);
                            if (DomainSearchResults.ViewModel.ExactMatch().Name() == self.Name()) {
                                domain.ShowStack(true);
                            } else {
                                domain.ShowStack(false);
                            }
                        }

                        DomainSearchResults.ViewModel.SelectedDomains(data.CurrentlyPending);

                        if ('function' === typeof (fbiRecordFastballEvent)) {
                            var e = new fbiEventObject(event, "removeCart", 92500, '');
                            e.AddUserInput("pf_id", self.PfId());
                            e.AddUserInput("domain", self.fullName());
                            fbiRecordFastballEvent(e);
                        }
                    }
                });
            }
        };

        self.SelectPhase = function (phase, event) {
            /*jshint unused:false, eqnull:true */
            if (phase && -1 < $.inArray(phase, self.Phases())) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(phase.CiCode, 'searchresults', 'selectphase');
                }
                ko.utils.arrayForEach(self.Phases(), function (i) { i.IsSelected(false).AreSubPhasesExpanded(false); });
                phase.IsSelected(true);
            }
        };

        self.Load = function (data) {
            if (data) {

                self.SLD(data.DomainName || '').TLD(data.DomainTld || '');
                _id(data.DomainIdentifier || self.SLD().toLowerCase() + self.TLD().toLowerCase());
                if (data.source) {
                    self.searchSource = data.source;
                }

                if (self.TLD()) {
                    var auTlds = ['com.au', 'net.au', 'org.au'];
                    ko.utils.arrayForEach(auTlds, function (i) {
                        if (DomainSearchResults.StringEndsWith(self.TLD().toLowerCase(), i)) {
                            self.RegistrationInfo(new RegistrationInfoViewModel());
                            return false;
                        }
                    });
                }

                if (data.PfId){
                    self.PfId(data.PfId);
                }

                if (data.MatchSource) {
                    self.MatchSource(data.MatchSource);
                }

                if(data.AvailableValue){
                    self.AvailableValue(data.AvailableValue);
                }

                 if(data.Source){
                    self.searchSource(data.Source);
                }

                if (data.IsPremiumPrice) {
                    self.IsPremiumPrice(true);
                }

                if (data.HasDiscount) {
                    self.HasDiscount(true);
                }

                if (data.DomainStatus) {
                    self.Status('unknown' === data.DomainStatus.toLowerCase() || 'transfer' === data.DomainStatus.toLowerCase() ? StatusTypes.Unavailable : data.DomainStatus.toLowerCase());
                }

                if (data.IsAd) {
                    self.IsAd(true);
                }

                if (data.Stack && (data.Stack.Prices !== null)) {
                    self.Stack(new StackViewModel(data.Stack));
                    self.Stack().Parent(self);
                }

                if (data.DisplayArea) {
                    var area = ko.utils.arrayFirst(DomainSearchResults.ViewModel.Areas(), function (i) { return data.DisplayArea.toLowerCase() === (i.Value || '').toLowerCase(); });
                    if ('premiumheader' === data.DisplayArea.toLowerCase()) {
                        area = AreaTypes.Premium;
                    }
                    if (!area) {
                        area = new AreaViewModel(data.DisplayArea, null, data.DisplayArea, '000000').IsVisible(false);
                    }
                    self.Area(area);
                }

                if (data.Prices) {
                    $.each(data.Prices, function (i) { self.Prices()[i] = DomainSearchResults.StringEndsWith(data.Prices[i], '/yr') ? data.Prices[i].slice(0, -3) : data.Prices[i]; });
                }

                var types = [];
                $.each(DomainSearchResults.ItemTypes, function (i) { types.push(DomainSearchResults.ItemTypes[i]); });
                types = types.sort(function (l, r) { return (l ? l.Priority : 0) - (r ? r.Priority : 0); });
                var type = ko.utils.arrayFirst(types, function (i) { return i.IsMatch(self); });
                self.Type(type || DomainSearchResults.ItemTypes.Unknown);

                if (data.Other) {
                    if (data.Other.LaunchPhases) {
                        var eaPhase = null;
                        for (var i = 0; i < data.Other.LaunchPhases.length; i++) {
                            var phase = new PhaseOptionViewModel(data.Other.LaunchPhases[i]).Parent(self);
                            if (phase.Template().IsSubPhase) {
                                eaPhase = (eaPhase || phase).Template(PhaseOptionViewModel.TemplateInfos.Priority);
                                eaPhase.SubPhases.push(new PhaseOptionViewModel(data.Other.LaunchPhases[i]).Name('Phase ' + (phase.Code().substr(2) || '1')).Parent(eaPhase));
                                delete eaPhase.Prices()['ApplicationFee'];
                                phase = eaPhase;
                            }
                            phase.SubPhases.sort(function (l, r) { return new Date(l ? l.EndDate() : null) - new Date(r ? r.EndDate() : null); });
                            if (0 > $.inArray(phase, self.Phases())) {
                                self.Phases.push(phase);
                            }
                        }
                        self.Phases.sort(function (l, r) { return (l ? l.Index() : 0) - (r ? r.Index() : 0); });
                        var toSelect = self.Phases()[0];

                        if (eaPhase) {
                            var phaseToCheck = eaPhase.SubPhases()[0];
                            self.Type().IsEarlyAccess = phaseToCheck && phaseToCheck.LiveStartDateUtc.ltEq(new Date());
                            if (self.Type().IsEarlyAccess) {
                                if (eaPhase !== self.Phases()[0]) {
                                    var oldPrimaryFirst = self.Phases.shift();
                                    eaPhase.SubPhases.push(oldPrimaryFirst);
                                }
                                eaPhase.Name(DomainSearchResults.Options.PhasePreRegName).Template(PhaseOptionViewModel.TemplateInfos.EarlyAccess);
                                var newPrimaryFirst = eaPhase.SubPhases.shift();
                                newPrimaryFirst.Name(PhaseOptionViewModel.TemplateInfos.EarlyAccessPriority.Title).Template(PhaseOptionViewModel.TemplateInfos.EarlyAccessPriority);
                                self.Phases.unshift(newPrimaryFirst);
                                toSelect = eaPhase;
                            }

                            eaPhase.SubPhases()[eaPhase.SubPhases().length - 1].IsSelected(true);
                        }

                        //self.Phases.sort(function (l, r) { return (l ? l.Index() : 0) - (r ? r.Index() : 0); });
                        if (toSelect) {
                            toSelect.IsSelected(true);
                        }
                    }
                    $.each(data.Other, function (i) { self.Other[i] = data.Other[i]; });
                }

                switch (self.Type()) {
                    case DomainSearchResults.ItemTypes.AfterMarket:
                        var isCloseOut = self.Other.AuctionType && 'closeout' === self.Other.AuctionType;
                        self.Type(isCloseOut ? DomainSearchResults.ItemTypes.CloseoutAuction : DomainSearchResults.ItemTypes.AfterMarket);
                        break;
                    default:
                        break;
                }
                self.Availability(self.Type().InitialAvailability);
                self.IsSelected(data.IsSelected);
                self.originalPosition(DomainSearchResults.ViewModel.originalPosition());
            }
        };

        self.ShowDbs = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            showGetDomainsPopIn();
        };

        self.ShowPrivateSale = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            if (domain) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(78160, 'searchresults', 'domainbid');
                }
                $.get(
                  DomainSearchResults.Options.PCDataUrl,
                  function (data) {
                      var dataUrl = DomainSearchResults.Options.ContactInfoScriptUrl;
                      var qString = 'shopper=' + data.pcShopperId + '&domainName=' + encodeURIComponent(domain.Name()) + '&vendorId=' + domain.VendorId() + '&ci=72815&sre=hdnDPP_psm_value';
                      dataUrl = dataUrl + '#i=' + qString;
                      data.pcShopperId;
                      require(['starfield/sf.dialog'], function () {
                          $('<div />').sfDialog({
                              autoResize: 'true',
                              load: dataUrl,
                              titleHidden: false,
                              overlayAlt: true,
                              dialogHeightMin: 120,
                              onClose: domain.IsSelected(true),
                              title: 'Congratulations! The domain you want is for sale.'
                          });
                      });
                  },
                  'jsonp'
              );
            }
        };

        self.Update = function (domain, event) {
            /*jshint unused:false, eqnull:true */
            if (domain && domain.IsSelected()) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(84311, 'searchresults', 'updatedomain');
                }
                var dataUrl = CreateCartHandlerPostUrl(domain, CartActions.Update);
                if (dataUrl && 0 < dataUrl.length) {
                    $.post(dataUrl, function (data) {
                        if (data && data.Success) {
                            domain.IsExpanded(false);
                        }
                    });
                }
            }
        };

        self.UpdateCart = function (domain, event, isCCTLD) {
            if (domain) {
                domain.IsSelected() ? domain.RemoveFromCart(domain, event) : domain.AddToCart(domain, event, isCCTLD);
            }
        };
        //#endregion

        self.Load(data);
    };

    var FilterViewModel = function (index, title, filterType, predicate, initialValue, inputType) {
        var self = this;

        var _appliedSubFilters = ko.computed({
            read: function () { return ko.utils.arrayFilter(self.SubFilters(), function (i) { return i.IsApplied(); }); },
            deferEvaluation: true
        }, self);
        var _initialValue = initialValue;
        var _isApplied = ko.observable(false);

        self.AllowClear = ko.observable(false);
        self.CiCodes = { Apply: 0, Clear: 0, Collapse: 0, Expand: 0, Halt: 0 };
        self.IsApplied = ko.computed({
            read: function () {
                return _isApplied() || 0 < _appliedSubFilters().length;
            },
            write: function (val) {
                _isApplied(val);
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.IsExpandable = ko.observable(true);
        self.IsExpanded = ko.observable(false);
        self.Title = ko.observable(title || '');
        self.Instruction = ko.observable(title);
        self.FilterType = ko.observable(filterType || FilterTypes.And);
        self.Index = ko.observable(index || 0);
        self.InitialValue = initialValue;
        self.InputType = ko.observable(inputType || DomainSearchResults.InputTypes.Textbox);
        self.IsExpanded = ko.observable(false);
        self.Predicate = ko.observable(predicate || function (i, v) { return v === i; });
        self.ShowTitle = ko.observable(true);
        self.SubFilters = ko.observableArray([]); /* TODO: make readonly, create method to add & order items */
        self.Value = ko.observable(initialValue);

        self.Apply = function (filter, event) {
            /*jshint unused:false, eqnull:true */
            if (filter) {
                if (filter.CiCodes) {
                    LogCiCode(filter.CiCodes.Apply, 'applyfilter');
                    switch(typeof filter.InitialValue) {
                        case "string" :
                            if (DomainSearchResults.ViewModel.activeFilter.indexOf("tlds") == -1) {
                                DomainSearchResults.ViewModel.activeFilter.push("tlds");
                            }

                            var tldActiveFilter = String.format("tlds:[{0}]", DomainSearchResults.ViewModel.tldFilter().join());
                            if (DomainSearchResults.ViewModel.tldFilter.indexOf(filter.InitialValue) != -1){
                                DomainSearchResults.ViewModel.tldFilter.remove(filter.InitialValue);
                            }
                            if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(tldActiveFilter) != -1) {
                               DomainSearchResults.ViewModel.activeFilterValue.remove(tldActiveFilter);
                            }
                            DomainSearchResults.ViewModel.tldFilter.push(filter.InitialValue);
                            tldActiveFilter = String.format("tlds:[{0}]", DomainSearchResults.ViewModel.tldFilter().join());
                            DomainSearchResults.ViewModel.activeFilterValue.push(tldActiveFilter);
                            break;
                        case "object" :
                            if (filter.InitialValue.DisplayText === "Country/Location" && DomainSearchResults.ViewModel.activeFilter.indexOf("cctld") == -1) {
                                DomainSearchResults.ViewModel.activeFilter.push("cctld");
                                DomainSearchResults.ViewModel.activeFilterValue.push("cctld:on");
                            }
                            else if (filter.InitialValue.DisplayText === "Premium" && DomainSearchResults.ViewModel.activeFilter.indexOf("premium") == -1) {
                                DomainSearchResults.ViewModel.activeFilter.push("premium");
                                DomainSearchResults.ViewModel.activeFilterValue.push("premium:on");
                            }
                            break;
                        case "undefined" :
                            if (DomainSearchResults.ViewModel.activeFilter.indexOf("price") == -1) {
                                DomainSearchResults.ViewModel.activeFilter.push("price");
                            }
                            var priceFilter = "price:" + DomainSearchResults.ViewModel.priceFilter();
                            if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(priceFilter) != -1) {
                                DomainSearchResults.ViewModel.activeFilterValue.remove(priceFilter);
                            }
                            DomainSearchResults.ViewModel.priceFilter(filter.Value());
                            priceFilter = "price:" + DomainSearchResults.ViewModel.priceFilter();
                            DomainSearchResults.ViewModel.activeFilterValue.push(priceFilter);
                            break;
                        case "number" :
                            if (DomainSearchResults.ViewModel.activeFilter.indexOf("length") == -1) {
                                DomainSearchResults.ViewModel.activeFilter.push("length");
                            }
                            var lengthFilter = "length:" + DomainSearchResults.ViewModel.lengthFilter();
                            if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(lengthFilter) != -1) {
                                DomainSearchResults.ViewModel.activeFilterValue.remove(lengthFilter);
                            }
                            DomainSearchResults.ViewModel.lengthFilter(filter.Value());
                            lengthFilter = "length:" + DomainSearchResults.ViewModel.lengthFilter();
                            DomainSearchResults.ViewModel.activeFilterValue.push(lengthFilter);
                            break;
                        default:
                            break;
                    }
                }
                filter.IsApplied(false).IsApplied(true);
            }
        };

        self.Clear = function (filter, event) {
            if (filter) {
                if (0 < filter.CiCodes) {
                    LogCiCode(filter.CiCodes.Clear, 'clearfilter');
                }
                if (filter.InputType.eq(DomainSearchResults.InputTypes.Textbox)) {
                    if(DomainSearchResults.ViewModel.activeFilter.indexOf("price") != -1) {
                        DomainSearchResults.ViewModel.activeFilter.remove("price");
                        var priceFilter = "price:" + DomainSearchResults.ViewModel.priceFilter();
                        if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(priceFilter) != -1) {
                            DomainSearchResults.ViewModel.activeFilterValue.remove(priceFilter);
                            DomainSearchResults.ViewModel.priceFilter('');
                        }
                    }
                    filter.Value(_initialValue);
                }
                if (0 < filter.SubFilters().length) {
                    ko.utils.arrayForEach(filter.SubFilters(), function (i) {
                    i.Clear(i, event); });
                }
                filter.IsApplied(false);
            }
        };

        self.Halt = function (filter, event) {
            if (filter) {
                if (filter.CiCodes) {
                    if(DomainSearchResults.ViewModel.activeFilter.indexOf("length") != -1 && typeof filter.InitialValue === "number") {
                        DomainSearchResults.ViewModel.activeFilter.remove("length");
                        var lengthFilter = "length:" + DomainSearchResults.ViewModel.lengthFilter();
                        if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(lengthFilter) != -1) {
                            DomainSearchResults.ViewModel.activeFilterValue.remove(lengthFilter);
                            DomainSearchResults.ViewModel.lengthFilter(-1);
                        }
                    }

                    if(DomainSearchResults.ViewModel.activeFilter.indexOf("tlds") != -1 && typeof filter.InitialValue == "string") {
                        var tldActiveFilter =  String.format("tlds:[{0}]", DomainSearchResults.ViewModel.tldFilter().join());
                        if (DomainSearchResults.ViewModel.tldFilter.indexOf(filter.InitialValue) != -1) {
                            DomainSearchResults.ViewModel.tldFilter.remove(filter.InitialValue);
                        }
                        if (DomainSearchResults.ViewModel.activeFilterValue.indexOf(tldActiveFilter) != -1) {
                            DomainSearchResults.ViewModel.activeFilterValue.remove(tldActiveFilter);
                        }
                        if (DomainSearchResults.ViewModel.tldFilter().length > 0) {
                            tldActiveFilter = String.format("tlds:[{0}]", DomainSearchResults.ViewModel.tldFilter().join());
                            DomainSearchResults.ViewModel.activeFilterValue.push(tldActiveFilter);
                        }
                        else {
                            DomainSearchResults.ViewModel.activeFilter.remove("tlds");
                        }
                    }

                    LogCiCode(filter.CiCodes.Halt, 'haltfilter');
                }

                filter.IsApplied(false);
            }
        };

        self.ToggleApply = function (filter, event) {
            /*jshint unused:false, eqnull:true */
            if (filter) {
                if (filter.IsApplied()) {
                    if (filter.InitialValue.DisplayText === "Country/Location" && DomainSearchResults.ViewModel.activeFilter.indexOf("cctld") > -1) {
                        DomainSearchResults.ViewModel.activeFilter.remove("cctld");
                        DomainSearchResults.ViewModel.activeFilterValue.remove("cctld:on");
                    }
                    else if (filter.InitialValue.DisplayText === "Premium" && DomainSearchResults.ViewModel.activeFilter.indexOf("premium") > -1) {
                        DomainSearchResults.ViewModel.activeFilter.remove("premium");
                        DomainSearchResults.ViewModel.activeFilterValue.remove("premium:on");
                    }
                    filter.Halt(filter, event);
                } else {
                    filter.Apply(filter, event);
                }
            }
        };

        self.ToggleExpansion = function (filter, event) {
            /*jshint unused:false, eqnull:true */
            if (filter) {
                if (filter.CiCodes) {
                    LogCiCode(filter.IsExpanded() ? filter.CiCodes.Collapse : filter.CiCodes.Expand, filter.IsExpanded() ? 'collapsefilter' : 'expandfilter')
                }
                filter.IsExpanded(filter.IsExpandable() && !filter.IsExpanded());
            }
        };

        var LogCiCode = function (code, action) {
            if ('function' === typeof (LogFastballEvent) && 0 < code && '' !== action) {
                LogFastballEvent(code, 'searchresults', action);
            }
        };

        self.IsSatisfiedBy = function (item) {
            var rtnVal = false;

            if (item) {
                item.filterPosition(0);
                rtnVal = self.Predicate().call(self, item, self.Value());
                if ((!self.Value() || 0 === self.Value().length) || (rtnVal && self.FilterType.eq(FilterTypes.And)) || (!rtnVal && self.FilterType.eq(FilterTypes.Or))) {
                    var sortedSubs = _appliedSubFilters().sort(function (l, r) { return (l ? l.Index() : 0) - (r ? r.Index() : 0); });
                    var j = 0;
                    while (j < sortedSubs.length && ((rtnVal && sortedSubs[j].FilterType.eq(FilterTypes.And)) || (!rtnVal && sortedSubs[j].FilterType.eq(FilterTypes.Or)))) {
                        rtnVal = sortedSubs[j].IsSatisfiedBy(item);
                        j++;
                    }
                }
            }
            return rtnVal;
        };

        self.GetSatisfyingItem = function (source) {
            var rtnVal = null;

            if (source && $.isArray(source)) {
                rtnVal = self.GetAllSatisfyingItems(source)[0];
            }

            return rtnVal;
        };

        self.GetAllSatisfyingItems = function (source) {
            var rtnVal = [];

            if (source && $.isArray(source)) {
                rtnVal = ko.utils.arrayFilter(source, function (i) { return self.IsSatisfiedBy(i); });
            }

            return ko.utils.arrayGetDistinctValues(rtnVal);
        };
    };

    var PhaseOptionViewModel = function (data) {
        var self = this;
        var _prices = ko.observableArray([]);
        PhaseOptionViewModel.TemplateInfos = {
            PreReg: { Prefixes: ['GA'], Index: 0, Name: 'PreRegPhaseTemplate', Title: DomainSearchResults.Options.PhasePreRegName },
            Priority: { Prefixes: ['LR', 'EA'], Index: 1, Name: 'PriorityPhaseTemplate', Title: DomainSearchResults.Options.PhasePriorityPreRegName },
            EarlyAccess: { Prefixes: ['ER'], Index: 1, Name: 'EarlyAccessPhaseTemplate', Title: DomainSearchResults.Options.PhasePriorityPreRegName, IsSubPhase: true },
            EarlyAccessPriority: { Prefixes: ['EX'], Index: 0, Name: 'EarlyAccessPriorityPhaseTemplate', Title: DomainSearchResults.Options.PhaseEarlyAccessPriorityPreRegName },
            Trademark: { Prefixes: ['SR'], Index: 2, Name: 'TrademarkPhaseTemplate', Title: DomainSearchResults.Options.PhaseTrademarkName }
        };

        self.AreSubPhasesExpanded = ko.observable(false);
        self.CiCode = '000000';
        self.Code = ko.observable('');
        self.EndDate = ko.observable(new Date(8640000000000000));
        self.IsDefault = ko.observable(false);
        self.Index = ko.computed({
            read: function () {
                return self.Template().Index;
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.HasIcannFee = ko.observable(false);
        self.IsAppFeeRefundable = ko.observable(false);
        self.IsEqualRegRenewPrice = ko.observable(false);
        self.HasSubPhases = ko.computed({
            read: function () { return self.SubPhases() && 0 < self.SubPhases().length; },
            deferEvaluation: true,
            owner: self
        }, self);
        self.IsExpanded = ko.observable(false);
        self.IsSelected = ko.observable(false);
        self.LiveStartDate = ko.observable(new Date(0));
        self.LiveStartDateUtc = ko.observable(new Date(0));
        self.Name = ko.observable('');
        self.Parent = ko.observable(null);
        self.Prices = ko.computed({
            read: function () {
                var rtnVal = _prices();
                if (self.HasSubPhases()) {
                    rtnVal = self.SubPhases()[self.SubPhases().length - 1].Prices();
                }
                return rtnVal;
            },
            write: function (val) { _prices($.isArray(val || []) ? val || [] : [val]); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.SelectedSubPhase = ko.computed({
            read: function () { return ko.utils.arrayFirst(self.SubPhases(), function (i) { return i.IsSelected(); }); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.StartDate = ko.observable(new Date(0));
        self.SubPhases = ko.observableArray([]);
        self.ShowPricing = ko.computed({
            read: function () { return 0 >= self.SubPhases().length; },
            deferEvaluation: true,
            owner: self
        }, self);
        self.ShowSubPhases = ko.computed({
            read: function () { return self.IsSelected() && 0 < self.SubPhases().length; },
            deferEvaluation: true,
            owner: self
        }, self);
        self.Template = ko.observable(PhaseOptionViewModel.TemplateInfos.PreReg);
        self.Title = ko.observable('&nbsp;');
        self.VatCountry = ko.observable(false);

        self.Load = function (data) {
            if (data) {
                self.Code(data.Code).StartDate(data.StartDate).EndDate(data.EndDate).LiveStartDate(data.LiveStartDate || self.StartDate()).LiveStartDateUtc(new Date(data.LiveStartDate + ' ' + data.LiveStartTime || self.StartDate() + ' ' + data.StartTime));
                $.each(PhaseOptionViewModel.TemplateInfos, function (index) { if (self.Code() && 2 <= self.Code().length && -1 < $.inArray(self.Code().substring(0, 2), PhaseOptionViewModel.TemplateInfos[index].Prefixes)) { self.Template(PhaseOptionViewModel.TemplateInfos[index]); return false }; });
                self.Name(self.Template().Title);
                self.IsExpanded(!self.Template.eq(PhaseOptionViewModel.TemplateInfos.Trademark));

                if (data.IsAppFeeRefundable) {
                    self.IsAppFeeRefundable(data.IsAppFeeRefundable);
                }

                if (data.IsEqualRegRenewPrice) {
                    if (data.Prices.DomainRegList == data.Prices.DomainRenewList)
                        self.IsEqualRegRenewPrice(data.Prices.DomainRegList);
                    else
                        self.IsEqualRegRenewPrice([data.Prices.DomainRegList, data.Prices.DomainRenewList]);
                }
                if (data.HasIcannFee) {
                    self.HasIcannFee(data.HasIcannFee);
                }

                if(data.VatCountry){
                    self.VatCountry(data.VatCountry);
                }
                if (data.Prices) {
                    $.each(data.Prices, function (i) { self.Prices()[i] = DomainSearchResults.StringEndsWith(data.Prices[i], '/yr') ? data.Prices[i].slice(0, -3) : data.Prices[i]; });
                }
                if (data.SubPhases) {
                    // NOTE: I think IE7 has a problem creating these subphases using the $.each syntax
                    //$.each(data.SubPhases, function (i) { self.SubPhases.push(new PhaseOptionViewModel(data.SubPhases[i])) });
                    for (var i in data.SubPhases) {
                        self.SubPhases.push(new PhaseOptionViewModel(data.SubPhases[i]).Parent(self));
                    }
                }
                self.SubPhases.sort(function (l, r) { var lDate = new Date(l ? l.EndDate() : null), rDate = new Date(r ? r.EndDate() : null); return lDate - rDate; });
            }
        };

        self.SelectSubPhase = function (subPhase, event) {
            if (subPhase && -1 < $.inArray(subPhase, self.SubPhases())) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(subPhase.CiCode, 'searchresults', 'selectsubphase');
                }
                ko.utils.arrayForEach(self.SubPhases(), function (i) { i.IsSelected(false); });
                subPhase.IsSelected(true);
                self.ToggleSubPhases(self, event);
                if (self.IsSelected() && self.Parent() && self.Parent().IsSelected() && 'function' === typeof (self.Parent().Update)) {
                    self.Parent().Update(self.Parent());
                }
            }
        };

        self.ToggleExpansion = function (phase, event) {
            if (phase) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent('000000', 'searchresults', 'showphasedetails');
                }
                phase.IsExpanded(!phase.IsExpanded());
            }
        };

        self.ToggleSubPhases = function (phase, event) {
            /*jshint unused:false, eqnull:true */
            if (phase) {
                phase.AreSubPhasesExpanded(!phase.AreSubPhasesExpanded());
            }
        };

        self.Load(data);
    };

    var RegistrationInfoViewModel = function () {
        var self = this;
        self.ModalContent = ko.observable('');
        self.Show = ko.observable(false);
        self.ShowModal = function (viewModel, event) {
            var modal = $('#serp-reglenmodal');
            if (0 === modal.length) {
                modal = $('<div id=\'serp-reglenmodal\'></div>');
            }
            if (0 >= self.ModalContent().length) {
                var url = DomainSearchResults.Options.RegistrationUrl;
                url = DomainSearchResults.AppendQueryString(url, 'TargetDivId=serp-reglenmodal');
                $.ajax({
                    url: url,
                    async: false,
                    success: function (data) {
                        self.ModalContent(data.Html);
                        modal.html(data.Html);
                    }
                });
            }
            self.Show(true);
            modal.modal({
                overlayId: 'g-modal-overlay',
                close: 'true',
                autoPosition: 'true'
            });
        };
    };

    var SearchResultsViewModel = function (data) {
        var self = this;
        var _items = [];
        self.activeFilter = ko.observableArray([]);
        self.activeFilterValue = ko.observableArray([]);
        self.tldFilter = ko.observableArray([]);
        self.priceFilter = ko.observable('');
        self.lengthFilter = ko.observable(-1);
        self.AppliedFilters = ko.computed({
            read: function () { return ko.utils.arrayFilter(self.Filters(), function (i) { return i.IsApplied(); }); },
            deferEvaluation: true,
            owner: self
        }, self);
        self.Areas = ko.observableArray([]);
        self.AreMoreAvailable = ko.computed({
            read: function () {
                return 0 < self.TotalItems() && self.CurrentVisible() < self.TotalItems();
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.CanGoToNextStep = ko.computed({
            read: function () {
                //Available, Premium, and Country Domains
                var rtnVal = (0 < self.SelectedDomains() || (self.ExactMatch() && (self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.Available) || self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.Premium) || self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.Location) || self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.PreRegistration))));
                return rtnVal;
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.CurrentVisible = ko.observable(10);
        self.CurrencyDecimalSeparator = ko.observable('.');
        self.ExactMatch = ko.observable(null);
        self.Filters = ko.observableArray([]);
        self.AllItems = ko.computed({
            read: function () {
                var rtnVal = _items || [];

                return rtnVal;
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.Items = ko.computed({
            read: function () {
                var rtnVal = _items || [];

                var appliedFilters = self.AppliedFilters();
                if (appliedFilters) {
                    for (var i = 0; i < appliedFilters.length; i++) {
                        rtnVal = appliedFilters[i].GetAllSatisfyingItems(rtnVal);
                    }
                }

                self.TotalItems(rtnVal.length);
                if (self.CurrentVisible() < rtnVal.length) {
                    rtnVal = rtnVal.slice(0, self.CurrentVisible());
                }
                return rtnVal;
            },
            deferEvaluation: true,
            owner: self
        }, self);

        self.Items.subscribe(function() {
            var items = self.Items();
            for (var i = items.length; i--;) {
                if(self.Filters().length > 0) {
                    items[i].filterPosition(i + 1);
                }
                else{
                    items[i].filterPosition(0);
                }
            }
        }, self);

        self.IsLoaded = ko.observable(false);
        self.IsValid = ko.observable(true);
        self.NotValid = ko.observable(false);
        self.IsBlocked = ko.observable(true);

        self.Unavailable = ko.observable(true);
        self.SelectedCount = ko.observable(0);
        self.SelectedDomains = ko.observable(0);
        self.ShowExactMatch = ko.computed({
            read: function () {
                return self.IsValid() && self.ExactMatch() && !self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.Backorder) && StatusTypes.Unavailable !== self.ExactMatch().Status();
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.ShowCCTld = ko.computed({
            read: function () {
                return self.IsValid() && self.ExactMatch() && !self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.PreRegistration);
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.ShowStacks = ko.observable(true);
        self.TotalItems = ko.observable(_items.length);
        self.TypedValue = ko.observable('');
        self.TypedTLD = ko.observable('');
        self.IsTldNyc=ko.observable(false);
        self.originalPosition = ko.observable(1);
        self.filterPosition = ko.observable(0);
         self.VatCountry = ko.observable(false);
         
        self.ApplyFilter = function (filter, event) {
            /*jshint unused:false, eqnull:true */
            if (filter) {
                if (0 < filter.CiCode && 'function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(filter.CiCode, 'searchresults', 'applyfilter');
                }
                self.CurrentVisible(10);
                filter.IsApplied(true);
            }
        };

        self.CloseProductLimitations = function (viewModel, event) {
            /*jshint unused:false, eqnull:true */
            if ('function' === typeof (LogFastballEvent)) {
                LogFastballEvent('000000', 'searchresults', 'closelimits');
            }
            $.modal.close();
        };

        self.Load = function (data) {

            self.IsLoaded(false).IsValid(false);

            self.Unavailable(false);
           
            //Invalid Reason Code
            self.IsBlocked(false);
            if (data && data.Success) {
                
                self.CurrencyDecimalSeparator(data.CurrencyDecimalSeparator || '.');
                self.IsBlocked(data.InvalidType === 'blocked');
                self.NotValid(data.HeaderResult === undefined && data.Tld !== "");
                self.IsValid(data.Valid).SelectedDomains(data.CurrentlyPending);
                $.each(AreaTypes, function (i) { self.Areas.push(AreaTypes[i]); });

                if (data.Name) {
                    self.TypedValue(data.Name);
                }
                if (data.Tld) {
                    self.TypedTLD(data.Tld);
                }
                if(data.Tld=="nyc")
                {
                    self.IsTldNyc(true);
                }

                 if (data.VatCountry) {
                    self.VatCountry(true);
                }

                if (data.StripMallResult) {
                    var tlds = [];
                    var maxLength = 4;
                    
                    ko.utils.arrayForEach(data.StripMallResult, function (i) {
                        var item = new DomainViewModel(i).CiCode(84304);
                        _items.push(item); tlds.push(item.TLD());
                        maxLength = item.Name().length > maxLength ? item.Name().length : maxLength;
                        self.originalPosition(_items.length+1);
                        self.filterPosition(0);
                    });

                    var filters = self.Filters();
                    var extFilter = new FilterViewModel(2, 'Extensions').InputType(DomainSearchResults.InputTypes.None).AllowClear(true).IsExpanded(true);
                    var tldSort = ['com', 'co', 'info', 'org', 'net', 'me', 'mobi', 'us', 'biz'];
                    tlds = ko.utils.arrayGetDistinctValues(tlds).sort();
                    tldSort = ko.utils.arrayFilter(tldSort, function (i) { return -1 !== $.inArray(i, tlds); });
                    tlds = ko.utils.arrayFilter(tlds, function (i) { return -1 === $.inArray(i, tldSort); });
                    tlds = tldSort.concat(tlds);

                    ko.utils.arrayForEach(ko.utils.arrayGetDistinctValues(tlds), function (i) {
                        var sub = new FilterViewModel(extFilter.SubFilters().length, '.' + i, FilterTypes.Or, function (item, val) { return item.TLD.eq(val); }, i, DomainSearchResults.InputTypes.Checkbox).ShowTitle(false).IsExpandable(false).IsExpanded(true);
                        sub.CiCodes = DomainSearchResults.Options.Filters[2].CiCodes;
                        extFilter.SubFilters.push(sub);
                    });
                    filters.push(extFilter);

                    filters.push(new FilterViewModel(0, 'Price', FilterTypes.And,
                         function (item, val) {
                             var regExCleanPrice = new RegExp('[^\\d\\' + self.CurrencyDecimalSeparator() + ']', 'g');
                             var regExToDecimal = new RegExp('[\\' + self.CurrencyDecimalSeparator() + ']', 'g');
                             var regExUnicode = new RegExp('&#.*;', 'g');
                             if (val !== undefined) { val = val.replace(regExCleanPrice, '').replace(regExToDecimal, '.'); }
                             return isNaN(parseFloat(val, 10)) || parseFloat(val) >= parseFloat((item.Prices().CurrentPrice || item.Prices().ListPrice || '0').replace(regExUnicode, '').replace(regExCleanPrice, '').replace(regExToDecimal, '.'));
                         }).AllowClear(true)
                           .IsExpanded(true)
                           .ShowTitle(true)
                           .Instruction('Enter a maximum price')
                       );
                    filters.push(new FilterViewModel(1, 'Characters Length', FilterTypes.And, function (item, val) { return isNaN(parseInt(val, 10)) || 0 === val || val >= item.SLD().length; }, maxLength).InputType(DomainSearchResults.InputTypes.Slider).IsExpanded(true));
                    filters.push(new FilterViewModel(3, 'Country/Location', FilterTypes.And, function (item, val) { return item.Type.eq(val); }, DomainSearchResults.ItemTypes.Location, DomainSearchResults.InputTypes.Checkbox).ShowTitle(false).IsExpanded(true).IsExpandable(false));
                    filters.push(new FilterViewModel(4, 'Premium', FilterTypes.And, function (item, val) { return item.Type.eq(val); }, DomainSearchResults.ItemTypes.Premium, DomainSearchResults.InputTypes.Checkbox).ShowTitle(false).IsExpanded(true).IsExpandable(false));
                    filters = filters.sort(function (l, r) { return (l ? l.Index() : 0) - (r ? r.Index() : 0); });
                    $.each(filters, function (i) { filters[i].Title(DomainSearchResults.Options.Filters[i].Title).Instruction(DomainSearchResults.Options.Filters[i].Instruction || DomainSearchResults.Options.Filters[i].Title); filters[i].CiCodes = DomainSearchResults.Options.Filters[i].CiCodes; });
                    self.Filters(filters);

                }

                if (data.HeaderResult) {
                    self.originalPosition(0);
                    self.Unavailable(data.HeaderResult.DisplayArea === 'dppsr_extnd_unavail');
                    self.ExactMatch(new DomainViewModel(data.HeaderResult).CiCode(84310));
                    
               
                    var ccTldResult = null;

                    if (data.HeaderCcTldResult && !self.ExactMatch().Type.eq(DomainSearchResults.ItemTypes.PreRegistration)) {
                        ccTldResult = new DomainViewModel(data.HeaderCcTldResult);                        
                        var match = ko.utils.arrayFirst(_items, function (item) { return item.Id.eq(ccTldResult.Id()); });
                        if (match) {
                            match.Other(ccTldResult.Other);                                            
                        }
                        ccTldResult = match || ccTldResult;  
                    }

                    self.ExactMatch().CCTLDResult = ko.observable(ccTldResult);

                    if (self.ExactMatch().Stack) {
                        self.ExactMatch().ShowStack(true);
                    }
                }
                self.IsLoaded(true);
            }
        };

        self.GoToNextStep = function () {
            if (!self.CanGoToNextStep()) {
                return false;
            }
            if (0 >= self.SelectedDomains() && self.ExactMatch() && StatusTypes.AfterMarket !== self.ExactMatch().Status()) {
                $.ajaxSetup({ async: false });
                self.ExactMatch().AddToCart(self.ExactMatch());
            }
            var dataUrl = AddApiAction(DomainSearchResults.Options.PostUrl, CartActions.GetNextStep);
            if (pathIsDeals2()) {
                dataUrl = addQueryParam(dataUrl, 'path', 'deals2');
            }
            $.post(dataUrl, function (data) {
                if (data.Success) {
                    if ('function' === typeof (LogFastballEvent)) {
                        LogFastballEvent(13673, 'searchresults', 'continue');
                    }
                    if (data.NextStep === 5) {
                        alert('Select a Domain First');
                    }
                    else {
                        window.location = data.NextStepUrl;
                    }
                }
            });
        };

        self.ShowAll = function () {
            if ('function' === typeof (LogFastballEvent)) {
                LogFastballEvent('000000', 'searchresults', 'showall');
            }

            self.CurrentVisible(self.TotalItems());
        };

        self.ShowMore = function (count) {
            if ('function' === typeof (LogFastballEvent)) {
                LogFastballEvent(84348, 'searchresults', 'showmore');
            }
            if (isNaN(count) || 0 >= count) {
                count = self.CurrentVisible() + 10;
            }
            count = self.TotalItems() > count ? count : self.TotalItems();
            self.CurrentVisible(count);
        };

        self.ShowProductLimitations = function (viewModel, event) {
            /*jshint unused:false, eqnull:true */
            if ('function' === typeof (LogFastballEvent)) {
                LogFastballEvent(84168, 'searchresults', 'showlimits');
            }
            $('#g-modal').modal({
                overlayId: 'g-modal-overlay',
                close: false,
                autoPosition: true
            });
        };

        function AppendArray(target, source, count) {
            var returnValue = target;
            if (target && source && (0 < count)) {
                for (var i = 0; i < count && 0 < source.length; i++) {
                    returnValue.splice(returnValue.length, 0, source[0]);
                    source.splice(0, 1);
                }
            }
            return returnValue;
        }

        function SortItems(items) {
            var returnValue = items;

            if (self.ExactMatch()) {
                var spins = $.grep(items, function (item) { return AreaTypes.Recommended === item.Area(); });
                var similar = $.grep(items, function (item) { return AreaTypes.Variations === item.Area(); });
                var premium = $.grep(items, function (item) { return AreaTypes.Premium === item.Area(); });
                var remaining = ko.utils.arrayFilter(items, function (item) { return -1 === $.inArray(item, spins) && -1 === $.inArray(item, similar) && -1 === $.inArray(item, premium); });
                var temp = [];

                var isAvailable = AreaTypes.Unavailable !== self.ExactMatch().Area();
                var isUnavailable = AreaTypes.Unavailable === self.ExactMatch().Area();
                if (self.ShowExactMatch() && isAvailable) {
                    do {
                        AppendArray(temp, spins, 3);
                        AppendArray(temp, similar, 1);
                        AppendArray(temp, premium, 1);
                    } while (0 < spins.length || 0 < similar.length || 0 < premium.length);
                } else {
                    //self.PageSize(10);
                    spins = spins.filter(function (item) { return AreaTypes.Unavailable !== item.Area() && StatusTypes.Unavailable !== item.Status() && StatusTypes.Backorder !== item.Status(); });
                    similar = similar.filter(function (item) { return AreaTypes.Unavailable !== item.Area() && StatusTypes.Unavailable !== item.Status() && StatusTypes.Backorder !== item.Status(); });
                    premium = premium.filter(function (item) { return AreaTypes.Unavailable !== item.Area() && StatusTypes.Unavailable !== item.Status() && StatusTypes.Backorder !== item.Status(); });
                    do {
                        AppendArray(temp, spins, 4);
                        AppendArray(temp, similar, 4);
                        AppendArray(temp, premium, 2);
                    } while (0 < spins.length || 0 < similar.length || 0 < premium.length);

                    // Hide backorders and unavailable
                    remaining = remaining.filter(function (item) { return AreaTypes.Unavailable !== item.Area() && StatusTypes.Unavailable !== item.Status() && StatusTypes.Backorder !== item.Status(); });
                    // If domain search is for a key word only, no exact match
                    if (!self.ShowExactMatch()) {
                        // Hide ccTLDs
                        remaining = remaining.filter(function (item) { return StatusTypes.Area !== item.Status(); });
                    }
                }

                if (0 < temp.length) {
                    $.merge(temp, remaining);
                    returnValue = temp;
                }
            }

            return returnValue;
        }

        self.Load(data);
    };

    var StackViewModel = function (data) {
        var self = this;
        ko.utils.extend(self, new DomainViewModel(data));

        var _selectedItems = ko.computed({
            read: function () {
                return ko.utils.arrayFilter(self.Domains(), function (i) { return i.IsSelected(); }) || [];
            },
            deferEvaluation: true,
            owner: self
        }, self);

        self.Domains = ko.observableArray([]);
        self.Parent = ko.observable(null);
        self.OfferName = ko.observable(data.OfferSld + '.' + data.OfferTld);
        self.IsSelected = ko.computed({
            read: function () {
                return AvailabilityTypes.Selected === self.Availability();
            },
            write: function (val) {
                ko.utils.arrayForEach(self.Domains(), function (i) { i.IsSelected(val).IsExpanded(false); });

                if (val && (DomainSearchResults.ViewModel.ExactMatch().Name() === self.OfferName())) {
                    DomainSearchResults.ViewModel.ExactMatch().IsSelected(true).IsExpanded(false);
                } else if (val) {
                    self.Availability(AvailabilityTypes.Selected);
                   
                } else {
                    self.Availability(AvailabilityTypes.Available);
                }
            },
            deferEvaluation: true,
            owner: self
        }, self);
        self.IsVisible(false);
        self.SavingsText = ko.observable('');
        self.Type = ko.observable(DomainSearchResults.ItemTypes.Stack);
        self.stackFullAvailCheck = ko.observable(false);
        self.stackFullAvailCheckError = ko.observable(false);
        self.searchSource = ko.observable('');  // from search results json for fastball tracking
        self.originalPosition = ko.observable(0);  // for fastball tracking - HeaderResults, ccTLD Upsell and Stack = position 0, first domain in strip mall = 1 and increment
        self.AvailableValue = ko.observable('');  // from search results json for fastball tracking
        self.MatchSource = ko.observable('');  // from search results json for fastball tracking
        self.domainStackList = ko.observableArray([]);

        var _onSelectedItemsChanged = ko.computed(
          function () {
              var stackSelected = self.Domains().length === _selectedItems().length && DomainSearchResults.ViewModel.ExactMatch();
              self.Availability(stackSelected ? AvailabilityTypes.Selected : self.Type().InitialAvailability);
          }, self);

        self.AddToCart = function (stack, event) {
            /*jshint unused:false, eqnull:true */
            if (stack) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(self.CiCode(), 'searchresults', 'addstack');
                }
                stack.stackFullAvailCheck(true);
                var toBeSelected = self.Domains().length - _selectedItems().length;
                var rtnVal = AddApiAction(DomainSearchResults.Options.PostUrl, CartActions.AddStack);
                var dataUrl = DomainSearchResults.AppendQueryString(rtnVal, 'domain=' + encodeURIComponent(stack.OfferName()));
                $.post(dataUrl, function (data) {                    
                    if (data.Success) {                         
                        stack.stackFullAvailCheck(false);
                        stack.IsSelected(true);
                        stack.Parent().IsSelected(true);
                        DomainSearchResults.ViewModel.SelectedDomains(data.CurrentlyPending);

                        if (stack.OfferName() !== DomainSearchResults.ViewModel.ExactMatch().Name()) {
                            DomainSearchResults.ViewModel.ExactMatch().ShowStack(false);
                        }

                        ko.utils.arrayFirst(DomainSearchResults.ViewModel.AllItems(), function (item) {
                            if (item.Stack() && !(item.Stack().OfferName() === stack.OfferName())) {
                                ko.utils.arrayForEach(stack.Domains(), function (domain) {
                                    if (domain.Id() === item.Id()) {
                                        item.IsSelected(true);
                                    }
                                });
                            }
                        });
                        DomainSearchResults.ViewModel.ShowStacks(false);
                    } else {
                        stack.stackFullAvailCheck(false);
                        stack.stackFullAvailCheckError(true);
                    }

                    LogDomainSelectionEvent(self, data, self.domainStackList(), DomainSearchResults.ViewModel.activeFilter(), DomainSearchResults.ViewModel.activeFilterValue(), 0);
                });
            }
        };

        self.Load = function (data) {
            self.Type(DomainSearchResults.ItemTypes.Stack);
            if (data) {
                self.CiCode(84309);
                self.SavingsText(data.SavingsText);
                var stackSLD = data.OfferSld;
                var tlds = data.DotTypesText.split(',');
              
                ko.utils.arrayForEach(tlds, function (i) {
                    var stackItem = new DomainViewModel(data).SLD(stackSLD).TLD(i.toLowerCase());
                    stackItem = ko.utils.arrayFirst(DomainSearchResults.ViewModel.Items(), function (j) { return j.Id.eq(stackItem.Id()); }) || stackItem;
                    self.Domains.push(stackItem);
                    self.domainStackList.push(stackSLD +"."+ i);
                    self.originalPosition(DomainSearchResults.ViewModel.originalPosition());
                });
            }
          
            self.IsVisible(0 < self.Domains().length);

            self.MatchSource(data.MatchSource);               

            if(data.AvailableValue) {
                self.AvailableValue(data.AvailableValue);
            }

            if(data.Source) {
                self.searchSource(data.Source);
            }

            //For message changes on search results page
            self.GetDomainsCount = ko.computed(function () {
                if (0 < self.Domains().length && self.Domains().length == 3) {
                    return DomainSearchResults.Options.threeName;
                } else if (0 < self.Domains().length && self.Domains().length == 2) {
                    return DomainSearchResults.Options.twoName;
                } else {
                    return self.Domains().length;
                }
            }, self);
        };

        self.RemoveFromCart = function (stack, event) {
            /*jshint unused:false, eqnull:true */
            if (stack) {
                var dataUrl = AddApiAction(DomainSearchResults.Options.PostUrl, CartActions.RemoveStack);
                dataUrl = DomainSearchResults.AppendQueryString(dataUrl, 'domain=' + encodeURIComponent(stack.OfferName()));
                $.post(dataUrl, function (data) {
                    if (data.Success) {
                        stack.IsSelected(false);
                        DomainSearchResults.ViewModel.SelectedDomains(data.CurrentlyPending);

                        if (stack.OfferName() !== DomainSearchResults.ViewModel.ExactMatch().Name()) {
                            DomainSearchResults.ViewModel.ExactMatch().ShowStack(true);
                        }

                        ko.utils.arrayFirst(DomainSearchResults.ViewModel.AllItems(), function (item) {
                            if (item.Stack() && !(item.Stack().OfferName() === stack.OfferName())) {
                                ko.utils.arrayFirst(stack.Domains(), function (domain) {
                                    if (domain.Id() === item.Id()) {
                                        item.ShowStack(false);
                                    }
                                });
                                item.IsSelected(false);
                            }
                        });
                        DomainSearchResults.ViewModel.ShowStacks(true);

                        if ('function' === typeof (fbiRecordFastballEvent)) {
                            var e = new fbiEventObject(event, "removeCart", 92500, '');
                            e.AddUserInput("pf_id", self.PfId());
                            e.AddUserInput("domain", self.domainStackList());
                            fbiRecordFastballEvent(e);
                        }
                    }
                });
            }
        };

        self.Update = function (stack, event) {
            /*jshint unused:false, eqnull:true */
            if (stack) {
                if ('function' === typeof (LogFastballEvent)) {
                    LogFastballEvent(84312, 'searchresults', 'updatestack');
                }
                var dataUrl = AddApiAction(DomainSearchResults.Options.PostUrl, CartActions.UpdateStack);
                dataUrl = DomainSearchResults.AppendQueryString(dataUrl, 'bundle=domain');
                $.post(dataUrl, function (data) {
                    if (data && data.Success) {
                        stack.Expanded(false);
                    }
                });
            }
        };

        self.Load(data);
    };

    //#region Global Members
    var Options = function () {
        var self = this;
        self.CartUrl = '';
        self.ContactInformationScriptUrl = '';
        self.GetUrl = '';
        self.PostUrl = '';
        self.RegistrationUrl = '';
        self.ItemAddedMsgTitle = 'Domain Added';
        self.ItemAddedMsgText = self.ItemAddedMsgTitle;
        self.ItemsAddedMsgText = self.ItemAddedMsgText;
        self.ItemUpdatedMsgTitle = 'Domain Updated';
        self.ItemUpdatedMsgText = self.ItemUpdatedMsgTitle;
        self.ItemsUpdatedMsgText = self.ItemUpdatedMsgText;
        self.ItemRemovedMsgTitle = 'Domain Removed';
        self.ItemRemovedMsgText = self.ItemRemovedMsgTitle;
        self.ItemsRemovedMsgText = self.ItemRemovedMsgText;
        self.GeneralErrorMsgTitle = 'An error occured';
        self.GeneralErrorMsgText = self.GeneralErrorMsgTitle;
        self.BundleAddedMsgTitle = self.ItemAddedMsgTitle;
        self.BundleAddedMsgText = self.ItemAddedMsgText;
        self.AuctionAddedMsgTitle = self.ItemAddedMsgTitle;
        self.AuctionAddedMsgText = self.ItemAddedMsgText;
        self.PhasePreRegName = 'Pre-registration';
        self.PhasePriorityPreRegName = 'Priority Pre-registration';
        self.PhaseTrademarkName = 'Trademark Owners';
        self.PhaseEarlyAccessPriorityPreRegName = 'Buy Nowxxx';
    };

    DomainSearchResults.Options = new Options(null);

    DomainSearchResults.ViewModel = new SearchResultsViewModel();

    DomainSearchResults.Init = function (options) {
        
        DomainSearchResults.Options = $.extend({}, DomainSearchResults.Options, options || {});
        $.ajaxSetup({ cache: false });
        var dataUrl = DomainSearchResults.AppendQueryString(DomainSearchResults.Options.GetUrl, 'area=all');
        //If the user comes from the Deals2 page, they should not be shown promo deals
        //dataUrl with deals2 appended will suppress promos for .com domains
        if(document.referrer.toString().indexOf("deals2") > -1) {
            dataUrl += "&path=deals2";
        }
        $.post(
          dataUrl,
          function (data) {
              if (data.Success) {
                  DomainSearchResults.ViewModel.Load(data);
                  ko.applyBindings(DomainSearchResults.ViewModel);
                  SetControlDefaults();
                  LockSearchControls();
                  if(window.location.href.toString().indexOf("vrgdin01") > -1 &&
                        document.referrer.toString().indexOf("deals2") > -1 &&
                        !(document.referrer.toString().indexOf("searchresults") > -1))
                  {
                    SetTLDFilter(".com");
                    SetTLDFilter(".net");
                  }
              } else {
                  if (data.Redirect) {
                      window.location = data.Redirect;
                  }
              }
          });
    };

    DomainSearchResults.AppendQueryString = function (url, qstring) {
        var queryStringDelimiter = '?';
        if (url.indexOf('?') >= 0) {
            queryStringDelimiter = '&';
        }
        return url + queryStringDelimiter + qstring;
    };

    DomainSearchResults.BreakString = function (value, length) {
        var rtnVal = value;
        if (rtnVal && length < rtnVal.length) {
            var temp = rtnVal.match(new RegExp('.{1,' + length + '}', 'g'));
            rtnVal = temp.join('<br />');
        }
        return rtnVal;
    };

    DomainSearchResults.StringEndsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };

    DomainSearchResults.StringStartsWith = function (string, startsWith) {
        string = string || '';
        if (startsWith.length > string.length)
            return false;
        return string.substring(0, startsWith.length) === startsWith;
    };

    function AttachEvents() {
        $('#results .searchbox #domain_search_input').change(function (event) { EnableSearchButton(event); }).keyup(function (event) { EnableSearchButton(event); });
    }

    function EnableSearchButton(event) {
        /*jshint unused:false, eqnull:true */
        if (DomainSearchResults.ViewModel.TypedValue() && 0 < DomainSearchResults.ViewModel.TypedValue().length) {
            $('#results .searchbox .searchbox-btn').removeClass('flt-btn-inactive').click(function (event) {
                searchresultsheader_js.validateTLD(); searchresultsheader_js.validateAndSearch();
            });
        }
    }

    function LogDomainSelectionEvent(self, data, domain, activeFilter, activeFilterValue, position){
        if ('function' === typeof (fbiRecordFastballEvent)) {
            var availableValue = data.AvailableValue ? data.AvailableValue : "";
            var matchSource = self.MatchSource() ? self.MatchSource() : "";
            var e = new fbiEventObject(new Object(), "addtocart", 92499, '');
            e.AddUserInput("pf_id", self.PfId());
            e.AddUserInput("domain", domain);
            e.AddUserInput("source", self.searchSource());
            e.AddUserInput("matchSource", matchSource);
            e.AddUserInput("position", position);
            e.AddUserInput("fullCheckAvail", availableValue);
            e.AddUserInput("responseAvail", self.AvailableValue());
            e.AddUserInput("filters", String.format("[{0}]", activeFilter.join()));
            e.AddUserInput("filterPosition", self.filterPosition());
            e.AddUserInput("filtersValue",  String.format("[{0}]", activeFilterValue.join()));
            e.AddUserInput("Ad", self.IsAd());
            fbiRecordFastballEvent(e);
//            for(var i = e.inputArray.length; i--;) {
//                console.log(e.inputArray[i].key + '^' + e.inputArray[i].value);
//            }
        }
    }

    function LockSearchControls() {
        var sticky = $('#results #search');
        sticky.wrap('<div id=\'search-wrapper\' />');
        var sticky_container = $('#results #search-wrapper');
        sticky_container.waypoint({
            handler: function (event, direction) {
                if ('down' === direction) {
                    sticky_container.css({ 'height': sticky.outerHeight() });
                    sticky.stop().addClass('sticky').css;
                } else {
                    sticky_container.css({ 'height': 'auto' });
                    sticky.stop().removeClass('sticky');
                }
            },
            offset: function () {
                return 0;
            }
        });
    }

    function SetControlDefaults() {
        if (DomainSearchResults.ViewModel.TypedValue() && 0 < DomainSearchResults.ViewModel.TypedValue().length) {
            $('#domain_search_input').val(DomainSearchResults.ViewModel.TypedValue() + (0 < DomainSearchResults.ViewModel.TypedTLD().length ? '.' + DomainSearchResults.ViewModel.TypedTLD() : ''));
            $('#domain_search_input_label').hide();
            $('#results .searchbox .searchbox-btn').addClass('flt-btn-inactive').attr('onclick', '');
            AttachEvents();
        }
    }

    function AddApiAction(url, action) {
        var urlBaseEnd = url.indexOf('?');
        if (urlBaseEnd == -1)
            urlBaseEnd = url.length;
        var urlBase = url.substr(0, urlBaseEnd);
        var queryParams = url.substr(urlBaseEnd, url.length);
        return urlBase + action + queryParams;
    }

    function SetTLDFilter(tld) //activate TLD filter for given TLD param
    {        
        ko.utils.arrayForEach(DomainSearchResults.ViewModel.Filters(),
            function (parent)
            {
                if(parent.Title().toString().toLowerCase().indexOf("extensions") > -1)
                {
                    ko.utils.arrayForEach(parent.SubFilters(), 
                        function(subEntry)
                        {                            
                            if(subEntry.Title().toString().indexOf(tld.toString()) > -1
                                && subEntry.Title().toString().length == tld.toString().length)
                                parent.Apply(subEntry, null);
                        });
                }
            });
    }
    //#endregion
}(window.DomainSearchResults = window.DomainSearchResults || {}, jQuery));
function pathIsDeals2(){
  if(getQueryParams()['path'] !== undefined){
    return getQueryParams()['path'] === 'deals2';
  }

    return false;
}
function getQueryParams(){
  var url = window.location.href;
  var params = {};
  if(url.indexOf('?') > -1)
  {
      var queryParams = (url.substr(url.indexOf('?')+1,url.length)).split('&');
      for(var i = 0; i < queryParams.length; i++)
      {
        var param = queryParams[i].split('=');
        params[param[0]] = param[1].replace('#','');
      }
      return params;
  }
  return [];
}
function addQueryParam(url,name,value){
  return url + (url.indexOf('?') !== -1 ? '&' : '?') + name + '=' + value;
}
