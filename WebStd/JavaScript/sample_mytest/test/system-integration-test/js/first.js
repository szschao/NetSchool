'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('First Test Group', function () {
    it('gets the title of page one', function () {
        const title = browser
            .url('http://localhost:3000/test/system-integration-test/html/one.html')
            .getTitle();
        expect(title).to.have.string('One');
    });
});
