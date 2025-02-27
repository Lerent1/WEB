let number1 = prompt("Hay nhập số thứ nhất");
let number2 = prompt("Hay nhập số thứ hai");
let number3 = prompt("Hay nhập số thứ ba");
let delta = (number2 * number2) - 4 * number1 * number3;
let x1 = (-number2 + Math.sqrt(delta)) / (2 * number1);
let x2 = (-number2 - Math.sqrt(delta)) / (2 * number1);
alert("Nghiệm thứ nhất là: " + x1);
alert("Nghiệm thứ hai là: " + x2);