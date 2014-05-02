var gulp = require('gulp');
var changed = require('gulp-changed');
var swig = require('gulp-swig');
var less = require('gulp-less');
var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var cdsm = require('gulp-cdsm');
var fm = require('gulp-front-matter');
var argv = require('minimist')(process.argv.slice(2));

var theme = 'scotty';
var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\sales\\themes\\' + theme + '\\' : '/Volumes/images/fos/sales/themes/' + theme + '/';

var assetSrcPaths = require('./paths.json');
var assetSrcPath = assetSrcPaths[argv.src];

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
  data.assetPath = 'fos/sales/themes/' + theme + '/' + path.dirname(path.normalize(assetSrcPath+file.relative)).replace('\\', '/') + '/';
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
  gulp.src(assetSrcPath+'/**/*.html', {cwd: './src/sales/'})
    .pipe(changed(paths.build))
    .pipe(fm({remove:true}))
    .pipe(swig(swigTplOpts))
    .pipe(cdsm())
    .pipe(gulp.dest(path.join(paths.build,assetSrcPath)));
});

gulp.task('language', function() {
  gulp.src(assetSrcPath+'/**/*.language', {cwd: './src/sales/'})
    .pipe(changed(paths.build))
    .pipe(fm({remove:true}))
    .pipe(swig(swigLangOpts))
    .pipe(cdsm())
    .pipe(gulp.dest(path.join(paths.build,assetSrcPath)));
});

gulp.task('styles', function() {
  if (assetSrcPath) {
    gulp.src(assetSrcPath+'/**/css/*.less', {cwd: './src/sales/'})
      .pipe(less())
      .pipe(gulp.dest(path.join(paths.build,assetSrcPath)))
      .pipe(cssmin())
      .pipe(rename(({
        suffix: '.min'
      })))
      .pipe(gulp.dest(path.join(paths.build,assetSrcPath)));
  }
});

gulp.task('images', function() {
  if (assetSrcPath) {
    gulp.src(assetSrcPath+'/**/img/*', {cwd: './src/sales/'})
      .pipe(gulp.dest(path.join(paths.build,assetSrcPath)));
  }
});

gulp.task('assets-deploy', function() {
  if (assetSrcPath) {
    gulp.src(assetSrcPath+'/**/*', {cwd: './build/sales/'})
      .pipe(gulp.dest(path.join(paths.assets,assetSrcPath)));
  }
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.language, ['language']);
  gulp.watch(paths.less, ['styles', 'assets-deploy']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('build', ['html', 'language', 'styles', 'images']);
gulp.task('css-build-deploy', ['styles', 'assets-deploy']);
gulp.task('default', ['watch']);
