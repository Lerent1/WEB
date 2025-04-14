let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let firstName = document.getElementById("first").value.trim();
    let lastName = document.getElementById("last").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Vui lòng điền đủ thông tin");
        return;
    } else if (password.length < 6) {
        alert("Mật khẩu không hợp lệ");
        return;
    } else if (password !== confirmPassword) {
        alert("Mật khẩu không đúng");
        return;
    } else if (!checkemail(email)) {
        alert("Email không hợp lệ");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let check = users.some(user => user.email === email);
    if (check) {
        alert("Email đã được sử dụng");
        return;
    }

    let user = {
        id: Math.floor(Math.random() * 10000),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công");
    window.location.href = "../html/login.html";
}

function checkemail(email) {
    return email.includes("@") && (email.endsWith(".com"));
}
