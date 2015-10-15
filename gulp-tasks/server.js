'use strict';

var browserSync = require('browser-sync').create();
module.exports = function (gulp, plugins) {
  return function() {
    browserSync.init({
        proxy: "paths.url"
    });

    gulp.watch('./sass/*.scss', ['sass:dev']);
    gulp.watch('./js/*.js', ['js:compress']);
    gulp.watch(['./css', './js']).on('change', browserSync.reload);
  };
};
