module.exports = function (gulp, plugins, config) {

  return function() {
    gulp.watch(config.paths.scripts.src + '*.js', ['js:compress']);

    // Create LiveReload server
    plugins.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch([config.paths.scripts.src + '**']).on('change', plugins.livereload.changed);
  }
}
