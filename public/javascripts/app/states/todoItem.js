/**
 * Viewing a todo item.
 */
define([], function () {

	return {
		url: '/todo/:todoId',
		views: {
			header: {
				templateUrl: '/partials/header.html',
				resolve: { Page: 'Page', stateParams: '$stateParams' },
				controller: function ($scope, Page, stateParams) {
					Page.title = 'Todo Item #' + stateParams.todoId;
				}
			},
			contentLeft: {
				templateUrl: '/partials/todo-list.html'
			},
			contentCenter: {
				templateUrl: '/partials/todo-item.html'
			},
			contentRight: {
				templateUrl: '/partials/content-right.html'
			}
		}
	};

});