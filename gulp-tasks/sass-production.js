'use strict';

module.exports = function (gulp, plugins, config) {
  return function() { gulp.src(config.paths.styles.src + '*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest(config.paths.styles.dest));
  };
};
