var request = require('request');
var fs = require('fs');
var exec = require('exec');

var updating =  false;
var updateMessageURL = 'http://cms.dev.glbt1.gdg/content/sales/api/cds-cli/messages.json?docid=53629ec7f778fc27b88b109b';

module.exports = function() {
  if (updating) {
    return;
  }
  request.get(updateMessageURL, function(err, res, body) {
    var code = JSON.parse(JSON.parse(body).Content).code;
    var checkCode = null;
    if (fs.existsSync('./lib/.salesupdate')) {
      checkCode = fs.readFileSync('./lib/.salesupdate').toString();
    }
    if (code !== checkCode) {
      console.log('\n==== UPDATE ====');
      console.log('An important update to the Sales repository is available.');
      console.log('Delete your node_modules folder then run npm install');
      fs.writeFileSync('./lib/.salesupdate', code);
    }
  });
}

module.exports.update = function() {

};
