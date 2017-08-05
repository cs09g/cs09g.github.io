var panels = $('.panel');

function updateSectionSizeUpToDevice(deviceWidth, deviceHeight) {
	for (var i = 0, len = panels.length; i < len; i++) {
		panels[i].style.width = deviceWidth + "px";
		panels[i].style.height = deviceHeight + "px";
	}
}

$(window).load(function() {
	var deviceWidth = window.innerWidth;
	var deviceHeight = window.innerHeight;
	
	updateSectionSizeUpToDevice(deviceWidth, deviceHeight);

	$.scrollify({
		section: ".panel"
	});

	var map = $("#map");
	var titleHeight = $(".title.map").css("height").match(/\d+/g);

	map.css("width", deviceWidth - 10);
	map.css("height", deviceHeight - titleHeight - 10);
});

$(window).resize(function() {
	updateSectionSizeUpToDevice(window.innerWidth, window.innerHeight);
});
