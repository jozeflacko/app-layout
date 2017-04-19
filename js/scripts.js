/** Jozef Lacko 2017 BaseApp */

var baseApp = {}; // create new object!

$( document ).ready(function() {
    	
	console.log( "App is ready!" );
	
	baseApp.init = (function(){
		
		var _get = (function (){
			var loc = {
				panels  : {
					ROOT 	  : '#jl-root',
					TOP_PUSH  : '#jl-top-push-panel',
					TOP_FIX   : '#jl-top-fix-panel',
					LEFT_PUSH : '#jl-left-push-panel',
					CONTENT   : '#jl-content',	
				},
				buttons : {
					TOGGLE_TOP_PUSH  : '#jl-toggle-top-push-panel',
					TOGGLE_LEFT_PUSH : '#jl-toggle-left-push-panel',
				},
			};			
			function giveElement( l ){
				return $(l);
			}			
			return {
				panel : {
					root : function(){
						return giveElement( loc.panels.ROOT );
					},
					topPush : function(){
						return giveElement( loc.panels.TOP_PUSH );
					},
					topFix : function(){
						return giveElement( loc.panels.TOP_FIX );
					},
					leftPush : function(){
						return giveElement( loc.panels.LEFT_PUSH );
					},
					content : function(){
						return giveElement( loc.panels.CONTENT );
					},
				},
				btn : {
					topPush : function(){
						return giveElement( loc.buttons.TOGGLE_TOP_PUSH );
					},					
					leftPush : function(){
						return giveElement( loc.buttons.TOGGLE_LEFT_PUSH );
					},					
				}
			};			
		})();
		
		
		function _bindHammerOnLeftPushPanel(){
			
			var myElement = _get.panel.root()[0];	// can not be Jquery object!	
			
			var hammertime = new Hammer(myElement);
			hammertime.on('pan', function(ev) {
				console.log(ev);
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
					
					var slideout = new Slideout({
					   'panel': _get.panel.content()[0],
					   'menu': _get.panel.leftPush()[0],
					   'padding': 250,
					   'tolerance': 70
					});
					_get.btn.leftPush().click(function() {
						slideout.toggle();
					});
					
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
				(function showLeftPushMenuWhenDesktop(){	
					/*if ( $(window).width() >= 768 ){
						setTimeout(function(){
							togglePushPanel.left();
						},1000);
					}*/
				})();
		
			_get.btn.topPush().click(togglePushPanel.top);
			_get.btn.leftPush().click(togglePushPanel.left);
		}
		
		
		function _start(){
			_bindPushEventsOnButtons();
			//_bindHammerOnLeftPushPanel();
		}
		return {
			start : _start,			
		}
	})(); // end
		
	
baseApp.init.start();	
	
	
	
	
	
	
	
	
	
});