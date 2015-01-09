	function divAdjust(target, excess) {
		var newmapheight = screen.height - $(excess).height();
		$(target).css( "height", newmapheight );
	}
	
	function loadMap() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(initialize);
		}
	}
	
	
		var directionsDisplay;
		function initialize(position) {
		var map;
		directionsDisplay = new google.maps.DirectionsRenderer();
		var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		var mapOptions = {
			zoom:50,
			center: point
		};
		map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
		directionsDisplay.setMap(map);
		  
		calcRoute(point);
		}

		function calcRoute(point) {
		var directionsService = new google.maps.DirectionsService();
		  var request = {
			  origin:point,
			  destination:"GL502RH",
			  travelMode: google.maps.TravelMode.WALKING
		  };
		  directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
			  directionsDisplay.setDirections(response);
			}
		  });
		}

		//google.maps.event.addDomListener(window, 'load', initialize);
