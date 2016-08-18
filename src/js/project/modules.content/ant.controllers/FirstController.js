/**
 * Created by hamidbehnam on 8/18/16.
 */

(function () {
    'use strict';

    angular.module("ant.controllers")
        .controller("FirstController", ["$scope", FirstController]);

    function FirstController($scope) {
        var vm = this;
        vm.testField = "this comes from the firstController";
    }
})();
