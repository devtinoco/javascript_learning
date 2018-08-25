//alert
alert("Alert test");

//alertas de confirmacion (muestra un aceptar o cancelar)
confirm("Are you sure?")
  // know user's result
    var resultado = confirm("Are you sure?");
    console.log(resultado); //logs true or false

//input
prompt("Age?", 18); //18 is default here
  //know user's result
    var resultado2 = prompt("Age?", 18);
    console.log(resultado2); // logs resultado2 but as a string
      // parse result as a number
        var resultado3 = promt("Age?", 18),
        console.log(number(resultado3));
