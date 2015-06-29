/* We are going to start writing our custom javascript here */
/*
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
    
 });*/

function enviar() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var edad = document.getElementById("edad").value;

	if (nombre == "") {
		alert("Debes escribir el Nombre");
		return;
	}
	if (apellido == "") {
		alert("Debes escribir el Apellido");
		return;
	}
	if (edad == "") {
		alert("Debes escribir la Edad");
		return;
	}
	if (edad != parseInt(edad)) {
		alert("Ingrese un numero en Edad");
		return;
	}
}




