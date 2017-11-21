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
