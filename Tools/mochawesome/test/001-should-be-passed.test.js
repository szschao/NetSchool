/**
 * Created by sunchao on 2017/07/18.
 */
describe('should be passed test', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});

const addContext = require('mochawesome/addContext');

describe('test suite', function () {
    it('should add context', function () {
        // context can be a simple string
        addContext(this, 'simple string');

        // context can be a url and the report will create a link
        addContext(this, 'http://www.url.com/pathname');

        // context can be an image url and the report will show it inline
        addContext(this, {
            title:'How I Feel When Tests Fail',
            value:'../img/whenTestFail.png'
        });

        // context can be an object with title and value properties
        addContext(this, {
            title: 'expected output',
            value: {
                a: 1,
                b: '2',
                c: 'd'
            }
        });
    })
});

describe('test suite', function() {
    beforeEach(function () {
        addContext(this, 'some context')
    });

    afterEach(function () {
        addContext(this, {
            title: 'afterEach context',
            value: { a: 1 }
        });

    });

    it('should display with beforeEach and afterEach context', function() {
        // assert something
    });
});