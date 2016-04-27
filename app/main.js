


$(document).ready(function(){
	

	var devicesJson;  
	var controller;
	var xhr = new XMLHttpRequest();
	xhr.open('GET','devices.json', true);
	xhr.send();
    
	xhr.onreadystatechange = function() { // (3)
  		if (xhr.readyState != 4) return;
		if (xhr.status != 200) {
		  	alert(xhr.status + ': ' + xhr.statusText);
		} else {
		    devicesJson = xhr.responseText;
			controller = new Controller(JSON.parse(devicesJson));
		}
  	};
});