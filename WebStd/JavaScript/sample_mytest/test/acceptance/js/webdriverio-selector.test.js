'use strict';

const BASE_URL = browser.options.baseUrl;

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
            //<h1 alt="welcome-to-my-page">Welcome to my Page</h1>

            //welcome is sensitive with lowercase/uppercase
            expect(browser.getText('h1*=Welcome')).to.have.string('Welcome to my Page');
            expect(browser.getText('h1[alt*="welcome"]')).to.have.string('Welcome to my Page');
        });

        it('same works for ids and class names',function () {
            browser.url(BASE_URL+'webdriverio-selector.html');
            //<i class="someElem" id="elem">WebdriverIO is the best</i>
            // class use '.' and id use '#'

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

    it('To query an element with a specific tag name',function () {
        browser.url(BASE_URL+'webdriverio-selector.html');

        expect(browser.getText('<p>'))
            .to.have.string('Hello WebDriver');
    });

    it('For querying elements with a specific name attribute',function () {
        browser.url(BASE_URL+'webdriverio-selector.html');

        expect(browser.getText('[name="someName"]'))
            .to.have.string('some name');
    });

    it('query elements via a specific xPath',function () {
        browser.url(BASE_URL+'webdriverio-selector.html');

        expect(browser.getText('//BODY')).to.have.string('MyBody');
        expect(browser.getText('//BODY//i[2]')).to.have.string('some name');
    });

    it('chain your selector until you’ve found the right element',function () {
        browser.url(BASE_URL+'webdriverio-selector.html');

        expect(browser.element('.row .entry:nth-child(2)').getText('label*=Pro'))
            .to.have.string('Product B');
    });
});

