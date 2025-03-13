console.log("=========== Menu ===========");
console.log("1. Nhập danh sách số nguyên.");
console.log("2. Tính trung bình các số.");
console.log("3. Tìm số chẵn lớn nhất.");
console.log("4. Tìm số lẻ nhỏ nhất.");
console.log("5. Thoát.");
console.log("============================");

let list = [];

function nhapDanhSach() {
    let number = +prompt("Hãy nhập số phần tử muốn nhập:");
    list = [];
    for (let i = 1; i <= number; i++) {
        let num = +prompt("Hãy nhập giá trị thứ " + i + ":");
        list.push(num);
    }
    alert("Danh sách đã nhập: " + list.join(", "));
}


function tinhTrungBinh() {
    if (list.length === 0) {
        alert("Danh sách rỗng! Vui lòng nhập số trước.");
        return;
    }
    let tong = list.reduce((sum, num) => sum + num);
    alert("Trung bình các số: " + (tong / list.length).toFixed(2));
}

function findMax(list) {
    if (Array.isArray(list) == false) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    console.log(max);
    return max;
}

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

let choice;

do {
    choice = +prompt("Lựa chọn của bạn là:");
    switch (choice) {
        case 1:
            nhapDanhSach();
            break;
        case 2:
            tinhTrungBinh();
            break;
        case 3:
            findMax(list);
            break;
        case 4:
            findMin(list);
            break;
        case 5:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 5.");
    }
} while (choice !== 5);
