'use strict';

var csslint = require('gulp-csslint');

module.exports = function (gulp, plugins) {
  return function() {
  	gulp.src('./test_files/dist/css/*.css')
  		.pipe(csslint('csslintrc.json'))
  	  .pipe(csslint.reporter('fail'));
  };
};
