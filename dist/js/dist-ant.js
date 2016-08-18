/**
 * Created by hamidbehnam on 8/18/16.
 */

angular.module("ant.controllers", []);

/**
 * Created by hamidbehnam on 8/18/16.
 */

angular.module("ant", ["ant.controllers", "ant.routes"]);
/**
 * Created by hamidbehnam on 8/18/16.
 */

angular.module("ant.routes", ["ngRoute"]);
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
