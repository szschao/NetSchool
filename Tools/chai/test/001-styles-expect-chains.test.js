/**
 * Created by sunchao on 2017/09/04.
 */

// 测试数据(放在单独的js文件中)
// @constructor
function Person(firstName_, lastName_, id_) {
    this.firstName = firstName_;
    this.lastName = lastName_;
    this.id = id_;
}

Person.prototype.changeName = function (newName_) {
    this.lastName = newName_;
};

var myFather = new Person("Bill", "Gates", 5566);

var foo = {bar: 'baz'};
var foo1 = {bar: 'bar', baz: 'baz'};

// 测试部分
var expect = require('chai').expect;
describe('chai expect', function () {

    it('.not - Negates any of assertions following in the chain.', function () {
        expect(function () { }).to.not.throw(Error);
        expect(foo).to.not.be.equal('bar');
        expect({foo: 'baz'}).to.have.property('foo')
            .and.not.equal('bar');
        expect({a: 1}).to.not.have.property('b');
        expect([1, 2]).to.be.an('array')
            .that.does.not.include(3);

        // 慎用 not 断言一个预期的,比没有预期的否定要好
        expect(2).to.equal(2); // Recommended
        expect(2).to.not.equal(1); // Not recommended
    });

    it('.deep - Sets the deep flag, later used by the equal and property assertions.', function () {

        // Causes all .equal, .include, .members, .keys, and .property assertions
        // that follow in the chain to use deep equality instead of strict (===) equality.

        // Target object deeply (but not strictly) equals `{a: 1}`
        expect({a: 1}).to.deep.equal({a: 1});
        expect({a: 1}).to.not.equal({a: 1});

        // Target array deeply (but not strictly) includes `{a: 1}`
        expect([{a: 1}]).to.deep.include({a: 1});
        expect([{a: 1}]).to.not.include({a: 1});

        // Target object deeply (but not strictly) includes `x: {a: 1}`
        expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
        expect({x: {a: 1}}).to.not.include({x: {a: 1}});

        // Target array deeply (but not strictly) has member `{a: 1}`
        expect([{a: 1}]).to.have.deep.members([{a: 1}]);
        expect([{a: 1}]).to.not.have.members([{a: 1}]);

        // Target set deeply (but not strictly) has key `{a: 1}`
        expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
        expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);

        // Target object deeply (but not strictly) has property `x: {a: 1}`
        expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
        expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
    });

    it('.nested - Enables dot- and bracket-notation in all .property and .include assertions that follow in the chain.',function () {
        expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
        expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});

        // If . or [] are part of an actual property name, they can be escaped by adding two backslashes before them.
        expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
        expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});

        var deepObj = {
            green: {tea: 'matcha'}
            , teas: ['chai', 'matcha', {tea: 'konacha'}]
        };
        expect(deepObj).to.have.nested.property('green');
        expect(deepObj).to.have.nested.property('green.tea','matcha');
        expect(deepObj).to.have.nested.property('teas[1]','matcha');
        expect(deepObj).to.have.nested.property('teas[2].tea','konacha');

        var arr = [
            ['chai', 'matcha', 'konacha']
            , [{tea: 'chai'}
                , {tea: 'matcha'}
                , {tea: 'konacha'}]
        ];
        expect(arr).to.have.nested.property('[0][1]', 'matcha');
        expect(arr).to.have.nested.property('[1][2].tea', 'konacha');
    });

    it('.any - Sets the any flag, (opposite of the all flag) later used in the keys assertion.', function () {
        expect(foo).to.have.any.keys('bar', 'baz');
        expect({a:1,b:2}).to.not.have.any.keys('c','d');
    });

    it('.all - Sets the all flag (opposite of the any flag) later used by the keys assertion.', function () {
        expect(foo1).to.have.all.keys('bar', 'baz');
        expect({a:1,b:2}).to.have.all.keys('a','b');
    });

    it('.a(type) - The a and an assertions are aliases that can be used either as language chains or to assert a value’s type.', function () {
        expect('foo').to.be.a('string');
        expect({foo: 'bar'}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(Promise.resolve()).to.be.a('promise');
        expect(new Float32Array()).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol');

        // language chain
        expect(myFather).to.be.an.instanceof(Person);

        // .a supports objects
        // var myObj = {
        //     [Symbol.toStringTag]: 'myCustomType'
        // };
        // expect(myObj).to.be.a('myCustomType').but.not.an('object');

        // It’s often best to use .a to check a target’s type
        // before making more assertions on the same target.
        expect([1, 2, 3]).to.be.an('array').that.includes(2);
        expect([]).to.be.an('array').that.is.empty;

        // it’s often best to assert that the target is the expected type,
        // rather than asserting that it isn’t one of many unexpected types.
        expect('foo').to.be.a('string'); // Recommended
        expect('foo').to.not.be.an('array'); // Not recommended

        // .a accepts an optional msg argument
        // which is a custom error message to show when the assertion fails.
        // expect(1).to.be.a('string', 'nooo why fail??');
        // expect(1, 'nooo why fail??').to.be.a('string');


        // .a can also be used as a language chain to improve the readability of your assertions.
        expect({b: 2}).to.have.a.property('b');
    });

    it('.include - The include and contain assertions can be used as either property based language chains or as methods to assert the inclusion of an object in an array or a substring in a string. ', function () {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
        expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
        expect(new Set([1, 2])).to.include(2);
        expect(new Map([['a', 1], ['b', 2]])).to.include(2);
        expect([1, 2, 3]).to.be.an('array').that.includes(2);

        // Target array deeply (but not strictly) includes `{a: 1}`
        expect([{a: 1}]).to.deep.include({a: 1});
        expect([{a: 1}]).to.not.include({a: 1});

        // Target object deeply (but not strictly) includes `x: {a: 1}`
        expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
        expect({x: {a: 1}}).to.not.include({x: {a: 1}});

        Object.prototype.b = 2;
        expect({a: 1}).to.own.include({a: 1});
        expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});

        expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});

        expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});

        expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});

        expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});

        expect('foobar').to.not.include('taco');
        expect([1, 2, 3]).to.not.include(4);

        expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
        expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended

        expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
        expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended

        // expect([1, 2, 3]).to.include(4, 'nooo why fail??');
        // expect([1, 2, 3], 'nooo why fail??').to.include(4);

        // Target object's keys are a superset of ['a', 'b'] but not identical
        expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
        expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');

        // Target array is a superset of [1, 2] but not identical
        expect([1, 2, 3]).to.include.members([1, 2]);
        expect([1, 2, 3]).to.not.have.members([1, 2]);

        // Duplicates in the subset are ignored
        expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);

        // Both assertions are identical
        expect({a: 1}).to.include.any.keys('a', 'b');
        expect({a: 1}).to.have.any.keys('a', 'b');
    });

    it('.ok - Asserts that the target is truthy.', function () {
        expect(1).to.equal(1); // Recommended
        expect(1).to.be.ok; // Not recommended

        expect(true).to.be.true; // Recommended
        expect(true).to.be.ok; // Not recommended

        expect(0).to.equal(0); // Recommended
        expect(0).to.not.be.ok; // Not recommended

        expect(false).to.be.false; // Recommended
        expect(false).to.not.be.ok; // Not recommended

        expect(null).to.be.null; // Recommended
        expect(null).to.not.be.ok; // Not recommended

        expect(undefined).to.be.undefined; // Recommended
        expect(undefined).to.not.be.ok; // Not recommended

        // expect(false, 'nooo why fail??').to.be.ok;
    });

    it('.true - Asserts that the target is true.', function () {
        expect(true).to.be.true;

        expect(false).to.be.false; // Recommended
        expect(false).to.not.be.true; // Not recommended

        expect(1).to.equal(1); // Recommended
        expect(1).to.not.be.true; // Not recommended

        // expect(false, 'nooo why fail??').to.be.true;
    });

    it('.false - Asserts that the target is false.', function () {
        //只有 false 等于 false
        expect(false).to.be.false;

        //0 不是 false
        expect(0).to.not.be.false;
    });

    it('.null - Asserts that the target is null.', function () {
        expect(null).to.be.null;
        expect(undefined).to.not.be.null;
    });

    it('.undefined - Asserts that the target is undefined.', function () {
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

    it('.NaN - Asserts that the target is NaN.', function () {
        expect(NaN).to.be.NaN;
        expect(4).to.not.be.NaN;
    });

    it('.exit - Asserts that the target is neither null nor undefined.', function () {
        expect(1).to.equal(1); // Recommended
        expect(1).to.exist; // Not recommended

        expect(0).to.equal(0); // Recommended
        expect(0).to.exist; // Not recommended

        expect(null).to.be.null; // Recommended
        expect(null).to.not.exist; // Not recommended

        expect(undefined).to.be.undefined; // Recommended
        expect(undefined).to.not.exist; // Not recommended
    });

    it('.empty - Asserts that the target’s length is 0. ', function () {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
        expect(new Set()).to.be.empty;
        expect(new Map()).to.be.empty;

        expect([]).to.be.an('array').that.is.empty;

        expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
        expect([1, 2, 3]).to.not.be.empty; // Not recommended

        expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
        expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended

        expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
        expect({a: 1}).to.not.be.empty; // Not recommended
    });

    it('.arguments - Asserts that the target is an arguments object.', function () {
        function test () {
            expect(arguments).to.be.arguments;
        }

        test();
    });

    it('.equal(value,[msg]) - Asserts that the target is strictly equal (===) to value.', function () {
        expect('hello').to.equal('hello');
        expect(42).to.equal(42);
        expect(1).to.not.equal(true);
        expect({foo: 'bar'}).to.not.equal({foo: 'bar'});
        expect({foo: 'bar'}).to.deep.equal({foo: 'bar'});
    });

    it('.eql(obj[,msg]) - Asserts that the target is deeply equal to value.', function () {
        expect({foo: 'bar'}).to.eql({foo: 'bar'});
        expect([1, 2, 3]).to.eql([1, 2, 3]);
    });

    it('.above(value) - Asserts that the target is greater than value.', function () {
        expect(10).to.be.above(5);
        expect('foo').to.have.length.above(2);
        expect([1, 2, 3]).to.have.length.above(2);
    });

    it('.least(value) - Asserts that the target is greater than or equal to value', function () {
        expect(10).to.be.at.least(10);
        expect('foo').to.have.length.of.at.least(2);
        expect([1, 2, 3]).to.have.length.of.at.least(3);
    });

    it('.below(value) - Asserts that the target is less than value.', function () {
        expect(5).to.be.below(10);
        expect('foo').to.have.length.below(4);
        expect([1, 2, 3]).to.have.length.below(4);
    });

    it('.most(value) - Asserts that the target is less than or equal to value.', function () {
        expect(5).to.be.at.most(5);
        expect('foo').to.have.length.of.at.most(4);
        expect([1, 2, 3]).to.have.length.of.at.most(3);
    });

    it('.within(start,finish) - Asserts that the target is within a range.', function () {
        expect(7).to.be.within(5, 10);
        expect('foo').to.have.length.within(2, 4);
        expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it('.instanceof(constructor) - Asserts that the target is an instance of constructor.', function () {
        var Tea = function (name) {
            this.name = name;
        }, Chai = new Tea('chai');
        expect(Chai).to.be.an.instanceof(Tea);
        expect([1, 2, 3]).to.be.instanceof(Array);

        function Cat () { }
        expect(new Cat()).to.be.an.instanceof(Cat);
        expect([1, 2]).to.be.an.instanceof(Array);
    });

    it('.property(name,[value[,msg]])Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value. ', function () {
        // simple referencing
        var obj = {foo: 'bar'};
        expect(obj).to.have.property('foo');
        expect(obj).to.have.property('foo', 'bar');

        // Target object deeply (but not strictly) has property `x: {a: 1}`
        expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
        expect({x: {a: 1}}).to.not.have.property('x', {a: 1});

        Object.prototype.b = 2;
        expect({a: 1}).to.have.own.property('a');
        expect({a: 1}).to.have.own.property('a', 1);
        expect({a: 1}).to.have.property('b').but.not.own.property('b');

        expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});

        expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
        expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');

        expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');

        expect({a: {b: [{c: 3}]}}).to.have.deep.nested.property('a.b[0]', {c: 3});

        expect({b: 2}).to.not.have.property('a'); // Recommended
        expect({b: 2}).to.not.have.property('a', 1); // Not recommended

        expect({a: 3}).to.have.property('a', 3); // Recommended
        expect({a: 3}).to.not.have.property('a', 1); // Not recommended

        expect({a: 1}).to.have.property('a').that.is.a('number');
    });

    it('.own - Causes all .property and .include assertions that follow in the chain to ignore inherited properties.',function () {
        Object.prototype.b = 2;

        expect({a: 1}).to.have.own.property('a');
        expect({a: 1}).to.have.property('b').but.not.own.property('b');

        expect({a: 1}).to.own.include({a: 1});
        expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
    });

    it('.ownProperty(name) - Asserts that the target has an own property name.', function () {
        expect('test').to.have.ownProperty('length');
    });

    it('.ownPropertyDescriptor(name[, descriptor[, message]]) - Asserts that the target has an own property descriptor name, that optionally matches descriptor.', function () {
        expect({a: 1}).to.have.ownPropertyDescriptor('a');
        expect({a: 1}).to.have.ownPropertyDescriptor('a', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 1
        });

        expect('test').to.have.ownPropertyDescriptor('length');
        expect('test').to.have.ownPropertyDescriptor('length', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 4
        });

        expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
        expect('test').ownPropertyDescriptor('length').to.have.keys('configurable', 'enumerable', 'value', 'writable');

        expect({a: 1}).to.have.ownPropertyDescriptor('a')
            .that.has.property('enumerable', true);
    });

    it('.length - Sets the doLength flag later used as a chain precursor to a value comparison for the length property.', function () {
        expect('foo').to.have.length.above(2);
        expect([1, 2, 3]).to.have.length.above(2);
        expect('foo').to.have.length.below(4);
        expect([1, 2, 3]).to.have.length.below(4);
        expect('foo').to.have.length.within(2, 4);
        expect([1, 2, 3]).to.have.length.within(2, 4);
    });

    it('.lengthOf(value[, message]) - Asserts that the target’s length property has the expected value.', function () {
        expect([1, 2, 3]).to.have.lengthOf(3);
        expect('foobar').to.have.lengthOf(6);

        // Recommended
        expect([1, 2, 3]).to.have.lengthOf(3);

        // Not recommended
        expect([1, 2, 3]).to.have.lengthOf.above(2);
        expect([1, 2, 3]).to.have.lengthOf.below(4);
        expect([1, 2, 3]).to.have.lengthOf.at.least(3);
        expect([1, 2, 3]).to.have.lengthOf.at.most(3);
        expect([1, 2, 3]).to.have.lengthOf.within(2,4);
    });


    it('.match(regexp) - Asserts that the target matches a regular expression.', function () {
        expect('foobar').to.match(/^foo/);
    });

    it('string(string) - Asserts that the string target contains another string.', function () {
        expect('foobar').to.have.string('bar');
    });

    it('.keys(key1, [key2], […]) - Asserts that the target contains any or all of the passed-in keys. ', function () {
        expect({a: 1, b: 2}).to.have.any.keys('a', 'c');
        expect({a: 1, b: 2}).to.have.any.keys('a');
        expect({a: 1, b: 2}).to.contain.any.keys('b', 'c');
        expect({a: 1, b: 2}).to.contain.any.keys(['a']);
        expect({a: 1, b: 2}).to.contain.any.keys({'a': 6});
        expect({a: 1, b: 2}).to.have.all.keys(['b', 'a']);
        expect({a: 1, b: 2}).to.have.all.keys({'b': 6, 'a': 7});
        expect({a: 1, b: 2, c: 3}).to.contain.all.keys(['b', 'a']);
        expect({a: 1, b: 2, c: 3}).to.contain.all.keys({'b': 6});

        expect(['x', 'y']).to.have.all.keys(0, 1);
        expect(['x', 'y']).to.have.all.keys([0, 1]);
        expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5

        expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
        expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');

        expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');

        // Target set deeply (but not strictly) has key `{a: 1}`
        expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
        expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);

        // Recommended; asserts that target doesn't have any of the given keys
        expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
        // Not recommended; asserts that target doesn't have all of the given
        // keys but may or may not have some of them
        expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');

        // Recommended; asserts that target has all the given keys
        expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
        // Not recommended; asserts that target has at least one of the given
        // keys but may or may not have more of them
        expect({a: 1, b: 2}).to.have.any.keys('a', 'b');

        // Both assertions are identical
        expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
        expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended

        // Target object's keys are a superset of ['a', 'b'] but not identical
        expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
        expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
    });

    it('.throw(constructor) - Asserts that the function target will throw a specific error, or specific type of error (as determined using instanceof)', function () {
        var badFn = function () { throw new TypeError('Illegal salmon!'); };
        expect(badFn).to.throw();

        var badFn = function () { throw new TypeError('Illegal salmon!'); };
        expect(badFn).to.throw(TypeError);

        var err = new TypeError('Illegal salmon!');
        var badFn = function () { throw err; };
        expect(badFn).to.throw(err);
        expect(badFn).to.throw(TypeError);
        expect(badFn).to.throw(Error);
        expect(badFn).to.throw('salmon');
        expect(badFn).to.throw(/salmon/);

        expect(badFn).to.throw(TypeError, 'salmon');
        expect(badFn).to.throw(TypeError, /salmon/);
        expect(badFn).to.throw(err, 'salmon');
        expect(badFn).to.throw(err, /salmon/);

        var err = new TypeError('Illegal salmon!');
        err.code = 42;
        var badFn = function () { throw err; };
        expect(badFn).to.throw(TypeError).with.property('code', 42);

        var goodFn = function () {};
        expect(goodFn).to.not.throw();
    });

    it('.respondTo(method) - Asserts that the object or class target will respond to a method.', function () {
        function Cat () {}
        Cat.prototype.meow = function () {};
        expect(new Cat()).to.respondTo('meow');
        expect(new Cat()).to.be.an('object').that.respondsTo('meow');

        function Cat () {}
        Cat.prototype.meow = function () {};
        expect(Cat).to.respondTo('meow');

    });

    it('.itself - Sets the itself flag, later used by the respondTo assertion.', function () {
        function Cat () {}
        Cat.prototype.meow = function () {};
        Cat.hiss = function () {};
        expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
    });


    it('.satisfy(method) - Asserts that the target passes a given truth test.', function () {
        expect(1).to.satisfy(function (num) {
            return num > 0;
        });
    });

    it('.closeTo(expected, delta) - Asserts that the target is equal expected, to within a +/- delta range.', function () {
        expect(1.5).to.be.closeTo(1, 0.5);
    });

    it('.members(set) - Asserts that the target is a superset of set, or that the target and set have the same strictly-equal (===) members.', function () {
        expect([1, 2, 3]).to.include.members([3, 2]);
        expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

        expect([4, 2]).to.have.members([2, 4]);
        expect([5, 2]).to.not.have.members([5, 2, 1]);

        expect([{a: 1}]).to.deep.include.members([{a: 1}]);

        expect([{a: 1}]).to.have.deep.members([{a: 1}]);
        expect([{a: 1}]).to.not.have.members([{a: 1}]);
    });

    it('ordered - Causes all .members assertions that follow in the chain to require that members be in the same order.',function () {
        expect([1, 2]).to.have.ordered.members([1, 2])
            .but.not.have.ordered.members([2, 1]);

        // When .include and .ordered are combined, the ordering begins at the start of both arrays.
        expect([1, 2, 3]).to.include.ordered.members([1, 2])
            .but.not.include.ordered.members([2, 3]);
    });

    it('.oneOf(list) - Assert that a value appears somewhere in the top level of array list.', function () {
        expect('a').to.be.oneOf(['a', 'b', 'c']);
        expect(9).to.not.be.oneOf(['z']);
        expect([3]).to.not.be.oneOf([1, 2, [3]]);

        var three = [3];
        // for object-types, contents are not compared
        expect(three).to.not.be.oneOf([1, 2, [3]]);
        // comparing references works
        expect(three).to.be.oneOf([1, 2, three]);
    });

    it('.change(function) - Asserts that a function changes an object property', function () {
        var dots = ''
            , addDot = function () { dots += '.'; }
            , getDots = function () { return dots; };
        // Recommended
        expect(getDots()).to.equal('');
        addDot();
        expect(getDots()).to.equal('.');
        // Not recommended
        expect(addDot).to.change(getDots);

        var myObj = {dots: ''}
            , addDot = function () { myObj.dots += '.'; };
        // Recommended
        expect(myObj).to.have.property('dots', '');
        addDot();
        expect(myObj).to.have.property('dots', '.');
        // Not recommended
        expect(addDot).to.change(myObj, 'dots');
    });

    it('.increase(function) - Asserts that a function increases an object property', function () {
        var val = 1
            , addTwo = function () { val += 2; }
            , getVal = function () { return val; };
        expect(addTwo).to.increase(getVal).by(2); // Recommended
        expect(addTwo).to.increase(getVal); // Not recommended

        var myObj = {val: 1}
            , addTwo = function () { myObj.val += 2; };
        expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
        expect(addTwo).to.increase(myObj, 'val'); // Not recommended
    });

    it('.decrease(function) - Asserts that a function decreases an object property', function () {
        var val = 1
            , subtractTwo = function () { val -= 2; }
            , getVal = function () { return val; };
        expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
        expect(subtractTwo).to.decrease(getVal); // Not recommended

        var myObj = {val: 1}
            , subtractTwo = function () { myObj.val -= 2; };
        expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
        expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
    });

    it('.by(delta[, msg]) - When following an .increase assertion in the chain, .by asserts that the subject of the .increase assertion increased by the given delta.',function () {
        var myObj = {val: 1}
            , addTwo = function () { myObj.val += 2; };
        expect(addTwo).to.increase(myObj, 'val').by(2);
    });

    it('.extensible - Asserts that the target is extensible (can have new properties added to it).', function () {
        var nonExtensibleObject = Object.preventExtensions({});
        var sealedObject = Object.seal({});
        var frozenObject = Object.freeze({});
        expect({}).to.be.extensible;
        expect(nonExtensibleObject).to.not.be.extensible;
        expect(sealedObject).to.not.be.extensible;
        expect(frozenObject).to.not.be.extensible;

        expect({a: 1}).to.be.extensible;
    });

    it('.sealed - Asserts that the target is sealed (cannot have new properties added to it and its existing properties cannot be removed).', function () {
        var sealedObject = Object.seal({});
        var frozenObject = Object.freeze({});
        expect(sealedObject).to.be.sealed;
        expect(frozenObject).to.be.sealed;

        expect({}).to.not.be.sealed;
        expect(1).to.be.sealed;
    });

    it('.frozen - Asserts that the target is frozen (cannot have new properties added to it and its existing properties cannot be modified).', function () {
        var frozenObject = Object.freeze({});
        expect(frozenObject).to.be.frozen;
        expect({}).to.not.be.frozen;

        expect(1).to.be.frozen;
    });

    it('.finite - Asserts that the target is a number, and isn’t NaN or positive/negative Infinity.',function () {
        expect(1).to.be.finite;

        expect(Infinity).to.equal(Infinity); // Recommended
        expect(Infinity).to.not.be.finite; // Not recommended

        expect(-Infinity).to.equal(-Infinity); // Recommended
        expect(-Infinity).to.not.be.finite; // Not recommended
    });
});
