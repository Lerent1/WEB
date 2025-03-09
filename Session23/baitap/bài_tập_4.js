let n = +prompt("Nhập số lượng phần tử trong mảng ");
let arr = [];
for (let i = 0; i < n; i++) {
    let value = prompt("Nhập phần tử thứ " + i + "");
    arr.push(value);
}
let number = [];
for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    if (!isNaN(num)) {
        number.push(num);
    }
}
if (number.length > 0) {
    console.log(number.join(" "));
} else {
    console.log("Không có ký tự nào là số");
}
