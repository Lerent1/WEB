console.log("============== Menu ==============");
console.log("1. Nhập danh sách sinh viên.");
console.log("2. Hiển thị danh sách sinh viên.");
console.log("3. Tìm sinh viên theo tên.");
console.log("4. Xóa sinh viên khỏi danh sách.");
console.log("5. Thoát chương trình");
console.log("==================================");
let choice;
let list = [];

function fullName(ingame) {
    let text = prompt("Hãy nhập số lượng bạn muốn thêm");
    for (let i = 0; i < text; i++) {
        let name = prompt(`Hãy nhập người thứ ${i + 1}`);
        list.push(name);
    }
}

function searchName(see) {
    // let see = [];
    let search = prompt("Hãy nhập tên muốn tìm kiếm");
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i] == search) {
    //         see.push(list[i]);
    //         break;
    //     } else {
    //         console.log(`Sinh viên không có trong danh sách`);
    //     }
    // }
    // console.log(see);
    let result = see.filter((item) => item === search);
    console.log(result);
}

function deletee() {
    let delet = prompt("Hãy nhập tên muốn xóa");
    let dele = list.indexOf(delet);
    if (dele !== -1) {
        list.splice(dele, 1);
        console.log("Đã xóa sinh viên hãy ấn 2");
    } else {
        console.log("Hổng có sinh viên  này");
    }
    console.log(list);
}

do {
    choice = +prompt("Lựa chọn của bạn là");
    switch (choice) {
        case 1: {
            fullName();
            break;
        }
        case 2: {
            console.log(`Danh sách sinh viên là ${list}`);
            break;
        }
        case 3: {
            searchName(list);
            break;
        }
        case 4: {
            deletee();
            break;
        }
        case 5: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("kết thúc");
    }
} while (choice != 5);