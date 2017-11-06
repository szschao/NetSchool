/*jslint node: true*/
var hello = require("../hello.js");

var assert = require("assert");
var should = require("should");

describe('My first test', function() {

  describe('hello', function() {
    it('should return Hello <name>! when provided', function(){
      assert.equal("Hello Craig!", hello("Craig"));
      assert.equal("Hello Claire!", hello("Claire"));
    });

    it('should return Hello World! when not provided', function(){
      assert.equal("Hello World!", hello());
    });
  });

});


describe("my second test", function() {
  it("is stuff", function() {
    assert.equal(true, true);
    [1,2,3].should.containDeep([1,2,3]);
    ({}).should.be.empty;
  });
});
