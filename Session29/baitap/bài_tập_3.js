console.log("========== Hệ thống quản lý menu ==========");
console.log("1. Thêm món ăn vào danh mục.");
console.log("2. Xóa món ăn theo tên khỏi danh mục.");
console.log("3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).");
console.log("4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.");
console.log("5. Tìm kiếm món ăn theo tên trong toàn bộ menu.");
console.log("6. Thoát.");
console.log("===========================================");

let contact = [{
    name: "Phở bò", price: 50000, description: "Phở bò tái chín thơm ngon",
}];

function add() {
    let name = prompt("Nhập tên món ăn: ");
    let price = +prompt("Nhập giá: ");
    let description = prompt("Nhập mô tả món ăn: ");
    let add = {
        name: name,
        price: price,
        description: description,
    };
    contact.push(add);
    console.log(contact);
}

function deletee() {
    let aidi = +prompt("Hãy nhập id muốn xóa");
    let findid = contact.find((find) => find.id === aidi);
    if (findid) {
        employees.splice(index, 1);
        console.log("Đã xóa.");
    } else {
        console.log("Không tìm thấy.");
    }
}

function updatee() {
    let aidi = +prompt("Hãy nhập name muốn tìm kiếm");
    let findname = contact.find((find) => find.name === aidi);
    if (findid) {
        contact.name = prompt("Nhập tên mới:") || contact.name;
        contact.price = prompt("Nhập price mới:") || contact.price;
        contact.category = prompt("Nhập danh mục mới:") || contact.category;
        contact.quantity = prompt("Nhập số lượng mới:") || contact.quantity;
        console.log("Cập nhật thành công: ", contact);
    } else {
        alert("Không  tìm thấy id");
    }
}

function findid() {
    let aidi = +prompt("Hãy nhập tên muốn tìm kiếm");
    let findid = contact.find((find) => find.name === aidi);
    if (findid) {
        console.log(findid);
    } else {
        console.log("Không tìm thấy.");
    }
}

let choice;
do {
    choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            deletee();
            break;
        case 3:
            updatee();
            break;
        case 4:
            console.log("Thông tin sản phẩm: ", contact);
            break;
        case 5:
            findid();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 6.");
    }
} while (choice !== 6);
