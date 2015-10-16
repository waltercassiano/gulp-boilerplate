'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.watch('./test_files/src/img/**/*.{png,jpg,jpeg,gif,svg}', ['imagemin']);
  };
};
