function checkup(list) {
    if (Array.isArray(list) || list.some(num => Number.isFinite(num))) {
        let number = list.filter(num => num % 2 === 0).sort((a, b) => a - b);
        let index = 0;
        return list.map(num => {
            if (num % 2 === 0) {
                let evenNumber = number[index];
                index++;
                return evenNumber;
            } else {
                return num;
            }
        });
    } else {
        return "dữ liệu không hợp lệ";
    }
}
console.log(checkup([5, 8, 6, 3, 4, 2, 7]));
console.log(checkup([5, 9, 6, 4, 1, 8, 3]));
console.log(checkup("abc"));
