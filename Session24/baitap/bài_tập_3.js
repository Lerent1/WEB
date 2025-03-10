console.log("===================== MENU =======================");
console.log("1. Nhập mảng số nguyên");
console.log("2. Hiển thị mảng");
console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
console.log("5. Đảo ngược mảng");
console.log("6. Kiểm tra mảng có đối xứng không");
console.log("7. Thoát chương trìnhh");
console.log("==================================================");
let chose;
let list = [];
do {
    chose = +prompt("Lựa chọn của bạn là ");
    switch (chose) {
        case 1: {
            let number = +prompt("Hãy nhập số phần tử");
            for (let i = 0; i < number; i++) {
                let num = +prompt(`Nhap gia tri phan tu thu ${i + 1}`);
                list.push(num);
            }
            break;
        }
        case 2: {
            console.log(list);
            break;
        }
        case 3: {
            let max = list[0];
            let addressMax = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                    addressMax = i;
                }
            }
            console.log("Số lớn nhất là " + max);
            console.log("Vị trí số lớn nhất là " + addressMax);
            break;
        }
        case 4: {
            let sum = 0;
            let count = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] > 0) {
                    sum += list[i];
                    count++;
                }
            }
            let averg = count > 0 ? sum / count : 0;
            console.log(`Tổng số dương là ${sum}`);
            console.log(`Trung bình cộng là ${averg}`);
            break;
        }
        case 5: {
            let reversed = [];
            for (let i = list.length - 1; i >= 0; i--) {
                reversed.push(list[i]);
            }
            console.log(`Mảng đảo ngược là ${reversed}`);
            break;
        }
        case 6: {
            let Symmetric = true;
            for (let i = 0; i < list.length / 2; i++) {
                if (list[i] !== list[list.length - 1 - i]) {
                    Symmetric = false;
                    break;
                }
            }
            console.log(Symmetric ? "Mang doi xung" : "Mang khong doi xung");
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (chose != 7)