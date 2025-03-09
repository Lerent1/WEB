let arr = [];
for (let i = 0; i < 10; i++) {
    let add = +prompt("Hãy nhập phần tử số " + i + " ")
    arr.unshift(add);
}
console.log(arr);
let max = arr[0];
let list = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        list = i;
    }
}
console.log("Số lớn nhất là ", max);
console.log("Vị trí: ", list);