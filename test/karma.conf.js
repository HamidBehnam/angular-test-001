// Karma configuration
// Generated on Fri Aug 19 2016 11:39:55 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js', // make sure you've added all the files which are used.
      //'dist/js/dist-ant.js',  >>>>>>>>>> if you're gonna use karma in auto scan mode (always open), it's not a good idea to watch the result of Grunt processes, because if you change the js file and spec file at the same time, karma reacts 2 times. first time is when it senses spec file is changed and the second time is when it senses grunt has generated a new file. However if you wanna put the karma inside the grunt tasks there's no problem with using the result of grunt concat as a source file, because in this case you have to turn the auto scan off, so it'll be fired by grunt and grunt can fire karma when the final js file is ready. Warning: If you're gonna put karma in grunt tasks be prepared to wait for tests to be run every time you change something in the code even less or css files.
      'src/js/project/modules/*.js',
      'src/js/project/modules.content/**/*.js',
      'src/js/test/**/*.js'
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
    reporters: ['progress'],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
