"test should stub method differently on consecutive calls with certain argument": function () {
    var callback = sinon.stub();
    callback.withArgs(42)
        .onFirstCall().returns(1)
        .onSecondCall().returns(2);
    callback.returns(0);

    callback(1); // Returns 0
    callback(42); // Returns 1
    callback(1); // Returns 0
    callback(42); // Returns 2
    callback(1); // Returns 0
    callback(42); // Returns 0
}