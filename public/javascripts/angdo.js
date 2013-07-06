/*global angular, Page, console*/

/**
 * Angdo.
 * Writing entire app in 1 JS file for now.
 * Linted via JSHint in IDE.
 *
 * TODO Later, load from local storage.
 * TODO Separate file into individual files etc, gruntify.
 */

// Define module with no deps.
var angDo = angular.module('angDo', ['ui.state']);

/**
 * Shared data between controllers. Generic "Page" object.
 */
angDo.factory('Page', function () {
    var title = 'Default';
    return {
        getTitle: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = newTitle;
        }
    };
});

/**
 * Load JSON data from server. Currently static.
 * Return a promise.
 */
angDo.factory('ToDoListData', function ($http) {
    return $http.get('/data/todoList.json');
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
angDo.controller('TodoListController', function($scope, $http, Page, ToDoListData) {

	// When ToDoListData returns from server, populate scope.
    ToDoListData.success(function (data) {
		$scope.todoList = data;
	});

    // Set default order
    //$scope.orderProp = 'dueDate';
    $scope.orderProp = 'preferredOrder';

    Page.setTitle('Home');

});

/**
 * For viewing the details of a todo item.
 * Note that $stateParams is part of angular-ui-router. Replaces $routeParams.
 */
angDo.controller('TodoItemController', function ($scope, $stateParams, Page, ToDoListData) {

	var todoId = parseInt($stateParams.todoId, 10);

	// TODO Easier to have a dedicated query service instead, but this is easier to mock.
	ToDoListData.success(function (data) {

		// Lets find our todo item.
		for (var i = 0; i < data.length; i++) {

			var dataItem = data[i];

			if (dataItem.id === todoId) {

				// Now assign data for views.

				$scope.todoItem = dataItem;

				Page.setTitle('Todo #' + dataItem.title);

				break;
			}
		}

	});

});

/**
 * Configure routes using angular-ui-router ($stateProvider).
 * @see https://github.com/angular-ui/ui-router/wiki
 */
angDo.config(function ($stateProvider, $locationProvider) {

	// Now more anchor-based routes.
	$locationProvider.html5Mode(true);

	// Bind routes
	$stateProvider
		.state('home', {
			url: '', // root route
			views: {
				main: {
					templateUrl: '/partials/todo-list.html'
				}
			}
		})
		.state('todoItem', {
			url: '/todo/:todoId',
			views: {
				main: {
					templateUrl: '/partials/todo-item.html'
				}
			}
		})
});