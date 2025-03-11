function findsum(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return num1 + num2;
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
console.log(`Tổng của 2 số là ${findsum(16, 7)}`);
