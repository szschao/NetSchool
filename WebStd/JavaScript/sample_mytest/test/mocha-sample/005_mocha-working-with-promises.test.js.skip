/**
 * Created by sunchao on 2017/07/18.
 */

beforeEach(function() {
    return db.clear()
        .then(function() {
            return db.save([tobi, loki, jane]);
        });
});

describe('#find()', function() {
    it('respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
    });
});

