let number = +prompt("Hãy nhập một số bất kỳ");
if (number > 0 && Number.isInteger(number)) {
    for (let i = 0; i <= number; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}