function check(number) {
    let count = 0;
    if (Array.isArray(number)) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] > 0) {
                count++;
            }
        }
        console.log(count);
    } else {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
}
check([4, 5, -2, 6]);