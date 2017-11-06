module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                // Task-level options may go here, overriding task defaults.
            },
            foo: {
                options: {
                    // "foo" target options may go here, overriding task-level options.
                },
            },
            bar: {
                // No options specified; this target will use task-level options.
            },
        },
    });
};
