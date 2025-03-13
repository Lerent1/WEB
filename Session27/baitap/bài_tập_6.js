function check(list) {
    if (Array.isArray(list) || Number.isInteger(list)) {
        if (list.length < 2) {
            return "TRUE";
        }
        let result = list[1] - list[0];
        for (let i = 1; i < list.length; i++) {
            if (list[i] - list[i - 1] !== result) {
                return "FALSE";
            }
        }
        return "TRUE";
    } else {
        return "dữ liệu không hợp lệ";
    }
}
console.log(check([2, 4, 6, 8]));
console.log(check([3, 6, 9, 12, 14]));
console.log(check("abc"));
