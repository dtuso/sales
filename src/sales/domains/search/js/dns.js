(function() {
    angular.module('dnsApp', ['ngSanitize'])
        .factory('domainSearchService', ['$http', '$q', domainsearch])
        .controller('dnsCtrl', ['$scope', 'domainSearchService', dnsController]);


    function domainsearch($http, $q) {
        return {
            getTldPrice: function(priceRequest) {
                var deferred = $q.defer();

                $http({
                    method: 'POST',
                    data: priceRequest,
                    url: api_url
                })
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            },
            getPodData: function(podUrl) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: podUrl
                })
                    .success(function(data) {
                        deferred.resolve(data);
                    })
                    .error(function(data, status) {
                        deferred.reject(status);
                    });

                return deferred.promise;
            }
        };
    }



    function dnsController($scope, domainSearchService) {
        $scope.podPrice = {
            ListPrice: "200",
            CurrentPrice: "100"
        }

        $scope.podsDataTop = [];
        $scope.podsDataBottom = [];


        getPodData();

        function getButtonText() {
            tldPhaseActiveAny()
        }

        function getPodData() {
            return domainSearchService.getPodData(url)
                .then(function(response) {
                    if (response != null && response != '') {

                        var priceRequest = buildPriceRequest(response);

                        domainSearchService.getTldPrice(priceRequest)
                            .then(function(priceresponse) {
                                $scope.podsDataTop = response.Pods;
                                $scope.podsDataBottom = response.BottomPods;

                                for (var y = 0; y < response.Pods.length; y++) {
                                    var priceList = getPriceForCurrentPod(response.Pods[y].Tld, priceresponse, response);

                                    var ProductPrice = getPriceForCurrentPod(response.Pods[y].Tld, priceresponse, response);

                                     if (ProductPrice !=null || ProductPrice!='') {
                                        response.Pods[y].CurrentPrice = ProductPrice.CurrentPrice;
                                        response.Pods[y].ListPrice = ProductPrice.ListPrice;
                                        response.Pods[y].IcannForCurrent=ProductPrice.IcannForCurrent;
                                        response.Pods[y].IcannForList=ProductPrice.IcannForList;
                                    }                               
                                     //hardcoded currently , would be updated to fetch correct value from API.
                                    response.Pods[y].LaunchPhase = 28;

                                }
                            });
                    }
                });
        }

        function buildPriceRequest(pods) {
            var priceRequest = {
                promo:{
                  Code:"2943962",
                  ShopperType:0,
                  ForExstShopper:false,
                  ForCatalog:false,
                  ForReseller:false  
                },                        
                tlds: []
            };

            for (var x = 0; x < pods.Pods.length; x++) {
                var tld = {

                    Tld: pods.Pods[x].Tld,
                    Count: 1,
                    RegistrationLength: ((pods.Pods[x].Tld=="com.au")?2:1),
                    RegistrationType: 0,
                    TierId: -1,
                    LaunchPhase: 28
                };
                

                priceRequest.tlds.push(tld);
            }
            for (var x = 0; x < pods.BottomPods.length; x++) {
                var bottomTld = {
                    Tld: pods.BottomPods[x].Tld,
                    Count: 1,
                    RegistrationLength: 1,
                    RegistrationType: 0,
                    TierId: -1,
                    LaunchPhase: 28
                };
                priceRequest.tlds.push(bottomTld);
            }
            return priceRequest;
        }


        $scope.getPriceForCurrentPod = getPriceForCurrentPod;

        function getPriceForCurrentPod(tld, priceforPodsResponse, domainConfigResponse) {
            var podPrices = $scope.podPrice;
            for (var x = 0; x < priceforPodsResponse.length; x++) {
                if (domainConfigResponse.Pods[x].Tld === tld) {
                    podPrices.CurrentPrice = priceforPodsResponse[x].CurrentPrice;
                    podPrices.ListPrice = priceforPodsResponse[x].ListPrice;
                  
                    if (priceforPodsResponse[x].IsOnSale) {
                        if (priceforPodsResponse[x].IsIcann) {                           
                            domainConfigResponse.domainCurrentIcann = '*';
                        }
                    } else {
                        if (priceforPodsResponse[x].IsIcann) {
                            domainConfigResponse.domainListIcann = '*';                          
                        }                  
                    }                  
                    return {ListPrice:podPrices.ListPrice, CurrentPrice:podPrices.CurrentPrice,IcannForCurrent:domainConfigResponse.domainCurrentIcann, IcannForList:domainConfigResponse.domainListIcann};

                }
            }

        }
    }
})();
