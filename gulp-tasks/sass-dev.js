'use strict';

module.exports = function (gulp, plugins) {
  return function() {
    gulp.src('./sass/*.scss')
    .pipe(plugins.cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      includePaths: [
        'node_modules/breakpoint-sass/stylesheets/'
      ]
    }).on('error', plugins.sass.logError))
    .pipe( plugins.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
  };
};
