let products = [
    {
        id: 1,
        name: "iPhone 13",
        price: 20000,
        quantity: 20,
        category: "Apple",
    },
    {
        id: 2,
        name: "Samsung Galaxy",
        price: 80000,
        quantity: 21,
        category: "Samsung",
    },
    {
        id: 3,
        name: "Xiaomi Mi 11",
        price: 40000,
        quantity: 15,
        category: "Xiaomi",
    },
];

console.log("===================== Giỏ  hàng =====================");
console.log("1. Hiển thị danh sách sách theo thể loại.");
console.log("2. Thêm sách mới vào kho.");
console.log("3. Tìm kiếm sách theo tên hoặc id.");
console.log("4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).");
console.log("5. Sắp xếp sách theo giá.");
console.log("6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng");
console.log("7. Hiển thị tổng số lượng sách trong kho.");
console.log("8. Thoát chương trình.");
console.log("=====================================================");
let choice;
let cart = [];

function showcate() {
    let chosse = +prompt("Moi ban nhap lua chon 1 là kinh 2 la mong");
    if (chosse == 1) {
        let mot = products.filter((doan) => doan.category == "Apple");
        console.log(mot);
    } else if (chosse == 2) {
        let hai = products.filter((doan) => doan.category == "Samsung");
        console.log(hai);
    } else if (chosse == 3) {
        let ba = products.filter((doan) => doan.category == "Xiaomi");
        console.log(ba);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}

function add() {
    let id = +prompt("Nhập ID: ");
    let name = prompt("Nhập tên: ");
    let price = +prompt("Nhập giá: ");
    let category = prompt("Nhập hãng: ");
    let quantity = +prompt("Nhập số lượng: ");
    let add = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category,
    };
    contact.push(add);
    console.log(products);
}

function findid() {
    let aidi = prompt("Hãy nhập id hoặc tên");
    let findid = products.find((find) => find.id === Number(aidi) || find.name === aidi);
    if (findid) {
        console.log(findid);
    } else {
        console.log("Không tìm thấy.");
    }
}

function find() {
    let aidi = +prompt("Hãy nhập id muốn tìm kiếm")
    let findid = products.findIndex((find) => find.id === aidi);
    if (findid == -1) {
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
                    quantity: mua,
                    price: products[findid].price,
                    category: products[findid].category,
                });
                console.log(cart);
            }
        }
    }
}

function checkout() {
    if (cart.length > 0) {
        console.log("Thanh toán thành công");
        cart = [];
    } else {
        console.log("Giỏ hàng trống");
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
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price * products[i].quantity;
    }
    console.log(`Tổng tiền là ${sum}`);
}

function sumphone() {
    let apple = products.filter((doan) => doan.category == "Apple")
        .reduce((sum, phone) => sum + phone.quantity, 0);
    let samsung = products.filter((doan) => doan.category == "Samsung")
        .reduce((sum, phone) => sum + phone.quantity, 0);
    let xiaomi = products.filter((doan) => doan.category == "Xiaomi")
        .reduce((sum, phone) => sum + phone.quantity, 0);
    console.log(`Apple - ${apple}`);
    console.log(`Samsung - ${samsung}`);
    console.log(`Xiaomi - ${xiaomi}`);
}

do {
    choice = +prompt("lựa chọn của bạn là ");
    switch (choice) {
        case 1: {
            showcate();
            break;
        }
        case 2: {
            add();
            break;
        }
        case 3: {
            findid();
            break;
        }
        case 4: {
            find();
            break;
        }
        case 5: {
            checkout();
            break;
        }
        case 6: {
            sort();
            break;
        }
        case 7: {
            sum();
            break;
        }
        case 8: {
            sumphone();
            break;
        }
        case 9:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }
} while (choice != 9);