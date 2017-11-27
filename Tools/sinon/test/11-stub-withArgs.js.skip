"test should stub method differently based on arguments": function () {
    var callback = sinon.stub();
    callback.withArgs(42).returns(1);
    callback.withArgs(1).throws("TypeError");

    callback(); // No return value, no exception
    callback(42); // Returns 1
    callback(1); // Throws TypeError
}