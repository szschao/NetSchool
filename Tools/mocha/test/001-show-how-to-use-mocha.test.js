var assert = require('assert');
describe('002 - mocha config ok test sample', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('003 - synchronous sample', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            [1, 2, 3].indexOf(5).should.equal(-1);
            [1, 2, 3].indexOf(0).should.equal(-1);
        });
    });
});

describe('006 - hooks sample', function () {

    before(function () {
        // runs before all tests in this block
        console.log('    runs before all tests in this block');
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
    describe('test hooks gropu 1:', function () {
        it('test hooks 1-1');
    })
    describe('test hooks gropu 2:', function () {
        it('should return -1 when the value is not present', function () {
            [1, 2, 3].indexOf(5).should.equal(-1);
        });
    })
});

describe('007 - describe hooks sample', function () {

    before(function () {
        // runs before all tests in this block
        console.log('    runs before all tests in this block');
    });

    after(function () {
        // runs after all tests in this block
        console.log('    runs after all tests in this block');
    });

    //下面4个 beforeEach是否不能共存
    // beforeEach(function() {
    //     // runs before each test in this block
    //     console.log('    runs before each test in this block');
    // });
    //
    // beforeEach(function() {
    //     // beforeEach hook
    //     console.log('    beforeEach hook');
    // });
    //
    // beforeEach(function namedFun() {
    //     // beforeEach:namedFun
    //     console.log('    beforeEach:namedFun');
    // });

    beforeEach('some description', function () {
        // beforeEach:some description
        console.log('    beforeEach:some description');
    });

    afterEach(function () {
        // runs after each test in this block
        console.log('    runs after each test in this block');
    });

    // test cases
    // describe('test hooks gropu 1:',function () {
    it('test hooks 1-1');
    // })
    // describe('test hooks gropu 2:',function () {
    it('test hooks 1-2');
    // })
});

describe('009 - pending tests sample', function () {
    describe('#indexOf()', function () {
        // pending test below
        it('should return -1 when the value is not present');
    });
});

describe('010 - exclusive suite tests', function() {
    //describe.only('#indexOf()', function() {
    describe('#indexOf()', function() {
        // ...
        console.log('    The exclusivity feature allows you to run only the specified suite');
    });
});

describe('014 - inclusive skip tests sample', function () {
    describe.skip('#indexOf()', function () {
        // console.log('skip me');
        // ...
    });
});

describe('015 - inclusive skip specific test sample', function () {
    describe('#indexOf()', function () {
        it.skip('should return -1 unless present', function () {
            console.log('    test 1-1');
            // this test will not be run
        });

        it('should return the index when present', function () {
            console.log('    test 1-2');
            // this test will be run
        });
    });
});

describe('016 - inclusive runtime skip test sample', function () {
    it('should only test in the correct environment', function () {
        if (/* check test environment */0) {
            // make assertions
        } else {
            console.log('    skip');
            this.skip();
        }
    });
});

describe('017 - inclusive skip hook test sample', function () {

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
    })
    describe('    test hooks gropu 2:', function () {
        it('test hooks 1-2');
    })
});

describe.skip('018 - retries', function() {
    // Retry all tests in this suite up to 4 times
    this.retries(4);

    beforeEach(function () {
        browser.get('http://www.yahoo.com');
    });

    it('should succeed on the 3rd try', function () {
        // Specify this test to only retry up to 2 times
        this.retries(2);
        expect($('.foo').isDisplayed()).to.eventually.be.true;
    });
});

describe('019 - dynamically generating test sample - add()', function () {
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

describe('020 - something slow sample', function () {
    this.slow(10000);

    it('should take long enough for me to go make a sandwich', function () {
        // ...
    });
});

describe('021 - a timeout suite of tests sample', function () {
    this.timeout(500);

    it('should take less than 500ms', function (done) {
        setTimeout(done, 300);
    });

    it('should take less than 500ms as well', function (done) {
        setTimeout(done, 250);
    });
});

describe('022 - a test level of timeout', function () {
    it('should take less than 500ms', function (done) {
        this.timeout(500);
        setTimeout(done, 300);
    });
});

describe('023 - a hook level of timeout', function () {
    beforeEach(function (done) {
        this.timeout(300); // A very long environment setup.
        setTimeout(done, 250);
    });

    it('just test');
});

describe('024 - option grep pattern', function () {
    describe('api', function () {
        context('GET /api/users', function () {
            it('respond with an array of users', function () {
                // ...
            });
        });
    });

    describe('app', function () {
        context('GET /users', function () {
            it('respond with an array of users', function () {
                // ...
            });
        });
    });
});

describe('025 - option ui bdd sample', function () {
    before(function () {
        // ...
    });

    describe('#indexOf()', function () {
        context('when not present', function () {
            it('should not throw an error', function () {
                (function () {
                    [1, 2, 3].indexOf(4);
                }).should.not.throw();
            });
            it('should return -1', function () {
                [1, 2, 3].indexOf(4).should.equal(-1);
            });
        });
        context('when present', function () {
            it('should return the index where the element first appears in the array', function () {
                [1, 2, 3].indexOf(3).should.equal(2);
            });
        });
    });
});

describe('101 - imooc - add function', function () {
    var add = require('../api/add.js');
    var expect = require('chai').expect;

    describe('加法函数的测试', function () {
        it('1 加 1 应该等于 2', function () {
            expect(add(1, 1)).to.be.equal(2);
        });
    });
});

describe('102 - imooc - chai expect sample', function () {
    var expect = require('chai').expect;

    var foo = {bar: 'baz'};

    describe('chai expect', function () {
        it('相等或不相等', function () {
            expect(4 + 5).to.be.equal(9);
            expect(4 + 5).to.be.not.equal(10);
            expect(foo).to.be.deep.equal({bar: 'baz'});
        });

        it('布尔值为true', function () {
            expect('everything').to.be.ok;
            expect(false).to.not.be.ok;
        });

        it('typeof', function () {
            expect('test').to.be.a('string');
            expect({foo: 'bar'}).to.be.an('object');
            // expect(foo).to.be.an.instanceof(Foo);
        });

        it('include', function () {
            expect([1, 2, 3]).to.include(2);
            expect('foobar').to.contain('foo');
            expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
        });

        it('empty', function () {
            expect([]).to.be.empty;
            expect('').to.be.empty;
            expect({}).to.be.empty;
        });

        it('match', function () {
            expect('foobar').to.match(/^foo/);
        });
    });
});

describe('103 - imooc - asynchronous sample', function () {

    var expect = require('chai').expect;
    var request = require('request');

    describe('异步请求', function () {
        it('异步请求应该返回一个对象1', function (done) {
            request
                .get('https://api.github.com', function (err, res, body) {
                    expect(res).to.be.an('object');
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

