function check() {
    let number = [];
    let up = [];
    for (let i = 0; i < 10; i++) {
        let num = +prompt(`Hãy nhập phần tử thứ ${i + 1}`);
        if (Number.isInteger(number)) {
            number.push(num);
        } else {
            console.log("Dữ liệu không hợp lệ");
            break;
        }
    }
    if (number.length > 0) {
        for (let i = 0; i < number.length; i++) {
            if (number[i] >= 10) {
                up.push(number[i]);
            }
        }
        console.log(up);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}
check();
