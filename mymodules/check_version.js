'use strict';
var childProcess = require('child_process');

var checkversion = function() {
	this.defaults,
	this.init = function(options) {
		var scope = this;
		scope.defaults = options || {};
		console.log(childProcess);
		childProcess.execSync('npm -v', function(error, stdout,stderr) {
  		  if(error)
    		return error
    	  scope.callBack('npm', stdout);
		});
		childProcess.execSync('node -v', function(error, stdout, stderr){
		  if(error)
		    return error;
				console.log('here');
		  scope.callBack('node', stdout);
		});
	},
	this.callBack = function(elementVersion, version) {
		var scope = this;
		var npm;
		var node;
		switch (elementVersion) {
			case 'node': {
				node = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('Current Version node: ' + node + ' =>>> Version required ' + ((scope.defaults.node) ? scope.defaults.node : '' ));
				break;
			}
			case 'npm' : {
				npm = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('Current Version node: ' + npm + ' =>>> Version required ' + ((scope.defaults.npm) ?  scope.defaults.npm : '' ));
				break;
			}
			default: 'Node is not installed'
		}
	}
}

module.exports = new checkversion();
