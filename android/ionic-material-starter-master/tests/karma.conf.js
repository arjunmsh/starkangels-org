// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-01-05 using
// generator-karma 0.8.3

module.exports = function (config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: './',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            '../www/vendor/angular/angular.js',
            '../www/vendor/angular-animate/angular-animate.js',
            '../www/vendor/angular-sanitize/angular-sanitize.js',
            '../www/vendor/angular-ui-router/release/angular-ui-router.js',
            '../www/vendor/ionic/release/js/ionic.js',
            '../www/vendor/ionic/release/js/ionic-angular.js',
            '../www/vendor/ngCordova/dist/ng-cordova.js',
            '../www/vendor/ionic-material-design-lite/dist/js/ionic.material-design-lite.bundle.min.js',
            '../www/vendor/angular-mocks/angular-mocks.js',
            // endbower
            
            '../www/js/**/*.js',
            '../www/views/**/*.html',
            '../tests/spec/**/*.js',
            '../tests/fixture/*.json'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-ng-json2js-preprocessor'
        ],

        preprocessors: {
            'app/views/**/*.html': ['ng-html2js'],
            '**/*.json': ['ng-json2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/',
            moduleName: 'app.templates'
        },

        ngJson2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'test/fixture/',
            // prepend this to the
            prependPrefix: 'fixture/'
        },

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_ERROR

        // Uncomment the following lines if you are using grunt's server to run the tests
        // proxies: {
        //   '/': 'http://localhost:9000/'
        // },
        // URL root prevent conflicts with the site root
        // urlRoot: '_karma_'
    });
};
