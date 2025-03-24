function add() {
    let text = document.getElementById("text");
    let result = text.value.trim();
    if (result == "") {
        alert("Hãy nhập nhiệm vụ");
        return;
    }
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = `${result} <button onclick="deletee(this)"> Xóa </button> <br><br>`;
    list.appendChild(li);
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(result);
    localStorage.setItem("todos", JSON.stringify(todos));
    text.value = "";
}

function deletee(button) {
    let li = button.parentElement;
    let text = li.firstChild.textContent.trim();
    li.remove();
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(todo => todo !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
}
