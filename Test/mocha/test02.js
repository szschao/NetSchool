/**
 * Created by sunchao on 2017/07/18.
 */
/*describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(function(err) {
                if (err) done(err);
                else done();
            });
        });
    });
});*/
describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(done);
        });
    });
});
