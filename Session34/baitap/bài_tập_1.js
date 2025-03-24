let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let user = {
        id: Math.floor(Math.random() * 65656566),
        email: email,
        password: password
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location = "./bài_cơ_bản_1.html";
}