


var button=document.getElementById('makeRequestButton');
button.addEventListener('click',callApi,false);



function callApi()
{
	var url=document.getElementById('url_Input').value;
    var method=document.getElementById('method').value;
	//alert(url);
	//alert(method);
var xmlhttp=new XMLHttpRequest();


xmlhttp.onreadystatechange = function() {
	 if (xmlhttp.readyState === 4 )
    var response=xmlhttp.responseText;
  var display=document.getElementById('displayResult');
  display.innerHTML= response;
  //  alert(response);
	
	} 

xmlhttp.open("GET","https://api.github.com/legacy/user/search/:user",true);
xmlhttp.send();

	
   



}


