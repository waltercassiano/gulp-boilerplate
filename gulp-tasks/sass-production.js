'use strict';

module.exports = function (gulp, $) {
  return function() { gulp.src('./test_files/src/sass/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./dist/css'));
  };
};
