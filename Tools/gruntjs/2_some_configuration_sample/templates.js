grunt.initConfig({
    concat: {
        sample: {
            options: {
                banner: '/* <%= baz %> */\n',   // '/* abcde */\n'
            },
            src: ['<%= qux %>', 'baz/*.js'],  // [['foo/*.js', 'bar/*.js'], 'baz/*.js']
            dest: 'build/<%= baz %>.js',      // 'build/abcde.js'
        },
    },
    // Arbitrary properties used in task configuration templates.
    foo: 'c',
    bar: 'b<%= foo %>d', // 'bcd'
    baz: 'a<%= bar %>e', // 'abcde'
    qux: ['foo/*.js', 'bar/*.js'],
});