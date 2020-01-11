	var nymoBtn = document.getElementById('nymo');
 	var ycBtn = document.getElementById('ycombinator');
 	var hrBtn = document.getElementById('hackerrank');
 	var gitBtn = document.getElementById('github');
	
//	var apiBtn = document.getElementById('fetch_storage'); 
 
	nymoBtn.onclick = function() {
    		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      			chrome.tabs.executeScript(
          			tabs[0].id,
          			{code: 'window.open("http://nymo.ai", "_blank");'}
			);
    		});
  	}
 	ycBtn.onclick = function() {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.executeScript(
                                tabs[0].id,
                                {code: 'window.open("http://news.ycombinator.com", "_blank");'}
                        );
                });
        }
 	hrBtn.onclick = function() {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.executeScript(
                                tabs[0].id,
                                {code: 'window.open("http://hackerrank.com", "_blank");'}
                        );
                });
        }
 	gitBtn.onclick = function() {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                        chrome.tabs.executeScript(
                                tabs[0].id,
                                {code: 'window.open("http://github.com", "_blank");'}
                        );
                });
        }

	function triggerApi() {
		alert("Hello, triggering..");
		chrome.tabs.executeScript({file: 'api.js'}); 
	}

	var apiBtn = document.getElementById('fetch_storage').addEventListener('click', triggerApi);
