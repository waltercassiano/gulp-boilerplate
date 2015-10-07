module.exports = function (gulp, plugins) {
  
  return function() {
    gulp.watch('./js/*.js', ['js:compress']);

    // Create LiveReload server
    plugins.livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./js/**']).on('change', plugins.livereload.changed);
  }
}
