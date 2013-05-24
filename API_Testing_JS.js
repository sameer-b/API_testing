var button=document.getElementById('makeRequestButton');
button.addEventListener('click',callApi,false);
function callApi()
{
	var url=document.getElementById('url_Input').value;
    var method=document.getElementById('method').value;
    var xmlhttp=new XMLHttpRequest();


	xmlhttp.onreadystatechange = function() {
	 if (xmlhttp.readyState === 4 )
    	var response=xmlhttp.responseText;
  		var display=document.getElementById('displayResult');
  		display.innerHTML= response;
} 

	xmlhttp.open(method,url,true);
	xmlhttp.send();
}


