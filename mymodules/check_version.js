'use strict';
var childProcess = require('child_process');
var util = require('util');

var options = {
  	npm: '3.5.2',
	node: '4.2.2'
}

var checkversion = function() {
	this.defaults = {
		npm: '3.3.3',
		node: '3.3.3'		
	},
	this.init = function(options) {
		var scope = this;
		scope.defaults = options || {};
		
		childProcess.exec('npm -v', function(error, stdout,stderr) {
  		  if(error)
    		return error
    	  scope.callBack('npm', stdout);
		});

		childProcess.exec('node -v', function(error, stdout, stderr){
		  if(error)
		    return error;
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
				console.log('Current Version node: ' + node + ' => Version recomended ' + ((scope.defaults[elementVersion]) ? scope.defaults[elementVersion] : '' ));
				this.stopInstall(elementVersion,node);
				break;
			}
			case 'npm' : {
				npm = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('Current Version node: ' + npm + ' => Version recomended ' + ((scope.defaults[elementVersion]) ?  scope.defaults[elementVersion] : '' ));
				this.stopInstall(elementVersion,npm);
				break;
			}
			default: 'Node is not installed'
		}
	},
	this.stopInstall = function(elementVersion,version) {
		var scope = this;
		if (version < scope.defaults[elementVersion]) {
			console.log(elementVersion + scope.defaults[elementVersion]);
			process.exit(8);
		}
	}
}

process.on('exit', function(code) {

});


module.exports = new checkversion().init(options);
