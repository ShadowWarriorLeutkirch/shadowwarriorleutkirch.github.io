'use strict';

//Extend background of the welcome text on the first page to the screen bottom for xs devices
/*window.onresize = function() {
	var windowHeight = window.innerHeight;
	var firstPageContentHeight = $('#first-page').innerHeight();
	var welcomeContainerHeight = $('#welcome-container').innerHeight();
	var targetBackgroundHeight = (windowHeight - firstPageContentHeight) / 2 + welcomeContainerHeight;

	var newRule = '#welcome-container:before { height: ' + targetBackgroundHeight + 'px; }';
	var targetSheet = document.styleSheets[1];
	targetSheet.insertRule(newRule, targetSheet.cssRules.length);
};
*/
