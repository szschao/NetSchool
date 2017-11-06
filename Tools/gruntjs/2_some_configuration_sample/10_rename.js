grunt.initConfig({
    copy: {
        backup: {
            files: [{
                expand: true,
                src: ['docs/README.md'],    // The README.md file has been specified for backup
                rename: function () {       // The value for rename must be a function
                    return 'docs/BACKUP.txt'; // The function must return a string with the complete destination
                }
            }]
        }
    }
});