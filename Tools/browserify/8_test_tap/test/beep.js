var test = require('tape');
var hundreder = require('../');

test('beep', function (t) {
    t.plan(1);

    hundreder(5, function (n) {
        t.equal(n, 500, '5*100 === 500');
    });
});

