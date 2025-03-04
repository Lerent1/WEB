let number = +prompt("Nhập một số nguyên:");
if (!number || !Number.isInteger(number) || number < 2) {
    alert("Không phải là số nguyên tố");
} else {
    let num = true;
    for (let i = 2; i < number && num; i++) {
        if (number % i === 0) {
            num = false;
        }
    }
    if (num) {
        alert("Là số nguyên tố");
    } else {
        alert("Không phải là số nguyên tố");
    }
}