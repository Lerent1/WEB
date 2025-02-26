let number1 = +prompt("Hãy nhập số thứ nhất");
let number2 = +prompt("Hãy nhập số thứ hai");
let max = Math.max(number1, number2);
let min = Math.min(number1, number2);
let random = Math.floor(Math.random() * (max - min)) + min;
document.write("Số bất kì trong khoảng bạn vừa nhập là ", random);