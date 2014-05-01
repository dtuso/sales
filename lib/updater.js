var request = require('request');
var fs = require('fs');
var exec = require('exec');
var rimraf = require('rimraf');

var updateCode = false;
var updateMessageURL = 'http://cms.dev.glbt1.gdg/content/sales/api/cds-cli/messages.json?docid=53629ec7f778fc27b88b109b';

module.exports = function() {
  console.log(module.exports.updating)
  if (module.exports.updating) {
    return;
  }
  request.get(updateMessageURL, function(err, res, body) {
    updateCode = JSON.parse(JSON.parse(body).Content).code;
    var checkCode = null;
    if (fs.existsSync('./lib/.salesupdate')) {
      checkCode = fs.readFileSync('./lib/.salesupdate').toString();
    }
    if (updateCode !== checkCode) {
      console.log('\n==== UPDATE ====');
      console.log('An important update to the Sales repository is available.');
      console.log('Please run `node update`');
    }
  });
}

module.exports.update = function() {
  module.exports.updating = true;
  console.log('Updating...\n');
  request.get(updateMessageURL, function(err, res, body) {
    updateCode = JSON.parse(JSON.parse(body).Content).code;
    rimraf('./node_modules', function(err){
      exec('npm install', function(err, out, code) {
        if (err instanceof Error)
          throw err;
        fs.writeFileSync('./lib/.salesupdate', updateCode);
        module.exports.updating = false;
        process.stderr.write(err);
        process.stdout.write(out);
        process.exit(code);
      });
    });
  });
};

module.exports.updating = false;
