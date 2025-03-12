let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nothing = [];
let abc = "abc";
function isfind(alo) {
    if (alo < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(alo); i++) {
        if (alo % i === 0) {
            return false;
        }
    }
    return true;
}
function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.filter((item) => Number.isInteger(item) && isfind(item));
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
check(number);
check(nothing);
check(abc);