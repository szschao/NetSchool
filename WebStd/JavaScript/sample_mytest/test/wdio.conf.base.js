'use strict';
const express = require('express');
let expressServer;

exports.config = {
  specs: [
    './test/acceptance-test/**/*.js'
  ],
  exclude: [],
  maxInstances: 2, // it depends on the plan of the cloud servvice
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  baseUrl: 'http://localhost:3000/test/acceptance-test/html/',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  },
  onPrepare () {
    const app = express();
    app.use(express.static(process.cwd()));
    expressServer = app.listen(3000);
  },
  onComplete () {
    expressServer.close();
  }
};
