/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.menu = JLApplication.menu || {};

JLApplication.menu.horizontal = (function(){	
			
	var _get; // from get-elements
	var $li;

	var c = {
		CLICK : 'click.verticalMenu',		
		ACTIVE : 'active',		
	};
	var loc = {
		LI_NOT_DROPDOWN : 'li:not(.dropdown)',
		HORIZONTAL_MENU : 'ul.jl-horizontal-menu',
	};

	function _onLiClick(e){
		swal($(this).text()+' was clicked');
	}		
	function _installClick(){
		$li = _get.panel.headPush().find(loc.HORIZONTAL_MENU).find(loc.LI_NOT_DROPDOWN);
		$li.on(c.CLICK, _onLiClick);
	}

	return {
		install : function(){
			_get = JLApplication.elements;
			_installClick();
		}			
	}
})();
	
