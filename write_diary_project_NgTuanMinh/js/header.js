function profile() {
    document.getElementById("menu").classList.toggle("active");
}
window.onclick = function (event) {
    if (!event.target.closest(".profile")) {
        document.getElementById("menu").classList.remove("active");
    }
}