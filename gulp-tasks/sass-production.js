'use strict';

module.exports = function (gulp, $) {
  return function() { gulp.src('./sass/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
  };
};
