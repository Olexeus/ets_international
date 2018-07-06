
$(document).ready(function (){
  // Declare Carousel jquery object
  var owl = $('.owl-carousel');

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
});