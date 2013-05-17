/**
 * Angdo.
 * Writing entire app in 1 JS file for now.
 * Linted via JSHint in IDE.
 *
 * TODO Load from a static json resource for starters.
 * TODO Later, load from local storage.
 */

var Angdo = angular.module('Angdo', []);

var angdoScope;

Angdo.controller('TodoListController', function($scope, $http) {

	// Load JSON data from server
	$http.get('data/todoList.json')
		 .then(function (res) {

			//$scope.todoList = JSON.parse(res.data);
			$scope.todoList = res.data;

			// Set default order
			$scope.orderProp = 'dueDate';

			// Debugging
			angdoScope = $scope;
		});

});