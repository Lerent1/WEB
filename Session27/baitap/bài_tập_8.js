function bigNumber(input) {
    if (typeof input == "number" || Number.isInteger(input)) {
        let result = Number(String(input).split('').sort((a, b) => b - a).join(''));
        return result;
    } else {
        return "dữ liệu không hợp lệ";
    }
}
console.log(bigNumber(2941));
console.log(bigNumber(3875));
console.log(bigNumber("1h8t"));
