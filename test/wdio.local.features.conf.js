'use strict';

const base = require('./wdio.base.conf');
const server = require('../config/server.js');

exports.config = Object.assign({}, base.config, {
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/features/**/*.feature',
    //'./test/features/example.feature'
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',
  //
  // If you are using Cucumber you need to specify where your step definitions are located.
  // See also: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
      //'./test/features/step_definitions/steps.js',
      //'./test/features/step_definitions/world.js'
      //'./test/features/step_definitions/**/*.js'
      //'./test/features/steps/steps.js'
      //'./test/features/steps/given.js',
      //'./test/features/steps/then.js',
      //'./test/features/steps/when.js'
      './test/features/steps/setup.js',
    ],
    // <boolean> show full backtrace for errors
    backtrace: true,
    // <string[]> ("extension:module") require files
    // with the given EXTENSION after requiring MODULE (repeatable)
    compiler: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format,
    // optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> disable colors in formatter output
    colors: true,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source URIs
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string[]> (expression) only execute the features
    // or scenarios with tags matching the expression
    tags: [],
    // <number> timeout for step definitions
    timeout: 20000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

  //
  // =====
  // Hooks
  // =====
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function before () {
    /**
     * Setup the Chai assertion framework
     */
    const chai = require('chai');

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  /**
   * Runs before a Cucumber feature
   * @param {Object} feature feature details
   */
  // beforeFeature: function (feature) {
  // },
  /**
   * Runs before a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // beforeScenario: function (scenario) {
  // },
  /**
   * Runs before a Cucumber step
   * @param {Object} step step details
   */
  // beforeStep: function (step) {
  // },
  /**
   * Runs after a Cucumber step
   * @param {Object} stepResult step result
   */
  // afterStep: function (stepResult) {
  // },
  /**
   * Runs after a Cucumber scenario
   * @param {Object} scenario scenario details
   */
  // afterScenario: function (scenario) {
  // },
  /**
   * Runs after a Cucumber feature
   * @param {Object} feature feature details
   */
  // afterFeature: function (feature) {
  // }
});
