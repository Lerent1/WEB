function clickImage(img) {
    let picture = document.getElementById("picture");
    let large = document.getElementById("large");
    large.src = img.src;
    picture.style.display = "flex";
}

function closeImage() {
    document.getElementById("picture").style.display = "none";
}
