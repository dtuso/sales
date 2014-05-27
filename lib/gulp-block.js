var es = require('event-stream');
var clone = require('clone');

module.exports = function(options) {
  'use strict';

  options.capture = options.capture || function(key, contents) {
    return contents;
  }

  options.target = options.target || function(key, contents) {
    return contents;
  }

  function block(file, callback) {
    var newFile = clone(file);
    var contents = String(file.contents);
    var regex = new RegExp("<!-- start-block-([a-z]{1,}?) -->((.|\n)*?)<!-- end-block-([a-z]{1,}?) -->", "ig");
    var blocks = {};
    contents = contents.replace(regex, function() {
      var key = arguments[1];
      if (!blocks[key]) {
        blocks[key] = [];
      }
      blocks[key].push(options.capture(key, arguments[2]).trim());
      return '';
    });

    for (var key in blocks) {
      contents = contents.replace('<!-- block-target-' + key + ' -->', options.target(key, blocks[key].join('\n')));
    }

    newFile.contents = new Buffer(contents);
    callback(null, newFile);
  }
  return es.map(block);
};
