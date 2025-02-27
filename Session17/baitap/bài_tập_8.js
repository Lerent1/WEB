let time1 = new Date(prompt("Hay nhap ngay dau tien"));
let time2 = new Date(prompt("Hãy nhập ngày thứ hai"));
let datereil = Math.abs((time1 - time2) / (1000 * 60 * 60 * 24));
alert(datereil);