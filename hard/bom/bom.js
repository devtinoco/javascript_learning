//BOM - BROWSER OBJECT MODEL

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(screen.width);
console.log(screen.height);

console.log(window.location);


function redirect(url) {
  window.location.href = url;
}

function openTab(url) {
  window.open(url);
}
function openWindow(url) {
  window.open(url, "", "width=400,height=300");

}
