/*jslint node: true*/

// test funtion
function hello(name) {
  return("Hello " + (name || "World") + "!");
};

module.exports = hello;
