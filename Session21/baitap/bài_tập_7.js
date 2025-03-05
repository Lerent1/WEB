let money = +prompt("Hãy nhập số tiền ban đầu bạn muốn gửi");
let lai = +prompt("Hãy nhập lãi suất");
let month = +prompt("hãy nhập số tháng gửi");
let total = money * (lai / 100) * month;
let interest = total - money;
console.log("tien lai: " + Number(interest) + " VND");
console.log("tien nhan duoc: " + Number(total) + " VND");