const employees = [
    {
        id: 1,
        name: 'John',
        age: 18,
        address: 'New York'
    },
    {
        id: 2,
        name: 'Mike',
        age: 22,
        address: 'Canada'
    },
    {
        id: 3,
        name: 'Linda',
        age: 19,
        address: 'California'
    },
    {
        id: 4,
        name: 'Peter',
        age: 25,
        address: 'London'
    },
    {
        id: 5,
        name: 'Tony',
        age: 17,
        address: 'New York'
    }
];

let table = document.getElementById("table");
for (let i = 0; i < employees.length; i++) {
    let row = document.createElement("tr");
    let employ = employees[i];
    row.appendChild(create(employ.id));
    row.appendChild(create(employ.name));
    row.appendChild(create(employ.age));
    row.appendChild(create(employ.address));
    table.appendChild(row);
}

function create(data) {
    let cell = document.createElement("td");
    cell.textContent = data;
    return cell;
}