//get the button and attach the event. Because inline event handlers aren't cool.
var button=document.getElementById('makeRequestButton');
button.addEventListener('click',callApi,false);
var statusDisplayDiv=document.getElementById('status');

function showStatus(statusCode)
{
if (statusCode>=100 && statusCode<=200) {
    console.log(statusCode);
    console.log(statusDisplayDiv);
    statusDisplayDiv.innerHTML="Information!";
    statusDisplayDiv.style.backgroundColor='black';
    statusDisplayDiv.style.color='white';
   
  } 
  
if (statusCode>=200 && statusCode<=300) {
    console.log(statusCode);
    console.log(statusDisplayDiv);
    statusDisplayDiv.innerHTML="Success!";
    statusDisplayDiv.style.backgroundColor='#00FF00';
    statusDisplayDiv.style.color="black";
   
  }

  if (statusCode>=300 && statusCode<=400) {
    console.log(statusCode);
    console.log(statusDisplayDiv);
    statusDisplayDiv.innerHTML="Redirection!";
    statusDisplayDiv.style.backgroundColor='yellow';
   
  }
  

    if (statusCode>=400 && statusCode<=500) {
    console.log(statusCode);
    console.log(statusDisplayDiv);
    statusDisplayDiv.innerHTML="Client Error!";
    statusDisplayDiv.style.backgroundColor='red';
   
  }


      if (statusCode>=500 && statusCode<=600) {
    console.log(statusCode);
    console.log(statusDisplayDiv);
    statusDisplayDiv.innerHTML="Server Error!";
    statusDisplayDiv.style.backgroundColor='blue';
   
  }
}





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
      var responseHeader=xmlhttp.getAllResponseHeaders();
  		var display=document.getElementById('displayResult');
      var header=document.getElementById('displayHeader');
  		display.innerHTML= response;
      header.innerHTML= responseHeader;
      showStatus(xmlhttp.status);
     
} 
   //alas! open and send!
	xmlhttp.open(method,url,true);
	xmlhttp.send();

}




