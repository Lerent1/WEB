function check(list, n) {
    if (Array.isArray(list) || typeof n == "number" || n >= 0) {
        let result = [];
        for (let i = 0; i < list.length; i += n) {
            result.push(list.slice(i, i + n));
        }
        return result;
    } else {
        console.log("dữ liệu không hợp lệ");
    }
}
console.log(check([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(check([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(check("abc", 3));