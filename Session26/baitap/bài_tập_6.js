function Dates(dateArr) {
    if (Array.isArray(dateArr)) {
        if (dateArr.length > 0) {
            let convertedDates = dateArr.map(dateStr => {
                let parts = dateStr.split("-");
                if (parts.length !== 3) {
                    return null;
                }
                let [year, month, day] = parts;
                let date = new Date(`${year}-${month}-${day}`);
                if (date.getFullYear() != year || (date.getMonth() + 1) != month || date.getDate() != day) {
                    return null;
                }
                return `${day}/${month}/${year}`;
            }).filter(date => date !== null);
            return convertedDates.length ? convertedDates : "Dữ liệu không hợp lệ";
        } else {
            console.log("Mảng không có phần tử nào");
        }
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
console.log(Dates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(Dates([]));
console.log(Dates("abc"));