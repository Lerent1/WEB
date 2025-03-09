let n = +prompt("Nhập số lượng phần tử trong mảng ");
let arr = [];
if (n < 0) {
    alert("Phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        let value = prompt("Nhập phần tử thứ " + i + "");
        arr.push(value);
    }
}
let number = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (!isNaN(num)) {
        number.push(num);
        sum += num;
    }
}
if (number.length > 0) {
    console.log(sum);
} else {
    console.log("Không có ký tự nào là số");
}
