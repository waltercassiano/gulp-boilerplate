'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.scripts.src + '*.js')

    // JShint
    .pipe($.jscs())
    .pipe($.jscs.reporter())
    .pipe($.jscs.reporter('fail'));
  };
};
