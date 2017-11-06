module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            foo: {
                src: ['src/aa.js', 'src/aaa.js']
            },
        },
        concat: {
            bar: {
                src: ['src/bb.js', 'src/bbb.js'],
                dest: 'dest/b.js',
            },
        },
    });
};
