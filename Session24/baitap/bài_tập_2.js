console.log("========================= Menu =========================");
console.log("1. Nhập mảng số nguyên");
console.log("2. Hiển thị mảng");
console.log("3. Tìm các phần tử chẵn và lẻ");
console.log("4. Tính trung bình cộng của mảng");
console.log("5. Xóa phần tử tại vị trí chỉ định");
console.log("6. Tìm phần tử lớn thứ hai trong mảng");
console.log("7. Thoát chương trình");
console.log("========================================================");
let choose;
let list = [];
do {
    choose = +prompt("Hãy nhập lựa chọn của bạn");
    switch (choose) {
        case 1: {
            let number = +prompt("Hãy nhập số phần tử muốn nhập");
            for (let i = 1; i <= number; i++) {
                let num = +prompt("Hãy nhập  giá trị thứ " + i);
                list.push(num);
            }
            break;
        }
        case 2: {
            for (let i = 0; i < list.length; i++) {
                console.log(`list[${i}] = ${list[i]}`);
            }
            break;
        }
        case 3: {
            let chan = [];
            let le = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i] % 2 == 0) {
                    chan.push(list[i]);
                } else {
                    le.push(list[i]);
                }
            }
            console.log(`Số phần tử chẵn là ${chan}`);
            console.log(`Số phần tử lẻ là ${le}`);
            break;
        }
        case 4: {
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                sum += list[i];
            }
            let average = sum / list.length;
            console.log("Trung bình cộng:", average);
            break;
        }
        case 5: {
            let deletee = prompt("Nhập vị trí cần xóa:");
            if (deletee >= 0 && deletee < list.length) {
                list.splice(deletee, 1);
                console.log("Mảng sau khi xóa:", list);
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;
        }
        case 6: {
            let max1;
            let max2;
            if (list[1] < list[0]) {
                max1 = list[0];
                max2 = list[1];
            } else {
                max1 = list[1];
                max2 = list[0];
            }
            for (let i = 2; i < list.length; i++) {
                if (list[i] > max1) {
                    max2 = max1;
                    max1 = list[i];
                } else if (list[i] > max2 && list[i] < max1) {
                    max2 = list[i];
                }
            }
            console.log(max2);
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("kết thúc");
    }
} while (choose != 7);