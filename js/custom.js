jQuery(document).ready(function(){
	// fixed menu js
	jQuery(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 145) {
			jQuery(".header-area").removeClass("sticky-menu");
		} else {
			jQuery(".header-area").addClass("sticky-menu");
		}
		});


	// accordion js
	jQuery(".accordion-content-two").css("display", "none");
	jQuery(".accordion-title-two").click(function () {
		jQuery(".accordion-title-two").not(this).removeClass("open");
		jQuery(".accordion-title-two").not(this).next().slideUp(300);
		jQuery(this).toggleClass("open");
		jQuery(this).next().slideToggle(300);
	});

	// Active wow animation
	new WOW().init();

	$('body').materialScrollTop();
	


})


















