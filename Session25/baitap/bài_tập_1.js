function findMin(list) {
    if (Array.isArray(list) == false) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }
    console.log(min);
    return min;
}
findMin([2, 4, 8, 9, 5]);