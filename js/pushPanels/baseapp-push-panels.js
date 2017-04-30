/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 

    	
JLApplication.pushPanels = (function(){
	
	var _get; // from get-elements
		
	var mainPushPanel = (function (){

		var MAINPUSH_ON = "jl-mainPush-on";

		var slideoutPlugin = (function(){
			
			var SLIDEOUT_ON = "jl-slideoutPlugin-on";
			var CLICK = "click.jl-slideoutPlugin";
			var thisObject = null;
			var isInstalled = false;
			function getProperties(){
				return {
					'panel': _get.panel.mainContent()[0],
					'menu':  _get.panel.mainPush()[0],
					'padding': 250, /* should be same as .slideout-menu css for width */
					'tolerance': 70
				}
			};
			
			return {
				install : function(){
					if( isInstalled === true )
						return;
					
					isInstalled = true;
					thisObject = new Slideout( getProperties() );
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

				},
				close : function(){						
					if ( isInstalled === true )
						thisObject.close();	
				},			
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
			closeSlideoutPanel : slideoutPlugin.close,
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
		install : function(properties){
			_get = properties.get;
			mainPushPanel.install();
			headPushPanel.install();
		},	
		closeSlideoutPanel : mainPushPanel.closeSlideoutPanel,
	};	

})();	

