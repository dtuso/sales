var path = require('path');
var fs = require('fs');
var uglify = require("uglify-js");

exports.parse = function(str, line, parser, types, options) {
  parser.on('*', function() {
    throw new Error('The less tag does not accept arguments');
  });
  return true;
};

exports.compile = function(compiler, args, content, parents, options, blockName) {
  var ret = '(function () {\n' +
    '  var __o = _output;\n' +
    '  _output = "";\n' +
    compiler(content, parents, options, blockName) + ';\n' +
    ' __o +=  _ext.uglify.minify(_output, {fromString: true}).code;\n' +
    '  _output = __o;\n' +
    '})();\n';
  return ret;
};

exports.ends = true;
exports.blockLevel = false;

exports.ext = {
  name: 'uglify',
  obj: uglify
};
