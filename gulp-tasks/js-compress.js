'use strict';

module.exports = function (gulp, plugins) {

  return function() {
        gulp.src('./js/*.js')
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./js/min'));
    };
};
