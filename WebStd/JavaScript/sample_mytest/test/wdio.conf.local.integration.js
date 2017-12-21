'use strict';

const base = require('./wdio.conf.base');

exports.config = Object.assign({}, base.config, {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/express-sample-test/**/*.js'
    ],
    //
    // ============
    // Capabilities
    // ============
    capabilities: [
        {browserName: 'phantomjs'}
        // If you want to use other browsers,
        // you may need local Selenium standalone server.
    ],
    services: ['phantomjs']
});
