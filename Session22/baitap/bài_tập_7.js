let number = [10, 2, 8, 4, 5, 7, 9, 6, 1];
for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
        if (number[i] > number[j]) {
            let temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}
number.slice();
console.log(number);

