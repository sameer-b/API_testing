//get the button and attach the event. Because inline event handlers aren't cool.
var button=document.getElementById('makeRequestButton');
button.addEventListener('click',callApi,false);
function callApi()
{  	//get the values from the input
	var url=document.getElementById('url_Input').value;
    var method=document.getElementById('method').value;
    //create XMLHttpRequest object
    var xmlhttp=new XMLHttpRequest();

    //display information when the state changes
	xmlhttp.onreadystatechange = function() {
	 if (xmlhttp.readyState === 4 )
	 	//get the response and inject it into the html
    	var response=xmlhttp.responseText;
  		var display=document.getElementById('displayResult');
  		display.innerHTML= response;
} 
   //alas! open and send!
	xmlhttp.open(method,url,true);
	xmlhttp.send();
}


