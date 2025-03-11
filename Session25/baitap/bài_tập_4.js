function check(number) {
    let count = 0;
    if (Number.isInteger(number)) {
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không phải là số nguyên tố");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
check(7);