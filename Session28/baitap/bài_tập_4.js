let rectangle = {
    width: 16,
    height: 7,
    getArea: function () {
        return this.width * this.height;
    }
};
let area = rectangle.getArea();
console.log("Diện tích hình chữ nhật:", area);
