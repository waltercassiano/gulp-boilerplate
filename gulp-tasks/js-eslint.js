'use strict';

module.exports = function (gulp, $, config) {

  return function() {
        gulp.src(config.paths.scripts.src + '*.js')

        // Eslint
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
    
        .pipe($.sourcemaps.init())
        
        // Concat and rename
        .pipe($.concat(config.paths.scripts.fileName))
        .pipe($.rename({
            suffix: '.min'
        }))

        // uglifying and moving to destination
        .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.scripts.dest));
    };
};
