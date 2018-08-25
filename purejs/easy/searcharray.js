//busquedas en arrays

var langs = ["Catalán", "Castellano", "Inglés"];

var busqueda = langs.find(function(lenguaje){
    return lenguaje == "Catalán";
}); //SACA EL TEXTO
var busqueda = langs.findIndex(function(lenguaje){
    return lenguaje == "Catalán";
}); //SACA EL INDICE DEL ARRAY

