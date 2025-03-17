console.log("========== Đăng ký ==========");
console.log("1. Đăng ký người dùng mới.");
console.log("2. Đăng nhập người dùng.");
console.log("3. Thoát.");
console.log("=============================");
let choice;
let contact = [];

function checkemail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}

function add() {
    let name = prompt("Nhập tên người dùng:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    if (!checkemail(email)) {
        alert("Email không hợp lệ");
    } else if (password < 6) {
        alert("Mật khẩu không hợp lệ");
    } else if (users.find(user => user.email === email)) {
        alert("Email đã tồn tại");
    } else {
        user.push({ name, email, password });
        console.log("Đăng ký thành công");
    }
}

function login() {
    let email = prompt("Hãy nhập email");
    let password = prompt("Hãy nhập mật khẩu");
    let user = contact.find(user => user.email === email && user.password === password);
    if (user) {
        console.log("Thông tin người dùng:", user);
    } else {
        alert("Sai email hoặc mật khẩu");
    }
}

do {
    choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            add();
            break;
        case 2:
            login();
            break;
        case 3:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice !== 3);