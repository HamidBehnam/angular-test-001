/**
 * Created by hamidbehnam on 8/19/16.
 */

describe("MainController", function () {
    var $controller, $scope, mainController;
    beforeEach(module("ant"));

    beforeEach(angular.mock.inject(function($injector) {
        $controller = $injector.get("$controller");
        $scope = $injector.get("$rootScope").$new();
        mainController = $controller("MainController", {
            $scope: $scope
        });
    }));

    it("should have predefined testField property", function () {
        expect(mainController.testField).toBe("this comes form the mainController");
    });
});
