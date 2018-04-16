'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('OrderCtrl', function ($scope, $http, cons) {

        $http({
            url: cons.bs.o + 'DBOperations/rest/UserService/fetch/tradehistory?usr_key=100',
            method: "GET"
        }).then(function (response) {
            $scope.orders = response.data;
        });

        console.log(cons);

    });
