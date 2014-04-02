var gulp = require('gulp');
var swig = require('gulp-swig');
var less = require('gulp-less');

var rootAssetPath = (process.platform === 'win32') ? '\\\\g1dwimages001\\images\\fos\\cds2\\' : '/Volumes/images/fos/cds2/';

var paths = {
  templates: ['./src/sales/**/*.html'],
  layouts: ['./src/layouts/**/*.html'],
  less: './src/sales/**/*.less',
  json: ['./_globals.json', './src/sales/**/*.json'],
  build: './build/sales/',
  assets: rootAssetPath + 'sales/'
};

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

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(swig(swigOpts))
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

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.json, ['templates']);
  gulp.watch(paths.less, ['less', 'lessmin']);
});

gulp.task('default', ['templates', 'lessmin', 'less', 'watch']);
