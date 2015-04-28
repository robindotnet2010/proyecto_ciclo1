/* We are going to start writing our custom javascript here */

$(document).ready(function(){

    var banner = document.getElementById("banner");
    
    var i = 1;
    window.setInterval(function(){
	//i = (i=4) ? 1 : i;
	console.log("img/banner"+ i +".jpg");
	banner.style.backgroundImage = "url(img/banner"+ i +"c.jpg)";
	i++;
	i = (i==4) ? 1 : i;
    }, 5000);
    
 });





