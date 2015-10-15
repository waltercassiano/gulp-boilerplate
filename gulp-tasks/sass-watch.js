'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.watch('./sass/*.scss', ['sass:dev']);

    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./css/**']).on('change', $.livereload.changed);
  };
};
