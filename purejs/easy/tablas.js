var num = parseInt(prompt("Introduce el numero del que deseas saber la tabla de multiplicar:"));

while(isNaN(num)){
    var num = parseInt(prompt("Introduce el numero del que deseas saber la tabla de multiplicar:"));
}
for(var i = 1; i<=10; i++){
    console.log(num+" por "+i+" es: "+num*i);
}