let number = +prompt("Hãy nhập một số nguyên");
let count = 0;
for (let i = 2; count < number; i++) {
    let first = 0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            first = 1;
            break;
        }
    }
    if (first === 0) {
        console.log(i);
        count++;
    }
}