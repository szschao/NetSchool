'use strict';

const server = require('../../config/server.js');
const app = server.app;
const EXPRESS_TEST_URL_BASE = 'http://localhost:3000';

let chai = require('chai');
let chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

describe('my first example', function () {

    // runs before all tests in this block
    before(function () {
        //https://github.com/angular/protractor/issues/1978
        server.start();
    });

    it('should have hello world', function () {
        app.get('/',function (req,res) {
            res.send('Hello World');
        });

        browser.url(EXPRESS_TEST_URL_BASE);
        chai.expect('//BODY').to.have.string('Hello World');
    });
});

