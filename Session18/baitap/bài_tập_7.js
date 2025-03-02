let number1 = +prompt("Hay nhập số thứ nhất");
let math = prompt("Hãy nhập dấu +, -, *, /");
let number2 = +prompt("Hay nhập số thứ hai");
let sum = number1 + number2;
let minus = number1 - number2;
let multi = number1 * number2;
let slash = number1 / number2;
if (math === "+") {
    alert("Kết quả của phép công a + b là " + sum);
} else if (math === "-") {
    alert("Kết quả của phép trừ a - b là " + minus);
} else if (math === "*") {
    alert("Kết quả của phép trừ a * b là " + multi);
} else if (math === "/") {
    if (number2 !== 0) {
        alert("Kết quả của phép chia a / b là " + slash);
    } else {
        alert("Không thể chia cho 0");
    }
}