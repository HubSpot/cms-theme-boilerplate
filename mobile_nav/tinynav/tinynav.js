/**
 * TinyNav for HubSpot COS v1.0
 *
 * A version of http://tinynav.viljamis.com v1.1 by @viljamis, modified by Radu Mihai to integrate in HubSpot COS
 * Original file URL and author: http://tinynav.viljamis.com v1.1 by @viljamis
 */

(function(e,t,n){e.fn.tinyNav=function(r){var s=e.extend({active:"selected",header:"",label:""},r);return this.each(function(){n++;var r=e(this),o="tinynav",u=o+n,a=".l_"+u,f=e("<select/>").attr({id:u}).addClass(o+" "+u);if(r.is("ul,ol")){if(s.header!==""){f.append(e('<option value="select-header"/>').text(s.header))}var l="";r.addClass("l_"+u).find("a").each(function(){l+='<option value="'+e(this).attr("href")+'">';var t;for(t=0;t<e(this).parents("ul, ol").length-1;t++){l+="- "}l+=e(this).text()+"</option>"});f.append(l);if(!s.header){f.find(":eq("+e(a+" li").index(e(a+" li."+s.active))+")").attr("selected",true)}else{f.find(":eq("+e(a+" li").index(e(a+" li."+s.active))+")").next().attr("selected",true)}f.change(function(){if(e(this).val()!="select-header"){t.location.href=e(this).val()}});e(a).after(f);if(s.label){f.before(e("<label/>").attr("for",u).addClass(o+"_label "+u+"_label").append(s.label))}}})}})(jQuery,this,0)

// Configuration
$(function() {

	$('html').addClass('js-enabled');
	$('.custom-menu-primary .hs-menu-flow-horizontal > ul').tinyNav({
		active: 'active', // The class for the active item in menu (don't change)
		header: 'Menu' // Default value if there is no active item in menu (optional for COS)
		// label: '' // Add a label (optional)
	});

})