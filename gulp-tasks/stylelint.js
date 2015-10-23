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
  	  stylelint({ // an example config that has four rules
  	    "rules": {
  	      "color-no-invalid-hex": 2,
          "color-hex-case": [2, "lower"],
          "color-hex-length": [2, "short"],
          "block-no-empty": 2,
  	      "declaration-colon-space-before": [2, "never"],
          "declaration-no-important": 2,
  	      "indentation": [2, 2],
          "function-space-after": [2, "always"],
          "function-url-quotes": [2, "double"],
          "no-missing-eof-newline": 2,
          "rule-no-duplicate-properties": 2,
          "rule-properties-order": [2, "alphabetical"],
          "selector-no-id": 2,
          "selector-no-universal": 1,
          "selector-pseudo-element-colon-notation": [2, "single"],
          "string-quotes": [2, "double"]
  	    }
  	  }),
  	  reporter({
  	    clearMessages: true,
  	  })
  	]));
  };
};
