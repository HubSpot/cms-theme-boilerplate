$(function() {

	/** 
	 * Mobile Nav
	 *
	 * Toggle Dropdown Menu
	 */

	$('.custom-menu-primary').addClass('js-enabled');
	$('.custom-menu-primary .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><span></span></a>');
	$('a.mobile-trigger').click(function() {
	    $(this).next('.custom-menu-primary .hs-menu-flow-horizontal').slideToggle(250);
	    $('body').toggleClass( "mobile-open" );
	    return false;
	});

});