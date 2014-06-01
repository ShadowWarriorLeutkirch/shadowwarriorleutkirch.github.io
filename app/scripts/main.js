'use strict';

function resizeHandler() {
	var windowHeight = window.innerHeight;
	var contactHeight = $('#third-page-text').innerHeight();

	var targetHeight;

	if (window.innerWidth >= 768)
	{
		targetHeight = windowHeight - 20;
	}
	else
	{
		targetHeight = windowHeight - contactHeight - 20;
	}

	document.getElementById('map').style.height = targetHeight + 'px';
}

window.onresize = function() {
	resizeHandler();
};

resizeHandler();
