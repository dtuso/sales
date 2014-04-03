var gulp = require('gulp');
var swig = require('gulp-swig');
var less = require('gulp-less');
var cdsm = require('gulp-cdsm');
var Cache = require('node-simple-cache');
var prompt = require('prompt');
var args = require('yargs').argv;
var changed = require('gulp-changed');

var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\201401\\' : '/Volumes/images/fos/201401/';

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}
var paths = {
  templates: ['./src/sales/**/*.html'],
  layouts: ['./src/layouts/**/*.html'],
  less: './src/sales/**/*.less',
  images: './src/sales/**/img/**/*',
  json: ['./_globals.json', './src/sales/**/*.json'],
  build: './build/sales/',
  assets: rootAssetPath + 'sales/'
};

function cdsmAuth() {
  var cache = new Cache({
    path: getUserHome() + '/.cdsm-cache/'
  });
  var creds = cache.get('cdsm-creds') || false;
  var schema = {
    properties: {}
  };
  if (!creds) {
    schema.properties = {
      username: {
        required: true,
        message: 'Username'
      },
      password: {
        hidden: true,
        required: true,
        message: 'Password'
      },
      savecreds: {
        validator: /y|n/,
        message: 'Save credentials? (y/N)',
        default: 'n'
      }
    };
  }

  var prompt = require('prompt');

  prompt.start();

  prompt.get(schema, function(err, result) {
    console.log(result);
  });
}

var swigOpts = {
  load_json: true,
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs('./src/layouts'),
      locals: require('./_globals.json')
    });
  }
};

gulp.task('templates', function(cb) {
  //cdsmAuth(cb);
  gulp.src(paths.templates)
    //.pipe(changed(paths.build))
    .pipe(swig(swigOpts))
    .pipe(cdsm())
    .pipe(gulp.dest(paths.build))
});

gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.assets))
    .pipe(gulp.dest(paths.build));
});

gulp.task('lessmin', function() {
  gulp.src(paths.less)
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest(paths.assets))
    .pipe(gulp.dest(paths.build));
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.assets))
    .pipe(gulp.dest(paths.build));
});

// gulp.task('cdsm', function() {
//   gulp.src(paths.templates)
//     .pipe(cdsm());
// });

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  //gulp.watch(paths.json, ['templates']);
  gulp.watch(paths.less, ['less', 'lessmin']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['templates', 'lessmin', 'less', 'watch']);
