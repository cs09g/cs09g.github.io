var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;

var mainImage = $(".image.main");

updateImageUpToDevice(deviceWidth, deviceHeight);

function updateImageUpToDevice(deviceWidth, deviceHeight) {
	if (deviceHeight > deviceWidth) {
		mainImage.attr("src", "static/image/main2.jpg");
		mainImage.css("width", deviceWidth - 10);
	} else {
		mainImage.attr("src", "");
	}
}

$(window).resize(function() {
	updateImageUpToDevice(window.innerWidth, window.innerHeight);
});

$("#toForms").click(function() {
	location.href = "https://goo.gl/forms/b6vIxOO3n3SdDQvr1";
});

$("#toMap").click(function() {
	location.href = "map/";
});

var lines = $(".line");

for (var i = 0, len = lines.length; i < len; i++) {
	if (i % 2 == 0) {
		$(lines[i]).css("color", "#225378");
	} else {
		$(lines[i]).css("color", "#3176CC");
	}
}