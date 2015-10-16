'use strict';
var postcss = require('gulp-postcss');
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");

///https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md

//0 - turn the rule off
//1 - turn the rule on as a warning (doesn't affect exit code)
//2 - turn the rule on as an error (exit code will be 1)

module.exports = function (gulp, plugins) {
  return function() {
	 gulp.src("./test_files/dist/css/*.css")
   .pipe(postcss([
  	  stylelint({ // an example config that has four rules 
  	    "rules": {
  	      "color-no-invalid-hex": 0,
  	      "declaration-colon-space-before": [2, "never"],
  	      "indentation": [1, "tab"],
          "function-space-after": [2, "always"],
          "selector-no-id": 2,
          "function-comma-space-before": [2, "never"],
          "function-url-quotes": [1, "double"],
  	      "number-leading-zero": [2, "never"]
  	    }
  	  }),
  	  reporter({
  	    clearMessages: true,
  	  })
  	]));
  };
};
