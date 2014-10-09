try {

  // Gulp plugins
  var gulp        = require('gulp');
  var cdsm        = require('gulp-cdsm');
  var changed     = require('gulp-changed');
  var concat      = require('gulp-concat');
  var cssmin      = require('gulp-minify-css');
  var frontMatter = require('gulp-front-matter');
  var gulpif      = require('gulp-if');
  var less        = require('gulp-less');
  var rename      = require('gulp-rename');
  var swig        = require('gulp-swig');
  var uglify      = require('gulp-uglify');
  var debug       = require('gulp-debug');
  var data        = require('gulp-data');
  var jade        = require('gulp-jade');
  
  var elevateCss  = require('./lib/gulp-css-elevate');
  var elevateJs   = require('./lib/gulp-js-elevate');
  var charFix     = require('./lib/gulp-character-fix');
  var chalk       = require('chalk');

  // utilities
  var path        = require('path');
  var fs          = require('fs');
  var argv        = require('minimist')(process.argv.slice(2));
  var getData     = require('./lib/project-data.js');
  var extras      = require('./lib/swig-extras');

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

// path source information
if (!assetSrcPath) {
  console.log(chalk.yellow('Please provide a proper source path.'));
  var srcMap = '';
  var i = 0;
  for(var key in assetSrcPaths){
    var tabs = '';
    for(var k = 0;k < (25 - key.length);k++){ tabs += ' ' }
    if(i % 3 == 0)  { srcMap += '\n\t' }
                      srcMap += key;
    if(i++ % 3 != 2){ srcMap += tabs }
  }
  console.log(chalk.grey(srcMap) + '\n');
  process.exit(1);
}

var ignoreCDS = argv['ignore-cds'] || false;

if (!argv.src || argv.src == 'all') {
  ignoreCDS = true;
}

var paths = {
  templates : ['./src/sales/**/*.html'],
  language  : ['./src/sales/**/*.language'],
  rule      : ['./src/sales/**/*.rule'],
  less      : ['./src/sales/**/css/**/*.less'],
  images    : ['./src/sales/**/img/**/*.jpg', './src/sales/**/img/**/*.png'],
  build     : path.join('./build/sales/',assetSrcPath),
  assets    : path.join(rootAssetPath,assetSrcPath)
};

var swigSetup = function(swig) {
  extras.useTag(swig, 'less');
  extras.useTag(swig, 'jsminify');
  swig.setDefaults({
    cache: false,
    loader: require('./lib/template-loader')(),
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

var swigRuleOpts = {
  data: getProjectData,
  ext: '.rule',
  setup: swigSetup
};

var swigConfigOpts = {
  data: getProjectData,
  ext: '.config',
  setup: swigSetup
};

var cdsmOpts = {
  dest: argv.dest || 'dev'
};

//homepage
var getJsonData = function(file) {
  var jsonPath = file.path.replace('.jade','') + '.json';
  return require(jsonPath);
};

gulp.task('homepage', function() {
  return gulp.src('./src/sales/homepage/*.jade')
    .pipe(changed('./build/sales/homepage'))
    .pipe(frontMatter({remove:true}))
    .pipe(data(getJsonData))
    .pipe(jade({pretty: true}))
    .pipe(cdsm(cdsmOpts))
    .pipe(gulp.dest('./build/sales/homepage'));
});

gulp.task('html', function() {
  return gulp.src(['./**/*.html', '!./**/_*.html'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    /*.pipe(debug({verbose: false}));*/
    .pipe(frontMatter({remove:true}))
    .pipe(swig(swigTplOpts))
    .pipe(elevateCss())
    .pipe(elevateJs())
    .pipe(gulpif(!ignoreCDS, cdsm(cdsmOpts)))
    .pipe(gulp.dest(paths.build));
});

gulp.task('language', function() {
  return gulp.src('./**/*.language', {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    //.pipe(changed(paths.build))
    .pipe(frontMatter({remove:true}))
    .pipe(swig(swigLangOpts))
    .pipe(gulpif(!ignoreCDS, cdsm(cdsmOpts)))
    .pipe(gulp.dest(paths.build));
});

gulp.task('rule', function() {
  return gulp.src('./**/*.rule', {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    //.pipe(changed(paths.build))
    .pipe(charFix())
    .pipe(frontMatter({remove:true}))
    .pipe(swig(swigRuleOpts))
    .pipe(gulpif(!ignoreCDS, cdsm(cdsmOpts)))
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
    /*.pipe(debug({verbose: false}))*/
    .pipe(gulp.dest(paths.assets));
});

gulp.task('config', function() {
  return gulp.src(['./**/*.config'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(changed(paths.build))
    .pipe(frontMatter({remove:true}))
    .pipe(swig(swigConfigOpts))
    .pipe(gulpif(!ignoreCDS, cdsm(cdsmOpts)))
    .pipe(gulp.dest(paths.build));
});

gulp.task('js-concat', function() {
  return gulp.src(['./**/js/*.js'], {cwd: path.join('./src/sales/', assetSrcPath)})
    .pipe(gulp.dest(paths.build))
    .pipe(concat('js/all_scripts.js'))
    .pipe(uglify())
    .pipe(rename(({suffix: '.min'})))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['html']);
  gulp.watch(paths.language,  ['language']);
  gulp.watch(paths.rule,      ['rule']);
  gulp.watch(paths.less,      ['styles', 'assets-deploy']);
  gulp.watch(paths.images,    ['images', 'assets-deploy']);
});

gulp.task('build',            ['html', 'language', 'rule', 'styles', 'scripts', 'images']);
gulp.task('css-build-deploy', ['styles', 'assets-deploy']);
gulp.task('default',          ['watch']);
