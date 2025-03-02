let time = +prompt("Hãy nhập số năm kinh nghiệm");
if (time < 1) {
    alert("Mới vào nghề");
} else if (time >= 1 && time <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (time >= 4 && time <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}