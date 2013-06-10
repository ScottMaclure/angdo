/**
 * Angdo.
 * Writing entire app in 1 JS file for now.
 * Linted via JSHint in IDE.
 *
 * TODO Later, load from local storage.
 * TODO Separate file into individual files etc, gruntify.
 */

// Define module with no deps.
var angDo = angular.module('angDo', []);

// Debugging var in global scope.
var angDoScope;

/**
 * Main todo list controller object.
 */
angDo.controller('TodoListController', function($scope, $http) {

    // Debugging
    angDoScope = $scope;

	// Load JSON data from server
	$http.get('data/todoList.json')
		 .then(function (res) {
			//$scope.todoList = JSON.parse(res.data);
			$scope.todoList = res.data;
		});

    // Set default order
    //$scope.orderProp = 'dueDate';
    $scope.orderProp = 'preferredOrder';

});

/**
 * Configure routes
 */
angDo.config(
    ['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when(
                '/index',
                { templateUrl: 'partials/index.html', controller: angDo.controller('TodoListController')}
            )
            .when(
                '/todo/:todoId',
                { templateUrl: 'partials/todo.html', controller: angDo.controller('TodoController')}
            )
            .otherwise({redirectTo: '/index'});
    }]
);
