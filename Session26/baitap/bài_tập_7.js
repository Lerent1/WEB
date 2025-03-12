let text = [2, 5, 10];
let nothing = [];
let abc = "abc";
function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.map(num => num ** 2).filter(num => num % 2 === 0);
            console.log(result);
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