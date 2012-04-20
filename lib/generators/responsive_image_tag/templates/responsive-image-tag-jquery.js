/*jslint browser:true */
/*global $, $$*/


// TODO
// Effective solution! One suggestion, in legacy IE (7 & 8) the img element is added with the width and height attributes. For use with responsive images that are being scaled in the browser, either remove the attributes in the javascript or be sure to style the img with "auto" width and height in the CSS.
// TODO 2 
// targetting pixel ratio in JavaScript
// Device pixel ratio can also be queried in JavaScript.
// var dpr = 1;
// if(window.devicePixelRatio !== undefined) dpr = window.devicePixelRatio;

// responsiveImageTag detects all <noscript> elements on the page with a class
// of 'responsivize'.

// It retrieves both HTML5 data attributes and then creates an image tag with
// the correct source destination depending on the available screen width of
// the user's device. This way smaller images are sent to mobile devices or
// any device smaller than 768px. 

// The <noscript> tags are then removed from the page.
var responsiveImageTag = {
	
    replaceInitialImages:function() {
		var platform = "desktop";
		var responsiveImages = $(".responsivize");
		var i, 
			noOfresponsiveImages = responsiveImages.length;

			// Test for available width in current browser window
			// 767px, anything smaller than an ipad is considered mobile
		if(screen.width <= 767){ 
			platform = "mobile";
		}

		//set initial source element on image
		for(i = 0; i < noOfresponsiveImages; i = i + 1 ){
			var noScriptElem = $(responsiveImages[i]);
			var img = window.document.createElement("img");

			img.alt = noScriptElem.attr("data-alttext");

			if(platform === "mobile"){
				img.src = noScriptElem.attr("data-mobilesrc");
			}else{
				img.src = noScriptElem.attr("data-fullsrc");
			}

			img.className = "responsive";
			// rvb : use .before() method & get rid of the <span>
			noScriptElem.prev().append(img);	
			noScriptElem.hide();
		}
    }
};

$(function() {
	responsiveImageTag.replaceInitialImages();
});
       
