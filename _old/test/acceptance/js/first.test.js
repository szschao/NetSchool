'use strict';

var chai = require('chai');
var expect = chai.expect;

const BASE_URL = browser.options.baseUrl;

describe('First Test Group', function () {
  it('gets the title of page one', function () {
    const title = browser.url(BASE_URL + 'one.html').getTitle();
    expect(title).to.have.string('One');
  });
});
