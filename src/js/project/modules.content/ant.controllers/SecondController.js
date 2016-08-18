/**
 * Created by hamidbehnam on 8/18/16.
 */

(function () {
    'use strict';

    angular.module("ant.controllers")
        .controller("SecondController", ["$scope", SecondController]);

    function SecondController($scope) {
        var vm = this;
        vm.testField = "this comes from the secondController";
    }
})();
