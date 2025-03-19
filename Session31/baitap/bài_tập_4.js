let openItem = document.getElementById("open");
let closeItem = document.getElementById("close");
let container = document.getElementById("container");

openItem.addEventListener("click", () => {
    container.style.display = "flex";
});

closeItem.addEventListener("click", () => {
    container.style.display = "none";
});