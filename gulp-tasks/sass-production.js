'use strict';

module.exports = function (gulp, $, config) {
  return function() { gulp.src(config.paths.styles.src + '*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest(config.paths.styles.dest));
  };
};
