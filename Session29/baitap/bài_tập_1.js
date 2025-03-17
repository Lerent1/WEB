console.log("======================== Menu =========================");
console.log("1. Thêm đối tượng Contact vào danh sách liên hệ.");
console.log("2. Hiển thị danh sách danh bạ.");
console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
console.log("4. Cập nhật thông tin Contact(name, email, phone) theo id.");
console.log("5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.");
console.log("6. Thoát.");
console.log("=======================================================");
let choice;
let contact = [{
    id: 123, name: "Nguyen Tuan Minh", email: "minh@gmail.com", phone: "0912345678",
}];

function addcontact() {
    let id = +prompt("Hãy nhập id");
    let name = prompt("Hãy nhập tên");
    let email = prompt("Hãy nhập email");
    let phone = prompt("Hãy nhập số điện thoại");
    let add = {
        id: id,
        name: name,
        email: email,
        phone: phone,
    };
    contact.push(add);
    console.log(contact);
}

function findinformation() {
    let phoneNumber = prompt("Hãy nhập số điện thoại muốn tìm kiếm");
    let findphone = contact.find((find) => find.phone === phoneNumber);
    if (findphone) {
        console.log(findphone);
    } else {
        console.log("Không tìm thấy");
    }
}

function updatee() {
    let aidi = +prompt("Hãy nhập id muốn tìm kiếm");
    let findid = contact.find((find) => find.id === aidi);
    if (findid) {
        contact.name = prompt("Nhập tên mới:") || contact.name;
        contact.email = prompt("Nhập email mới:") || contact.email;
        contact.phone = prompt("Nhập số điện thoại mới:") || contact.phone;
        console.log("Cập nhật thành công: ", contact);
    } else {
        alert("Không  tìm thấy id");
    }
}

function deletee() {
    let aidi = +prompt("Hãy nhập id muốn xóa");
    let findid = contact.find((find) => find.id === aidi);
    if (findid) {
        employees.splice(index, 1);
        console.log("Đã xóa nhân viên.");
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}

do {
    choice = +prompt("Lựa chọn của bạn");
    switch (choice) {
        case 1: {
            addcontact();
            break;
        }
        case 2: {
            console.log("Thông tin danh sách: ", contact);
            break;
        }
        case 3: {
            findinformation();
            break;
        }
        case 4: {
            updatee();
            break;
        }
        case 5: {
            deletee();
            break;
        }
        case 6: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Hay nhap lại");
    }

} while (choice != 6);