let pickem = +prompt("Hãy chọn loại tiền bạn muốn đổi: 1 là VND || 2 là USD");
if (pickem == 1) {
    let moneyVND = +prompt("Hãy nhập số tiền bạn muốn chuyển");
    let vND = moneyVND / 23000;
    alert("Số tiền đã đổi thành công của bạn là " + vND);
} else if (pickem == 2) {
    let moneyUSD = +prompt("Hãy nhập số tiền bạn muốn chuyển");
    let uSD = (moneyUSD * 23000).toLocaleString();
    alert("Số tiền đã đổi thành công của bạn là " + uSD);
} else {
    alert("Lựa chọn không hợp lệ");
}