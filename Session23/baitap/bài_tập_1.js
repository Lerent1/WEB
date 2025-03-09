let arr = [];
let max = [];
for (let i = 1; i <= 10; i++) {
    let add = +prompt("Hãy nhập phần tử số " + i + " ")
    arr.unshift(add);
    if (add > 10) {
        max.unshift(add);
    }
}
console.log(arr);
console.log(max);
if (max = []) {
    console.log("Không có số nào lớn hơn 10")
}

