'use strict';

const server = require('../../config/server.js');

var chai = require('chai');
var expect = chai.expect;

//const BASE_URL = '/test/express-test/';

describe('my first example', function () {

    this.timeout(2000);

    // runs before all tests in this block
    before(function () {
        server.start();
    });

    // runs after all tests in this block
    after(function () {
        server.stop();
    });

    it('should have hello world', function () {
        server.app.get('/',function (req,res) {
            res.send('Hello World');
        });
        const bodyText = browser
            .url('http://localhost:3000/')
            .getText('body*=Hello');
        expect(bodyText).to.have.string('Hello World');
    });
});

