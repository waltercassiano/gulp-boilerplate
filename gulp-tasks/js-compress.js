'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.src('./js/*.js')
    .pipe($.concat('main.js'))
    .pipe($.rename({
        suffix: '.min'
    }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./js/min'));
  };
};
