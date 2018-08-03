/* Pida 6 numeros por pantalla y los meta en un array.
   Muestra el array entero en el body de la página y en la consola
   Ha de salir ordenado y mostrarlo 
   Hay que invertir su orden y mostrarlo
   Mostrar cuantos elementos tiene el array
   Hay que hacer una búsqueda de un valor introducido por el usuario y que nos diga si esá y su índice.
   */
var nums = []

for(var i = 0; i <= 5; i++){
   nums.push(parseInt(prompt("Introduce un numero", 0)));

}
console.log(nums);
document.write("<h1>Contenido del Array</h1>");
numeros.forEach(num, index => {
    document.write("<strong>"+num+"</strong>");
    
});