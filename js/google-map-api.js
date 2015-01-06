if(navigator.geolocation) {
	
	function divAdjust(target, excess) {
		var newmapheight = screen.height - $(excess).height();
		$(target).css( "height", newmapheight );
	}
	
	function hasPosition(position) {
		var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
						
		myOptions = {
			zoom: 15,
			center: point,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}, 

		mapDiv = document.getElementById("mapDiv"),
					
		map = new google.maps.Map(mapDiv, myOptions),
			marker = new google.maps.Marker({
				position: point,
				map: map,
				title: "You are here"
			});
		}
		
	navigator.geolocation.getCurrentPosition(hasPosition);
	google.maps.event.addDomListener(window, 'load', initialize);
}