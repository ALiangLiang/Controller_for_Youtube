var a = document.querySelector("#movie_player");


var ytPlayer = document.querySelector("#movie_player > div.html5-video-container > video");
if(ytPlayer) {
	console.log(ytPlayer);
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
			else 
				ytPlayer.volume = 1;
			var a = JSON.parse(localStorage["yt-player-volume"]);
			var b = JSON.parse(JSON.parse(localStorage["yt-player-volume"]).data);
			b.volume = ytPlayer.volume * 100;
			a.data = JSON.stringify(b);
			localStorage["yt-player-volume"] = JSON.stringify(a);
			document.querySelector("#movie_player > div.html5-video-controls > div.html5-player-chrome > span > div.ytp-volume-control > div.ytp-volume-panel > div > div").style.left = document.querySelector("#movie_player > div.html5-video-container > video").volume * 50 + "px";
		} else if(get.keyCode === 40) {
			if(ytPlayer.volume >= 0.05) 
				ytPlayer.volume -= 0.05;
			else 
				ytPlayer.volume = 0;
			var a = JSON.parse(localStorage["yt-player-volume"]);
			var b = JSON.parse(a.data);
			b.volume = ytPlayer.volume * 100;
			a.data = JSON.stringify(b);
			localStorage["yt-player-volume"] = JSON.stringify(a);
			document.querySelector("#movie_player > div.html5-video-controls > div.html5-player-chrome > span > div.ytp-volume-control > div.ytp-volume-panel > div > div").style.left = document.querySelector("#movie_player > div.html5-video-container > video").volume * 50 + "px";
		} else if(get.keyCode === 77) {
			ytPlayer.muted = !ytPlayer.muted;
			var a = JSON.parse(localStorage["yt-player-volume"]);
			var b = JSON.parse(a.data);
			b.muted = ytPlayer.muted;
			a.data = JSON.stringify(b);
			localStorage["yt-player-volume"] = JSON.stringify(a);
		} else if(get.keyCode === 82) {
			ytPlayer.loop = !ytPlayer.loop;
		}
	});
}
