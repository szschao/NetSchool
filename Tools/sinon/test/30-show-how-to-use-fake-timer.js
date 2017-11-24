{
    setUp: function () {
        this.clock = sinon.useFakeTimers();
    },

    tearDown: function () {
        this.clock.restore();
    },

    "test should animate element over 500ms" : function(){
    var el = jQuery("<div></div>");
    el.appendTo(document.body);

    el.animate({ height: "200px", width: "200px" });
    this.clock.tick(510);

    assertEquals("200px", el.css("height"));
    assertEquals("200px", el.css("width"));
}
}