'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:BuySellCtrl
 * @description
 * # BuySellCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('BuySellCtrl', function ($scope, $http, $routeParams) {


        $scope.coinAmount = 0;


        $scope.action = $routeParams.action;
        if ($scope.action === 'buy') {
            $scope.altAction = "sell";
        } else {
            $scope.altAction = "buy";
        }
        $http({
            url: 'http://10.0.5.52:8081/api/exchange',
            method: "GET",
            headers: {
                'Authorization': 'Basic dXNlcjpjcnlwdG8='
            },
        }).then(function (response) {
            $scope.coin = response.data;

            function coinDetails(coin) {
                return coin.id == $routeParams.coin;
            }

            $scope.coin = response.data.filter(coinDetails)[0];

            $scope.tradeAmount = $scope.coin.price * $scope.coinAmount;

        });


        $scope.coinAmountChange = function () {
            $scope.tradeAmount = $scope.coin.price * $scope.coinAmount;
        };

        $scope.tradeAmountChange = function () {
            $scope.coinAmount = $scope.tradeAmount / $scope.coin.price;
        };



        //        $http({
        //                url: 'http://10.0.5.52:8081/api/exchangeRate?id='+$scope.coin + '&numberOfCoin=1' ,
        //                method: "GET"
        //            }).then(function (response) {
        //                $scope.price = response.data;
        //            })


    });
