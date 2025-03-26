document.addEventListener(load);

function add() {
    let name = document.getElementById("webName").value;
    let url = document.getElementById("webURL").value;
    if (!name || !url) {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push({ name, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    load();
    document.getElementById("webName").value = "";
    document.getElementById("webURL").value = "";
}

function load() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let list = document.getElementById("list");
    list.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        list.innerHTML += `
                    <div class="bookmark">
                        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                        <button class="delete-btn" onclick="deletee(${index})">X</button>
                    </div>
                `;
    });
}

function deletee(dele) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.splice(dele, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    load();
}