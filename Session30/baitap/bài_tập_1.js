let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

console.log("===================== Giỏ  hàng =====================");
console.log("1. Hiển thị các sản phẩm theo tên danh mục.");
console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
console.log("3. Sắp xếp các sản phẩm trong cửa hàng theo giá.");
console.log("4. Tính số tiền thanh toán trong giỏ hàng.");
console.log("5. Thoát.");
console.log("=====================================================");
let choice;
let cart = [];

function showcate() {
    let chosse = +prompt("Moi ban nhap lua chon 1 là kinh 2 la mong");
    if (chosse == 1) {
        let mot = products.filter((doan) => doan.category == "món ăn dân tộc Kinh");
        console.log(mot);
    } else if (chosse == 2) {
        let hai = products.filter((doan) => doan.category == "món ăn dân tộc Mông");
        console.log(hai);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}

function find() {
    let aidi = +prompt("Hãy nhập id muốn tìm kiếm")
    let findid = products.find((find) => find.id === aidi);
    if (!findid) {
        alert("Sản phẩm không có trong cửa hàng");
    } else {
        let mua = +prompt("Hãy nhập số hàng muốn mua");
        if (products[findid].quantity < mua) {
            console.log(`Sản phẩm chỉ còn ${products[findid].quantity}`);
        } else {
            products[findid].quantity -= mua;
            let index = cart.findIndex(item => item.id == aidi);
            if (index == -1) {
                cart.push({
                    id: aidi,
                    name: products[findid].name,
                    quantity: choseQuantity,
                    price: products[findid].price,
                    category: products[findid].category,
                });
                console.log(cart);
            }
        }
    }
}

function sort() {
    let text = prompt("Hãy chọn kiểu muốn sắp xếp")
    if (text === "up") {
        for (let i = 0; i < products.length - 1; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (products[i].price > products[j].price) {
                    let temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    } else if (text === "down") {
        for (let i = 0; i < products.length - 1; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (products[i].price < products[j].price) {
                    let temp = products[j];
                    products[j] = products[i];
                    products[i] = temp;
                }
            }
        }
    }
    console.log("Danh sách sau khi sắp xếp là:", products);
}

function sum() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }
    console.log(`Tổng tiền là ${sum}`);
}

do {
    choice = +prompt("lựa chọn của bạn là ");
    switch (choice) {
        case 1: {
            showcate();
            break;
        }
        case 2: {
            find();
            break;
        }
        case 3: {
            sort();
            break;
        }
        case 4: {
            sum();
            break;
        }
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice != 5);