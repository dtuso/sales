var gulp = require('gulp');
var changed = require('gulp-changed');
var swig = require('gulp-swig');
var less = require('gulp-less');
var cdsm = require('gulp-cdsm');
var args = require('yargs').argv;
var _ = require('lodash');
var paths = require('./paths.json');
var jade = require('gulp-jade');
var path = require('path');
var rename = require("gulp-rename");

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

if (!args.src || _.indexOf(Object.keys(paths), args.src) === -1) {
  console.log('Please set a source: (ex. gulp templates --src website-builder) \nAvailable sources:\n  ' + Object.keys(paths).join('\n  '));
  process.exit(1);
}

var baseFilePath = paths[args.src];
var theme = args.theme || 'scotty';
var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\sales\\themes\\' + theme + '\\' : '/Volumes/images/fos/sales/themes/' + theme + '/';

var paths = {
  templates: ['./src/sales/' + baseFilePath + '/*.html', './src/sales/' + baseFilePath + '/*.language'],
  layouts: ['./src/layouts/' + baseFilePath + '/*.html'],
  less: './src/sales/' + baseFilePath + '/css/**/*.less',
  images: './src/sales/' + baseFilePath + '/img/**/*',
  json: ['./_globals.json', './src/sales/' + baseFilePath + '/*.json'],
  build: './build/sales/' + baseFilePath,
  assets: rootAssetPath + baseFilePath
};

var renameCssFile = function(path) {
  path.extname = ".min.css"
};

var getProjectData = function(file) {
  var fileName = path.basename(file.path);
  var projectFilePath = path.join(path.dirname(file.path), 'project.json');
  return require(projectFilePath)[fileName];
};

var cdsmOpts = {
  projectData: getProjectData
};

var swigOpts = {
  data: getProjectData,
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs('./src/layouts'),
      locals: require('./_globals.json')
    });
  }
};

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(changed(paths.build))
    .pipe(swig(swigOpts))
    .pipe(cdsm(cdsmOpts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.assets + '/css/'))
    .pipe(gulp.dest(paths.build + '/css/'));
});

gulp.task('lessmin', function() {
  gulp.src(paths.less)
    .pipe(less({
      compress: true
    }))
    .pipe(rename(renameCssFile))
    .pipe(gulp.dest(paths.assets + '/css/'))
    .pipe(gulp.dest(paths.build + '/css/'));
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.assets + '/img/'))
    .pipe(gulp.dest(paths.build + '/img/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.json, ['templates']);
  gulp.watch(paths.less, ['less', 'lessmin']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('assets', ['less', 'lessmin', 'images']);
gulp.task('default', ['watch']);
