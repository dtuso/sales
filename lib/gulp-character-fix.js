var es = require('event-stream');

function replaceDoubleByte(str) {
  return str.replace(/\u2028/g, '\n');
}

module.exports = function(options) {
  'use strict';

  function returnFile(file, callback) {
    file.contents = new Buffer(replaceDoubleByte(String(file.contents)));
    callback(null, file);
  }
  return es.map(returnFile);
};