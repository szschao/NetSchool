{
    setUp: function () {
        sinon.spy(jQuery, "ajax");
    },

    tearDown: function () {
        jQuery.ajax.restore(); // Unwraps the spy
    },

    "test should inspect jQuery.getJSON's usage of jQuery.ajax": function () {
    jQuery.getJSON("/some/resource");

    assert(jQuery.ajax.calledOnce);
    assertEquals("/some/resource", jQuery.ajax.getCall(0).args[0].url);
    assertEquals("json", jQuery.ajax.getCall(0).args[0].dataType);
}
}