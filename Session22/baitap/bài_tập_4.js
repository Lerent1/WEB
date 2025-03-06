let number = +prompt("Hãy nhập một dãy số bất kì");
if (Number.isInteger(number)) {
    let arr = number.toString().split("");
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
} else {
    alert("Dãy số không hợp lệ");
}