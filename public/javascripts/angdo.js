/*global angular, Page*/
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

var ANGDO_TITLE_PREFIX = 'Angdo: ';

/**
 * Shared data between controllers.
 */
angDo.factory('Page', function () {
    var title = ANGDO_TITLE_PREFIX + 'Default';
    return {
        getTitle: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = ANGDO_TITLE_PREFIX + newTitle;
        }
    };
});

/**
 * Primary controller.
 */
angDo.controller('MainController', function ($scope, Page) {
    $scope.Page = Page;
});

/**
 * Viewing a list of todo items.
 */
angDo.controller('TodoListController', function($scope, $http, Page) {

	// Load JSON data from server
	$http.get('data/todoList.json')
        .then(function (res) {
			//$scope.todoList = JSON.parse(res.data);
			$scope.todoList = res.data;
		});

    // Set default order
    //$scope.orderProp = 'dueDate';
    $scope.orderProp = 'preferredOrder';

    Page.setTitle('Home');

});

/**
 * For viewing the details of a todo item.
 */
angDo.controller('TodoItemController', function ($scope, $routeParams, Page) {
    $scope.todoId = $routeParams.todoId;
    Page.setTitle('Todo #' + $routeParams.todoId);
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