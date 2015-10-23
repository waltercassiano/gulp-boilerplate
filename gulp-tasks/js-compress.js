'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.scripts.src + '*.js')
    .pipe($.concat(config.paths.scripts.fileName))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.paths.scripts.dest));
  };
};
