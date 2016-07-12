$(document).ready(function () {
     // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            disableDefaultUI: true,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(38.707202,  -77.008286), // Fort Washington
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#dbdbdb"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#575757"},{"lightness":0}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":17},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#5d5d5d"},{"lightness":0}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color": "#000000"},{"lightness":0},{"weight":0.5}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(38.708189, -77.023220),
            map: map,
            icon: 'images/map-marker.png'
        });
    }
    $('.header-nav a').click(function(){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        $('.header-nav-container').removeClass('mobile');
        return false;
    });
    
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 200){
            $('.up-to-top').fadeIn();
        } 
        else{
            $('.up-to-top').fadeOut();
        } 
    });
    
    $('.up-to-top').click(function(){ 
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    $(".slider .inner").owlCarousel({
        singleItem : true,
        transitionStyle : "fade",
        mouseDrag: false,
        pagination: false
    });

    var owl = $(".owl-carousel").data('owlCarousel');
    
    $('.next-slide').click(function(){
        console.log('click');
        owl.next();
    }); 
    $('.prev-slide').click(function(){
        console.log('click');
        owl.prev();
    });
    $('.toggle-menu').click(function(){
        $('.header-nav-container').toggleClass('mobile');
    });

});