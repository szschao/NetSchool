/**
 * Created by sunchao on 2017/08/30.
 */

module.exports = {
    before: function() {
        // ...
    },

    'Array': {
        '#indexOf()': {
            'should return -1 when not present': function() {
                [1,2,3].indexOf(4).should.equal(-1);
            }
        }
    }
};