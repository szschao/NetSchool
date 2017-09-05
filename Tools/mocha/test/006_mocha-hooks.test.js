/**
 * Created by sunchao on 2017/08/30.
 */

describe('hooks', function() {

    before(function() {
        // runs before all tests in this block
        console.log('runs before all tests in this block');
    });

    after(function() {
        // runs after all tests in this block
        console.log('runs after all tests in this block');
    });

    beforeEach(function() {
        // runs before each test in this block
        console.log('runs before each test in this block');
    });

    afterEach(function() {
        // runs after each test in this block
        console.log('runs after each test in this block');
    });

    // test cases
    describe('test hooks gropu 1:',function () {
        it('test hooks 1-1');
    })
    describe('test hooks gropu 2:',function () {
        it('test hooks 1-2');
    })
});