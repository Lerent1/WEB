let width = +prompt("Hãy nhập chiều dọc");
let height = +prompt("Hãy nhập chiều cao");
for (let i = 0; i < height; i++) {
    if (i == 0 || i == height - 1) {
        document.write("*".repeat(width) + "<br>");
    } else {
        document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
    }
}

