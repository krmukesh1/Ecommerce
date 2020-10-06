(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


jQuery(document).ready(function(){

	jQuery( "#sidebar" ).mouseover(function() {
	  jQuery(this).removeClass("active");
	});

	jQuery("#sidebar").mouseout(function(){
	  jQuery(this).addClass("active");
	});

})