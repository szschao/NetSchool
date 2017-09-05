/**
 * Created by sunchao on 2017/09/05.
 */
var should = require('should');

describe('should', function () {
    it('should(obj)',function () {
        should('abc').be.a.String();
    });

    it.skip('should.config',function () {
        var a = { a: 10 }, b = Object.create(null);
        b.a = 10;

        a.should.be.eql(b);
        //not throws

        should.config.checkProtoEql = true;
        a.should.be.eql(b);
        //throws AssertionError: expected { a: 10 } to equal { a: 10 } (because A and B have different prototypes)
    });

    it('should.extend([propertyName], [proto])',function () {
        var should = require('should');
        var prev = should.extend('must', Object.prototype);

        'abc'.must.startWith('a');

        var should = should.noConflict(prev);
        should.not.exist(Object.prototype.must);
    });

    it('',function () {

    });
});
