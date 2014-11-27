document.onkeydown = function(e) {
	if(e.keyCode == 80 	&& e.altKey) {
		chrome.extension.sendRequest({control:true}, function() {
			console.log("1");
		});
	}
}