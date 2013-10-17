/**
 * Setup RequireJS config params.
 */
require.config({

	paths: {
		angular: 'bower/angular/angular',
		angularUiRouter: 'bower/angular-ui-router/release/angular-ui-router',
		moment: 'bower/moment/moment'
	},

	// Shim is for libraries not supporting AMD.
	shim: {
		angular: {
			exports : 'angular'
		},
		angularUiRouter: {
			deps: ['angular']
		}
	}

});

// Load main app.
requirejs(['angular', 'angdo'], function (angular, angdo) {
	angular.bootstrap(document, [ 'angdo' ]);
});