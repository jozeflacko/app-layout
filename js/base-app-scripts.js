/** Jozef Lacko 2017 BaseApp */

var JLApplication = {}; // create new object!

$( document ).ready(function() {
    	
	console.log( "Base App is ready!" );
	
	JLApplication.baseApp = (function(){
		
		var _get = (function (){
			var loc = {
				panels  : {
					BASE 			: '#jl-base-app',
					HEAD 			: '#jl-head',
					HEAD_PUSH   	: '#jl-head-push',
					HEAD_CONTENT    : '#jl-head-content',
					MAIN 			: '#jl-main',
					MAIN_PUSH  		: '#jl-main-push',
					MAIN_CONTENT    : '#jl-main-content',	
					FOOT  			: '#jl-foot',
				},
				buttons : {
					HEAD_PUSH : '#jl-btn-head-push',
					MAIN_PUSH : '#jl-btn-main-push',
				},
			};			
			function giveElement(l){
				return $(l);
			}			
			return {
				panel : {
					base : 			function(){ return giveElement( loc.panels.BASE 		); 	},
					head : 			function(){ return giveElement( loc.panels.HEAD 		); 	},
					headPush :  	function(){ return giveElement( loc.panels.HEAD_PUSH 	); 	},
					headContent : 	function(){ return giveElement( loc.panels.HEAD_CONTENT ); 	},
					main : 			function(){ return giveElement( loc.panels.MAIN 		); 	},
					mainPush : 		function(){ return giveElement( loc.panels.MAIN_PUSH 	); 	},
					mainContent : 	function(){ return giveElement( loc.panels.MAIN_CONTENT ); 	},
					foot : 			function(){ return giveElement( loc.panels.FOOT			);  }
				},
				btn : {
					headPush : function(){ return giveElement( loc.buttons.HEAD_PUSH ); },					
					mainPush : function(){ return giveElement( loc.buttons.MAIN_PUSH ); }					
				}
			};			
		})();
		
		function _installPushForMainPush(){
			
			var slideoutProperties = {
				'panel': _get.panel.mainContent()[0],
				'menu':  _get.panel.mainPush()[0],
				'padding': 250,
				'tolerance': 70
			}

			var slideout = new Slideout( slideoutProperties );
			
			// bind to toggle button to open and close main-push panel
			_get.btn.mainPush().click(function(e){ 
				slideout.toggle(e);
			});

			// hide and show menu on resize			
		}
		function _bindToggleToHeadPushButton(){	
			_get.btn.headPush().click(function(e){ 
				_get.panel.base().toggleClass('jl-head-push-is-active');
			});
		}		
		function _start(){
			_installPushForMainPush();
			_bindToggleToHeadPushButton();
		}
		return {
			start : _start,			
		}
	})(); // end
		
	
JLApplication.baseApp.start();	
	
	
	
	
	
	
	
	
	
});