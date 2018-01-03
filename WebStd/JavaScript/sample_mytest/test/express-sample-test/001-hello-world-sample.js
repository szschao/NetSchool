'use strict';

const server = require('../../config/server.js');
const app = server.app;

var chai = require('chai');
var expect = chai.expect;

const EXPRESS_TEST_URL_BASE = 'http://localhost:3000';

describe('my first express example', function () {

    this.timeout(2000);

    // runs before all tests in this block
    before(function () {
        //https://github.com/angular/protractor/issues/1978
        server.start();
    });

    it('should have hello world', function () {

        app.get('/',function (req,res) {
            res.send('Hello World');
        });
        const bodyText = browser
            .url(EXPRESS_TEST_URL_BASE+'/')
            .getText('body*=Hello');
        expect(bodyText).to.have.string('Hello World');
    });

    it('route methods - should request "/secret" ' +
        'weather you are using GET,POST,PUT,DELETE,or any other HTTP request method',function () {

        app.all('/secret',function (req,res,next) {
            res.send('Hello World');
            next();
        });

        const bodyText = browser
            .url(EXPRESS_TEST_URL_BASE+'/secret')
            .getText('body*=Hello');
        expect(bodyText).to.have.string('Hello World');
    });

    it('should have hello express', function () {

        app.delete('/',function (req, res) {
            res.send('Delete request to homepage');
        });

        app.get('/',function (req,res) {
            res.send('Hello Express');
        });
        const bodyText = browser
            .url(EXPRESS_TEST_URL_BASE+'/')
            .getText('body*=Hello');
        //expect(bodyText).to.have.string('Hello Express');
        expect(bodyText).to.have.string('Hello World');
    });

    it('param will each be called only once in a request-response cycle',function () {
        app.param('id', function (req, res, next, id) {
            console.log('CALLED ONLY ONCE');
            next();
        });

        app.get('/user/:id', function (req, res, next) {
            console.log('although this matches');
            next();
        });

        app.get('/user/:id', function (req, res) {
            console.log('and this matches too');
            res.end();
        });

        const bodyText = browser
            .url(EXPRESS_TEST_URL_BASE+'/user/42');
    })
});

