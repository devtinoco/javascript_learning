/*
    1.Crear un formulario con 3 campos: Nombre, apellidos y edad.
    2.Poner un boton para enviar un formulario, envento submit.
    3.Mostrar los datos en pantalla
*/
window.addEventListener('load', function() {
  console.log("DOM Cargado");
  var form = document.querySelector("#form");
  var dashed = document.querySelector(".dashed");
  dashed.style.display = "none";
  form.addEventListener('submit', function() {
    console.log("Submitted");
    var mNombre = document.querySelector("#mostrarNombre span");
    var mApellidos = document.querySelector("#mostrarApellidos span");
    var mEdad = document.querySelector("#mostrarEdad span");
    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad")).value;
    dashed.style.display = "block";
    console.log(nombre, apellidos, edad);

    mNombre.innerHTML = nombre;
    mApellidos.innerHTML = apellidos;
    mEdad.innerHTML = edad;

    // VALIDACION DE FORMULARIO
    if (nombre.trim() === null || nombre.trim().length === 0) {
      alert("El nombre no es válido");
      return false;
    }
    if (apellidos.trim() === null || apellidos.trim().length === 0) {
      alert("Los apellidos no son válido");
      return false;
    }
    if (edad === null || nombre =< 0 || isNaN(edad)) {
      alert("La edad no es válida"); //trim no se puede usar en campos numericos
      return false;
    }

});
});
