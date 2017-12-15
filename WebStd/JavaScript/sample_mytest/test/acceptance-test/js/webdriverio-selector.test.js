'use strict';

const BASE_URL = browser.options.baseUrl;

describe('sample - chai webdriverio', function () {
    it('config your enviroments',function () {
        var chai = require('chai');
        var chaiWebdriver = require('chai-webdriverio').default;
        chai.use(chaiWebdriver(browser));

        // And you're good to go!
        browser.url('http://github.com');
        chai.expect('.js-site-favicon').to.not.contain.text("I'm a kitty!");
    });
});

describe('Selector', function () {

    var chai = require('chai');
    var chaiWebdriver = require('chai-webdriverio').default;
    chai.use(chaiWebdriver(browser));
    var expect = chai.expect;

    it('To get an anchor element with a specific text in it,' +
        ' query the text starting with an equal (=) sign.', function () {

        browser.url(BASE_URL+'webdriverio-selector.html');
        expect(browser.getText('=WebdriverIO')).to.have.string('WebdriverIO');
        expect(browser.getAttribute('=WebdriverIO','href')).to.have.string('http://webdriver.io');
    });

    it('To find a anchor element whose visible text partially matches your search value,' +
        ' query it by using *= in front of the query string', function () {

        browser.url(BASE_URL+'webdriverio-selector.html');
        expect(browser.getText('*=driver')).to.have.string('WebdriverIO');
    });

    context('Element with certain text',function () {

        it('query a level 1 heading with the text “Welcome to my Page”',function () {
            browser.url(BASE_URL+'webdriverio-selector.html');

            expect(browser.getText('h1=Welcome to my Page')).to.have.string('Welcome to my Page');
            expect(browser.getTagName('h1=Welcome to my Page')).to.have.string('h1');
        });

        it('query partial text',function () {
            browser.url(BASE_URL+'webdriverio-selector.html');

            //welcome is sensitive with lowercase/uppercase
            expect(browser.getText('h1*=Welcome')).to.have.string('Welcome to my Page');
            expect(browser.getText('h1[alt*="welcome"]')).to.have.string('Welcome to my Page');
        });

        it('same works for ids and class names',function () {
            browser.url(BASE_URL+'webdriverio-selector.html');

            expect(browser.getText('.someElem=WebdriverIO is the best'))
                .to.have.string('WebdriverIO is the best');
            expect(browser.getText('#elem=WebdriverIO is the best'))
                .to.have.string('WebdriverIO is the best');
            expect(browser.getText('.someElem*=WebdriverIO'))
                .to.have.string('WebdriverIO is the best');
            expect(browser.getText('#elem*=WebdriverIO'))
                .to.have.string('WebdriverIO is the best');
        });
    });
});

