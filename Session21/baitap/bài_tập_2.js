let chan = 0;
let le = 0;
for (let i = 1; i <= 5; i++) {
    let number = +prompt("Hãy nhập số bất kì");
    if (number > 0) {
        if (number % 2 !== 0) {
            le++;
        } else {
            chan++;
        }
    } else {
        alert("Không thỏa mãn");
    }
}
alert("Có " + le + " số lẻ");
alert("Có " + chan + " số chẵn");
