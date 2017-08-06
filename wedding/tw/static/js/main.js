var map = $("#map");
var panels = $(".panel.scrf");
var lastPanel = $(".panel.last");

var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;

updateSectionSizeUpToDevice(deviceWidth, deviceHeight);

var titleHeight = $(".title.map").css("height").match(/\d+/g);
var addressHeight = $(".address").css("height").match(/\d+/g);

map.css("width", deviceWidth - 10);
map.css("height", deviceHeight - titleHeight - addressHeight - 10);

var mainImage = $(".image.main");
mainImage.css("width", deviceWidth - 10);
mainImage.css("height", deviceHeight - 10);



function updateSectionSizeUpToDevice(deviceWidth, deviceHeight) {
	panels.css("width", deviceWidth - 10);
	panels.css("height", deviceHeight - 10);
}

function initMap() {
	$(window).load(function() {
		var hall = {lat: 24.022910, lng: 120.554900};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: hall,
			gestureHandling: "none"
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
		lastPanel.css("height", 20);
	});
}

$(window).resize(function() {
	updateSectionSizeUpToDevice(window.innerWidth, window.innerHeight);
});

