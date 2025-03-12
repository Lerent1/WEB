let number = [10, 2, 3, 5, 7, 9];
let nothing = [];
let abc = "abc";
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.filter(num => isPrime(num) && num % 2 !== 0);
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
