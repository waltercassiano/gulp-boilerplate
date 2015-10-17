'use strict';

var minifycss = require('gulp-minify-css');

module.exports = function (gulp, $) {
  return function() {
  	gulp.src('./test_files/src/css/*.css')
	  .pipe(minifycss({compatibility: 'ie8'}))
	  .pipe(gulp.dest('./test_files/dist/css'));
  }
 }
