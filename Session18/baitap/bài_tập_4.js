let number = +prompt("Hãy nhập một số từ 0 đến 9");
if (0 <= number && number <= 9) {
    if (number == 1) {
        alert("Số một");
    } else if (number == 2) {
        alert("Số hai");
    } else if (number == 3) {
        alert("Số ba");
    } else if (number == 4) {
        alert("Số bốn");
    } else if (number == 5) {
        alert("Số năm");
    } else if (number == 6) {
        alert("Số sáu");
    } else if (number == 7) {
        alert("Số bảy");
    } else if (number == 8) {
        alert("Số tám");
    } else if (number == 9) {
        alert("Số chín");
    }
} else {
    alert("Nhập sai");
}