/**
 * Search controller for header atm.
 */

define([], function () {

	return function ($scope, SearchQuery) {

		$scope.query = SearchQuery;

		// UI driven handler.
		$scope.filterQuery = function () {
			SearchQuery.setVal(this.query);
		};

	}

});