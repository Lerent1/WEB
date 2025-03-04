let number1 = +prompt("Nhập số thứ nhất:");
let number2 = +prompt("Nhập số thứ hai:");
if ((!number1 && number1 !== 0) || (!number2 && number2 !== 0) || !Number.isInteger(number2)) {
    alert("Không hợp lệ");
} else {
    let result = 1;
    for (let i = 0; i < Math.abs(number2); i++) {
        result *= number1;
    }
    if (number2 < 0) {
        result = 1 / result;
    }
    alert("Kết quả: " + result);
}