
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.msg == "clean") {
			var foundin = $('*:contains("JNU")');
			for (var i = foundin.length - 1; i >= 0; i--) {
				$(foundin[i]).parents("._4ikz").hide()
			};
			console.log("clean complete")
		};
});