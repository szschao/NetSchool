/**
 * Created by sunchao on 2017/09/07.
 */
var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('https://www.yahoo.co.jp/');
        var title = browser.getTitle();
        assert.equal(title, 'Yahoo! JAPAN');
    });
});

