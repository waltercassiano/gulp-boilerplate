'use strict';

var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.images.src + '**/*.{png,jpg,jpeg,gif,svg}')
    .pipe($.imagemin({
      use: [
        pngquant({quality: '65-80'}),
        mozjpeg({quality: 80})
      ]
    }))
    .pipe(gulp.dest(config.paths.images.dest));
  };
};
