'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:WalletCtrl
 * @description
 * # WalletCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('WalletCtrl', function ($scope, $http, $routeParams) {

        //        $scope.sellAmnt = 0.000;
        //        $scope.buyAmnt = 0.000;
        //        $http({
        //                url: 'http://10.0.5.52:8081/api/exchange' ,
        //                method: "GET"
        //            }).then(function (response) {
        //            
        //                function coinDetails(coin) {
        //                    return coin.id == $routeParams.coin ;
        //                }
        //            
        //                $scope.coin = response.data.filter(coinDetails)[0];
        //                $scope.tradeAmount = $scope.coin.price * $scope.coinAmount;
        //                
        //            });
        //    
        //    
        //        $scope.coinAmountChange = function() {
        //            $scope.tradeAmount = $scope.coin.price * $scope.coinAmount;
        //        };
        //    
        //        $scope.tradeAmountChange = function() {
        //            $scope.coinAmount =  $scope.tradeAmount / $scope.coin.price;
        //        };

    });
