/**
 * Created by sunchao on 2017/07/18.
 */

const assert = require('assert');

it('should complete this test', function (done) {
    return new Promise(function (resolve) {
        assert.ok(true);
        resolve();
    })
        .then(done);
});
