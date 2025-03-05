let number = +prompt("Hãy hập một số nguyên bất kỳ");
let count = 0;
for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("" + number + " là số nguyên tố");
} else {
    console.log("" + number + " không phải là số nguyên tố");
}