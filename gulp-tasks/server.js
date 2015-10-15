'use strict';

var browserSync = require('browser-sync').create();
module.exports = function (gulp, plugins) {
  return function() {
    browserSync.init({
        proxy: "paths.url"
    });

    gulp.watch('./dist/sass/*.scss', ['sass:dev']);
    gulp.watch('./dist/js/*.js', ['js:compress']);
    gulp.watch(['./dist/css', './js']).on('change', browserSync.reload);
  };
};
