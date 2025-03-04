let number = prompt("Hãy nhập một cố nguyên");
if (number > 0 || Number.isInteger(number)) {
    for (let i = 0; i <= (number.length) / 2; i++) {
        if (number[i] != number[number.length - 1 - i]) {
            alert("Đây không phải số đối xứng");
            break;
        } else {
            alert("Đây là số đối xứng");
            break;
        }
    }
} else {
    alert("Số không hợp lệ");
}
