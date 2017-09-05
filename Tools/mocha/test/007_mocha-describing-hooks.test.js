/**
 * Created by sunchao on 2017/08/30.
 */
describe('describe hooks', function() {

    before(function() {
        // runs before all tests in this block
        console.log('runs before all tests in this block');
    });

    after(function() {
        // runs after all tests in this block
        console.log('runs after all tests in this block');
    });

    //下面4个 beforeEach是否不能共存
    // beforeEach(function() {
    //     // runs before each test in this block
    //     console.log('runs before each test in this block');
    // });
    //
    // beforeEach(function() {
    //     // beforeEach hook
    //     console.log('beforeEach hook');
    // });
    //
    // beforeEach(function namedFun() {
    //     // beforeEach:namedFun
    //     console.log('beforeEach:namedFun');
    // });

    beforeEach('some description', function() {
        // beforeEach:some description
        console.log('beforeEach:some description');
    });

    afterEach(function() {
        // runs after each test in this block
        console.log('runs after each test in this block');
    });

    // test cases
    // describe('test hooks gropu 1:',function () {
        it('test hooks 1-1');
    // })
    // describe('test hooks gropu 2:',function () {
        it('test hooks 1-2');
    // })
});
