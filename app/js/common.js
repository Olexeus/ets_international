
$(document).ready(function (){
	// scrollto id
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
			if ($id.length === 0) {
					return;
			}
			// top position relative to the document
			var pos = $id.offset().top - $(".mnu").outerHeight(true);
			// animated top scrolling
			$('body, html').animate({scrollTop: pos});
		}

		
	});

	// Declare Carousel jquery object
	var owl = $('.owl-one');

	// Carousel initialization
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


	// add animate.css class(es) to the elements to be animated
	function setAnimation ( _elem, _InOut ) {
		// Store all animationend event name in a string.
		// cf animate.css documentation
		var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		_elem.each ( function () {
			var $elem = $(this);
			var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

			$elem.addClass($animationType).one(animationEndEvent, function () {
				$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
			});
		});
	}

// Fired before current slide change
owl.on('change.owl.carousel', function(event) {
	var $currentItem = $('.owl-item', owl).eq(event.item.index);
	var $elemsToanim = $currentItem.find("[data-animation-out]");
	setAnimation ($elemsToanim, 'out');
});

// Fired after current slide has been changed
var round = 0;
owl.on('changed.owl.carousel', function(event) {

	var $currentItem = $('.owl-item', owl).eq(event.item.index);
	var $elemsToanim = $currentItem.find("[data-animation-in]");
	
	setAnimation ($elemsToanim, 'in');
})

/*  owl.on('translated.owl.carousel', function(event) {
		console.log (event.item.index, event.page.count);
		
			if (event.item.index == (event.page.count - 1))  {
				if (round < 1) {
					round++
					console.log (round);
				} else {
					owl.trigger('stop.owl.autoplay');
					var owlData = owl.data('owl.carousel');
					owlData.settings.autoplay = false; //don't know if both are necessary
					owlData.options.autoplay = false;
					owl.trigger('refresh.owl.carousel');
				}
			}
		});*/

	// Button animation
	$(".sandwich, .mnu-item").click(function() {
		if ($(".mnu-line, .mnu-item, .mnu-mob").hasClass("active") && $('.sandwich').is(':visible')) {
			$(".mnu-line, .mnu-item, .mnu-mob").fadeOut(600).toggleClass("active");
			$(".sandwich").toggleClass("active");
		} else if (!$(".mnu-line, .mnu-item, .mnu-mob").hasClass("active") && $('.sandwich').is(':visible')) {
			$(".mnu-line, .mnu-item, .mnu-mob").fadeIn(600).toggleClass("active");
			$(".sandwich").toggleClass("active");
		}
	});

	$(".solutions-item-btn-cont, .arr-up>a").on('click', function (e) {
		var href = $(this).attr('href');
		var hidden = false;
		for (var i = $(".solutions-expand").length; i >= 0; i--) {
			expand = "#solution-"+i;
			if ($(expand).hasClass("active") && expand == href) { // close if the only open
				$(href).slideUp( "slow", function() {
					$(this).removeClass("active");
					var pos = $("#solutions").offset().top - $(".mnu").outerHeight(true);
					$('body, html').animate({scrollTop: pos});
				});
				hidden = true;
				console.log(href + " " + 1 + " i = " + i);
			} else if (i == 0 && !$(href).hasClass("active") && hidden == false) { // add if there are no open
				$(href).slideDown( "slow", function() {
					$(this).addClass("active");
				});
				console.log(href + " " + 2 + " i = " + i);
			} // !$("#solution-3").hasClass("active")
			else if ($(expand).hasClass("active") && !$(href).hasClass("active")) {
				$(href).toggleClass("active");
				$(expand).removeClass("active");
				$(expand).slideUp("slow", function () {
					$(href).slideToggle( "slow");
					var pos = $(href).offset().top - $(".mnu").outerHeight(true);
					$('body, html').animate({scrollTop: pos});
				});
				console.log(href + " " + 3 + " i = " + i);
			} else { // just close
				$(expand).removeClass("active");
				$(expand).slideUp("slow");
				console.log(href + " " + 4);
			}			
		}
		// href = href.replace('#solution-', '');
	});
});