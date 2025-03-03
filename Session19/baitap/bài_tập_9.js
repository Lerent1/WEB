let result = "javascript" + 5; // KQ: "javascript5" / nối chuỗi
let result = "javascript" - 1; // KQ: NaN / Phép toán - không áp dụng được với chuỗi
let result = "3" + 2; // KQ: "32" / nối chuỗi
let result = "5" - 4; // KQ: 1 / Dấu - chuyển "5" thành số rồi thực hiện phép trừ
let result = isNaN("123"); // KQ: false / Chuỗi "123" có thể chuyển thành số, nên không phải là NaN
let result = isNaN("hello"); // KQ: true / "hello" không thể chuyển thành số
let result = Number.isNaN("123"); // KQ: false / Number.isNaN chỉ trả về true nếu đối số thực sự là NaN
let result = Number.isNaN(NaN); // KQ: true / NaN là NaN