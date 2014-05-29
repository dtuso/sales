var es = require('event-stream');
var clone = require('clone');

module.exports = function(options) {
  'use strict';

  function csselevate(file, callback) {
    var newFile = clone(file);
    var contents = String(file.contents);
    var regex = new RegExp("<!-- start-css-elevate -->((.|\n)*?)<style((.|\n)*?)>((.|\n)*?)<\/style>((.|\n)*?)<!-- end-css-elevate -->", "ig");
    var styles = [];
    var contents = contents.replace(regex,function(){
      styles.push(arguments[5].trim());
      return '';
    });
    if (styles.length) {
      contents = contents.replace('<!-- css-elevate-target -->\n','<style type="text/css">\n  '+styles.join(' ')+'\n</style>\n');
    }
    contents = contents.replace('<!-- css-elevate-target -->\n','');
    newFile.contents = new Buffer(contents);
    callback(null, newFile);
  }
  return es.map(csselevate);
};
