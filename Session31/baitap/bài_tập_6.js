function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;
    if (user === "huanrose@gmail.com" && pass === "123456") {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}