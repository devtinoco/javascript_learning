var num1 = parseInt(prompt("Introduce el numero 1:"));
var num2 = parseInt(prompt("Introduce el numero 2:"));

document.write("<h1> De "+num1+" a "+num2+ "estan estos numeros:</h1>");
for(var i = num1; i <= num2; i++){
     document.write(i+"</br>");
}