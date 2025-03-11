function isPalindrome() {
    let check = prompt("Hãy nhập một chuỗi bất kì");
    let flag = 1;
    for (let i = 0; i < check.length / 2; i++) {
        if (check[i] !== check[check.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        console.log("Là chuỗi đối xứng");
    } else {
        console.log("Không phải là chuỗi đối xứng");
    }
}
isPalindrome();

// function isPalindrome(text) {
//     return text === text.split("").reverse().join("");
// }
// let check = prompt("Hãy nhập một chuỗi bất kì");
// if (check !== false) {
//     if (isPalindrome(check)) {
//         console.log("Là chuỗi đối xứng");
//     } else {
//         console.log("Không phải là chuỗi đối xứng");
//     }
// }