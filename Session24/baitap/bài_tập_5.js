console.log("==================== MENU =======================");
console.log("1. Nhập mảng 2 chiều");
console.log("2. Hiển thị mảng 2 chiều");
console.log("3. Tính tổng các phần tử trong mảng");
console.log("4. Tính tổng đường chéo chính");
console.log("5. Tính tổng đường chéo phụ");
console.log("6. Tính trung bình cộng theo hàng hoặc cột");
console.log("7. Thoát chương trình");
console.log("=================================================");
let list = [];
let choice;
do {
    choice = prompt("Nhập lựa chọn:");

    switch (choice) {
        case 1: {
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");

            for (let i = 0; i < rows; i++) {
                let number = prompt(`Nhập hàng ${i + 1}`);
                if (number.length !== cols) {
                    console.log("Số lượng phần tử không hợp lệ");
                    break;
                }
                list.push(number);
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
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < list[i].length; j++) {
                    sum += list[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là ", sum);
            break;
        }
        case 4: {
            let sumMain = 0;
            for (let i = 0; i < Math.min(rows, cols); i++) {
                sumMain += list[i][i];
            }
            console.log("Tổng đường chéo chính là ", sumMain);
            break;
        }
        case 5: {
            let sumSub = 0;
            for (let i = 0; i < Math.min(rows, cols); i++) {
                sumSub += list[i][cols - i - 1];
            }
            console.log("Tổng đường chéo phụ là ", sumSub);
            break;
        }
        case 6: {
            let type = prompt("Nhập 'row' hoặc 'col' để tính trung bình hàng hoặc cột");
            if (type === "row") {
                let number1 = prompt("Nhập số thứ tự hàng cần tính ");
                if (number1 >= 0 && number1 < rows) {
                    let sumRow = list[number1].reduce((a, b) => a + b, 0);
                    console.log(`Trung bình cộng hàng ${number1}:`, sumRow / cols);
                } else {
                    console.log("Hàng không hợp lệ");
                }
            } else if (type === "col") {
                let number2 = prompt("Nhập số thứ tự cột cần tính ");
                if (number2 >= 0 && number2 < cols) {
                    let sumCol = 0;
                    for (let i = 0; i < rows; i++) {
                        sumCol += list[i][number2];
                    }
                    console.log(`Trung bình cộng cột ${number2}:`, sumCol / rows);
                } else {
                    console.log("Cột không hợp lệ");
                }
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Lựa chọn không hợp lệ");
    }

} while (choice !== '7');
