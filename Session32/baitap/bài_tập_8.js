function add() {
    let text = document.getElementById("text");
    let input = text.value.trim();
    if (input === "") {
        alert("Hãy nhập công việc");
        return;
    }
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = `<span>${input}</span>
    <button onclick="edit(this)">Sửa</button>
    <button onclick="deletee(this)"> Xóa </button> <br><br>
    `;
    list.appendChild(li);
    text.value = "";
}

function deletee(button) {
    if (confirm("Bạn có chắc muốn xóa")) {
        let li = button.parentElement;
        li.remove();
    }
}

function edit(button) {
    let li = button.parentElement;
    let span = li.querySelector("span");
    let newInfor = prompt("Nhập nội dung mới:", span.textContent);
    if (newInfor !== null && newInfor.trim() !== "") {
        span.textContent = newInfor.trim();
    }
}