'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('HomeCtrl', function ($scope, $http) {

        $http({
            url: 'http://10.0.5.52:8081/api/exchange',
            method: "GET"
        }).then(function (response) {
            $scope.coins = response.data;
        });

    });
