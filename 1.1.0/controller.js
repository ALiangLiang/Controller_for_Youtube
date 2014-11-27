var ytPlayer = document.querySelector("#movie_player > div.html5-video-container > video");
chrome.extension.sendRequest({regist:true}, function() {
	console.log("Registed");
});
chrome.extension.onRequest.addListener(function(get, sender, sendResponse) {
	if(get.keyCode === 80) {
		if(ytPlayer.paused)
			ytPlayer.play();
		else
			ytPlayer.pause();
		sendResponse();
	} else if(get.keyCode === 38) {
		if(ytPlayer.volume <= 0.95)
			ytPlayer.volume += 0.05;
	} else if(get.keyCode === 40) {
		if(ytPlayer.volume >= 0.05)
			ytPlayer.volume -= 0.05;
	} else if(get.keyCode === 77) {
		ytPlayer.muted = !ytPlayer.muted;
	} else if(get.keyCode === 82) {
		ytPlayer.loop = !ytPlayer.loop;
	}
	sendResponse();
});