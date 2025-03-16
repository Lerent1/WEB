const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
function sum(money) {
    return money.reduce((a, b) => a + b.price * b.quantity, 0);
}
console.log("Tổng tiền là: ", sum(cart));