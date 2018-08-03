//CHECK IF LOCALSTORAGE IS AVALIABLE

if (typeof(Storage) !== 'undefined') {
  console.log("Localstorage está disponible");
} else {
  console.log("Localstorage no está disponible");
}



localStorage.setItem("saludo", "Hola buenos días"); //store an element in localStorage

/* Get item of localStorage */
var elemento = localStorage.getItem("saludo");
console.log(elemento);

//Guardar objetos

var user {
  nombre: "Antonio",
  email: "antonio@antonio.es",
}
localStorage.setItem("usuario", JSON.stringify(user));

//Recuperar objetos

var userjs = JSON.parse(localStorage.getItem(usuario));
console.log(userjs);

//Eliminar objetos

localStorage.removeItem("usuario");
