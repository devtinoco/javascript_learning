//Parametros rest y spread

function listado(l1, l2, ...el_resto){
    console.log(l1);
    console.log(l2);
    

}
listado("Hola", "xD", "no", "se");
//output de eso: saldrían no y se en un array ordenados de 0 a...
//de esa manera podemos sacar un numero indefinido de parámetros en una sola linea sin saber cuantos parametros van a llegar


