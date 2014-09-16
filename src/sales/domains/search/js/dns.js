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
                    url: '/domainsapi/v1/tlds/pricing'
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

                                    response.Pods[y].ProductPrice = getPriceForCurrentPod(response.Pods[y].Tld, priceresponse, response);

                                    if (response.Pods[y].ProductPrice instanceof Array) {
                                        response.Pods[y].CurrentPrice = response.Pods[y].ProductPrice[1];
                                        response.Pods[y].ListPrice = response.Pods[y].ProductPrice[0];
                                        response.Pods[y].IcannForCurrent=response.Pods[y].ProductPrice[2];
                                        response.Pods[y].IcannForList=response.Pods[y].ProductPrice[3];
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
                PromoCode: '2943962',
                ShopperType: '',
                tlds: []
            };

            for (var x = 0; x < pods.Pods.length; x++) {
                var tld = {

                    Tld: pods.Pods[x].Tld,
                    Count: 1,
                    RegistrationLength: ((pods.Pods[x].Tld=="com.au"||pods.Pods[x].Tld=="co.uk")?2:1),
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
                    return [podPrices.ListPrice, podPrices.CurrentPrice,domainConfigResponse.domainCurrentIcann, domainConfigResponse.domainListIcann];

                }
            }

        }
    }
})();
