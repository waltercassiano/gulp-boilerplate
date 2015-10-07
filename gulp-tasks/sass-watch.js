'use strict';

module.exports = function (gulp, plugins) {
  return function() {
    gulp.watch('./sass/*.scss', ['sass:dev']);

    // Create LiveReload server
    plugins.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./css/**']).on('change', plugins.livereload.changed);
  }
}
