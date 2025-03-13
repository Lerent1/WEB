console.log("============== Menu ==============");
console.log("1. Cộng hai số.");
console.log("2. Trừ hai số.");
console.log("3. Nhân hai số.");
console.log("4. Chia hai số.");
console.log("5. Thoát chương trình");
console.log("==================================");
let choose;
let firstNum;
let secondNum;

function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


do {
    choose = +prompt("Hãy nhập lựa chọn của bạn");
    switch (choose) {
        case 1: {
            firstNum = +prompt("Hãy nhập số thứ nhất");
            secondNum = +prompt("Hãy nhập số thứ nhất");
            console.log(sum(firstNum, secondNum));
            break;
        }
        case 2: {
            firstNum = +prompt("Hãy nhập số thứ nhất");
            secondNum = +prompt("Hãy nhập số thứ nhất");
            console.log(minus(firstNum, secondNum));
            break;
        }
        case 3: {
            firstNum = +prompt("Hãy nhập số thứ nhất");
            secondNum = +prompt("Hãy nhập số thứ nhất");
            console.log(multi(firstNum, secondNum));
            break;
        }
        case 4: {
            firstNum = +prompt("Hãy nhập số thứ nhất");
            secondNum = +prompt("Hãy nhập số thứ nhất");
            console.log(divide(firstNum, secondNum));
            break;
        }
        case 5: {
            console.log("Thoát chương trình");
            break;
        }
        default:
            console.log("kết thúc");
    }
} while (choose != 5);