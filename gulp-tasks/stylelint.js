'use strict';
var postcss = require('gulp-postcss');
var reporter = require("postcss-reporter");
var stylelint = require("stylelint");

module.exports = function (gulp, plugins) {
  return function() {
	 gulp.src("./test_files/dist/css/*.css")
   .pipe(postcss([
  	  stylelint({ // an example config that has four rules 
  	    "rules": {
  	      "color-no-invalid-hex": 2,
  	      "declaration-colon-space-before": [2, "never"],
  	      "indentation": [2, "tab"],
  	      "number-leading-zero": [2, "always"]
  	    }
  	  }),
  	  reporter({
  	    clearMessages: true,
  	  })
  	]));
  };
};
