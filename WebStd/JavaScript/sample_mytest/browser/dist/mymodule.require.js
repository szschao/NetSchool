require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.echo = function(str) {
  return 'browser says: ' + str;
};

},{}],2:[function(require,module,exports){
/*
 * An extremely lame shim for the minimatch module.
 * Actually, shimming minimatch doesn't even make sense. It would probably
 * browserify well at a reasonable file size, but since this is to demonstrate
 * how to shim an npm dependency for browserify, we shim it nonetheless.
 */

'use strict';

module.exports = function(filename, pattern) {
  pattern = pattern.replace('.', '\\.');
  pattern = pattern.replace('*', '.*');
  pattern = '^' + pattern + '$';
  var re = new RegExp(pattern, 'g');
  return re.test(filename);
};

/*
 * We don't even bother to shim minimatch.filter, minimatch.match or any other
 * methods minimatch might offer, since they are not used in our module.
 */

},{}],3:[function(require,module,exports){
/*
 * A (very basic) shim for node's util module. Only the functionality actualy
 * used in mymodule is shimmed. Actually, it is not necessary to shim the core
 * node modules at all because browserify provides shims for most of them.
 * Sometimes it can still be a good idea to shim a node core module yourself if
 * you only use a small fraction of it's functionality which is easy to shim,
 * because this will reduce the size of the browserified file.
 */

'use strict';

module.exports = {
  isArray: function(o) {
    if (o == null) {
      return false;
    }
    return Object.prototype.toString.call(o) === '[object Array]';
  }
};

},{}],4:[function(require,module,exports){
"use strict";
var util = require('util');

exports.mult = function(a, b) {
  /* istanbul ignore else */
  if (util.isArray([])) {
    return a * b;
  } else {
    return -666;
  }
};

},{"util":3}],5:[function(require,module,exports){

},{}],"c:\\wamp\\www\\NetSchool\\WebStd\\JavaScript\\sample_mytest\\src\\mymodule.js":[function(require,module,exports){
"use strict";

var minimatch = require('minimatch');

var helper = require('../lib/helper');
var echo = require('../lib/echo');
var optional = require('../lib/optional');

module.exports = {

  add: function(a, b) {
    return a + b;
  },

  mult: function(a, b) {
    return helper.mult(a, b);
  },

  isJs: function(filename) {
    return minimatch(filename, '*.js');
  },

  callCallback: function(cb) {
    return cb(1302);
  },

  echo: function(str) {
    return echo.echo(str);
  },

  useOptional: function() {
    return optional.optional();
  },
};

},{"../lib/echo":1,"../lib/helper":4,"../lib/optional":5,"minimatch":2}]},{},["c:\\wamp\\www\\NetSchool\\WebStd\\JavaScript\\sample_mytest\\src\\mymodule.js"]);
