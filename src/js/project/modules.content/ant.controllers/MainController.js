/**
 * Created by hamidbehnam on 8/18/16.
 */

(function () {
    'use strict';

    angular.module("ant.controllers")
        .controller("MainController", ["$scope", MainController]);

    function MainController($scope) {
        var vm = this;
        vm.testField = "this comes form the mainController";
    }
})();
