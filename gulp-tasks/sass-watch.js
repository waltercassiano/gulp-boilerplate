'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.watch(config.paths.styles.src + '*.scss', ['sass:dev']);

    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch([config.paths.styles.dest + '**']).on('change', $.livereload.changed);
  };
};
