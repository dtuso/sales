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
var cssmin = require('gulp-cssmin');

var p = function(arg) {
  return path.normalize(arg);
};

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
  templates: [p('./src/sales/' + baseFilePath + '/*.html')],
  language: [p('./src/sales/' + baseFilePath + '/*.language')],
  layouts: [p('./src/layouts/' + baseFilePath + '/*.html')],
  less: p('./src/sales/' + baseFilePath + '/css/**/*.less'),
  images: p('./src/sales/' + baseFilePath + '/img/**/*'),
  json: [p('./_globals.json', './src/sales/' + baseFilePath + '/*.json')],
  build: p('./build/sales/' + baseFilePath),
  assets: rootAssetPath + baseFilePath
};

var getProjectData = function(file) {
  var fileName = path.basename(file.path);
  var assetPath = 'fos/sales/themes/' + theme + '/' + baseFilePath;
  var projectFilePath = path.join(path.dirname(file.path), 'project.json');
  var data = require(projectFilePath);
  data = data[fileName] || {};
  data.assetPath = assetPath;
  return data;
};

var cdsmOpts = {
  projectData: getProjectData
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
  ext:'.language',
  setup: swigSetup
};

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(swig(swigTplOpts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('language', function() {
  gulp.src(paths.language)
    .pipe(swig(swigLangOpts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('html-deploy', function() {
  gulp.src(['./build/sales/' + baseFilePath + '/**/*.html'])
    .pipe(cdsm(cdsmOpts));
});

gulp.task('language-deploy', function() {
  gulp.src(['./build/sales/' + baseFilePath + '/**/*.language'])
    .pipe(cdsm(cdsmOpts));
});

gulp.task('projectfile', function() {
  gulp.src(p('./src/sales/' + baseFilePath + '/project.json'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.build + '/css/'))
    .pipe(cssmin())
    .pipe(rename(({
      suffix: '.min'
    })))
    .pipe(gulp.dest(paths.build + '/css/'));
});

gulp.task('images', function() {
  gulp.src(paths.images)
    .pipe(gulp.dest(paths.build + '/img/'));
});

gulp.task('assetdeploy', function() {
  gulp.src(paths.build+'/**/*')
    .pipe(gulp.dest(paths.assets));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates','projectfile']);
  gulp.watch(paths.language, ['language','projectfile']);
  gulp.watch('./build/sales/' + baseFilePath + '/**/*.html', ['html-deploy']);
  gulp.watch('./build/sales/' + baseFilePath + '/**/*.language', ['language-deploy']);
  gulp.watch(paths.json, ['templates']);
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('deploy', ['html-deploy', 'language-deploy']);
gulp.task('assets', ['less', 'images', 'assetdeploy']);
gulp.task('default', ['watch']);
