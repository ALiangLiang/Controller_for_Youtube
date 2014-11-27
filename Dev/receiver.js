document.onkeydown = function(e) {
	if(e.altKey) {
		if(e.keyCode != 18)
			chrome.extension.sendRequest({keyCode:e.keyCode}, function() {
					console.log("startOrStop");
			});
	}
}