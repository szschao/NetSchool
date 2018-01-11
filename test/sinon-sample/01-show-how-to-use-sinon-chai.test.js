"use strict";
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const PubSub = require("pubsub-js");
const expect = chai.expect;
chai.use(sinonChai);


//JQUERY USAGE SAMPLE
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
/* jshint ignore:start */
const window = dom.window;
const $ = require('jquery')(window);
/* jshint ignore:end */

describe('001 - show how to use spies', function () {
    const say = require("../src/hello");

    it('should call callback with correct greeting', function () {
        const spy = sinon.spy();

        say.hello("foo", spy);

        expect(spy).to.have.been.called;
        expect(spy).to.have.been.calledWith("hello foo");
        expect(spy.args[0][0]).to.have.string("foo");
        expect(spy.getCall(0).args[0]).to.have.string("foo");
    });

    context("spy.withArgs(arg1[, arg2, ...]);", function () {
        it("should call method once with each argument", function () {
            const object = {
                method: function () {
                }
            };
            const spy = sinon.spy(object, "method");
            spy.withArgs(42);
            spy.withArgs(1);

            object.method(42);
            object.method(1);

            expect(spy.withArgs(42)).to.have.been.calledOnce;
            expect(spy.withArgs(1)).to.have.been.calledOnce;
        });
    });
});

describe('002 - spy on existing functions', function () {

    before(function () {
        sinon.spy($, "ajax");
    });

    after(function () {
        $.ajax.restore(); // Unwraps the spy
    });

    it("test should inspect jQuery.getJSON's usage of jQuery.ajax", function () {
        $.getJSON("/some/resource");
        expect($.ajax).to.have.been.calledOnce;
        expect($.ajax.getCall(0).args[0].url).to.have.string("/some/resource");
        expect($.ajax.getCall(0).args[0].dataType).to.have.string("json");
    });
});

describe('101 - show how to use stubs', function () {
    const say = require("../src/hello");

    it("test should call all subscribers, even if there are exceptions", function () {
        const foo = 'foo';
        //const error = 'an example error message';
        const stub = sinon.stub();
        const spy1 = sinon.spy();
        const spy2 = sinon.spy();

        say.hello(foo, stub);
        say.hello(foo, spy1);
        say.hello(foo, spy2);

        expect(spy1).to.have.been.called;
        expect(spy2).to.have.been.called;
        expect(stub).to.have.been.calledBefore(spy1);
    });


    context("stub.withArgs(arg1[, arg2, ...]);", function () {
        it("test should stub method differently based on arguments", function () {
            const stub = sinon.stub();
            stub.withArgs(1).throws("TypeError");
            stub.withArgs(42).returns(1);

            //stub(); // No return value, no exception
            //expect(stub()).to.be.undefined;

            //stub(42); // Returns 1
            expect(stub(42)).to.equal(1);

            //Throws TypeError
            //expect(stub(1)).to.throw(err);
        });
    });

    context("stub.onCall(n);", function () {
        it("test should stub method differently on consecutive calls", function () {
            const stub = sinon.stub();
            stub.onCall(0).returns(1);
            stub.onCall(1).returns(2);
            stub.returns(3);

            expect(stub()).to.equal(1);
            expect(stub()).to.equal(2);
            expect(stub()).to.equal(3); // All following calls return 3
        });

        it("test should stub method differently on consecutive calls " +
            "with certain argument", function () {
            const stub = sinon.stub();
            stub.withArgs(42)
                .onFirstCall().returns(1)
                .onSecondCall().returns(2);
            stub.returns(0);

            //first call
            expect(stub(1)).to.equal(0);
            expect(stub(42)).to.equal(1);

            //second call
            expect(stub(1)).to.equal(0);
            expect(stub(42)).to.equal(2);

            //third call
            expect(stub(1)).to.equal(0);
            expect(stub(42)).to.equal(0);
        });
    });
});

describe('201 - show how to use mock', function () {
    //const say = require("../src/hello");

    it("test should call all subscribers when exceptions", function () {
        const myAPI = {
            method: function () {
            }
        };

        const spy = sinon.spy();
        const mock = sinon.mock(myAPI);
        mock.expects("method").once().throws();

        PubSub.subscribe("message", myAPI.method);
        PubSub.subscribe("message", spy);
        PubSub.publishSync("message", undefined);

        mock.verify();
        expect(spy).to.have.been.called;
    });
});

describe('301 - show how to fake time', function () {

    before(function () {
        this.clock = sinon.useFakeTimers();
    });

    after(function () {
        this.clock.restore();
    });

    it("test should animate element over 500ms", function () {

        const el = $("<div></div>");
        el.appendTo(dom.body);

        el.animate({height: "200px", width: "200px"});
        this.clock.tick(510);

        expect(el.css("height")).to.have.string("px");
        expect(el.css("width")).to.have.string("px");
    });
});

