let email = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"];
let nothing = [];
let abc = "abc";
function check(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.filter((item) => item.includes("@") && !item.includes(" "));
            console.log(result);
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
check(email);
check(nothing);
check(abc);