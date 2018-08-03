// funciones en javascript
// grupo de ordenes agrupados en un grupo
// por ej conduces coche func = acelerar {serie de instrucciones}
//
function calculadora(a,b){
    //funcion
    console.log("Suma: "+ (a+b));
    console.log("Resta: "+ (a-b));
    console.log("Multiplicacion: "+ (a*b));
    console.log("Division:  "+ (a/b));

    return "Funcion ejecutada";
}
calculadora(1,2);
//cool trick, seguido de numeros (/*...) un numero.
for(var i = 1; i <=10; i++){
    console.log(i);
    calculadora(i, 8);
}

//funcion con parametros opcionales

function calculadora(a,b, showConsole = false){
    //funcion
    if(showConsole == false){
    document.write("Suma: "+ (a+b));
    document.write("Resta: "+ (a-b));
    document.write("Multiplicacion: "+ (a*b));
    document.write("Division:  "+ (a/b));
    }else{

    
    console.log("Suma: "+ (a+b));
    console.log("Resta: "+ (a-b));
    console.log("Multiplicacion: "+ (a*b));
    console.log("Division:  "+ (a/b));
}

    return "Funcion ejecutada";
}
calculadora(1,2, true);

//funciones dentro de otras
function mostrarConsola(a,b){
    console.log("Suma: "+ (a+b));
    console.log("Resta: "+ (a-b));
    console.log("Multiplicacion: "+ (a*b));
    console.log("Division:  "+ (a/b)); 
}
function mostrarDocumentWrite(a,b){
    document.write("Suma: "+ (a+b));
    document.write("Resta: "+ (a-b));
    document.write("Multiplicacion: "+ (a*b));
    document.write("Division:  "+ (a/b));
}
function calculadora(a,b,showConsole = false){
    if(showConsole == false){
    mostrarDocumentWrite(a,b);
    }else{
   mostrarConsola(a.b);
    }
}

calculadora(1,2, true);
