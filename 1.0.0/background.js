var Y = [];
chrome.extension.onRequest.addListener(function(get, sender, sendResponse) {
	if(get.control) {
		for(var i in Y) {
			chrome.tabs.sendRequest(Y[i], {control2:true}, function() {
				console.log("cmd:control");
			});
		}
		sendResponse();
	} else if(get.regist) {
		Y.push(sender.tab.id);
	}
})