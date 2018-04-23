'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('LoginCtrl', function ($scope, $http, cons) {

        $scope.captcha = true;

        $scope.email = "test";
        $scope.password = "Welcome1";
        $scope.login = function () {

            if ($scope.captcha) {
                $http({
                        url: cons.bs.am + 'ms_oauth/oauth2/endpoints/oauthservice/tokens',
                        method: "POST",
                        data: 'grant_type=password&username=' + $scope.email + '&password=' + $scope.password + '&scope=UserProfile.me',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Authorization": "Basic Y3VzdG9tZXJDbGllbnQ6elJwSmJsNzNpRThY"
                        },
                    })
                    .then(function (response) {
                            console.log(response);

                            $http({
                                    url: cons.bs.am + "ms_oauth/resources/userprofile/me",
                                    method: "GET",
                                    headers: {
                                        "Authorization": response.data.access_token
                                    }
                                })
                                .then(function (response) {
                                    console.log(response);
                                });
                        },
                        function (e) { // optional
                            // failed
                            console.log("Errors in request");
                        });
            }
        };

    });
