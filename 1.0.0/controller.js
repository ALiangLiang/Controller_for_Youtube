chrome.extension.sendRequest({regist:true}, function() {
	console.log("Registed");
});
chrome.extension.onRequest.addListener(function(get, sender, sendResponse) {
	if(get.control2) {
		var loc = document.querySelector("#movie_player > div.html5-video-controls > div.html5-player-chrome > div.ytp-button");
		loc.click();
		sendResponse();
	}
});