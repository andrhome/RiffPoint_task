$(document).ready(function() {
	//Show/hide navigation
	$('.burger-btn').click(function() {
		$(this).toggleClass('active');
		$('#nav').slideToggle(300);
	});

	//Owl carousel init
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:true,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    smartSpeed: 700,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	})

	//Smooth transition on the #nav links
	$('#nav a').click(function(){
        var self = $(this);
        $('html, body').stop().animate({
            scrollTop: $(self.attr('href')).offset().top
        }, 700);

        $('#nav').slideUp(100);
        $('.burger-btn').removeClass('active');

        return false;
    });

	//Init function for Google map
	google.maps.event.addDomListener(window, 'load', initMap);
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 38.7086052, lng: -77.0239381},
			zoom: 14,
			scrollwheel: false,
			styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],
			disableDefaultUI: true,
			language: 'en-UK'
		});

		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(38.7086052, -77.0239381),
		  map: map,
		  icon: 'images/map-icon.png'
		});
	};

	//Go to top button
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.go-to-top').fadeIn(300);
		} else{
			$('.go-to-top').fadeOut(300);
		};
	});
	$('.go-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
	});
});