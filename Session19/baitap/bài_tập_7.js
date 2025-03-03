let number1 = +prompt("Hãy nhập số thứ nhất");
let number2 = +prompt("Hãy nhập số thứ hai");
let number3 = +prompt("Hãy nhập số thứ ba");
if (number1 > number2 && number1 > number3) {
    alert("Số lớn nhất trong 3 số là " + number1);
} else if (number2 > number1 && number2 > number3) {
    alert("Số lớn nhất trong 3 số là " + number2);
} else if (number3 > number1 && number3 > number2) {
    alert("Số lớn nhất trong 3 số là " + number3);
} 