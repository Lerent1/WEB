const courses = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17', status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm th',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    },
];

function show(arr) {
    let list = document.getElementById("list");
    list.innerHTML = "";
    arr.forEach((product, index) => {
        let cardimg = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.content}</td>
                        <td>${product.dueDate}</td>
                        <td>${product.status}</td>
                        <td>${product.assignedTo}</td>
                        <td>
                            <button onclick="updatee(this)">&nbsp; Sửa &nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onclick="deletee(this)">&nbsp; Xóa &nbsp;</button>
                        </td>
                    </tr>
                `;
        list.innerHTML += cardimg;
    });
}
show(courses);

function deletee(dele) {
    let xoa = dele.closest('tr');
    if (xoa) {
        xoa.remove();
    }
}

function updatee(upda) {
    let row = upda.closest('tr');
    let td = row.querySelectorAll("td");
    for (let i = 0; i < td.length - 1; i++) {
        let newInfor = prompt(`Sửa nội dung: ` + td[i].textContent);
        if (newInfor !== null && newInfor.trim() !== "") {
            td[i].textContent = newInfor.trim();
        }
    }
}

let createCourses = JSON.parse(localStorage.getItem("createCourses")) || courses;
function local() {
    let content = document.getElementById("content").value;
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;
    let assignedTo = document.getElementById("assignedTo").value;
    if (!content || !dueDate || !status || !assignedTo) {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    let user = {
        id: Math.floor(Math.random() * 100),
        content: content,
        dueDate: dueDate,
        status: status,
        assignedTo: assignedTo,
    }
    createCourses.push(user);
    localStorage.setItem('createCourses', JSON.stringify(createCourses));
    show(createCourses);
}