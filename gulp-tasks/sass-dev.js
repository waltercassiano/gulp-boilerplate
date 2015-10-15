'use strict';

module.exports = function (gulp, $) {
  return function() {
    gulp.src('./sass/*.scss')
    .pipe($.cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets/'
      ]
    }).on('error', $.sass.logError))
    .pipe( $.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
  };
};
