'use strict';

var keycodes = require('./keycodes');

function assertKeyString(s) {
  if (!/^(ctrl-|shift-|alt-|meta-){0,4}\w+$/.test(s))
    throw new Error('The string to parse needs to be of the format "c", "ctrl-c", "shift-ctrl-c".');
}

module.exports = function parse(s) {
  var keyString = s.trim().toLowerCase();

  assertKeyString(keyString);

  var key = {
      name     :  undefined
    , ctrl     :  false
    , meta     :  false
    , shift    :  false
    , alt      :  false
    , sequence :  undefined
  }
  , parts = keyString.split('-')
  , c;

  key.name = parts.pop();
  while((c = parts.pop())) key[c] = true;
  key.sequence = key.ctrl 
    ? keycodes.ctrl[key.name] || key.name
    : keycodes.nomod[key.name] || key.name;

  return key;
};
