function find(arr) {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
        return "dữ liệu không hợp lệ";
    }
    let min = arr[0];
    let max = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        let list1 = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
        let list2 = arr.reduce((sum, num) => sum + num, 0);

        return list1 - list2;
    }
}
console.log(find([1, 2, 3, 5]));
console.log(find([1, 2, 4, 5]));
console.log(find("abc"));
