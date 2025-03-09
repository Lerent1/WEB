let n = +prompt("Hãy nhập số phần tử");
let arr = [];
for (let i = 0; i < n; i++) {
    let num = prompt("Hãy nhập phần tử thứ " + i + " ");
    arr.push(num);
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}
console.log(arr);
console.log(count);