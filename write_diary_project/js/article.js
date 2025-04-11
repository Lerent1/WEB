let article = JSON.parse(localStorage.getItem("article")) || [
    {
        title: "A Productive Day at Work",
        date: "2025-02-25",
        content: "Today was a really productive day at work. I managed to <br>finish a report ahead of schedule and received positive<br> feedback from my manager.",
        mood: "chill",
        status: "Public",
        entries: "Daily Journal",
        image: "https://s3-alpha-sig.figma.com/img/9ca4/12fa/840de131974162b09d68033e23a850b5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MLUFkufR67hzPjgxu62-6kClL3KtrjCuhY-Wa7R3WMkn6XFbU5rQ~8r1ciIaiE0h6aM9VOMTsHk8JhhhMxo2ByuWio5C8E7ieveAqsYLgCyKO-A6R02ryUQ2WDshcIT1Id9hVOO8Sbua-OAA1-6M0j8nEQoLnaVidtSy2s0rHsAz7lBxVE0cGloK4dDyMT65PFR4YDs~JZeV6zUCSG~03d18PmY3Iq8lP2aO~cRNWvdnF8uCdN0~g3A0Mbj-Zlkc~IAjKn3BOqE-Am2W0Yd3BWBYE~D1MHQksX1LUwcjwiyegRctGXerA86UKnZ6YgfHJQfd2eD-qmcqiKvJwMq9~Q__"
    },
    {
        title: "My First Job Interview Experience",
        date: "2025-02-24",
        content: "I had my first job interview today! I was nervous at <br>first, but as the conversation went on, I felt more<br> confident.",
        mood: "happy",
        status: "Public",
        entries: "Work & Career",
        image: "https://s3-alpha-sig.figma.com/img/0095/33dd/b18880647940253fa905f2a8d6a3a95e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nJiS9HLhwj3wfm4dgTKA4c07msD4PKuDOJA1Te-rBlxg731HAWlEKg0w-QRrpXDOfSOGeXVTjHQfsR7FzXhZ3WQu0geBPLFF58ZqQZSbfje7asS75DH1hH5c1u6VzgifiEvJ6GV~mRh9qr9UydvO9WqtuOOGru-nkQ4Y-mZw9gGAcUlpIOqsCrGBylEJiwf2r2m-gsMAG68E3Yqmee1sIgiwoeBS7N0CuVBtGBL-SE6TjZJKFcZgWQqzvFMs3fEsu1cBXmFz09jtMkeYt-pMUK~QHA-WS8ouCClNlEmDgi06KcvDKBOLKN-TNiyxgshIU2hesvLDT2TMimU7QPHMvw__"
    },
    {
        title: "Overthinking Everything",
        date: "2025-02-23",
        content: "Lately, I have been overthinking everything, from small<br> decisions to bigger life choices.I know I should trust<br> myself",
        mood: "sad",
        status: "Private",
        entries: "Personal Thoughts",
        image: "https://s3-alpha-sig.figma.com/img/c220/b565/fba3f3369a85cb9bd4d04bf17c85be21?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZLpV7RXVJdcUxLSS9rsj98xGWJarL0-L67J5RwLZoUS6xW7heUX-S8i6kPa-5wrZxyY8BBpYpvAkzNX7CXwB6H6SeN-kNWD7dvlJrOYORJuC7kgdwkO-QkfvT2SodS-IK3CKnSO1DxO5HVv7jgmB8dG4zRfG1sMwQBxn0H2H2QG2VvCJIRYqns2AqHlyOcGLNHMk7KukgzIm5OfZyaQT9VA~uH-WgQh-OsD04XSdx9nU4O2a3GhV8aivFFV8r1lcM7msglRTiSAPr1regeTuYZ2Xlis2MoufT1yuqBUnm9GZItc4UAKn-3shi-SL-rGtGJqa4xuduM5T5YSfDstf-A__"
    },
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
            <td>${pageItems[i].title}</td>
            <td>${pageItems[i].entries}</td>
            <td>${pageItems[i].content}</td>
            <td><span class = "mood">${pageItems[i].mood}</span></td>
            <td>
                <select class = "status">
                    <option ${pageItems[i].status.toLowerCase() === "public" ? "selected" : ""}>Public</option>
                    <option ${pageItems[i].status.toLowerCase() === "private" ? "selected" : ""}>Private</option>
                </select>
            </td>
            <td>
                <button class = "edit" onclick="edit(${start + i})">Edit</button>
                <button class = "deletee" onclick="deletee(${start + i})">Delete</button>
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
    if (confirm("Are you sure about that?")) {
        article.splice(button, 1);
        localStorage.setItem("article", JSON.stringify(article));

        let maxPage = Math.ceil(article.length / number);
        if (page > maxPage) page = maxPage;
        show(page);
    }
}

let currentEditIndex = null;
function edit(index) {
    loadCategories();
    let entry = article[index];
    currentEditIndex = index;

    let update = true;
    document.getElementById("nameArticle").innerText = update ? "Edit Article" : "Add New Article";

    document.getElementById("editTitle").value = entry.title;
    document.getElementById("editEntries").value = entry.entries;
    document.getElementById("editContent").value = entry.content;
    document.getElementById("editMood").value = entry.mood;
    document.getElementById("editStatus").value = entry.status;
    document.getElementById("editImage").value = entry.image;

    document.getElementById("editModal").style.display = "block";
}

function saveEdit() {
    let updated = {
        title: document.getElementById("editTitle").value,
        entries: document.getElementById("editEntries").value,
        content: document.getElementById("editContent").value,
        mood: document.getElementById("editMood").value,
        status: document.getElementById("editStatus").value,
        image: document.getElementById("editImage").value,
        date: new Date().toISOString().split("T")[0]
    };

    if (
        updated.title && updated.entries && updated.content &&
        updated.mood && (updated.status.toLowerCase() === "public" || updated.status.toLowerCase() === "private")
    ) {
        if (currentEditIndex === null) {
            article.push(updated);
        } else {
            article[currentEditIndex] = updated;
        }

        localStorage.setItem("article", JSON.stringify(article));
        closeEdit();
        show(page);
    } else {
        alert("Invalid information");
    }
}

function closeEdit() {
    document.getElementById("editModal").style.display = "none";
}

function loadCategories() {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    let selects = [document.getElementById("category"), document.getElementById("editEntries")];
    for (let i = 0; i < selects.length; i++) {
        let select = selects[i];
        if (!select) {
            continue;
        }

        select.innerHTML = '<option disabled selected> Chọn danh mục </option>';

        for (let j = 0; j < entries.length; j++) {
            let option = document.createElement("option");
            option.value = entries[j].name;
            option.text = entries[j].name;
            select.appendChild(option);
        }
    }
}

function openAdd() {
    currentEditIndex = null;

    let update = false;
    document.getElementById("nameArticle").innerText = update ? "Edit Article" : "Add New Article";

    document.getElementById("editTitle").value = "";
    document.getElementById("editEntries").value = "";
    document.getElementById("editContent").value = "";
    document.getElementById("editMood").value = "";
    document.getElementById("editStatus").value = "Public";
    document.getElementById("editImage").value = "";

    document.getElementById("editModal").style.display = "block";
}

window.onload = loadCategories;

function profile() {
    document.getElementById("menu").classList.toggle("active");
}
window.onclick = function (event) {
    if (!event.target.closest(".profile")) {
        document.getElementById("menu").classList.remove("active");
    }
}

show(page);