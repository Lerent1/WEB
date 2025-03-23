const products = [
    {
        id: 1, name: "Laptop Dell XPS 15",
        price: 35990000,
        image: "https://www.laptopvip.vn/images/detailed/31/notebook-xps-15-9530-t-black-g--1-~1-pkeb-ii-www.laptopvip.vn-1683083662.png",
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 32990000,
        image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro."
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 28990000,
        image: "https://images.samsung.com/vn/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg?imbypass=true",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "Tai nghe Sony WH - 1000XM5",
        price: 7990000,
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha",
        description: "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ."
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: 11990000,
        image: "https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: 3990000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEd8O129ihUJ03WBIw2pTzuAWDcm2w3uO17w&s",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];

function show(arr) {
    let list = document.getElementById("list");
    list.innerHTML = "";
    arr.forEach(product => {
        let cardimg = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text"><strong>Giá:</strong> ${product.price.toLocaleString()} VND</p>
                            </div>
                        </div>
                    </div>
                `;
        list.innerHTML += cardimg;
    });
}

show(products);