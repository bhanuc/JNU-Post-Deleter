var interval;
$(function() {
	$('button').click(function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				msg: "clean"
			}, function(response) {
				console.log(response.farewell);
			});
		});
	});
	$("#autodelete").change(function() {
		if ($("#autodelete").prop('checked')) {
			interval = setInterval(function() {
				var foundin = $('*:contains("JNU")');
				for (var i = foundin.length - 1; i >= 0; i--) {
					$(foundin[i]).parents("._4ikz").hide()
				};
				console.log("clean complete")
			}, 10000);
		} else {
			interval.clear();
			console.log("Cleared");
		}

	});

});