function check() {
    let email = document.getElementById("emailInput").value.trim();
    let result = document.getElementById("result");
    if (email.includes("@") && email.endsWith(".com") || email.endsWith(".vn")) {
        result.innerHTML = "<p>Email hợp lệ</p>";
    } else {
        result.innerHTML = "<p>Email không hợp lệ</p>";
    }
}