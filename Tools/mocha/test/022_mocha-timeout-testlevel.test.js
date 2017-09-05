/**
 * Created by sunchao on 2017/08/30.
 */
describe('a test level of timeout', function () {
    it('should take less than 500ms', function (done) {
        this.timeout(500);
        setTimeout(done, 300);
    });
});
