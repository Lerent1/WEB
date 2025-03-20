let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];

function rejods() {
    let score = "";
    for (let i = 0; i < todoList.length; i++) {
        score +=
            `
        <li>${todoList[i].task} <button>Sửa</button><button onclick = "deletee(id)">Xóa</button></li><br>
        `
    }
    document.getElementsByClassName("jobs")[0].innerHTML = score;
    console.log(score);
}
rejods();

function addjobs() {
    let add = document.getElementById("addjob").value;
    console.log("name", add);

    todoList.push(add);
    document.getElementById("addjob").value = "";
    rejods();
}

function deletee(id) {
    console.log("Xóa");
    let index = todoList.findIndex((item) => item.id == id);
    todoList.splice(index, 1);
    rejods();
}