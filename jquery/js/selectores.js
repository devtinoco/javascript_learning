//Selector de ID
//MANERA EFICIENTE
$(document).ready(function(){
 //Selector de ID

    let rojo = $("#rojo");
    let amarillo = $("#amarillo");
    let verde = $("#verde");

    rojo.css("background", "red")
        .css("color", "white");
    amarillo.css("background", "yellow")
            .css("color", "green");
    verde.css("background", "green")
         .css("color", "white");

 //SELECTORES DE CLASE

    let clase = $(".clase");
    console.log(clase);
    // clase.css("border", "5px dashed black");
    let sinborde = $(".sinborde");
    sinborde.click(function(){
        $(this).addClass("clase")

// SELECTORES DE ETIQUETA
 let parrafos = $('p');
 parrafos.click(function(){
     $(this).removeClass("clase");
 });
    });

});



// $ siempre se refiere a jquery, lo de despues del $ entre parentesis es el selector, después con el . se pone un evento
// que tiene una función de callback.
