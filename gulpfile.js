'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('sass:production', getTask('sass-production'));
gulp.task('sass:dev', getTask('sass-dev'));
gulp.task('sass:watch', getTask('sass-watch'));
gulp.task('js:compress', getTask('js-compress'));
gulp.task('js:watch', getTask('js-watch'));
gulp.task('sprite', getTask('sprite'));
gulp.task('server', getTask('server'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('imagemin-watch', getTask('imagemin-watch'));
gulp.task('default', [// Compile
                      'sass:dev', 'sprite',

                      // Optimization
                      'js:compress', 'imagemin',

                      // Watch
                      'sass:watch', 'js:watch', 'imagemin-watch'
                      ]);
