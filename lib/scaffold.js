var fs = require('fs');
var prompt = require('prompt');
var request = require('request');
var mkdirp = require('mkdirp');
var cdsLocationBaseURL = 'http://cms.dev.glbt1.gdg/content/';
var jsdom = require('jsdom').jsdom;

var build = function(location, destination) {
  var url = cdsLocationBaseURL + location;
  var destinationPath = './src/sales/' + destination + '/source.html';
  var project = './src/sales/' + destination + '/project.json';
  request.get(url, function(err, res, body) {
    content = JSON.parse(body).Content;
    var frontMatter = '---\nlocation: ' + location + '\nid: false\n---\n';
    jsdom.env(
      content, ["http://code.jquery.com/jquery.js"],
      function(errors, window) {
        var title = window.$("title").html();
        var description = window.$("meta[name='description']").attr('content');
        var keywords = window.$("meta[name='keywords']").attr('content');
        var ogTitle = window.$("meta[property='og:title']").attr('content');
        var ogDescription = window.$("meta[property='og:description']").attr('content');
        var ogImage = window.$("meta[property='og:image']").attr('content');
        var json = {
          'source.html': {
            cdsDetails: {
              champion: {
                name: null,
                email: null
              },
              draft: {
                comments: null,
                url: null
              }
            },
            metaTitle: title,
            metaDescription: description,
            metaKeywords: keywords,
            metaCanonicalPath: null,
            metaOgTitle: ogTitle,
            metaOgImage: ogImage,
            metaOgDescription: ogDescription
          }
        };
        content = window.$(".border-box[role='main']").html();


        content = frontMatter + '{% extends \'base.html\' %}\n\n{% block metahead %}\n\t{% parent %}\n{% endblock metahead %}\n\n{% block footer %}{% endblock footer %}\n\n{% block body %}\n' + content + '\n{% endblock body %}'

        mkdirp('./src/sales/' + destination + '/', function(err) {
          fs.writeFileSync(destinationPath, content);
          fs.writeFileSync(project, JSON.stringify(json, null, '  '));
        });

        mkdirp('./src/sales/' + destination + '/css', function(err) {

        });

        mkdirp('./src/sales/' + destination + '/img', function(err) {

        });
      }
    );
  });
};

var schema = {
  properties: {
    location: {
      required: true,
      message: 'Enter CDS location of the page you want to download'
    },
    destination: {
      required: true,
      message: 'Enter the destination path (hosting/web-hosting)'
    }
  }
};

prompt.start();

prompt.get(schema, function(err, result) {
  if (result.location && result.destination) {
    build(result.location, result.destination);
  }
});
