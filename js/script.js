/**
 * Created by Albane on 15.05.17.
 */

var app = angular.module("coin-seminar", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/result01", {
            templateUrl : "pages/result01.html"
        })

        .when("/result02", {
            templateUrl : "pages/result02.html"
        })

        .when("/result03", {
            templateUrl : "pages/result03.html"
        })

        .when("/result04", {
            templateUrl : "pages/result04.html"
        })

        .otherwise({redirectTo : "/result01"});
});