'use strict';

var serverRootUri = 'http://127.0.0.1:8000';
var mochaPhantomJsTestRunner = serverRootUri + '/browser/test/index.html';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // browserify everything
    browserify: {
      // This browserify build be used by users of the module. It contains a
      // UMD (universal module definition) and can be used via an AMD module
      // loader like RequireJS or by simply placing a script tag in the page,
      // which registers mymodule as a global var. You can see examples for both
      // usages in browser/example/index.html (script tag) and
      // browser/example/index-require.html (RequireJS).
      standalone: {
        src: ['./src/unit/<%= pkg.name %>.js'],
        dest: './browser/dist/<%= pkg.name %>.standalone.js',
        options: {
          standalone: '<%= pkg.name %>',
        },
      },
      // This browserify build can be required by other browserify modules that
      // have been created with an --external parameter. See
      // browser/test/index.html for an example.
      require: {
        src: ['./src/unit/<%= pkg.name %>.js'],
        dest: './browser/dist/<%= pkg.name %>.require.js',
        options: {
          alias: ['./src/unit/<%= pkg.name %>.js:'],
        },
      },
      // These are the browserified tests. We need to browserify the tests to be
      // able to run the mocha tests while writing the tests as clean, simple
      // CommonJS mocha tests (that is, without cross-platform boilerplate
      // code). This build will also include the testing libs chai, sinon and
      // sinon-chai but must not include the module under test.
      tests: {
        src: ['browser/test/suite.js'],
        dest: './browser/test/browserified_tests.js',
        options: {
          external: ['./src/unit/<%= pkg.name %>.js.map'],
          // Embed source map for tests
          debug: true,
        },
      },
    },

    // Uglify browser libs
    uglify: {
      dist: {
        files: {
          'browser/dist/<%= pkg.name %>.standalone.min.js': ['<%= browserify.standalone.dest %>'],
          'browser/dist/<%= pkg.name %>.require.min.js': ['<%= browserify.require.dest %>'],
        },
      },
    },

    connect: {
      // Used for mocha-phantomjs tests
      server: {},

      // you can use this manually by doing
      // grunt connect:keepalive
      // to start a server for the example pages (browser/example/*.html) or to
      // run the tests manually in a browser
      keepalive: {
        options: {
          keepalive: true,
        },
      },
    },

    // run the mocha tests in the browser via PhantomJS
    'mocha_phantomjs': {
      all: {
        options: {
          urls: [
            mochaPhantomJsTestRunner,
          ],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  grunt.registerTask('default', [
    'browserify',
    'uglify',
    'connect:server',
    'mocha_phantomjs',
  ]);
 grunt.registerTask('bbt', [
    'browserify',
    'uglify',
    'connect:server',
    'mocha_phantomjs',
  ]);
};
