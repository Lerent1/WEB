let text = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nothing = [];
let abc = "abc";
function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let chan = list.filter(num => num % 2 === 0).reduce((sum, num) => sum + num);
            let le = list.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num);
            console.log(`totalEven = ${chan}`);
            console.log(`totalOdd  = ${le}`);
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
check(text);
check(nothing);
check(abc);