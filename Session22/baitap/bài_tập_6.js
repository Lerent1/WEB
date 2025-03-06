let array = [8, 8, 7, 3, 8, 3, 4, 6, 4];
let number = +prompt("Hãy nhập một số bất kì");
let count = 0;
for (let score of array) {
    if (number == score) {
        count++;
    }
}
alert("Số " + number + " xuất hiện " + count + " lần");