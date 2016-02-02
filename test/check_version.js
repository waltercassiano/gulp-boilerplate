'use strict';
var childProcess = require('child_process');
var util = require('util');
var cp = require('child_process');


var engines = {
    node : process.env.npm_package_engines_node || undefined,
    npm : process.env.npm_package_engines_npm || undefined
};

var localEnv = {
  node : process.env.npm_config_user_agent.match(/node[//a-z_0-9_.]+/g) || undefined,
  npm : process.env.npm_config_user_agent.match(/npm[//a-z_0-9_.]+/g) || undefined,
};


var checkversion = function() {
	this.engines,
  this.localEnv,
	this.init = function(engines,localEnv) {

		var scope = this;
		scope.engines = engines || undefined;
    scope.localEnv = localEnv || undefined;

    //Exit if not get version from system or package json
    if( !scope.engines || !scope.localEnv )
      process.exit(8);

    //Remove v4.*.*
    scope.callBack('node', scope.localEnv.node.toString() );
    scope.callBack('npm', scope.localEnv.npm.toString() );
    //test success
    process.exit(0);

	},
	this.callBack = function(elementVersion, version) {
		var scope = this;
		var npm;
		var node;

		switch (elementVersion) {
			case 'node': {
				node = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('- Current Version node: ' + node + ' => Version recomended ' + ((scope.engines[elementVersion]) ? scope.engines[elementVersion] : '' ));
				this.testVersion(elementVersion, node);
				break;
			}
			case 'npm' : {
				npm = version.replace(/([^0-9.]|\r\n|\n|\r)/gm,"");
				console.log('- Current Version npm: ' + npm + ' => Version recomended ' + ((scope.engines[elementVersion]) ?  scope.engines[elementVersion] : '' ));
				this.testVersion(elementVersion, npm);
				break;
			}
			default: process.exit(0);
		}
	},
	this.testVersion = function(elementVersion,version) {
		var scope = this;
		if (version < scope.engines[elementVersion].replace(/([^0-9.]|\r\n|\n|\r)/gm,"")) {
			process.exit(1);
		}
	}
}

process.on('exit', function(code) {
  switch (code) {
    case 0 : console.log('\nTest Succcess!!! All requirements are ok and you can run npm install now.'); break;
    case 1 : console.log('\nPlease confirm above requirements'); break;
    default: return;
  }
});

module.exports = new checkversion().init(engines,localEnv);
