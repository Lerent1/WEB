function check(text) {
    text = text.toLowerCase();
    let space = "";
    let capitalize = true;
    for (let i = 0; i < text.length; i++) {
        if (capitalize && text[i] !== " ") {
            space += text[i].toUpperCase();
            capitalize = false;
        } else {
            space += text[i];
        }
        if (text[i] === " ") {
            capitalize = true;
        }
    }
    return space;
}
console.log(check("hello WORLD"));
