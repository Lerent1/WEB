let numbers = [2, 5, 7, 4, 6, 8, 1];
let random = +prompt("Hãy nhập số bạn muốn");
let flag = 0;
if (Number.isInteger(random)) {
    for (let i = 0; i < numbers.length; i++) {
        if (random == numbers[i]) {
            flag++;
        }
    }
    if (flag != 0) {
        console.log("Bingo");
    } else {
        console.log("Chúc bạn may mắn lần sau");
    }
} else {
    alert("Nhập không hơp lệ");
}