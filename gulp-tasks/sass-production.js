'use strict';

module.exports = function (gulp, plugins) {
  return function() { gulp.src('./sass/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
  };
};
