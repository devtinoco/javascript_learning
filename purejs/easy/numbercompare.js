var num1 = parseInt(prompt('Type the first number', 0));
var num2 = parseInt(prompt('Type the second number', 0));

//try again if nums are wrong

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
  alert("Type correct numbers.")
  num1 = parseInt(prompt('Type the first number', 0));
  num2 = parseInt(prompt('Type the second number', 0));
}

if (num1 == num2) {
  alert("Num1 = Num2");

}else if (num1 > num2) {
  alert("Num1 > Num2");
  alert(num1+" is the smallest number");
  alert(num2+" is the biggest number");
}else if (num1 < num2) {
  alert("Num1 < Num2");
  alert(num2+" is the smallest number");
  alert(num1+" is the biggest number");
}else {
  alert("Type correct numbers.");
}
