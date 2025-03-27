function add() {
    let text = document.getElementById("text").value;
    localStorage.setItem("name", text);
    sayHello(add);
}

function sayHello() {
    let save = localStorage.getItem("name");
    document.getElementById("helo").innerHTML = "chào bạn " + save + `<button onclick="edit()">Đổi tên</button>`;
}

function edit() {
    let newName = prompt("Nhập tên mới:");
    if (newName) {
        localStorage.setItem("name", newName);
        sayHello();
    }
}