let number = +prompt("Hãy nhập số nguyên bất kỳ");
if (number > 0 && Number.isInteger(number)) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    alert("Tổng của tất cả các số từ 1 đến số của bạn là " + sum);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}