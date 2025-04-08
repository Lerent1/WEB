let article = JSON.parse(localStorage.getItem("article")) || [];
localStorage.setItem("article", JSON.stringify(article));
let page = 1;
let number = 5;

function show(num = 1) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let start = (num - 1) * number;
    let end = start + number;
    let pageItems = article.slice(start, end);

    for (let i = 0; i < pageItems.length; i++) {
        let item = pageItems[i];
        list.innerHTML += `
        <tr>
            <td><img src="${item.image}" width="100" height="80"></td>
            <td>${item.tittle}</td>
            <td>${item.entries}</td>
            <td>${item.content}</td>
            <td>${item.mood}</td>
            <td>
                <select>
                    <option ${item.status === "Công khai" ? "selected" : ""}>Công khai</option>
                    <option ${item.status === "Riêng tư" ? "selected" : ""}>Riêng tư</option>
                </select>
            </td>
            <td>
                <button onclick="edit(${start + i})">Sửa</button>
                <button onclick="deletee(${start + i})">Xóa</button>
            </td>
        </tr>`;
    }

    document.getElementById("pageNumber").innerText = page;
}

function prevPage() {
    if (page > 1) {
        page--;
        show(page);
    }
}

function nextPage() {
    let totalPages = Math.ceil(article.length / number);
    if (page < totalPages) {
        page++;
        show(page);
    }
}

function deletee(button) {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
        article.splice(button, 1);
        localStorage.setItem("article", JSON.stringify(article));

        let maxPage = Math.ceil(article.length / number);
        if (page > maxPage) page = maxPage;
        show(page);
    }
}

function edit(button) {
    let entry = article[button];

    let newTitle = prompt("Sửa tiêu đề:", entry.title);
    let newEntry = prompt("Sửa danh mục:", entry.entries);
    let newContent = prompt("Sửa nội dung:", entry.content);
    let newMood = prompt("Sửa tâm trạng:", entry.mood);
    let newStatus = prompt("Sửa trạng thái (Công khai/Riêng tư):", entry.status);
    let newImage = prompt("Sửa link ảnh:", entry.image);

    if (
        newTitle && newEntry && newContent && newMood &&
        (newStatus === "Công khai" || newStatus === "Riêng tư")
    ) {
        article[button] = {
            tittle: newTitle,
            entries: newEntry,
            content: newContent,
            mood: newMood,
            status: newStatus,
            image: newImage
        };
        localStorage.setItem("article", JSON.stringify(article));
        show(page);
    } else {
        alert("Sửa không hợp lệ hoặc bị hủy.");
    }
}

show(page);