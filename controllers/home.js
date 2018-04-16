'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('HomeCtrl', function ($scope, $http, cons) {

        $http({
            url: cons.bs.m + 'exchange',
            method: "GET"
        }).then(function (response) {
            $scope.coins = response.data;
        });

    });
