let article = JSON.parse(localStorage.getItem("article")) || [
    {
        id: 1,
        tittle: "Deadline đầu tiên của kỳ học",
        entries: "Nhật ký học tập",
        content: "Hôm nay mình vừa nộp song bài tập lớp. Mệt nhưng rất nhẹ nhõm",
        mood: "Căng thẳng",
        status: "Riêng tư",
        image: "https://media.viez.vn/prod/2021/11/22/image_fec73dfe24.png"
    },
    {
        id: 2,
        tittle: "Cà phê chiều chủ nhật",
        entries: "Nhật ký chill",
        content: "Ngồi một mình trong quán quen và chill",
        mood: "Thư giãn",
        status: "Công khai",
        image: "https://news.khangz.com/wp-content/uploads/2024/12/Chill-guy-la-gi-6.jpg"
    }
]
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
        list.innerHTML += `
        <tr>
            <td><img src="${pageItems[i].image}" width="100" height="80"></td>
            <td>${pageItems[i].tittle}</td>
            <td>${pageItems[i].entries}</td>
            <td>${pageItems[i].content}</td>
            <td><span class = "mood">${pageItems[i].mood}</span></td>
            <td>
                <select class = "status">
                    <option ${pageItems[i].status === "Công khai" ? "selected" : ""}>Công khai</option>
                    <option ${pageItems[i].status === "Riêng tư" ? "selected" : ""}>Riêng tư</option>
                </select>
            </td>
            <td>
                <button class = "edit" onclick="edit(${start + i})">Sửa</button>
                <button class = "deletee" onclick="deletee(${start + i})">Xóa</button>
            </td>
        </tr>`;
    }

    document.getElementById("pageNumber").innerText = page;
}

function previous() {
    if (page > 1) {
        page--;
        show(page);
    }
}

function next() {
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