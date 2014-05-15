try {

  // Gulp plugins
  var gulp      = require('gulp');
  var cdsm      = require('gulp-cdsm');
  var changed   = require('gulp-changed');
  var concat    = require('gulp-concat');
  var cssmin    = require('gulp-minify-css');
  var fm        = require('gulp-front-matter');
  var gulpif    = require('gulp-if');
  var less      = require('gulp-less');
  var rename    = require('gulp-rename');
  var swig      = require('gulp-swig');
  var uglify    = require('gulp-uglify');
  var debug     = require('gulp-debug');

  // utilities
  var path      = require('path');
  var fs        = require('fs');
  var argv      = require('minimist')(process.argv.slice(2));
  var notifier  = require('./lib/updater.js');
  var getData   = require('./lib/project-data.js');

} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);

}

var theme = 'scotty'; 
var rootAssetPath = (process.platform === 'win32') 
  ? '\\\\g1dwimages001\\images\\fos\\sales\\themes\\' + theme + '\\' 
  : '/Volumes/images/fos/sales/themes/' + theme + '/';



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

var swigSetup = function(swig) {
  swig.setDefaults({
    cache: false,
    loader: swig.loaders.fs('./src/layouts'),
    locals: require('./_globals.json')
  });
};

var getProjectData = getData({
  theme: theme,
  assetSrcPath: assetSrcPath
});

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
  console.log(paths.build,rootAssetPath,paths.assets);

  return gulp.src(['./**/*.*'], {cwd: paths.build})
    /*.pipe(debug({verbose: false}))*/
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
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.project, ['html','language']);
  gulp.watch(paths.language, ['language']);
  gulp.watch(paths.less, ['styles', 'assets-deploy']);
  gulp.watch(paths.images, ['images', 'assets-deploy']);
});

gulp.task('build', ['html', 'language', 'styles', 'scripts', 'images']);
gulp.task('css-build-deploy', ['styles', 'assets-deploy']);
gulp.task('default', ['watch']);

notifier();
