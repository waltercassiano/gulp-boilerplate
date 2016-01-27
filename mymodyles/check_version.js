var childProcess = require('child_process');
var check_version =  function() {
	this.npmVersion,
	this.nodeVersion,
	this.init = function() {
		scope = this;
		childProcess.exec('npm -v', function(error, stdout,stderr){
  		  if(error) 
    		return error
    	  scope.callBack('npmVersion' , stdout)
		});


		childProcess.exec('node -v', function(error, stdout, stderr){
		  if(error) 
		    return error;
		  scope.callBack('nodeVersion', stdout)
		});	
	},
	this.callBack = function(elementVersion, version) {
		console.log(this.elementVersion);
		this.elementVersion = version;
		console.log(this.npmVersion)
	}

}

check = new check_version();
check.init();
console.log(check.npmVersion)
