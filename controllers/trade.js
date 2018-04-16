'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('TradeCtrl', function ($scope, $http, $routeParams, cons) {

        $scope.sellAmnt = 0.000;
        $scope.buyAmnt = 0.000;
        $http({
            url: cons.bs.m + 'exchange',
            method: "GET"
        }).then(function (response) {

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

    });
