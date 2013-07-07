/**
 * Top-level controller object, for shared data.
 * Currently just the Page object.
 */

define([], function () {

	return function ($scope, Page) {
		$scope.page = Page;
	};

});