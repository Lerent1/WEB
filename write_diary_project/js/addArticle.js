function loadCategories() {
    let select = document.getElementById("category");
    select.innerHTML = '<option disabled selected> Chọn danh mục </option>';

    let entries = JSON.parse(localStorage.getItem("entries")) || [];

    for (let i = 0; i < entries.length; i++) {
        let option = document.createElement("option");
        option.value = entries[i].id;
        option.text = entries[i].name;
        select.appendChild(option);
    }
}

function add() {
    let title = document.getElementById("title").value.trim();
    let categori = document.getElementById("category");
    let category = categori.options[categori.selectedIndex].text;
    let mood = document.getElementById("mood").value.trim();
    let content = document.getElementById("content").value.trim();
    let imageInput = document.getElementById("upload");

    let status = "";
    if (document.getElementById("public").checked) {
        status = "Công khai";
    } else if (document.getElementById("private").checked) {
        status = "Riêng tư";
    }

    if (title === "" || category === "" || status === "") {
        alert("Hãy nhập đầy đủ");
        return;
    }

    if (imageInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function () {
            let imglink = reader.result;
            let article = JSON.parse(localStorage.getItem("article")) || [];

            let newArticle = {
                tittle: title,
                entries: category,
                mood: mood,
                content: content,
                status: status,
                image: imglink,
            };

            article.push(newArticle);
            localStorage.setItem("article", JSON.stringify(article));

            alert("Đã thêm bài viết");
            window.location.reload();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        let article = JSON.parse(localStorage.getItem("article")) || [];

        let newArticle = {
            tittle: title,
            entries: category,
            mood: mood,
            content: content,
            status: status,
            image: "",
        };

        article.push(newArticle);
        localStorage.setItem("article", JSON.stringify(article));

        alert("Đã thêm bài viết");
        window.location.reload();
    }
}

window.onload = loadCategories;