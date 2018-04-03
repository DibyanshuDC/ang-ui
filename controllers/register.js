'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('RegCtrl', function ($scope, $http, $window) {



        $scope.success = '';



        $scope.register = function () {

            if ($scope.password === $scope.password2 && $scope.contact) {


                var userData = {

                    "schemas": [
                        "urn:ietf:params:scim:schemas:core:2.0:User",
                        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
                        "urn:ietf:params:scim:schemas:extension:oracle:2.0:OIG:User"
                    ],
                    "userName": $scope.username,
                    "name": {
                        "familyName": $scope.username.split('@')[0]
                    },
                    "password": $scope.password,
                    "phoneNumbers": [
                        {
                            "value": "555-555-555",
                            "type": "work"
                },
                        {
                            "value": $scope.contact,
                            "type": "mobile"
                }
            ],
                    "userType": "Contractor",
                    "urn:ietf:params:scim:schemas:extension:oracle:2.0:OIG:User": {
                        "homeOrganization": {
                            "value": "4",
                            "$ref": "http://10.0.5.53:14000/idaas/im/scim/v1/Organizations/4"
                        }
                    }

                };

                $http({
                        url: 'http://10.0.5.53:14000/idaas/im/scim/v1/Users',
                        method: "POST",
                        data: userData,
                        headers: {
                            'Authorization': 'Basic eGVsc3lzYWRtOldlbGNvbWUx',
                            'Content-Type': "application/scim+json"
                        },
                    })
                    .then(function (response) {
                            // success
                            $scope.success = "You are registered";


                            setTimeout(function () {
                                $window.location.href = '#!login';
                            }, 3000);

                        },
                        function (error) { // optional
                            // failed
                            alert("Errors in the fields !");
                        });
            } else {
                console.log("correct details");
            }
        }




        //                
        //          $http({
        //          url: authUrl,
        //          method: "POST",
        //          headers: {
        //            'Authorization': 'Basic ' + cred
        //          },
        //          data: $httpParamSerializer({
        //            grant_type: 'client_credentials'
        //          })
        //        })









    });
