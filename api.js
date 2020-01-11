alert("Calling API");
 fetch("https://dummy.restapiexample.com/api/v1/employees")
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
		alert(JSON.stringify(data));
		var save = {};
		save["apiData"]=data; 
		chrome.storage.sync.set(save, function() {
      			// console.log('The color is green.');
    		});
		// document.getElementById("storage_info").innerHTML = data;
	});
