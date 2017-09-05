/**
 * Created by sunchao on 2017/08/30.
 */

describe('a hook level of timeout', function() {
    beforeEach(function(done) {
        this.timeout(300); // A very long environment setup.
        setTimeout(done, 250);
    });

    it('just test');
});