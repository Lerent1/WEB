let size = 20;

function bigtext() {
    size += 2;
    document.getElementById("text").style.fontSize = size + "px";
}

function smalltext() {
    size -= 2;
    if (size < 10) {
        size = 10;
    }
    document.getElementById("text").style.fontSize = size + "px";
}