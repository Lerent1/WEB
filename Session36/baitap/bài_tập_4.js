let color = localStorage.getItem("background");

function chageColor() {
    if (document.getElementById("container").style.backgroundColor == "black") {
        document.getElementById("container").style.backgroundColor = "white";
        document.getElementById("container").style.opacity = 1;
        localStorage.setItem("background", "white");
    } else {
        document.getElementById("container").style.backgroundColor = "black";
        document.getElementById("container").style.opacity = 0.5;
        localStorage.setItem("background", "black");
    }
}

chageColor(color);

function chagecolor() {
    if (color == "black") {
        document.getElementById("container").style.backgroundColor = "black";
        document.getElementById("container").style.opacity = 0.5;
    } else {
        document.getElementById("container").style.backgroundColor = "white";
        document.getElementById("container").style.opacity = 1;
    }
}

chagecolor();