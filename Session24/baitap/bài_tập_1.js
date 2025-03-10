console.log("========================= Menu =========================");
console.log("1. Nhập mảng");
console.log("2. Hiển thị mảng");
console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
console.log("4. Tính tổng các phần tử trong mảng");
console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
console.log("6. Sắp xếp mảng tăng dần");
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
            let max = list[0];
            let addressMax = 0;
            let min = list[0];
            let addressMin = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                    addressMax = i;
                }
                if (list[i] < min) {
                    min = list[i];
                    addressMin = i;
                }
            }
            console.log("Số lớn nhất là " + max);
            console.log("Vị trí số lớn nhất là " + addressMax);
            console.log("Số nhỏ nhất là " + min);
            console.log("Vị trí số nhỏ nhất là " + addressMin);
            break;
        }
        case 4: {
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                sum += list[i];
            }
            console.log(sum);
            break;
        }
        case 5: {
            let number = +prompt("Hãy nhập số muốn tìm");
            let count = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] === number) {
                    count++;
                }
            }
            console.log(`Số ${number} xuất hiện ${count} lần`);
            break;
        }
        case 6: {
            for (let i = 0; i < list.length - 1; i++) {
                for (let j = i; j < list.length; j++) {
                    if (list[i] > list[j]) {
                        let temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
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