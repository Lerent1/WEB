console.log("============== Hệ thống quản lý sản phẩm ===============");
console.log("1. Thêm sản phẩm vào danh sách sản phẩm.");
console.log("2. Hiển thị tất cả sản phẩm.");
console.log("3. Hiển thị chi tiết sản phẩm theo id.");
console.log("4. Cập nhật thông tin sản phẩm theo id sản phẩm.");
console.log("5. Xóa sản phẩm theo id.");
console.log("6. Lọc sản phẩm theo khoảng giá.");
console.log("7. Thoát.");
console.log("========================================================");
let choice;

let contact = [{
    id: 123, name: "Mèn mén", price: 10000, category: "1", quantity: 100,
}];

function addcontact() {
    let id = +prompt("Nhập ID: ");
    let name = prompt("Nhập tên: ");
    let price = +prompt("Nhập giá: ");
    let category = prompt("Nhập danh mục: ");
    let quantity = +prompt("Nhập số lượng: ");
    let add = {
        id: id,
        name: name,
        price: price,
        category: category,
        quantity: quantity,
    };
    contact.push(add);
    console.log(contact);
}

function findid() {
    let aiid = [];
    let aidi = +prompt("Hãy nhập id");
    let findid = contact.find((find) => find.id === aidi);
    if (findid) {
        console.log(findid);
    } else {
        console.log("Không tìm thấy.");
    }
}

function updatee() {
    let aidi = +prompt("Hãy nhập id muốn tìm kiếm");
    let findid = contact.find((find) => find.id === aidi);
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

function check() {
    let min = +prompt("Nhập giá tối thiểu");
    let max = +prompt("Nhập giá tối đa");
    let loc = contact.filter(money => money.price >= min && money.price <= max);
    if (loc.length) {
        console.log("Sản phẩm trong khoảng giá là ", loc);
    } else {
        alert("Không có sản phẩm nào");
    }
}

do {
    choice = +prompt("Lựa chọn của bạn là");
    switch (choice) {
        case 1: {
            addcontact();
            break;
        }
        case 2: {
            console.log("Thông tin sản phẩm: ", contact);
            break;
        }
        case 3: {
            findid();
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
            check();
            break;
        }
        case 7: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Hay nhap lại");
    }
} while (choice != 7);