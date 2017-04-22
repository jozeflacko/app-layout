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
		
		function _installSlideout(){
			
			// create new object
			var slideout = new Slideout({
				'panel': _get.panel.mainContent()[0],
				'menu':  _get.panel.mainPush()[0],
				'padding': 250,
				'tolerance': 70
			});
			// bind to toggle button to open and close main-push panel
			_get.btn.mainPush().click(function(e){ 
				slideout.toggle(e);
			});
		}
		function _bindToggleToHeadPushButton(){			
			
			_get.btn.headPush().click(function(e){ 
				_get.panel.base().toggleClass('jl-head-push-is-active');
			});
		}
		
		function _bindPushEventsOnButtons(){	
				
				var togglePushPanel = (function(){						
					var $root = _get.panel.root();	
					var pushed = 'jl-pushed';						
					var topPushedClass = pushed + '-top';
					var leftPushedClass = pushed + '-left';
					
					function togglePanel( $panel, classs ){
						if ($panel.hasClass(classs))
							$panel.removeClass(classs);
						else 
							$panel.addClass(classs);					
					}						
					
					return {
						// toggle class on root element
						left : function(){
							togglePanel( $root, leftPushedClass );			
						},
						// toggle class on root element
						top: function(){							
							togglePanel( $root, topPushedClass );			
						},
					}			
				})();
		}
		
		
		function _start(){
			_installSlideout();
			_bindToggleToHeadPushButton();

			//_bindPushEventsOnButtons();
			//_bindHammerOnLeftPushPanel();
		}
		return {
			start : _start,			
		}
	})(); // end
		
	
JLApplication.baseApp.start();	
	
	
	
	
	
	
	
	
	
});