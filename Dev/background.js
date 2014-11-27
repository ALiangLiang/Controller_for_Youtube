var Y = [];
chrome.extension.onRequest.addListener(function(get, sender, sendResponse) {
	if(get.keyCode) {
		for(var i in Y) {
			chrome.tabs.sendRequest(Y[i], {keyCode:get.keyCode}, function() {
				console.log("get");
			});
		}
		sendResponse();
	} else if(get.regist) {
		if(Y.indexOf(sender.tab.id) == -1) {
			Y.push(sender.tab.id);
			console.log(Y);
		}
	}
})