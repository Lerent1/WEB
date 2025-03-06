let number = +prompt("Hãy nhập một số bất kì");
if (Number.isInteger(number)) {
    let rever = number.toString().split("").reverse().join("");
    console.log(rever);
} else {
    alert("Không hợp lệ");
}