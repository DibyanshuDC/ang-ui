var app = angular.module("cryptoCentric", ["ngRoute"])
    .constant('cons', {
        bs: {
            o: 'http://10.0.5.53/',
            m: 'http://10.0.5.52/'
        },
    })
    .config(function ($routeProvider, $locationProvider, $sceDelegateProvider, cons) {

        console.log(cons);
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
            activePage: 'home'
        }).
        when("/register", {
            templateUrl: "views/register.html",
            controller: "RegCtrl",
            activePage: 'register'
        }).
        when("/login", {
            templateUrl: "views/login.html",
            controller: "LoginCtrl",
            activePage: 'login'
        }).
        when("/forgotpassword", {
            templateUrl: "views/forgotpassword.html",
            controller: "FrgtPwdCtrl",
            activePage: 'forgotpassword'
        }).
        when("/multicoinwallets", {
            templateUrl: "views/multicoinwallets.html",
            controller: "MultiCtrl",
            activePage: 'multicoinwallets'
        }).
        when("/do/:action/:coin", {
            templateUrl: "views/buy-sell.html",
            controller: "BuySellCtrl",
            activePage: 'default'
        }).
        when("/trade/:coin", {
            templateUrl: "views/trade.html",
            controller: "TradeCtrl",
            activePage: 'default'
        }).
        when("/tradecoins", {
            templateUrl: "views/tradecoins.html",
            controller: "TradeCoinsCtrl",
            activePage: 'default'
        }).
        when("/wallet/:coin", {
            templateUrl: "views/wallet.html",
            controller: "WalletCtrl",
            activePage: 'default'
        }).
        when("/myaccount", {
            templateUrl: "views/myaccount.html",
            controller: "AccountCtrl",
            activePage: 'default'
        }).
        when("/dashboard", {
            templateUrl: "views/dashboard.html",
            controller: "DashCtrl",
            activePage: 'default'
        }).
        when("/wallet", {
            templateUrl: "views/walletPage.html",
            controller: "WalletsCtrl",
            activePage: 'default'
        }).
        when("/myorders", {
            templateUrl: "views/orders.html",
            controller: "OrderCtrl",
            activePage: 'default'
        }).
        otherwise({
            redirectTo: "/"
        });


        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    });
