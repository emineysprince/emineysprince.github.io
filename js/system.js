//	TABLE OF CONTENTS
//	---------------------------
//	 01. Preloader
//	 02. Adding fixed position to header
//   03. Easy Tab
//	 04. Menu Toggle
//	 05. Testimonial Carousel
//	 06. Image Popup

//  ====================================================================

(function() {
	"use strict";

	// ------------------- 01 Preloader ---------------------
	// --------------------------------------------------------

	$(window).load(function() {
	$("#loader").fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
	});


	// ---------- 02 Adding fixed position to header ----------
	// --------------------------------------------------------

	$(document).scroll(function() {
		if ($(document).scrollTop() >= 1) {
			  $('.header-area').addClass('navbar-fixed-top');
			  $('html').addClass('has-fixed-nav');
		} else {
			  $('.header-area').removeClass('navbar-fixed-top');
			  $('html').removeClass('has-fixed-nav');
		}
	});

	// --------------------- 03 Easy Tab ----------------------
	// --------------------------------------------------------

	$(document).ready(function ($) {     
		$('#tab-container').easytabs({
			 updateHash: false
		});
		$('.view-profile').click( function(e) {
			e.preventDefault();
			$('#tab-container').easytabs('select', '#profile');
		});
	});

	// -------------------- 04 Menu Toggle --------------------
	// --------------------------------------------------------
	
	$( ".nav-toggle" ).click(function() {
		$( ".navigation-area" ).toggle();
	});

	// --------------- 05 Testimonial Carousel ----------------
	// --------------------------------------------------------
	
	$('.carousel').carousel({
	  interval: 5000
	})
	
	// -------------------- 06 Image Popup --------------------
	// --------------------------------------------------------
	
	$('.portfolio-gal').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});

})(jQuery);