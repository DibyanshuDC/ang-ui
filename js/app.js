var app = angular.module("cryptoCentric", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain.  Notice the difference between * and **.
          'http://10.0.5.52/**',
          'http://10.0.5.53/**'
        ]);

        $routeProvider.
        when("/", {
            templateUrl: "views/home.html",
            controller: "HomeCtrl",
            controllerAs: 'main',
            activePage: 'default'
        }).
        when("/register", {
            templateUrl: "views/register.html",
            controller: "RegCtrl"
        }).
        when("/login", {
            templateUrl: "Views/login.html",
            controller: "LoginCtrl"
        }).
        when("/forgotpassword", {
            templateUrl: "views/forgotpassword.html",
            controller: "FrgtPwdCtrl"
        }).
        when("/multicoinwallets", {
            templateUrl: "views/multicoinwallets.html",
            controller: "MultiCtrl"
        }).
        when("/do/:action/:coin", {
            templateUrl: "views/buy-sell.html",
            controller: "BuySellCtrl"
        }).
        when("/trade/:coin", {
            templateUrl: "views/trade.html",
            controller: "TradeCtrl"
        }).
        when("/tradecoins", {
            templateUrl: "views/tradecoins.html",
            controller: "TradeCoinsCtrl"
        }).
        when("/wallet/:coin", {
            templateUrl: "views/wallet.html",
            controller: "WalletCtrl"
        }).
        when("/myaccount", {
            templateUrl: "views/myaccount.html",
            controller: "AccountCtrl"
        }).
        when("/dashboard", {
            templateUrl: "views/dashboard.html",
            controller: "DashCtrl"
        }).
        when("/wallet", {
            templateUrl: "views/walletPage.html",
            controller: "WalletsCtrl"
        }).
        otherwise({
            redirectTo: "/"
        });


        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });
