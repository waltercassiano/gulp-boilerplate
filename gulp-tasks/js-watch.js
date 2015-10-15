'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.watch('./test_files/src/js/*.js', ['js:compress']);

    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./dist/js/**']).on('change', $.livereload.changed);
  };
};
