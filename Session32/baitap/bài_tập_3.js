let list = ["Toán", "Lý", "Hóa"];

function monHoc() {
    let score = "";
    for (let i = 0; i < list.length; i++) {
        score += `<li>${list[i]}</li>`;
    }

    let tableElement = document.getElementById("table");
    tableElement.innerHTML = score;

    console.log(score);
}
monHoc();

function addmonHoc() {
    let add = document.getElementById("add").value.trim();
    if (add === "") {
        alert("tên môn học không được để trống!");
    } else {
        list.push(add);
        monHoc();
        document.getElementById("add").value = "";
    }
}