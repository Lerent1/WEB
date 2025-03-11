function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("Không hợp lệ");
    }
    let upper = 0;
    let lower = 0;
    let digit = 0;
    for (let i = 0; i < password.length; i++) {
        let pass = password[i];
        if (pass.toUpperCase() === pass && pass.toLowerCase() !== pass) {
            upper = 1;
        }
        else if (pass.toLowerCase() === pass && pass.toUpperCase() !== pass) {
            lower = 1;
        }
        else if (!isNaN(pass)) {
            digit = 1;
        }
        if (upper == 1 && lower == 1 && digit == 1) {
            return true;
        }
    }
    return false;
}
console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));