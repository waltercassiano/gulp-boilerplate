'use strict';

var csslint = require('gulp-csslint');

//https://github.com/CSSLint/csslint/wiki/Rules

module.exports = function (gulp, plugins) {
  return function() {
  	gulp.src('./test_files/dist/css/*.css')
  		.pipe(csslint('.csslintrc'))
  	  .pipe(csslint.reporter());
  };
};
