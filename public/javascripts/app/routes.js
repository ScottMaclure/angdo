/**
 * Configure routes using angular-ui-router ($stateProvider).
 * Single routing file at present. May split this up further.
 * @see https://github.com/angular-ui/ui-router/wiki
 */
define([
	'app/states/index',
	'app/states/todoItem',
	'angularUiRouter'
], function (
	index,
	todoItem
) {

	return function ($stateProvider, $locationProvider) {

		// Now more anchor-based routes.
		$locationProvider.html5Mode(true);

		// Bind routes to states.
		$stateProvider
			.state('index', index)
			.state('todoItem', todoItem)
	};

});