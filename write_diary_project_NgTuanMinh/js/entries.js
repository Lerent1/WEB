let entries = JSON.parse(localStorage.getItem("entries")) || [
    {
        id: 1,
        name: "Daily Journal"
    },
    {
        id: 2,
        name: "Work & Career"
    },
    {
        id: 3,
        name: "Personal Thoughts"
    },
    {
        id: 4,
        name: "Emotions & Feelings"
    }
]
localStorage.setItem("entries", JSON.stringify(entries));

function show() {
    let list = document.getElementById("list");
    list.innerHTML = "";
    for (let i = 0; i < entries.length; i++) {
        let card = `<tr>
                        <td>${entries[i].id}</td>
                        <td><p>${entries[i].name}</p></td>
                        <td class="edit">
                            <button onclick="edit(this)"> Edit</button>
                            <button onclick="deletee(this)"> Delete </button> <br>
                        </td>
                    </tr>`;
        list.innerHTML += card;
    };
}

function add() {
    let text = document.getElementById("text");
    let input = text.value.trim();
    if (input === "") {
        alert("Enter category name");
        return;
    }
    let newEntries = {
        id: entries.length + 1,
        name: input
    };
    entries.push(newEntries);
    localStorage.setItem("entries", JSON.stringify(entries));

    show();
    text.value = "";
}

function deletee(button) {
    if (confirm("Bạn chắc chắn muốn xóa chủ đề này?")) {
        let row = button.parentElement.parentElement;
        let id = parseInt(row.cells[0].textContent);

        entries = entries.filter(entry => entry.id !== id);
        for (let i = 0; i < entries.length; i++) {
            entries[i].id = i + 1;
        }
        localStorage.setItem("entries", JSON.stringify(entries));
        show();
    }
}

function edit(button) {
    let row = button.parentElement.parentElement;
    let id = parseInt(row.cells[0].textContent);
    let p = row.querySelector("p");
    let newText = prompt("Edit category:", p.textContent);
    if (newText !== null && newText.trim() !== "") {
        p.textContent = newText.trim();

        const entry = entries.find(entry => entry.id === id);
        if (entry) {
            entry.name = newText.trim();
            localStorage.setItem("entries", JSON.stringify(entries));
        }
    }
}

function profile() {
    document.getElementById("menu").classList.toggle("active");
}
window.onclick = function (event) {
    if (!event.target.closest(".profile")) {
        document.getElementById("menu").classList.remove("active");
    }
}

show();