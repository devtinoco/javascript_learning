//funciones anonimas
//Funcion que no tiene nombre y se puede guardar dentro de una variable

var movie = function(name, released){
    console.log("La pelicula se llama: "+name);
    console.log("La pelicula fué lanzada el día: "+released);
}

//para llamar movie("name", "today");

//callbacks --> funcion que se le pasa como parametro a otra funcion y esa propia funcion ejecuta una funcion anonima dentro de ella

function sumame(n1, n2){
    var sumar = n1 + n2; 

    return sumar;
}

console.log(sumame(4,5));

