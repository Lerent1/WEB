let employees = [
    { id: 167, name: "Nguyen Tuan Minh", position: "Developer", salary: 8000 },
];

function add() {
    let name = prompt("tên nhân viên");
    let position = prompt("vị trí");
    let salary = prompt("nhập lương");
    let employee = {
        id: Math.floor(Math.random() * 565466646 + new Date().getMilliseconds()),
        name: name,
        position: position,
        salary: salary
    }
    employees.push(employee);
    console.log("thêm nhân viên thành công", employees);
}

function deletee() {
    let id = +prompt("Nhập ID nhân viên cần xóa:");
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Đã xóa nhân viên.");
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}

function updatee() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        let newSalary = +prompt(`Nhập lương mới cho ${employee.name}:`);
        employee.salary = newSalary;
        console.log("Đã cập nhật lương.");
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}

function search() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let result = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (result.length > 0) {
        console.log("Nhân viên tìm thấy:", result);
    } else {
        console.log("Không tìm thấy nhân viên.");
    }
}

console.log("============== Menu ==============");
console.log("1. Thêm nhân viên mới.");
console.log("2. Xóa nhân viên theo id.");
console.log("3. Cập nhật mức lương của nhân viên theo id");
console.log("4. Tìm kiếm nhân viên theo tên.");
console.log("5. Thoát chương trình");
console.log("==================================");
let choice;

do {
    choice = +prompt("Lựa chọn của bạn");
    switch (choice) {
        case 1: {
            add();
            break;
        }
        case 2: {
            deletee(employees);
            break;
        }
        case 3: {
            updatee(employees);
            break;
        }
        case 4: {
            search(employees);
            break;
        }
        case 5: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("Hay nhap lại");
    }

} while (choice != 5);

