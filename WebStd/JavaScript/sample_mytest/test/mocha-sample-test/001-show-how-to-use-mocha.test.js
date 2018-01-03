var assert = require('assert');
describe('001 - first sample confirm mocha to config ok', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('002 - synchronous code', function () {
    var expect = require('chai').expect;

    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(5)).to.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);
        });
    });
});

describe('003 - asynchronous code', function () {
    this.timeout(5000);
    var expect = require('chai').expect;
    var request = require('request');

    describe('异步请求', function () {
        it('异步请求应该返回一个对象1', function (done) {
            request
                .get('https://api.github.com', function (err, res, body) {
                    expect(res).to.be.an('object');
                    expect(body).to.not.be.an('object');
                    done();
                });
        });

        // fetch 的定义?
        //it.only('异步请求应该返回一个对象2', function () {
        //    return fetch('https://api.github.com').then(function (res) {
        //        return res.json();
        //    }).then(function (json) {
        //        expect(json).to.be.an('object');
        //    });
        //});

    });
});

describe('004 - hooks', function () {
    var expect = require('chai').expect;

    describe('BDD style hooks', function () {
        before(function () {
            // runs before all tests in this block
            console.log('      runs before all tests in this block');
        });

        after(function () {
            // runs after all tests in this block
            console.log('      runs after all tests in this block');
        });

        beforeEach(function () {
            // runs before each test in this block
            console.log('      runs before each test in this block');
        });

        // alternative
        // function name
        // beforeEach(function namedFun() {
        //     // beforeEach:namedFun
        //     console.log('      beforeEach:namedFun');
        // });

        // description function
        //beforeEach('some description', function () {
        //    // beforeEach:some description
        //    console.log('      beforeEach:some description');
        //});

        afterEach(function () {
            // runs after each test in this block
            console.log('      runs after each test in this block');
        });

        // test cases
        describe('test hooks gropu 1:', function () {
            it('test hooks 1-1');
        });
        describe('test hooks gropu 2:', function () {
            it('should return -1 when the value is not present', function () {
                expect([1, 2, 3].indexOf(5)).to.equal(-1);
                expect([1, 2, 3].indexOf(0)).to.equal(-1);
            });
        });
    });
});

describe('005 - pending tests', function () {
    describe('#indexOf()', function () {
        // pending test below
        it('should return -1 when the value is not present');
    });
});

describe('006 - exclusive tests', function () {
});

describe('007 - inclusive tests', function () {
    describe.skip('an example of skipping an entire suite', function () {
        // console.log('skip me');
        // ...
    });

    describe('inclusive skip specific test sample', function () {
        it.skip('should return -1 unless present', function () {
            console.log('    test 1-1');
            // this test will not be run
        });

        it('should return the index when present', function () {
            console.log('    test 1-2');
            // this test will be run
        });
    });

    describe('inclusive runtime skip test sample', function () {
        it('should only test in the correct environment', function () {
            if (/* check test environment */0) {
                // make assertions
            } else {
                console.log('    skip');
                this.skip();
            }
        });
    });

    describe('inclusive skip hook test sample', function () {

        before(function () {
            if (/* check test environment*/ 0) {
                // runs before all tests in this block
                console.log('    runs before all tests in this block');
                // setup code...
            } else {
                console.log('    skip');
                this.skip();
            }
        });

        after(function () {
            // runs after all tests in this block
            console.log('    runs after all tests in this block');
        });

        beforeEach(function () {
            // runs before each test in this block
            console.log('    runs before each test in this block');
        });

        afterEach(function () {
            // runs after each test in this block
            console.log('    runs after each test in this block');
        });

        // test cases
        describe('    test hooks gropu 1:', function () {
            it('test hooks 1-1');
        });
        describe('    test hooks gropu 2:', function () {
            it('test hooks 1-2');
        });
    });
});

describe('010 - dynamically generating test sample - add()', function () {
    var assert = require('chai').assert;

    function add() {
        return Array.prototype.slice.call(arguments).reduce(function (prev, curr) {
            return prev + curr;
        }, 0);
    }

    describe('dynamically generating tests', function () {
        var tests = [
            {args: [1, 2], expected: 3},
            {args: [1, 2, 3], expected: 6},
            {args: [1, 2, 3, 4], expected: 10}
        ];

        tests.forEach(function (test) {
            it('correctly adds ' + test.args.length + ' args', function () {
                var res = add.apply(null, test.args);
                assert.equal(res, test.expected);
            });
        });
    });
});

describe('011 - test duration', function () {
    //this method will overwrite the config '--slow 20' in'mocha.opts'
    this.slow(10000);

    it('should take long enough for me to go make a sandwich', function () {
        // ...
    });
});

describe('012 - timeouts', function () {
    describe('a suite level of timeout', function () {
        this.timeout(500);

        it('should take less than 500ms', function (done) {
            setTimeout(done, 300);
        });

        it('should take less than 500ms as well', function (done) {
            setTimeout(done, 250);
        });
    });

    describe('a test level of timeout', function () {
        it('should take less than 500ms', function (done) {
            this.timeout(500);
            setTimeout(done, 300);
        });
    });

    describe('a hook level of timeout', function () {
        beforeEach(function (done) {
            this.timeout(300); // A very long environment setup.
            setTimeout(done, 250);
        });

        it('just test');
    });
});

