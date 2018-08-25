var num = parseInt(prompt("Introduce un nunmero", 0));
while(isNaN(num)){
    var num = parseInt(prompt("Introduce un nunmero", 0)); 
}
if(num % 2 == 0){
    alert("Es par");
}else{
    alert("Es impar");
}

