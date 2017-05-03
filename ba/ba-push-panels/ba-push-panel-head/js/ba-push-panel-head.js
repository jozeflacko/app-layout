/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.baseApp = JLApplication.baseApp || {};
JLApplication.baseApp.pushPanels  = JLApplication.baseApp.pushPanels || {}; 
JLApplication.baseApp.pushPanels.head = JLApplication.baseApp.pushPanels.head || {};   
   
JLApplication.baseApp.pushPanels.head = (function(){
	
	var _get; // from get-elements
	
	function _installToggleOnButton(){
		var CLICK = "click.jl-headpush";
		var HEADPUSH_ON = "jl-headpush-on";
		
		_get.btn.headPush().on(CLICK,function(e){ 
			_get.panel.base().toggleClass(HEADPUSH_ON);
		});
	}
	
	return {
		install : function(properties){
			_get = properties.get;
			
			_installToggleOnButton();
			
			this.horizontalMenu.install({
				get : _get,						
			});
		}
	};

})();	

