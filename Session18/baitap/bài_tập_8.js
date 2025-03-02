let number1 = +prompt("Hãy nhập cạnh thứ nhất");
let number2 = +prompt("Hãy nhập cạnh thứ hai");
let number3 = +prompt("Hãy nhập cạnh thứ ba");
if (number1 <= 0 || number2 <= 0 || number3 <= 0) {
    alert("Hãy nhập lại");
} else {
    if (number2 + number1 > number3 && number2 + number3 > number1 && number1 + number3 > number2) {
        if (number1 == number2 && number2 == number3) {
            alert("Đây là tam giác đều");
        } else if (number1 == number2 || number2 == number3 || number1 == number3) {
            alert("Đây là tam giác cân");
        } else if (number1 * number1 + number2 * number2 == number3 * number3) {
            alert("Đây là tam giác vuông");
        }
    } else {
        alert("Đây là tam giác bình thường");
    }
}