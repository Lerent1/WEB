function findchan(list) {
    let arr = [];
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] % 2 == 0) {
                arr.push(list[i]);
            }
        }
        if (arr.length > 0) {
            console.log(`Các phần tử chẵn là ${arr}`);
        } else {
            console.log("Mảng không chứa số chẵn");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
findchan([11, 12, 4, 8, 6, 5]);