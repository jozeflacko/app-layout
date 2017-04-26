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
		
		var _pushingPanels = (function(){
			
			var mainPushPanel = (function (){

				var MAINPUSH_ON = "jl-mainPush-on";

				var slideoutPlugin = (function(){
					
					var SLIDEOUT_ON = "jl-slideoutPlugin-on";
					var CLICK = "click.jl-slideoutPlugin";
					var thisObject = null;
					var isInstalled = false;
					var properties = {
						'panel': _get.panel.mainContent()[0],
						'menu':  _get.panel.mainPush()[0],
						'padding': 260,
						'tolerance': 70
					};
					
					return {
						install : function(){
							if( isInstalled === true )
								return;
							
							isInstalled = true;
							thisObject = new Slideout( properties );
							_get.panel.base().addClass(SLIDEOUT_ON);
							_get.btn.mainPush().on(CLICK, function(e){ 
								thisObject.toggle(e); 
								_get.panel.base().toggleClass(MAINPUSH_ON);	
							});
						},
						destroy : function(){
							if( isInstalled === false )
								return;
							
							isInstalled = false;				
							thisObject.destroy();
							findAndRemoveClasses(['slideout-panel','slideout-panel-left','slideout-menu','slideout-menu-left']);

							_get.btn.mainPush().off(CLICK);
							_get.panel.base().removeClass(SLIDEOUT_ON);

							function findAndRemoveClasses( classes ){
								for(var i=0; i<classes.length; i++)
									$('.'+classes[i]).removeClass(classes[i]);
							}

						}					
					};
				})(); // end mainPushPanel							
			
				var desktopSlide = (function(){
					
					var DESKTOPSLIDE_ON = "jl-desktopSlide-on";					
					var CLICK = "click.jl-desktopSlide";
					var isInstalled = false;
					
					return {
						install : function(){
							if( isInstalled === true )
								return;
							
							isInstalled = true;							
							_get.panel.base().addClass(DESKTOPSLIDE_ON).addClass(MAINPUSH_ON);
							_get.btn.mainPush().on(CLICK, function(e){ 
								_get.panel.base().toggleClass(MAINPUSH_ON);								
							});
						},
						destroy : function(){
							if( isInstalled === false )
								return;
							
							isInstalled = false;
							_get.btn.mainPush().off(CLICK);
							_get.panel.base().removeClass(DESKTOPSLIDE_ON);
						},
					}; 				
				})(); // end desktopSlide	
				
				function isSmallDevice( maxWidth ){
					return $(window).width() <= maxWidth;
				}

				return {
					install : function(){
						var RESIZE = 'resize.jl-main-push-resize';	
						var SMALL_DEVICE_MAX_WIDTH = 768;					
						
						$(window).on(RESIZE,function() {							
							
							if ( isSmallDevice( SMALL_DEVICE_MAX_WIDTH ) === true ){
								desktopSlide.destroy();
								slideoutPlugin.install();
							} else {
								slideoutPlugin.destroy();
								desktopSlide.install();
							}
							
						}).trigger(RESIZE);
					},
				}; 
			})(); // end mainPushPanel

			var headPushPanel = (function(){
				
				var HEADPUSH_ON = "jl-headpush-on";
				var CLICK = "click.jl-headpush";
				
				return {
					install : function(){
						_get.btn.headPush().on(CLICK,function(e){ 
							_get.panel.base().toggleClass(HEADPUSH_ON);
						});
					}
				}
			})(); // end headPushPanel
		
			return {
				install : function(){
					mainPushPanel.install();
					headPushPanel.install();
				}
			}; 
			
		})(); // end _pushingPanels
		
		return {
			
			start : function( properties ){	
								
				_pushingPanels.install();	
					
				console.log('>>> JL BASEAPP installation done. <<<');
			}			
		}
	})(); // end baseApp		
	
	JLApplication.baseApp.start();	
});