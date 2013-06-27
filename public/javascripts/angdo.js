/*global angular*/
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
//var angDoScope;

/**
 * Viewing a list of todo items.
 */
angDo.controller('TodoListController', function($scope, $http) {

    // Debugging
    //angDoScope = $scope;

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
 * For viewing the details of a todo item.
 */
angDo.controller('TodoItemController', function ($scope, $routeParams) {
    $scope.todoId = $routeParams.todoId;
});

/**
 * Configure routes to above controllers.
 */
angDo.config(
    ['$routeProvider', function ($routeProvider) {
        
        $routeProvider
            .when('/index', {
                templateUrl: '/partials/todo-list.html',
                controller: 'TodoListController'
            })
            .when('/todo/:todoId', {
                templateUrl: '/partials/todo-item.html',
                controller: 'TodoItemController'
            })
            .otherwise({
                redirectTo: '/index'
            });

    }]
);