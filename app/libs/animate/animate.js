//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
	$.fn.animated = function(inEffect, outEffect, offsetCust) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
				} else {
					ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
				};
			}, {
				offset: offsetCust
			});
		});
	};
	$.fn.animatedDown = function(inEffect, outEffect, offsetCust) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				ths.addClass(inEffect).css("opacity", "1");
			}, {
				offset: offsetCust
			});
		});
	};
})(jQuery);