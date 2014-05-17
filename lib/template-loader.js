var fs = require('fs');
var path = require('path');

module.exports = function(basepath, encoding) {
  var ret = {};

  encoding = encoding || 'utf8';
  basepath = (basepath) ? path.normalize(basepath) : null;

  /**
   * Resolves <var>to</var> to an absolute path or unique identifier. This is used for building correct, normalized, and absolute paths to a given template.
   * @alias resolve
   * @param  {string} to        Non-absolute identifier or pathname to a file.
   * @param  {string} [from]    If given, should attempt to find the <var>to</var> path in relation to this given, known path.
   * @return {string}
   */
  ret.resolve = function(to, from) {
    var startFrom = from;
    if (basepath) {
      from = basepath;
    } else {
      from = (from) ? process.cwd() + '/src/' : path.dirname(from);
    }

    var returnPath = path.resolve(from, to);

    if (!fs.existsSync(returnPath)) {
      from = path.dirname(startFrom);
      returnPath = path.resolve(from, to);
    }

    return returnPath;
  };

  /**
   * Loads a single template. Given a unique <var>identifier</var> found by the <var>resolve</var> method this should return the given template.
   * @alias load
   * @param  {string}   identifier  Unique identifier of a template (possibly an absolute path).
   * @param  {function} [cb]        Asynchronous callback function. If not provided, this method should run synchronously.
   * @return {string}               Template source string.
   */
  ret.load = function(identifier, cb) {

    if (!fs || (cb && !fs.readFile) || !fs.readFileSync) {
      throw new Error('Unable to find file ' + identifier + ' because there is no filesystem to read from.');
    }

    identifier = ret.resolve(identifier);

    if (cb) {
      fs.readFile(identifier, encoding, cb);
      return;
    }
    if (fs.existsSync(identifier)) {
      return fs.readFileSync(identifier, encoding);
    } else {
      console.log('\n  Error: ' + 'Unable to find file ' + identifier + '\n');
      return '';
    }
  };

  return ret;
};
