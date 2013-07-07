/**
 * Manage a list of todo items.
 */

define(['moment'], function (moment) {

	return function ($scope, $http, ToDoListData, SearchQuery) {

		$scope.query = SearchQuery;

		// When ToDoListData returns from server, populate scope.
		ToDoListData.success(function (data) {
			$scope.todoList = data;
		});

		// Set default order
		//$scope.orderProp = 'dueDate';
		$scope.orderProp = 'preferredOrder';

		// Use a 3rd-party lib to format a nice, human readable date.
		$scope.now = moment().format('Do MMMM YYYY, hh:mm:ss.SSS a');

	};

});