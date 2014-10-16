var path = require('path');
var fs = require('fs');
var moment = require('moment');
var gitConfig = require('./git-config.js');
var _ = require('lodash');

module.exports = function(params) {
  return function(file) {
    var fileName = path.basename(file.path);
    var projectFilePath = path.join(path.dirname(file.path), 'project.json');
    var cicodesFilePath = path.join(path.dirname(file.path), 'cicodes.json');
    var data = {};

    if (fs.existsSync(projectFilePath)) {
      data = require(projectFilePath);
      data = data[fileName] || data['shared'] || {};
    }

    if (file.frontMatter) {
      data = _.extend(data, file.frontMatter);
    }

    var ciCodes = {};
    if (fs.existsSync(cicodesFilePath)) {
      ciCodes = require(cicodesFilePath);
    }

    data.assetPath = 'fos/sales/themes/' + params.theme + '/' + path.dirname(path.normalize(params.assetSrcPath + '/' + file.relative)).replace('\\', '/') + '/';
    if(file.frontMatter.assetPath === false){
      data.assetPath = file.frontMatter.assetPath;
    }
    if (file.frontMatter) {
      if (!data.cdsDetails) {
        data.cdsDetails = {
          draft: {}
        };
      }
      if (!data.cdsDetails.draft) {
        data.cdsDetails.draft = {};
      }
      data.cdsDetails.draft.location = file.frontMatter.location;
      data.cdsDetails.draft.id = file.frontMatter.id;
      data.cdsDetails.draft.name = file.frontMatter.name;
      data.cdsDetails.draft.splitSide = file.frontMatter.splitSide;
      data.cdsDetails.draft.url = data.cdsDetails.draft.url || file.frontMatter.url;
      data.cdsDetails.draft.modifiedDate = moment().format('YYYY-MM-DD h:mm:ss a');
      data.cdsDetails.draft.user = {
        username: gitConfig.user.name + ' <' + gitConfig.user.email + '>'
      };
    }
    data = _.extend(data, ciCodes);
    return data;
  };
}
