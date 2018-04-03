'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:TradeCoinsCtrl
 * @description
 * # TradeCoinsCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('TradeCoinsCtrl', function ($scope, $http) {

        $http({
                url: 'http://10.0.5.52:8081/api/exchange',
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
