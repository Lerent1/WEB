let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];
function checkscore(student) {
    let result = [];
    for (let i = 0; i < student.length; i++) {
        let math = student[i].scores.math;
        let english = student[i].scores.english;
        let literature = student[i].scores.literature;
        let score = (math + english + literature) / 3;
        if (score >= 8) {
            result.push(student[i]);
        }
    }
    return result;
}
console.log(checkscore(students));