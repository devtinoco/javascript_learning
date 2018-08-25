$(document).ready(function(){
//evento mouseover y mouseout
// mouseover y mouseout == hover

var caja = $("#caja");
    function cambiaRojo(){
        caja.css("background", "red");
    }
    function cambiaVerde(){
        caja.css("background", "green");
    }
//hover
    caja.hover(cambiaRojo, cambiaVerde);
//Click y doble click
caja.click(function(){
    $(this).css("background", "blue")
            .css("color", "white");
});
caja.dblclick(function(){
    $(this).css("background", "purple");
});
});