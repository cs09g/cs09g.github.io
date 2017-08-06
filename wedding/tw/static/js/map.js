var mapWrapper = $("#mapWrapper");
var map = $("#map");
var details = $("#details");

// var deviceWidth = window.innerWidth;
// var deviceHeight = window.innerHeight;

// map.css("width", "100%");
// map.css("height", "100%");
function resizeMap(mapWrapper) {
	map.css("height", mapWrapper.css("height"));
	map.css("width", mapWrapper.css("width"));
}

resizeMap(mapWrapper);
$(window).resize(function() {
	resizeMap(mapWrapper);
});

function initMap() {
	$(window).load(function() {
		var hall = {lat: 24.022910, lng: 120.554900};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: hall,
			gestureHandling: "cooperative",
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			fullscreenControl: false
		});
		var marker = new google.maps.Marker({
			position: hall,
			map: map,
			title: "全國麗園大飯店"
		});
		var contentString = "<div id='content'>全國麗園大飯店</div>";

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			position: hall
		});
		marker.addListener('click', function() {
			infowindow.setMap(map);
		});

		google.maps.event.addDomListener(window, 'resize', function() {
		    map.setCenter(hall);
		});
	});
}