'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


validator.isBoolean = input => {
  return typeof input === "boolean";
};

validator.isObject = input => {
  return typeof input === 'object';
};

validator.isArray = input => {
  return Array.isArray(input);
};

validator.isFunction = input => {
  return typeof input === 'function';
};

validator.names = input => {
  if ( input.name ) return true;
};