'use strict';

const base = require('./wdio.base.conf');
let server = require('../config/server.js');

exports.config = Object.assign({}, base.config, {
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './test/express-sample/**/*.js',
    //'./test/chai-wdio-sample/**/*.js'
  ],
  directConnect: true,
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
    //TODO https://github.com/angular/protractor/issues/1978
    // This is a reasonable use case - do some promise that takes some time,
    // and then do a wait until something is set up correctly.
    //server.start();
  },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   * @param {Object} exitCode 0 - success, 1 - fail
   */
  onComplete: function (exitCode) {
    if (server && server.handle) {
      server.stop();
      server = null;
    }
  },
});
