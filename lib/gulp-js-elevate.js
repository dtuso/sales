var es = require('event-stream');
var clone = require('clone');

module.exports = function(options) {
  'use strict';

  function jselevate(file, callback) {
    var newFile = clone(file);
    var contents = String(file.contents);
    var regex = new RegExp("<!-- start-js-elevate -->((.|\n)*?)<script((.|\n)*?)>((.|\n)*?)<\/script>((.|\n)*?)<!-- end-js-elevate -->", "ig");
    var js = [];
    var contents = contents.replace(regex,function(){
      js.push(arguments[5].trim());
      return '';
    });
    if (js.length) {
      contents = contents.replace('<!-- js-elevate-target -->\n','<script type="text/javascript">\n  '+js.join(' ')+'\n</script>\n');
    }
    contents = contents.replace('<!-- js-elevate-target -->\n','');
    newFile.contents = new Buffer(contents);
    callback(null, newFile);
  }
  return es.map(jselevate);
};
