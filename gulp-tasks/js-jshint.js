'use strict';

var stylish = require('jshint-stylish');

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.scripts.src + '*.js')

    // JShint
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish))
    .pipe($.jshint.reporter('fail'));
  };
};
