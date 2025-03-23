let valueprogess = 0;
let opacity = 0;
function up() {
    valueprogess += 10;
    if (valueprogess >= 100) {
        valueprogess = 100;
    }
    document.getElementById("progess").value = valueprogess;
    opacity += 0.1;
    if (opacity >= 1) {
        opacity = 1;
    }
    document.getElementsByTagName("container")[0].style.opacity = opacity;
}

function down() {
    valueprogess -= 10;
    if (valueprogess <= 0) {
        valueprogess = 0;
    }
    document.getElementById("progess").value = valueprogess;
    opacity -= 0.1;
    if (opacity <= 0) {
        opacity = 0.1;
    }
    document.getElementsByTagName("container")[0].style.opacity = opacity;
}