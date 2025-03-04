let number = +prompt("hãy nhập một số");
let num = 0;
if (Number.isInteger(number) && number > 0) {
    for (let i = 2; num < number; i++) {
        let score = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                score = 1;
                break;
            }
        }
        if (score === 0) {
            document.write(i + " ");
            num++;
        }
    }
} else {
    alert("Không hợp lệ");
}