/**
 * angdo.
 * Writing entire app in 1 JS file for now.
 * Linted via JSHint in IDE.
 *
 * TODO Later, load from local storage.
 */
define([
	'angular',
	'app/services/Page',
	'app/services/SearchQuery',
	'app/services/ToDoListData',
	'app/controllers/MainController',
	'app/controllers/TodoSearchController',
	'app/controllers/TodoListController',
	'app/controllers/TodoItemController',
	'app/controllers/TodoListInfoController',
	'app/routes'
], function (
	angular,
	Page,
	SearchQuery,
	ToDoListData,
	MainController,
	TodoSearchController,
	TodoListController,
	TodoItemController,
	TodoListInfoController,
	routes
) {

	// Define module with angular-ui-router as a dependency.
	var angdo = angular.module('angdo', ['ui.state']);

	angdo.factory('Page', Page);
	angdo.factory('SearchQuery', SearchQuery);
	angdo.factory('ToDoListData', ToDoListData);

	angdo.controller('MainController', MainController);
	angdo.controller('TodoSearchController', TodoSearchController);
	angdo.controller('TodoListController', TodoListController);
	angdo.controller('TodoListInfoController', TodoListInfoController);
	angdo.controller('TodoItemController', TodoItemController);

	angdo.config(routes);

	// RequireJS module
	return angdo;

});