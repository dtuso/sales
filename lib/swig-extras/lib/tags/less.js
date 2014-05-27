var path = require('path');
var fs = require('fs');
var less = require('less');
var parser = new(less.Parser)({
  processImports: false
});

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
    '  var __css = _ext.less.parse(_output, function(e,r){return {error: e, success: r}}).success.toCSS();\n' +
    ' __o += __css.replace(/[ \\t\\r\\n\\f]{1,}/g," ");\n' +
    '  _output = __o;\n' +
    '})();\n';
  return ret;
};

exports.ends = true;
exports.blockLevel = false;

exports.ext = {
  name: 'less',
  obj: parser
};
