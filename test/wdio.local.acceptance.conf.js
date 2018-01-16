'use strict';

const base = require('./wdio.base.conf');
const server = require('../config/server.js');

exports.config = Object.assign({}, base.config, {
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    //'./test/acceptance/**/*.js'
    './test/acceptance/js/web*.js',
  ],
  //
  // =====
  // Hooks
  // =====
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    server.start();
  },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   * @param {Object} exitCode 0 - success, 1 - fail
   */
  onComplete: function (exitCode) {
    server.stop();
  },
});
