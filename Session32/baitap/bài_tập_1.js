function close() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return `rgb(${a},${b},${c})`;
}

function randomColor() {
    document.getElementById("boxColor").style.backgroundColor = close();
}
