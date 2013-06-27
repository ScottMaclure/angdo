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
var angDo = angular.module('angDo', []);

/**
 * Shared data between controllers.
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
 * Load JSON data from server.
 * Return a promise.
 */
angDo.factory('ToDoListData', function ($http) {
	console.log('ToDoListData requesting...');
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
 */
angDo.controller('TodoItemController', function ($scope, $routeParams, Page, ToDoListData) {

	console.log('TodoItemController running');

	var todoId = parseInt($routeParams.todoId, 10);

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
 * Configure routes to above controllers.
 *
 * Note: You don't need to specify a controller here (which then gets scoped to ng-view),
 * you can do via your html using ng-controller. Interesting.
 */
angDo.config(
    ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		// Now more anchor-based routes.
		$locationProvider.html5Mode(true);

        $routeProvider
            .when('/home', {
                templateUrl: '/partials/todo-list.html'
                //controller: 'TodoListController'
            })
            .when('/todo/:todoId', {
                templateUrl: '/partials/todo-item.html'
                //controller: 'TodoItemController'
            })
            .otherwise({
                redirectTo: '/home'
            });

    }]
);