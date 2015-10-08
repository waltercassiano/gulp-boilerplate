'use strict';

module.exports = function (gulp, plugins, config) {
  return function() {
    gulp.watch(config.paths.styles.src + '*.scss', ['sass:dev']);

    // Create LiveReload server
    plugins.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch([config.paths.styles.css + '**']).on('change', plugins.livereload.changed);
  }
}
