let backgroundColor = localStorage.getItem('color');

function chageColor(color) {
    document.getElementById("container").style.backgroundColor = color;
    localStorage.setItem("color", color);
}
chageColor(backgroundColor);