'use strict';

var browserSync = require('browser-sync').create();
module.exports = function (gulp, $, config) {

  return function() {
    browserSync.init({
      proxy: 'yourlocal.dev',
      // baseDir: config.basePaths.dest
    });

    gulp.watch(config.paths.styles.src + '*.scss', ['sass:dev']);
    gulp.watch(config.paths.scripts.src + '*.js', ['js:compress']);
    gulp.watch([config.paths.styles.dest,
                config.paths.scripts.src]).on('change', browserSync.reload);
  };
};
