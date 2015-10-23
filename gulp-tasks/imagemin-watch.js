'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.watch(config.paths.images.src + '**/*.{png,jpg,jpeg,gif,svg}', ['imagemin']);
  };
};
