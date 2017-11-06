module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            foo: {
                files: [
                    {src: ['src/aa.js', 'src/aaa.js'], dest: 'dest/a.js'},
                    {src: ['src/aa1.js', 'src/aaa1.js'], dest: 'dest/a1.js'},
                ],
            },
            bar: {
                files: [
                    {src: ['src/bb.js', 'src/bbb.js'], dest: 'dest/b/', nonull: true},
                    {src: ['src/bb1.js', 'src/bbb1.js'], dest: 'dest/b1/', filter: 'isFile'},
                ],
            },
        },
    });
};
