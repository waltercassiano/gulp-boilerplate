'use strict';

module.exports = function (gulp, plugins, config) {

  return function() {
        gulp.src(config.paths.scripts.src + '*.js')
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.paths.scripts.dest));
    };
};
