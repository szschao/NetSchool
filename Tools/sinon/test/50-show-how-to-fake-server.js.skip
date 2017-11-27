{
    setUp: function () {
        this.server = sinon.fakeServer.create();
    },

    tearDown: function () {
        this.server.restore();
    },

    "test should fetch comments from server" : function () {
    this.server.respondWith("GET", "/some/article/comments.json",
        [200, { "Content-Type": "application/json" },
            '[{ "id": 12, "comment": "Hey there" }]']);

    var callback = sinon.spy();
    myLib.getCommentsFor("/some/article", callback);
    this.server.respond();

    sinon.assert.calledWith(callback, [{ id: 12, comment: "Hey there" }]);
}
}