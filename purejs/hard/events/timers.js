window.addEventListener('load', function() {
  var stop = document.querySelector("#stop");
  var time = setInterval(function(){
    console.log("Set interval bro.");
  }, 3000); //se ejecuta en loop
  var time = setTimeout(function () {
    console.log("Set timeout");
  }, 3000)
});
