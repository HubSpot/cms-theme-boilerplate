$(function() {

 	/** 
 	 * Mobile Nav
 	 *
 	 * Toggle Side Menu - Left or Right
 	 */

	// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon"><span></span></a>');
	 
	// Prepend a close icon to the menu
	$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');
	 
	// Add body class on mobile icon click
	$(".mobile-icon, .close-icon").click(function(){
	$("body").toggleClass("show-mobile-nav ");
	});
	 
	// Set the menu height to 100% of the document
	function setMenuHeight(){
	   var height = $(document).outerHeight(true);
	   $(".custom-menu-primary").height(height);
	}
	setMenuHeight();
	$(window).resize(setMenuHeight);
	
	// Wrap body contents with a div so the transforms will work
    function wrapBody() {
        // Check to see if linked share script has loaded
        if (window.IN && window.IN.ENV && window.IN.ENV.js &&
            window.IN.ENV.js.xtn) {
            $("body").find("script").remove().end().wrapInner('<div id="site-wrapper"></div>');
        } else {
            setTimeout(wrapBody, 50);
        }
    }
    wrapBody();
    

});
