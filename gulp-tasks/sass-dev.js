'use strict';

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.src + '*.scss')
    .pipe($.cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: [
        config.basePaths.node_modules + 'breakpoint-sass/stylesheets/'
      ]
    }).on('error', $.sass.logError))
    .pipe( $.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.dest));
  };
};
