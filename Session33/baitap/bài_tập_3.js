let dishes = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' }
];

function select() {
    let select = document.getElementById("select").value;
    let list = document.getElementById("list");
    list.innerHTML = "";

    let search = dishes.filter(dish => select === "" || dish.category === select);

    search.forEach(dish => {
        let li = document.createElement("li");
        li.classList.add("product");
        li.innerHTML = `<b>Tên đồ ăn:</b> ${dish.name} - <b>Danh mục:</b> ${dish.category}`;
        list.appendChild(li);
    });
}