var formPeliculas = document.getElementById("#formularioP");
formPeliculas.addEventListener('submit', function(){
var input = document.querySelector("#addmovie").value;
if (input.length >= 1) {
  localStorage.setItem(input, input);

}
});

for(var i in localStorage){
  console.log(localStorage[i]);
  if (typeof localStorage[i] == 'string') {
    var movList = document.querySelector("#peliculasList");
    var li = document.createElement("li");
    li.append(localStorage[i]);
    movList.append(li);
  } else {
    console.log(i);
  }

}
