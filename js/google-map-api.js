			if(navigator.geolocation) {
				
				function hasPosition(position) {
					var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
					var universty = new google.maps.LatLng(51.886708, -2.088914),
						
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
					
					var marker = new google.maps.Marker({
						position: universty,
						map: map,
						title: "Park Campus"
					});
				}
				navigator.geolocation.getCurrentPosition(hasPosition);
			}