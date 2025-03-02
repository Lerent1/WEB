let math = +prompt("Hãy nhập điểm toán");
let letter = +prompt("Hãy nhập điểm văn");
let english = +prompt("Hãy nhập điểm anh");
let sum = (math + letter + english) / 3;
if (sum >= 8) {
    document.write("Giỏi");
} else if (sum >= 6.5 && sum <= 7.9) {
    document.write("Khá");
} else if (sum >= 5 && sum <= 6.4) {
    document.write("Trung bình");
} else {
    document.write("Yếu");
}