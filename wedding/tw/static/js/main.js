var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;

var mainImage = $(".image.main");

updateImageUpToDevice(deviceWidth, deviceHeight);

function updateImageUpToDevice(deviceWidth, deviceHeight) {
	if (deviceHeight > deviceWidth) {
		mainImage.show();
		mainImage.attr("src", "/wedding/tw/static/image/main2.jpg");
		mainImage.css("width", deviceWidth - 10);
	} else {
		mainImage.hide();
	}
}

$(window).resize(function() {
	updateImageUpToDevice(window.innerWidth, window.innerHeight);
});

$("#toForms").click(function() {
	ga('send', 'event', 'forms', 'Click', 'forms click');
	location.href = "https://goo.gl/forms/b6vIxOO3n3SdDQvr1";
});

$("#toMap").click(function() {
	ga('send', 'event', 'map', 'Click', 'map click');
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
