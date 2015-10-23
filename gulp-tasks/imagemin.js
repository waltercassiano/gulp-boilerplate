'use strict';

var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (gulp, $) {
  return function() {
    gulp.src('./test_files/src/img/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe($.imagemin({
      use: [
        pngquant({quality: '65-80'}),
        mozjpeg({quality: 80})
      ]
    }))
    .pipe(gulp.dest('./dist/img/'));
  };
};
