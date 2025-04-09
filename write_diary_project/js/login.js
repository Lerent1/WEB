function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!email || email == password) {
        alert("Thông tin không hợp lệ");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let login = users.find(login => login.email === email && login.password === password);
    if (login) {
        alert("Đăng nhập thành công");
        localStorage.setItem("Đăng nhập", JSON.stringify(login));
        window.location.href = "../html/manageUser.html";
    } else {
        alert("Email hoặc mật khẩu không chính xác");
    }
}