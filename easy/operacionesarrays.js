var categorias = ["Acción", "Terror", "Ciencia-Ficcion"];
var peliculas = ["La Jungla de Cristal", "REC", "Back to the future"];

var cine = [categorias, peliculas];

//peliculas.push("Batman");

var elemento = "";

do{
    elemento = prompt("Introduce una pelicula:");
    peliculas.push(elemento);

}while(elemento != "ACABAR");
peliculas.pop();//quitar ultimo elemento de un array

//eliminar elemento completo de un array
var index = peliculas.indexOf('Gran Torino');
console.log(indice);
if(indice > -1){
    peliculas.splice(indice, 1);
}

//convertir array a texto:
var string_peliculas = peliculas.join();


console.log(string_peliculas);

//texto a array
var cadena = "Uno, dos, tres, cuatro";
var array_cadena = cadena.split(", ");


//ordenar un array
var peliculas = ["La Jungla de Cristal", "REC", "Back to the future"];
peliculas.reverse(); //orden inverso
peliculas.sort(); //orden alfabetico/numericamente


