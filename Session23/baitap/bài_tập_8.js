let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
if (n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    alert("Không phải dãy số fibonacci");
} else {
    for (let i = 0; i < n; i++) {
        let value = prompt("Nhập phần tử thứ " + i + "");
        arr.push(value);
    }
}
let isFibonacci = true;
if (n < 3) {
    isFibonacci = false;
} else {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
        }
    }
}
if (isFibonacci) {
    console.log("Là dãy Fibonacci");
} else {
    console.log("Không phải là dãy Fibonacci");
}