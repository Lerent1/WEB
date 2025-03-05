let number = +prompt("Hãy nhập một số nguyên bất kì");
for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}