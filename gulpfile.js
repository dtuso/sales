var gulp = require('gulp');
var changed = require('gulp-changed');
var swig = require('gulp-swig');
var less = require('gulp-less');
var args = require('yargs').argv;
var _ = require('lodash');
var jade = require('gulp-jade');
var path = require('path');
var fs = require('fs');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var chalk = require('chalk');
var cdsm = require('gulp-cdsm');

var theme = args.theme || 'scotty';
var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\sales\\themes\\' + theme + '\\' : '/Volumes/images/fos/sales/themes/' + theme + '/';

var paths = {
  templates: ['./src/sales/**/*.html'],
  language: ['./src/sales/**/*.language'],
  less: ['./src/sales/**/css/**/*.less'],
  images: ['./src/sales/**/img/**/*.jpg', './src/sales/**/img/**/*.png'],
  build: './build/sales/',
  assets: rootAssetPath
};

var getProjectData = function(file) {
  var fileName = path.basename(file.path);
  var projectFilePath = path.join(path.dirname(file.path), 'project.json');
  var cicodesFilePath = path.join(path.dirname(file.path), 'cicodes.json');
  var data = {};
  if (fs.existsSync(projectFilePath)) {
    data = require(projectFilePath);
  }
  var ciCodes = {};
  if (fs.existsSync(cicodesFilePath)) {
    ciCodes = require(cicodesFilePath);
  }

  data = data[fileName] || {};
  data.assetPath = 'fos/sales/themes/' + theme + '/' + path.dirname(path.normalize(file.path).split('/src/sales/')[1]) + '/';
  data = _.extend(data, ciCodes);
  return data;
};

var swigSetup = function(swig) {
  swig.setDefaults({
    cache: false,
    loader: swig.loaders.fs('./src/layouts'),
    locals: require('./_globals.json')
  });
};

var swigTplOpts = {
  data: getProjectData,
  setup: swigSetup
};

var swigLangOpts = {
  data: getProjectData,
  ext: '.language',
  setup: swigSetup
};

gulp.task('html', function() {
  gulp.src(paths.templates)
   // .pipe(changed(paths.templates))
    .pipe(swig(swigTplOpts))
    .pipe(cdsm())
    .pipe(gulp.dest(paths.build));
});

gulp.task('language', function() {
  gulp.src(paths.language)
    .pipe(swig(swigLangOpts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('styles', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.build))
    .pipe(cssmin())
    .pipe(rename(({
      suffix: '.min'
    })))
    .pipe(gulp.dest(paths.build));
});

gulp.task('upload', function() {
  gulp.src(paths.templates)
    .pipe(changed(paths.build))
    .pipe(cdsm());
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.language, ['language']);
  gulp.watch(paths.less, ['styles']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('build', ['html', 'language', 'styles', 'images']);
gulp.task('default', ['watch']);
