'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.watch(config.paths.scripts.src + '*.js', ['js:compress']);

    // Create LiveReload server
    $.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch([config.paths.scripts.src + '**']).on('change', $.livereload.changed);
  };
};
