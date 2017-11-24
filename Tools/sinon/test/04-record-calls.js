"should call method once with each argument": function () {
    var object = { method: function () {} };
    var spy = sinon.spy(object, "method");
    spy.withArgs(42);
    spy.withArgs(1);

    object.method(42);
    object.method(1);

    assert(spy.withArgs(42).calledOnce);
    assert(spy.withArgs(1).calledOnce);
}