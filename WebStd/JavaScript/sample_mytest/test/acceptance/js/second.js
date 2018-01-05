'use strict';

var chai = require('chai');
var expect = chai.expect;

const BASE_URL = browser.options.baseUrl;

describe('Second Test Group', function () {
    it('gets the title of page two', function () {
        const title = browser
            .url(BASE_URL+'two.html')
            .getTitle();
        expect(title).to.have.string('Two');
    });
});
