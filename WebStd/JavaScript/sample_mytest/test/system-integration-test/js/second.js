'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('Second Test Group', function () {
    it('gets the title of page two', function () {
        const title = browser
            .url('http://localhost:3000/test/system-integration-test/html/two.html')
            .getTitle();
        expect(title).to.have.string('Two');
    });
});
