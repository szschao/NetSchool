'use strict';

const server = require('../../config/server.js');

let chai = require('chai');
let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

describe('my first example', function () {

    it('should have hello world', function () {
        server.app.get('/',function (req,res) {
            res.send('Hello World');
        });

        browser.url('http://localhost:3000/');
        chai.expect('body*=Hello').to.have.string('Hello World');
    });
});

