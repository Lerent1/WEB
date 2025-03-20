function add() {
    let text = document.getElementById("text");
    let input = text.value.trim();
    if (input === "") {
        alert("Hãy nhập nhiệm vụ");
        return;
    }
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = `${input} <button onclick="deletee(this)"> X </button> <br><br>`;
    list.appendChild(li);
    text.value = "";
}

function deletee(button) {
    if (confirm("Bạn có chắc muốn xóa")) {
        let li = button.parentElement;
        li.remove();
    }
}