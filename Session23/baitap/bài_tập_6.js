let arr = ["", false, 0, 5, 10, "Hello world!"];
let number = [];
for (let num of arr) {
    if (num) {
        number.push(num);
    }
}
console.log(number);
