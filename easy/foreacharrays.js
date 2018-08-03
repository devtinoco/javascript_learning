var langs = ["PHP", "JavaScript", "Java", "Pascal"];

document.write("<h1>Lenguajes de Programación:</h1>");
document.write("<ul>");

langs.forEach( function(valor, index, array){
    document.write("<li>"+valor+"</li>");
});
document.write("</ul>");

//recorrer con for in

for(let langs in lenguajes){
    document.write("<li>"+langs[lenguaje]+"</li>");

}

