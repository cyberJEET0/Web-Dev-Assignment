const form = document.querySelector('#form');
const cityInput = document.querySelector('#city');
const info = document.querySelector('.info');
const historyDiv = document.querySelector('.historyBtn');
const consoleBox = document.querySelector('.console');

let history = [];

// Utility: print to console UI
function log(msg) {
    const p = document.createElement('div');
    p.textContent = msg;
    consoleBox.appendChild(p);
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// Fake async weather fetch (simulate API)
function fetchWeather(city) {
    log("Sync Start");

    return new Promise((resolve, reject) => {
        log("Async: Start Fetching");

        setTimeout(() => {
            if (city.toLowerCase() === "delhi") {
                reject("City not found");
            } else {
                resolve({
                    city: city,
                    temp: "21.1 °C",
                    weather: "Haze",
                    humidity: "52%",
                    wind: "5.14 m/s"
                });
            }
        }, 1500);

        log("setTimeout (Macrotask)");
    });
}

// Show weather
function displayWeather(data) {
    info.innerHTML = `
        <h3>Weather Info</h3>
        <p><b>City:</b> ${data.city}</p>
        <p><b>Temp:</b> ${data.temp}</p>
        <p><b>Weather:</b> ${data.weather}</p>
        <p><b>Humidity:</b> ${data.humidity}</p>
        <p><b>Wind:</b> ${data.wind}</p>
    `;
}

// Add history button
function addHistory(city) {
    if (history.includes(city)) return;

    history.push(city);

    const btn = document.createElement('button');
    btn.textContent = city;

    btn.addEventListener('click', () => {
        cityInput.value = city;
        form.dispatchEvent(new Event('submit'));
    });

    historyDiv.appendChild(btn);
}

// Form submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = cityInput.value;
    consoleBox.innerHTML = ""; // clear console

    try {
        const data = await fetchWeather(city);
        log("Promise resolved (Microtask)");
        displayWeather(data);
        addHistory(city);
        log("Async Data Received");
    } catch (err) {
        info.innerHTML = `<h3>Weather Info</h3><p style="color:red;">${err}</p>`;
        log("Error: " + err);
    }
});