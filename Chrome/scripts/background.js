'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
	console.log('previousVersion', details.previousVersion);
});

var CrossBrow = {
	notification: function(options) {
		chrome.notifications.create("", {
			type: "basic",
			title: options.title,
			message: options.description,
			iconUrl: "../images/icon-128.png"
		}, function(id) {});
	}
}