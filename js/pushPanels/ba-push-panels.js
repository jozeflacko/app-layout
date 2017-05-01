/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.baseApp = JLApplication.baseApp || {};
JLApplication.baseApp.pushPanels  = JLApplication.baseApp.pushPanels || {}; 
    	
JLApplication.baseApp.pushPanels = (function(){
	
	return {
		install : function(properties){
			this.main.install(properties);
			this.head.install(properties);
		}
	};	

})();	

