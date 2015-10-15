'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.watch('./js/*.js', ['js:compress']);

    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./js/**']).on('change', $.livereload.changed);
  };
};
