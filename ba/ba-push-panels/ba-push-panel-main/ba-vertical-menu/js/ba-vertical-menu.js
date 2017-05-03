/** Jozef Lacko 2017 BaseApp */

var JLApplication = JLApplication || {}; 
JLApplication.menu = JLApplication.menu || {};

JLApplication.menu.vertical = (function(){
	
	var _get; // from get-elements
	var _properties;
	var $li;

	var c = {
		CLICK : 'click.verticalMenu',
		
		ACTIVE : 'active'
	};
	var loc = {
		VERTICAL_MENU : 'ul.jl-vertical-menu',
		LI : 'li.jl-link',
	}

	function _onLiClick(e){
		$li.removeClass(c.ACTIVE);
		var $thisLi = $(this);
		$thisLi.addClass(c.ACTIVE);
		_get.panel.mainContentPageTitle().text($thisLi.text());
		if ( _properties.closeSlideoutPanel !== undefined )
			_properties.closeSlideoutPanel();
		$('body').scrollTop(0);
	}		
	function _installClick(){
		$li = _get.panel.mainPush().find(loc.VERTICAL_MENU).find(loc.LI);
		$li.on(c.CLICK, _onLiClick);
	}

	return {
		install : function(properties){
			_get = properties.get;
			_properties = properties;
			_installClick(properties);
		}			
	}
})();
	
