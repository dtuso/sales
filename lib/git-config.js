var fs        = require('fs');
var iniparser = require('iniparser');
var username  = require('username');

var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var config_file = home_dir + '/.gitconfig';
var config = {
  user: {
    name: '',
    email: username.sync()
  }
};

if (fs.existsSync(config_file)) {
  config = iniparser.parseSync(config_file);
}

module.exports = config;
