exports.tags = require('./lib/tags');


exports.useTag = function (swig, tag) {
  var t = exports.tags[tag];
  if (!t) {
    throw new Error('Tag "' + tag + '" does not exist.');
  }
  swig.setTag(tag, t.parse, t.compile, t.ends, t.blockLevel);
  if (t.ext) {
    swig.setExtension(t.ext.name, t.ext.obj);
  }
};
