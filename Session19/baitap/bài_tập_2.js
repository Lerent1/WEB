let word = prompt("Hãy nhập chữ cái");
if (word < 9) {
    alert("Không phải chữ cái");
} else if (word.length === 1) {
    alert("Ký tự " + word + " là chữ cái");
} else {
    alert("Không phải chữ cái");
}