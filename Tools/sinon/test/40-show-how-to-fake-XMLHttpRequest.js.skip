{
    setUp: function () {
        this.xhr = sinon.useFakeXMLHttpRequest();
        var requests = this.requests = [];

        this.xhr.onCreate = function (xhr) {
            requests.push(xhr);
        };
    },

    tearDown: function () {
        this.xhr.restore();
    },

    "test should fetch comments from server" : function () {
    var callback = sinon.spy();
    myLib.getCommentsFor("/some/article", callback);
    assertEquals(1, this.requests.length);

    this.requests[0].respond(200, { "Content-Type": "application/json" },
        '[{ "id": 12, "comment": "Hey there" }]');
    assert(callback.calledWith([{ id: 12, comment: "Hey there" }]));
}
}