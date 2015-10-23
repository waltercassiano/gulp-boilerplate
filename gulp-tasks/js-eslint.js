'use strict';

module.exports = function (gulp, plugins) {

  return function() {
        gulp.src('./test_files/src/js/*.js')

        // Eslint
        .pipe(plugins.eslint({
            "rules": {
                "no-redeclare": 1
            },
            "globals": {
                "jQuery": true,
                "$": false
            }
        }))
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError())
        
        // Concat and rename
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({
            suffix: '.min'
        }))

        // uglifying and moving to destination
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./test_files/dist/js/'));
    };
};
