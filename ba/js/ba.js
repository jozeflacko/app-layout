/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.baseApp = JLApplication.baseApp || {};
    	
JLApplication.baseApp = (function(){
	
	var _elements; // from get-elements
	
	function _show(){
		
		var $base = _elements.panel.base();

		$base.css(opacity(0), 0);
		$base.removeClass('jl-hidden');
		$base.animate(opacity(1), 1000, function(){ $base.css(opacity('')); });

		function opacity(set){
			return {'opacity': set};
		}
	}

	return {
		start : function(){	
				var that = this;
				
				$( document ).ready(function() {
					
					_elements = that.elements;
					
					that.pushPanels.install({
						get : _elements,
					});
					
					JLApplication.menu.vertical.install({
						get : _elements,
						closeSlideoutPanel : that.pushPanels.main.closeSlideoutPanel,
					});
					
					JLApplication.menu.horizontal.install({
						get : _elements,						
					});

					_show();
					
					console.log('>>> JL BASEAPP installation done. <<<');
			});
		}			
	}
})(); // end baseApp		
	
// START
JLApplication.baseApp.start();	
