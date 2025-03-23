const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

function weather() {
    let city = document.getElementById("city").value;
    let result = document.getElementById("result");
    if (weatherData[city]) {
        let data = weatherData[city];
        result.innerHTML =
            `
                <h2>${city}</h2>
                <h3>${data.icon} ${data.temperature} độ C</h3>
                <p>${data.description}</p>
                <p>Độ ẩm: ${data.humidity}%</p>
                <p>Tốc độ gió: ${data.windSpeed} km/h</p>
            `
    } else {
        result.innerHTML = `<p>Không tìm thấy thành phố</p>`;
    }
}
