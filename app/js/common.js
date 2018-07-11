
$(document).ready(function (){

	// Scroll-to-id
	$(".scroll-to-id").on('click', 'a[href^="#"]', function(e) {
		// target element id
		var id = $(this).attr('href');
		// prevent standard hash navigation (avoid blinking in IE)
		e.preventDefault();

		// target element
		if (id.replace(/\d+/g, '') == "#solution-" && $(id).hasClass("active")) {
			return;
		} else {
			var $id = $(id);
			if ($id.length === 0) { return; }
			// top position relative to the document
			var pos = $id.offset().top - $(".mnu").outerHeight(true);
			// animated top scrolling
			$('body, html').animate({scrollTop: pos});
		}

		
	});

	// Main slider
	var owl = $('.owl-one');
	owl.owlCarousel({
		loop:true,
		margin:0,
		navSpeed:500,
		nav:true,
		navText : ['<img src="../img/slider/arr-prev.png" alt="" class="arr-prev">','<img src="../img/slider/arr-next.png" alt="" class="arr-next">'],
		autoplay: true,
		autoplayHoverPause: true,
		rewind: false,
		items:1,
		smartSpeed: 500,
		autoplaySpeed: 500,
		navSpeed: 500,
		dotsSpeed: 500,
		dragEndSpeed: 500
	});

	// Clients slider
	var owl = $('.owl-two');
	owl.owlCarousel({
		loop:true,
		margin:0,
		navSpeed:500,
		nav:true,
		navText : ['<img src="../img/clients/arr-prev.png" alt="" class="arr-prev">','<img src="../img/clients/arr-next.png" alt="" class="arr-next">'],
		autoplay: true,
		autoplayHoverPause: true,
		rewind: false,
		smartSpeed: 500,
		autoplaySpeed: 500,
		navSpeed: 500,
		dotsSpeed: 500,
		dragEndSpeed: 500,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				slideBy:1
			},
			600:{
				items:3,
				nav:false,
				slideBy:3
			},
			1000:{
				items:5,
				nav:true,
				slideBy: 5
			}
		}
	});

	// Menu button animation
	$(".sandwich, .mnu-item").click(function() {
		if ($(".mnu-line, .mnu-item, .mnu-mob").hasClass("active") && $('.sandwich').is(':visible')) {
			$(".mnu-line, .mnu-item, .mnu-mob").fadeOut(600).toggleClass("active");
			$(".sandwich").toggleClass("active");
		} else if (!$(".mnu-line, .mnu-item, .mnu-mob").hasClass("active") && $('.sandwich').is(':visible')) {
			$(".mnu-line, .mnu-item, .mnu-mob").fadeIn(600).toggleClass("active");
			$(".sandwich").toggleClass("active");
		}
	});

	// Solutions animation
	$(".solutions-item-btn-cont, .arr-up>a").on('click', function (e) {
		var href = $(this).attr('href');
		var expand = "#solution-0";
		for (var i = $(".solutions-expand").length; i >= 0; i--) {
			expand = "#solution-"+i;
			if ($(expand).hasClass("active")) { 
				expand = expand;
				break;
			} else {
				expand = "#solution-0";
			}       
		}
		if (expand != "#solution-0" && expand == href) { // close if the only open
			$(href).slideUp( "slow", function() {
				$(this).removeClass("active");
			});
			console.log(href + " 1");
		} else if (expand == "#solution-0") { // add if there are no open
			$(href).slideDown( "slow", function() {
				$(this).addClass("active");
			});
			console.log(href + " 2");
		} else if (expand != "#solution-0" && expand != href) {
			$(href).toggleClass("active");
			$(expand).removeClass("active");
			$(expand).slideUp("slow", function () {
				$(href).slideToggle("slow");
				var pos = $(href).offset().top - $(".mnu").outerHeight(true);
				$('body, html').animate({scrollTop: pos});
			});
			console.log(href + " 3");
		} else { // just close
			$(expand).removeClass("active");
			$(expand).slideUp("slow");
			console.log(href + " 4");
		}
	});
});