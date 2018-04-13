'use strict';

/**
 * @ngdoc function
 * @name cryptoCentric.controller:BuySellCtrl
 * @description
 * # BuySellCtrl
 * Controller of the cryptoCentric
 */
angular.module('cryptoCentric')
    .controller('BuySellCtrl', function ($scope, $http, $routeParams, $window) {


        $scope.coinAmount = 0;
        var tradeData;
        $scope.feepercent = 0;
        $scope.feepercent = 3;
        $scope.action = $routeParams.action;
        if ($scope.action === 'Buy') {
            $scope.altAction = "Sell";
        } else {
            $scope.altAction = "Buy";
        }
        $http({
            url: 'http://10.0.5.52:8081/api/exchange',
            method: "GET"
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

        $scope.confirmTrans = function () {

            if ($scope.coinAmount > 0) {

                tradeData = {
                    "USR_KEY": "100",
                    "USER_ID": "tuser1@dc.com",
                    "COINS_VOL": $scope.coinAmount,
                    "COINNAME": $scope.coin.name,
                    "TYPE": $scope.action
                }


                $http({
                        url: 'http://10.0.5.53:7001/DBOperations/rest/UserService/insert/buytrade',
                        method: "POST",
                        data: tradeData,
                        headers: {
                            'Content-Type': "application/json"
                        },
                    })
                    .then(function (response) {
                            // success

                            var tUrl = "http://10.0.5.52:8081/api/" +
                                $scope.action + "Order";
                            console.log(response.data);
                            $http({
                                    url: "http://10.0.5.52:8081/api/buyOrder",
                                    method: "POST",
                                    data: {
                                        "transactionID": response.data.txnid,
                                        "usr_key": "100",
                                        "walletaddress": response.data.addr,
                                        "quantity": $scope.coinAmount.toString(),
                                        "coinname": $scope.coin.name,
                                        "userid": "tuser1@dc.com"
                                    },
                                    headers: {
                                        'Content-Type': "application/json"
                                    },
                                })
                                .then(function (response) {

                                        $('#confirm').modal('hide');
                                        // success
                                        $window.location.href = '#!myorders';

                                    },
                                    function (e) { // optional
                                        // failed
                                        console.log("Errors from Mule");
                                    }
                                );

                        },
                        function (e) { // optional
                            // failed
                            console.log("Errors from OAM/OIM !");
                        }
                    );
            }
        };

    });
