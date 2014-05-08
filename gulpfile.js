try {

  // Gulp plugins
  var gulp     = require('gulp');
  var cdsm     = require('gulp-cdsm');
  var changed  = require('gulp-changed');
  var concat   = require('gulp-concat');
  var cssmin   = require('gulp-minify-css');
  var fm       = require('gulp-front-matter');
  var gulpif   = require('gulp-if');
  var less     = require('gulp-less');
  var rename   = require('gulp-rename');
  var swig     = require('gulp-swig');
  var uglify   = require('gulp-uglify');

  // utilities
  var path     = require('path');
  var fs       = require('fs');
  var _        = require('lodash');
  var argv     = require('minimist')(process.argv.slice(2));
  var updater  = require('./lib/updater.js');
  var username = require('username');
  var moment   = require('moment');

} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);

}

var theme = 'scotty';
var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\sales\\themes\\' + theme + '\\' : '/Volumes/images/fos/sales/themes/' + theme + '/';

var assetSrcPaths = require('./paths.json');
var assetSrcPath = assetSrcPaths[argv.src||'all'];

if (!assetSrcPath) {
  console.log('Please provide a proper source path.');
  process.exit(1);
}

var ignoreCDS = argv['ignore-cds'] || false;

if (!argv.src || argv.src == 'all') {
  ignoreCDS = true;
}

var paths = {
  templates : ['./src/sales/**/*.html'],
  project   : ['./src/sales/**/project.json'],
  language  : ['./src/sales/**/*.language'],
  less      : ['./src/sales/**/css/**/*.less'],
  images    : ['./src/sales/**/img/**/*.jpg', './src/sales/**/img/**/*.png'],
  build     : path.join('./build/sales/',assetSrcPath),
  assets    : path.join(rootAssetPath,assetSrcPath)
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

  if (file.frontMatter && data.cdsDetails && data.cdsDetails.dra) {
    data.cdsDetails.draft.location = file.frontMatter.location;
    data.cdsDetails.draft.id = file.frontMatter.id;
    data.cdsDetails.draft.name = file.frontMatter.name;
    data.cdsDetails.draft.modifiedDate = moment().format('YYYY-MM-DD h:mm:ss a');
    data.cdsDetails.draft.user = {
      username: username.sync()
    };
  }

  data.assetPath = 'fos/sales/themes/' + theme + '/' + path.dirname(path.normalize(assetSrcPath + '/' + file.relative)).replace('\\', '/') + '/';
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

var swigConfigOpts = {
  data: getProjectData,
  ext: '.config',
  setup: swigSetup
};

gulp.task('html', function() {
  return gulp.src('./**/*.html', {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    .pipe(fm({remove:true}))
    .pipe(swig(swigTplOpts))
    .pipe(gulpif(!ignoreCDS, cdsm()))
    .pipe(gulp.dest(paths.build));
});

gulp.task('language', function() {
  return gulp.src('./**/*.language', {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    .pipe(fm({remove:true}))
    .pipe(swig(swigLangOpts))
    .pipe(gulpif(!ignoreCDS, cdsm()))
    .pipe(gulp.dest(paths.build));
});

gulp.task('styles', function() {
  return gulp.src('./**/css/*.less', {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(less())
    .pipe(gulp.dest(paths.build))
    .pipe(cssmin())
    .pipe(rename(({
      suffix: '.min'
    })))
    .pipe(gulp.dest(paths.build));
});

gulp.task('scripts', function() {
  return gulp.src(['./**/js/*.js'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(gulp.dest(paths.build))
    .pipe(uglify())
    .pipe(rename(({suffix: '.min'})))
    .pipe(gulp.dest(paths.build));
});

gulp.task('images', function() {
  return gulp.src(['./**/img/*.png','./**/img/*.jpg'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(gulp.dest(paths.build));
});

gulp.task('assets-deploy', ['build'], function() {
  return gulp.src(['./**/*.*'], {cwd: paths.build})
    .pipe(gulp.dest(paths.assets));
});

gulp.task('config', function() {
  return gulp.src(['./**/*.config'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    .pipe(fm({remove:true}))
    .pipe(swig(swigConfigOpts))
    .pipe(gulpif(!ignoreCDS, cdsm()))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch([paths.templates,paths.project], ['html']);
  gulp.watch(paths.language, ['language']);
  gulp.watch(paths.less, ['styles', 'assets-deploy']);
  gulp.watch(paths.images, ['images', 'assets-deploy']);
});


gulp.task('build', ['html', 'language', 'styles', 'scripts', 'images']);
gulp.task('css-build-deploy', ['styles', 'assets-deploy']);
gulp.task('default', ['watch']);

updater();
