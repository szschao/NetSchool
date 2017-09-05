/**
 * Created by sunchao on 2017/08/30.
 */

describe('delayed root suite', function() {
    setTimeout(function () {
        // do some setup

        describe('my suite', function () {
            // ...
        });

        run();
    }, 5000);
});