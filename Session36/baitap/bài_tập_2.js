const eat = [
    {
        image: "https://hoasenfoods.vn/wp-content/uploads/2024/01/bun-bo-hue.jpg",
        name: "Bún bò Huế",
        like: "0 lượt thích",
    },
    {
        image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/11/8/1114050/1.jpg",
        name: "Phở bò Hà Nội",
        like: "1 lượt thích",
    },
    {
        image: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg",
        name: "Cơm tấm Sài Gòn",
        like: "0 lượt thích",
    },
];

localStorage.setItem("name", JSON.stringify(eat));

function show() {
    let str = "";
    for (let i = 0; i < eat.length; i++) {
        str += `<div class = "container">
        <img src="${eat[i].image}" width=200 height=150 alt="">
        <div>
            <h3>${eat[i].name}</h3>
            <p>&#10084; ${eat[i].like}</p>
            <button onclick="like(${i})">Thích + 1</button>
        </div>
        </div>
        `;
    }
    document.getElementById("container").innerHTML = str;
}
show();

function like(number) {
    let eat = JSON.parse(localStorage.getItem("eat"));
    eat[number].like += 1;
    localStorage.setItem("eat", JSON.stringify(eat));
    show();
}

window.onload = function () {
    if (localStorage.getItem("eat")) {
        show();
    }
};