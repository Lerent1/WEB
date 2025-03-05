let sum = 0;
for (let i = 1; i <= 5; i++) {
    let number = +prompt("Hãy nhập số bất kì");
    if (number > 0) {
        if (number % 2 !== 0) {
            sum += number;
        }
    } else {
        alert("Không thỏa mãn");
    }
}
console.log("Tổng của các số lẻ là ", sum);

