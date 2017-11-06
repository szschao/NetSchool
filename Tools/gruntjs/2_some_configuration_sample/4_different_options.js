module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            ignore_warning: {
                options: {
                    '-W015': true,
                },
                src: 'js/**',
                filter: 'isFile'
            }
        }
    });
};
