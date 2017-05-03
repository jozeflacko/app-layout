/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.baseApp = JLApplication.baseApp || {};
JLApplication.baseApp.pushPanels  = JLApplication.baseApp.pushPanels || {}; 
    	
JLApplication.baseApp.pushPanels.head = (function(){
	
	var _get; // from get-elements
		
	var HEADPUSH_ON = "jl-headpush-on";
	var CLICK = "click.jl-headpush";
	
	return {
		install : function(properties){
			_get = properties.get;
			
			_get.btn.headPush().on(CLICK,function(e){ 
				_get.panel.base().toggleClass(HEADPUSH_ON);
			});
		}
	};

})();	

