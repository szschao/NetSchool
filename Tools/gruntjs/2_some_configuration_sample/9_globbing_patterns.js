grunt.initConfig({

    // You can specify single files:
    singleFiles: {src: 'foo/this.js', dest: 'min.js'},

    // Or arrays of files:
    arrayFiles: {src: ['foo/this.js', 'foo/that.js', 'foo/the-other.js'], dest: 'min.js'},

    // Or you can generalize with a glob pattern:
    globbingPattern: {src: 'foo/th*.js', dest: 'min.js'},

    // This single node-glob pattern:
    nodeGlobbingPattern: {src: 'foo/{a,b}*.js', dest: 'min.js'},

    // Could also be written like this:
    nodeGlobbingPattern2: {src: ['foo/a*.js', 'foo/b*.js'], dest: 'min.js'},

    // All .js files, in foo/, in alpha order:
    aphpaOrder: {src: ['foo/*.js'], dest: 'min.js'},

    // Here, bar.js is first, followed by the remaining files, in alpha order:
    filesAphpaOrder: {src: ['foo/bar.js', 'foo/*.js'], dest: 'min.js'},

    // All files except for bar.js, in alpha order:
    exceptFilesAphpaOrder: {src: ['foo/*.js', '!foo/bar.js'], dest: 'min.js'},

    // All files in alpha order, but with bar.js at the end.
    aphpaOrderFiles: {src: ['foo/*.js', '!foo/bar.js', 'foo/bar.js'], dest: 'min.js'},

    // Templates may be used in filepaths or glob patterns:
    filePath: {src: ['src/<%= basename %>.js'], dest: 'build/<%= basename %>.min.js'},

    // But they may also reference file lists defined elsewhere in the config:
    templates: {src: ['foo/*.js', '<%= jshint.all.src %>'], dest: 'min.js'}

});
