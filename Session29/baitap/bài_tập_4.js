console.log("========== Hệ thống quản lý công việc ==========");
console.log("1. Thêm công việc mới.");
console.log("2. Hiển thị tất cả các công việc.");
console.log("3. Cập nhật trạng thái công việc theo ID.");
console.log("4. Lọc các công việc theo trạng thái (hoàn thành, chưa hoàn thành).");
console.log("5. Sắp xếp các công việc theo trạng thái.");
console.log("6. Thoát.");
console.log("==============================================");
let choice;
let contact = [
    { id: 25, name: "Họp", description: "Họp kế hoạch dự án", startTime: "205-03-17", status: "Hoàn thành" }
];

function add() {
    let id = +prompt("Nhập ID ");
    let name = prompt("Nhập tên ");
    let prdescriptionice = +prompt("Nhập kế hoạch ");
    let startTime = prompt("Nhập thời gian ");
    let status = +prompt("Nhập tiến độ ");
    let add = {
        id: id,
        name: name,
        prdescriptionice: prdescriptionice,
        startTime: startTime,
        status: status,
    };
    contact.push(add);
    console.log(contact);
}

function updatee() {
    let aidi = +prompt("Hãy nhập id muốn tìm kiếm");
    let findid = contact.find((find) => find.id === aidi);
    if (findid) {
        let newStatus = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành): ");
        contact.status = newStatus;
        console.log("Cập nhật thành công");
    } else {
        alert("Không  tìm thấy id");
    }
}

function check() {
    let statusFilter = prompt("Nhập trạng thái muốn lọc ");
    let loc = contact.filter(trangthai => trangthai.status === statusFilter);
    if (loc.length) {
        console.log("Công việc trong khoảng giá là ", loc);
    } else {
        alert("Không có công việc nào");
    }
}

function sort() {
    for (let i = 0; i < contact.length - 1; i++) {
        for (let j = i + 1; j < contact.length; j++) {
            if (contact[i].status > contact[j].status) {
                let temp = contact[i];
                contact[i] = contact[j];
                contact[j] = temp;
            }
        }
    }
    console.log("Danh sách sau khi sắp xếp là ", contact);
}

do {
    choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            console.log("Thông tin sản phẩm: ", contact);
            break;
        case 3:
            updatee();
            break;
        case 4:
            check();
            break;
        case 5:
            sort();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 6);
