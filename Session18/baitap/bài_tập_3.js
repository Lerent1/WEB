let nameuser = prompt("Hãy nhập tên người dùng");
if (nameuser === "ADMIN") {
    let pass = prompt("Hãy nhập mật khẩu");
    if (pass === "TheMaster") {
        alert("Welcome");
    } else if (pass === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (nameuser === null) {
    alert("Cancelled");
} else {
    alert("I Don't know you");
}