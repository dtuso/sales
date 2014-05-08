var request = require('request');
var fs = require('fs');
var rimraf = require('rimraf');
var chalk = require('chalk');

var updateCode = false;
var updateMessageURL = 'http://cms.dev.glbt1.gdg/content/sales/api/cds-cli/messages.json?docid=53629ec7f778fc27b88b109b';

module.exports = function() {

  if (module.exports.updating) {
    return;
  }
  request.get(updateMessageURL, function(err, res, body) {
    try {
      updateCode = JSON.parse(JSON.parse(body).Content).code;
      var checkCode = null;
      if (fs.existsSync('./lib/.salesupdate')) {
        checkCode = fs.readFileSync('./lib/.salesupdate').toString();
      }
      if (updateCode !== checkCode) {
        console.log(chalk.yellow('\n\n  ==== UPDATE ===='));
        console.log(chalk.white('  An important update to the Sales repository is available.'));
        console.log(chalk.white('  Please run ', chalk.magenta('node update'), '\n'));
      }
    } catch (e) {

    }
  });
};

module.exports.update = function() {
  module.exports.updating = true;
  console.log('Updating...\n');
  request.get(updateMessageURL, function(err, res, body) {
    updateCode = JSON.parse(JSON.parse(body).Content).code;
    rimraf('./node_modules', function(err){
      var exec = require('child_process').exec,
          child;

       child = exec('npm install',
       function (error, stdout, stderr) {
           fs.writeFileSync('./lib/.salesupdate', updateCode);
           console.log('stdout: ' + stdout);
           console.log('stderr: ' + stderr);
           if (error !== null) {
                console.log('exec error: ' + error);
           }
       });
    });
  });
};

module.exports.updating = false;
