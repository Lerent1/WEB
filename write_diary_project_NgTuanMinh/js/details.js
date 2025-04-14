let index = localStorage.getItem("details");
let articles = JSON.parse(localStorage.getItem("article"));
let post = articles[index];

if (post) {
    document.getElementById("image").src = post.image;
    document.getElementById("date").innerText = "Date: " + post.date;
    document.getElementById("title").innerText = post.title;
    document.getElementById("content").innerHTML = post.content;
}