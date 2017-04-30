/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 

JLApplication.elements = (function(){	
	
	var loc = {
		panels  : {
			BASE 						: '#jl-base-app',
			HEAD 						: '#jl-head',
			HEAD_PUSH   				: '#jl-head-push',
			HEAD_CONTENT   				: '#jl-head-content',
			MAIN 						: '#jl-main',
			MAIN_PUSH  					: '#jl-main-push',
			MAIN_CONTENT    			: '#jl-main-content',
			MAIN_CONTENT_PAGE_TITLE		: '#jl-page-title',	
			FOOT  						: '#jl-foot',			
		},
		buttons : {
			HEAD_PUSH : '#jl-btn-head-push',
			MAIN_PUSH : '#jl-btn-main-push',
			LOGOUT 	  : '#jl-logout',
		},
	};			
	function giveElement(l){
		return $(l);
	}			
	return {
		panel : {
			base : 					function(){ return giveElement( loc.panels.BASE 					); 	},
			head : 					function(){ return giveElement( loc.panels.HEAD 					); 	},
			headPush :  			function(){ return giveElement( loc.panels.HEAD_PUSH 				); 	},
			headContent : 			function(){ return giveElement( loc.panels.HEAD_CONTENT			    ); 	},
			main : 					function(){ return giveElement( loc.panels.MAIN 					); 	},
			mainPush : 				function(){ return giveElement( loc.panels.MAIN_PUSH 				); 	},
			mainContent : 			function(){ return giveElement( loc.panels.MAIN_CONTENT 			); 	},
			mainContentPageTitle : 	function(){ return giveElement( loc.panels.MAIN_CONTENT_PAGE_TITLE  ); 	},
			foot : 					function(){ return giveElement( loc.panels.FOOT						);  }
		},
		btn : {
			headPush : function(){ return giveElement( loc.buttons.HEAD_PUSH ); },					
			mainPush : function(){ return giveElement( loc.buttons.MAIN_PUSH ); },
			logout 	 : function(){ return giveElement( loc.buttons.LOGOUT ); }								
		}
	};			
})();	
	
