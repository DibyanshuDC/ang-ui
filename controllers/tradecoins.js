'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:TradeCoinsCtrl
 * @description
 * # TradeCoinsCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('TradeCoinsCtrl', function ($scope, $http, cons) {

        $http({
            url: cons.bs.m + 'exchange',
            method: "GET"
        }).then(function (response) {
            $scope.coins = response.data;
        });

    });



//[
//  {
//    "ID": "ethereum",
//    "Name": "Ethereum",
//    "Price": "570.516660393",
//    "MarketCap": "570.516660393",
//    "PercentageChange": " -10.91 "
//  }
//]
