let number = [1, 43, 3, 4, 7, 11, 9, 10];
let nothing = [];
let abc = "abc";
function findmax(list) {
    if (Array.isArray(list)) {
        if (list.length > 0) {
            let result = list.reduce((max, num) => (num > max ? num : max), list[0]);
            let find = list.findIndex(num => num === result)
            console.log(`Số lớn nhất là ${result}`);
            console.log(`Vị trí là ${find}`);
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
findmax(number);
findmax(nothing);
findmax(abc);
