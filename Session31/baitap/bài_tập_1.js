let title = document.getElementsByTagName("h1");

function hidetext() {
    title[0].classList.add("hideshow");
}
function showtext() {
    title[0].classList.remove("hideshow");
}