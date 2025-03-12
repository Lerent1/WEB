let text = ["apple", "banana", "cat", "elephant", "dog"];
let nothing = [];
let abc = "abc";
function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.filter((item) => item.length >= 5)
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