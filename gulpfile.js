'use strict';


var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./config/gulp-config.js');

plugins.util.log('### GULP BOILERPLATE ###');

function getTask(task) {
<<<<<<< HEAD
    return require('./gulp-tasks/' + task)(gulp, plugins, config);
=======
  return require('./gulp-tasks/' + task)(gulp, plugins);
>>>>>>> refs/remotes/origin/master
}

gulp.task('sass:production', getTask('sass-production'));
gulp.task('sass:dev', getTask('sass-dev'));
gulp.task('sass:watch', getTask('sass-watch'));
gulp.task('js:compress', getTask('js-compress'));
gulp.task('js:watch', getTask('js-watch'));
gulp.task('sprite', getTask('sprite'));
gulp.task('server', getTask('server'));
gulp.task('stylelint', getTask('stylelint'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('imagemin-watch', getTask('imagemin-watch'));
gulp.task('default', [// Compile
                      'sass:dev', 'sprite',

                      // Optimization
                      'js:compress', 'imagemin',

                      // Watch
                      'sass:watch', 'js:watch', 'imagemin-watch'
                      ]);
