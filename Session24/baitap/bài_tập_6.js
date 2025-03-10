
console.log("=========================== MENU ===========================");
console.log("1. Nhập chuỗi");
console.log("2. Hiển thị chuỗi");
console.log("3. Tính độ dài của chuỗi");
console.log("4. Đếm số lần xuất hiện của một ký tự");
console.log("5. Kiểm tra chuỗi có phải đối xứng không");
console.log("6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của từ");
console.log("7. Thoát chương trình");
console.log("============================================================");
let list = " ";
let choose;
do {
    choose = prompt("Nhập lựa chọn của bạn ");
    switch (choose) {
        case 1: {
            list = prompt("Nhập chuỗi ");
            break;
        }
        case 2: {
            console.log("Chuỗi hiện tại ", list);
            break;
        }
        case 3: {
            console.log("Độ dài của chuỗi ", list.length);
            break;
        }
        case 4: {
            let number = prompt("Nhập ký tự cần đếm ");
            let count = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] === number) {
                    count++;
                }
            }
            console.log(`Ký tự '${number}' xuất hiện ${count} lần`);
            break;
        }
        case 5: {
            let reversed = list.split("").reverse().join("");
            if (list === reversed) {
                console.log("Chuỗi là đối xứng.");
            } else {
                console.log("Chuỗi không đối xứng");
            }
            break;
        }
        case 6: {
            let word = list.split(" ");
            for (let i = 0; i < word.length; i++) {
                word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
            }
            list = word.join(" ");
            console.log("Chuỗi sau khi chuyển đổi là", list);
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choose !== 7);
