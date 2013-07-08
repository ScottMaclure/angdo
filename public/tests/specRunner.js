/*global require, console*/

/**
 * Main Jasmine specRunner JS. Using RequireJS.
 */

require.config({

    baseUrl: '../javascripts',
    
    paths: {
        'jquery': 'bower/jquery/jquery',
        'angular': 'bower/angular/angular',
        'angularUiRouter': 'bower/angular-ui-router/release/angular-ui-router',
        'moment': 'bower/moment/moment',
        'jasmine': 'bower/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': 'bower/jasmine/lib/jasmine-core/jasmine-html',
        'spec': '../tests/spec/'
    },

    shim: {
        angular: {
            exports : 'angular'
        },
        angularUiRouter: {
            deps: ['angular']
        },
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }

});

require(['jquery', 'angular', 'angdo', 'jasmine-html'], function ($, angular, angdo, jasmine) {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    // Add all spec here.
    var specs = [];
    specs.push('/tests/specs/todoListControllerSpec');

    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});