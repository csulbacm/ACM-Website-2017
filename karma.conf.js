// Karma configuration
// Generated on Wed Apr 26 2017 17:17:27 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        './node_modules/angular/angular.js', // angular
        './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
        './node_modules/angular-mocks/angular-mocks.js', // loads our module for test
        './src/app/app.js',
        './src/app/services/test.js',
        './test/test.spec.js' // test file
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
   browsers: ['PhantomJS', 'PhantomJS_custom'],
   // browsers: ['Chrome'],

    // config phantomjS for no broswer
    customLaunchers: {
        'PhantomJS_custom': {
            base: 'PhantomJS',
            options: {
                windowName: 'my-window',
                settings: {
                    webSecurityEnabled : false
                },
                flags: ['--load-images=true'],
                debug: true
            }
        }
    },

    phantonjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
        exitOnResourceError: true
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
