let n = +prompt("Nhập số lượng phần tử trong mảng ");
let arr = [];
if (n < 2) {
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        let value = Number(prompt("Nhập phần tử thứ " + i + ""));
        arr.push(value);
    }
}
let max1;
let max2;
if (arr[1] < arr[0]) {
    max1 = arr[0];
    max2 = arr[1];
} else {
    max1 = arr[1];
    max2 = arr[0];
}
for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] < max1) {
        max2 = arr[i];
    }
}
console.log(arr);
console.log(max2);
