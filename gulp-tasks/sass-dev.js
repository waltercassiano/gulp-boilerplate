'use strict';

module.exports = function (gulp, plugins, config) {
  return function() {
    //plugins.gutil.log('Hello world!');
    gulp.src(config.paths.styles.src + '*.scss')
    .pipe(plugins.cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      includePaths: [
        config.basePaths.node_modules + 'breakpoint-sass/stylesheets/'
      ]
    }).on('error', plugins.sass.logError))
    .pipe( plugins.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.css));
  };
};
