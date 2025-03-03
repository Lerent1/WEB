let month = +prompt("Hãy nhập tháng mà bạn muốn");
if (month >= 1 && month <= 12) {
    if (month >= 1 && month <= 3) {
        alert("Mùa xuân");
    } else if (month >= 4 && month <= 6) {
        alert("Mùa hạ");
    } else if (month >= 7 && month <= 9) {
        alert("Mùa thu");
    } else {
        alert("mùa đông");
    }
}