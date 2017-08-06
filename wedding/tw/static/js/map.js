var map = $("#map");

var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;

map.css("width", deviceWidth);
map.css("height", deviceHeight);


function initMap() {
	$(window).load(function() {
		var hall = {lat: 24.022910, lng: 120.554900};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: hall,
			gestureHandling: "cooperative"
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
	});
}