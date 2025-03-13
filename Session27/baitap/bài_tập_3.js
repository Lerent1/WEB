console.log("============== Menu ==============");
console.log("1. Tính diện tích hình tròn");
console.log("2. Tính chu vi hình tròn.");
console.log("3. Tính diện tích hình chữ nhật.");
console.log("4. Tính chu vi hình chữ nhật.");
console.log("5. Thoát chương trình");
console.log("==================================");
let choice;
let dttron;
let cvtron;
let dai;
let rong;

function DienTichHinhTron(num) {
    return 3.14 * num * num;
}

function ChuViHinhTron(num) {
    return 2 * 3.14 * num;
}

function DienTichHinhChuNhat(dai, rong) {
    return dai * rong;
}

function ChuViHinhChuNhat(dai, rong) {
    return 2 * (dai + rong);
}

do {
    choice = +prompt("Lựa chọn của bạn là");
    switch (choice) {
        case 1: {
            dttron = +prompt("Nhập bán kính hình tròn:");
            alert("Diện tích hình tròn: " + DienTichHinhTron(dttron));
            break;
        }
        case 2: {
            cvtron = +prompt("Nhập bán kính hình tròn:");
            alert("Chu vi hình tròn: " + ChuViHinhTron(cvtron));
            break;
        }
        case 3: {
            dai = +prompt("Nhập chiều dài hình chữ nhật:");
            rong = +prompt("Nhập chiều rộng hình chữ nhật:");
            alert("Diện tích hình chữ nhật: " + DienTichHinhChuNhat(dai, rong));
            break;
        }
        case 4: {
            dai = +prompt("Nhập chiều dài hình chữ nhật:");
            rong = +prompt("Nhập chiều rộng hình chữ nhật:");
            alert("Chu vi hình chữ nhật: " + ChuViHinhChuNhat(dai, rong));
            break;
        }
        case 5: {
            alert("Thoát chương trình");
            break;
        }
        default:
            alert("Nhập sai");
    }
} while (choice !== "5");
