let number = +prompt("Hãy nhập một số");
if (number % 3 == 0 && number % 5 == 0) {
    alert("Số " + number + " chia hết cho cả 3 và 5");
} else {
    alert("Số " + number + " không chia hết cho cả 3 và 5");
}