/**
 * Created by sunchao on 2017/08/30.
 */

describe('inclusive skip specific test', function() {
    describe('#indexOf()', function() {
        it.skip('should return -1 unless present', function() {
            console.log('test 1-1');
            // this test will not be run
        });

        it('should return the index when present', function() {
            console.log('test 1-2');
            // this test will be run
        });
    });
});