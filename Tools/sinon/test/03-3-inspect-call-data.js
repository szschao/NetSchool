"test should call subscribers with message as first argument" : function () {
    var message = 'an example message';
    var spy = sinon.spy();

    PubSub.subscribe(message, spy);
    PubSub.publishSync(message, "some payload");

    assertEquals(message, spy.getCall(0).args[0]);
}