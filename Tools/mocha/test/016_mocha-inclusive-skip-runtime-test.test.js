/**
 * Created by sunchao on 2017/08/30.
 */

describe('inclusive runtime skip test', function() {
    it('should only test in the correct environment', function () {
        if (/* check test environment */0) {
            // make assertions
        } else {
            console.log('skip');
            this.skip();
        }
    });
});