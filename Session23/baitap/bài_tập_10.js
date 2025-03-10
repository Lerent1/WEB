console.log("============================= Menu =============================");
console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử ");
console.log("2. In ra giá trị các phần tử đang quản lý ");
console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng ");
console.log("5. In ra các số nguyên tố trong mảng và tính tổng ");
console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng ");
console.log("7. Thêm một phần tử vào vị trí chỉ định ");
console.log("8. Xóa một phần tử theo giá trị ");
console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần ");
console.log("0. Thoát ");
console.log("===============================================================");

let list = [];
let choose;
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
            let sum = 0;
            let chan = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i] % 2 == 0) {
                    chan.push(list[i]);
                    sum += list[i];
                }
            }
            for (let i = 0; i < chan.length - 1; i++) {
                for (let j = i; j < chan.length; j++) {
                    if (chan[i] > chan[j]) {
                        let temp = chan[i];
                        chan[i] = chan[j];
                        chan[j] = temp;
                    }
                }
            }
            console.log("Tổng các phần tử chẵn là " + sum);
            console.log(chan);
            break;
        }
        case 4: {
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
        case 5: {
            let nguyento = [];
            let sum = 0;
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < list.length; j++) {
                    if (list[i] % j == 0) {
                        nguyento.push(list[i]);
                        sum += list[i];
                    }
                }
            }
            console.log(nguyento);
            console.log(sum);
            break;
        }
        case 6: {

            break;
        }
        case 7: {

            break;
        }
        case 8: {

            break;
        }
        case 9: {

            break;
        }
        case 0: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("kết thúc");
    }
} while (choose != 0);