/**
 * Created by sunchao on 2017/09/04.
 */
var expect = require('chai').expect;

var foo = {bar:'baz'};

describe('chai expect',function () {
    it('相等或不相等',function () {
        expect(4+5).to.be.equal(9);
        expect(4+5).to.be.not.equal(10);
        expect(foo).to.be.deep.equal({bar:'baz'});
    });

    it('布尔值为true',function () {
        expect('everything').to.be.ok;
        expect(false).to.not.be.ok;
    });

    it('typeof',function () {
        expect('test').to.be.a('string');
        expect({foo:'bar'}).to.be.an('object');
        // expect(foo).to.be.an.instanceof(Foo);
    });

    it('include',function () {
        expect([1,2,3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({foo:'bar',hello:'universe'}).to.include.keys('foo');
    });

    it('empty',function () {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    });

    it('match',function () {
        expect('foobar').to.match(/^foo/);
    });
});