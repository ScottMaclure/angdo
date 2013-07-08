/**
 * Home page, or index state.
 */
define([], function () {

	return {
		url: '/', // root route
		views: {
			header: {
				templateUrl: '/partials/header.html',
				resolve: { Page: 'Page' },
				controller: function ($scope, Page) {
					Page.title = 'Home';
				}
			},
			contentLeft: {
				templateUrl: '/partials/todo-list.html'
			},
			contentCenter: {
				template: 'TODO contentCenter template!'
			},
			contentRight: {
				templateUrl: '/partials/content-right.html'
			}
		}
	};

});