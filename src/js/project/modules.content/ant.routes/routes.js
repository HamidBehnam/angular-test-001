/**
 *
 * Created by hamidbehnam on 8/18/16.
 */

(function () {
    'use strict';

    angular.module("ant.routes")
        .config(["$routeProvider", DefineRoutes]);

    function DefineRoutes($routeProvider) {
        $routeProvider.when("/first", {
            templateUrl: "src/html/first.html",
            controller: "FirstController",
            controllerAs: "firstController"
        }).when("/second", {
            templateUrl: "src/html/second.html",
            controller: "SecondController",
            controllerAs: "secondController"
        });
    }
})();
