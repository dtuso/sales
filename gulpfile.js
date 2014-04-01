var gulp = require('gulp');
var swig = require('gulp-swig');
var less = require('gulp-less');

var paths = {
  templates: ['./sales/**/*.html'],
  less: './sales/**/*.less'
};

var swigOpts = {
  load_json: true,
  setup: function(swig) {
    swig.setDefaults({
      cache: false,
      loader: swig.loaders.fs('./layouts'),
      locals: require('./_globals.json')
    });
  }
};

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(swig(swigOpts))
    .pipe(gulp.dest('./build/sales/'))
});

gulp.task('less', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest('./build/sales/'));
});

gulp.task('lessmin', function() {
  gulp.src(paths.less)
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest('./build/sales/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.less, ['less', 'lessmin']);
});

gulp.task('default', ['templates', 'lessmin', 'less', 'watch']);
