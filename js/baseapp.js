/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 

    	
JLApplication.baseApp = (function(){
	
	var _baseAppObject; // from get-elements
	
	return {
		start : function(){	
				$( document ).ready(function() {
					_baseAppObject = JLApplication.elements;
					
					JLApplication.pushPanels.install({
						get : _baseAppObject,
					});
					
					JLApplication.menu.vertical.install({
						get : _baseAppObject,
						closeSlideoutPanel : JLApplication.pushPanels.closeSlideoutPanel,
						menu : {
							link : { faIcon : '', text : '', url : '', id : '' },
							link : { faIcon : '', text : '', url : '', id : '' },
							link : { faIcon : '', text : '', url : '', id : '' },
							link : { faIcon : '', text : '', url : '', id : '' },
						},
					});
					
					JLApplication.menu.horizontal.install({
						get : _baseAppObject,						
					});
					
					console.log('>>> JL BASEAPP installation done. <<<');
			});
		}			
	}
})(); // end baseApp		
	
// START
JLApplication.baseApp.start();	
