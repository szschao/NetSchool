/* eslint-env node */
/* eslint no-process-env: 0 */

module.exports = (config) => {

  config.set({
    basePath: '../..',
    frameworks: ['mocha', 'detectBrowsers'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-detect-browsers'
    ],
    // list of files / patterns to load in the browser
    files: [
      'assets/js/vendor/popper.min.js',
      'js/dist/util.js',
      'js/dist/tooltip.js',
      'js/dist/!(util|index|tooltip).js', // include all of our js/dist files except util.js, index.js and tooltip.js
      'js/tests/unit/*.js'
    ],
    reporters: ['dots'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR || config.LOG_WARN,
    autoWatch: false,
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless']
      }
    },
    singleRun: true,
    concurrency: Infinity,
    detectBrowsers: {
      usePhantomJS: false,
      postDetection(availableBrowser) {
        if (availableBrowser.includes('Firefox')) {
          return ['FirefoxHeadless']
        }

        if (typeof process.env.TRAVIS_JOB_ID !== 'undefined' || availableBrowser.includes('Chrome')) {
          return ['ChromeHeadless']
        }

        throw new Error('Please install Firefox or Chrome')
      }
    }
  })
}
