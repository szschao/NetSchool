module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            foo: {
                files: {
                    'dest/a.js': ['src/aa.js', 'src/aaa.js'],
                    'dest/a1.js': ['src/aa1.js', 'src/aaa1.js'],
                },
            },
            bar: {
                files: {
                    'dest/b.js': ['src/bb.js', 'src/bbb.js'],
                    'dest/b1.js': ['src/bb1.js', 'src/bbb1.js'],
                },
            },
        },
    });
};
