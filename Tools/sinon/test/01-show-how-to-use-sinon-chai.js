"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var say = require("../src/hello");

describe("show how to use spies",function () {
    it("should call callback with correct greeting", function () {
        var callback = sinon.spy();

        say.hello("foo",callback);

        expect(callback).to.have.been.called;
    });
});
