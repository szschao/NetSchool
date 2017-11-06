grunt.initConfig({
    copy: {
        templates: {
            files: [{
                expand: true,
                cwd: ['templates/css/'],     // Parent folder of original CSS templates
                src: '**/*.css',             // Collects all `*.css` files within the parent folder (and its subfolders)
                dest: 'src/css/',            // Stores the collected `*.css` files in your `src/css/` folder
                filter: function (dest) {    // `dest`, in this instance, is the filepath of each matched `src`
                    var cwd = this.cwd,        // Configures variables (these are documented for your convenience only)
                        src = dest.replace(new RegExp('^' + cwd), '');
                    dest = grunt.task.current.data.files[0].dest;
                    return (!grunt.file.exists(dest + src));    // Copies `src` files ONLY if their destinations are unoccupied
                }
            }]
        }
    }
});