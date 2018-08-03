var boton = document.querySelector("#boton");

function cambiarColor() {
  boton.style.background="red";
}

boton.addEventListener('mouseover', function(){
  cambiarColor();
});

var input = document.querySelector("#inputbro");

input.addEventListener('focus', function(){
  console.log("Estas dentro del input");
});

input.addEventListener('blur', function() {
  console.log("Estas fuera del input"); //cuando el mouse está fuera de algo.
});

input.addEventListener('keydown', function (event) {
  console.log("Presionando tecla ", String.fromCharCode(event.keyCode)); //justo cuando la pulsas y la mantienes
});

input.addEventListener('keypress', function (event) {
  console.log("Has presionado tecla ", String.fromCharCode(event.keyCode)); //justo cuando la pulsas y la sueltas
});

imput.addEventListener('keypress', function (event){
  console.log("Has presionado tecla ", String.fromCharCode(event.keyCode));
});


window.addEventListener('load', function(){
 //meter todo ese codigo dentro de aqui si no queremos tener que cargar el script al final del html
});




