'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./gulp-tasks/_config.js');
var runSequence = require('run-sequence');

plugins.util.log('### GULP BOILERPLATE ###');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

gulp.task('sass:production', getTask('sass-production'));
gulp.task('sass:dev', getTask('sass-dev'));
gulp.task('sass:watch', getTask('sass-watch'));
gulp.task('js:compress', getTask('js-compress'));
gulp.task('js:watch', getTask('js-watch'));
gulp.task('js:eslint', getTask('js-eslint'));
gulp.task('js:jshint', getTask('js-jshint'));
gulp.task('js:jscs', getTask('js-jscs'));
gulp.task('sprite', getTask('sprite'));
gulp.task('server', ['default'], getTask('server'));
gulp.task('stylelint', getTask('stylelint'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('imagemin-watch', getTask('imagemin-watch'));

// Compile JS
gulp.task('compileJS', function(cbFunc) {
  runSequence(['js:eslint', 'js:jshint', 'js:jscs'],
              'js:compress',
              cbFunc);
});

gulp.task('default', [// Compile
                      'sass:dev',
                      'sprite',
                      'compileJS',

                      // Optimization
                      'imagemin',

                      // Watch
                      'sass:watch', 'js:watch', 'imagemin-watch'
                      ]);
