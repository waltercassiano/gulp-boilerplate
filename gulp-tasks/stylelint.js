'use strict';

var reporter = require("postcss-reporter");
var stylelint = require("stylelint");

///https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md

//0 - turn the rule off
//1 - turn the rule on as a warning (doesn't affect exit code)
//2 - turn the rule on as an error (exit code will be 1)

module.exports = function (gulp, $, config) {
  return function() {
    gulp.src(config.paths.styles.dest + "*.css")
    .pipe($.postcss([
      stylelint(),
      reporter({
        clearMessages: true,
      })
    ]));
  };
};
