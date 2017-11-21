'use strict'
const base = require('./wdio.conf.base')

exports.config = Object.assign(base.config, {
  capabilities: [
    {
      browserName: 'firefox',
      platform: 'WIN7',
      version: 'latest'
    }
  ],
  services: ['testingbot'],
  user: process.env.TESTINGBOT_KEY,
  key: process.env.TESTINGBOT_SECRET
})
