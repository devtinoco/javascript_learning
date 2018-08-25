// JSON
var showPeliculas = document.querySelector('#peliculas');

var pelicula = {
  title: 'Batman vs Superman',
  year: 2017,
  pais: 'USA'
};

var pelicula2 = {
  title: 'La ola',
  year: undefined,
  pais: 'Germany'
}

var peliculas = [
  pelicula, pelicula2
]
var i;
for(i in peliculas){
  var p = document.createElement("p");
  p.append(peliculas[i].title);
  showPeliculas.append(p);
  console.log(p);
}
