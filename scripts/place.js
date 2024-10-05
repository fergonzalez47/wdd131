const weather = document.querySelector(".weather");
const temp = document.getElementById("temperature");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const windChill = document.getElementById("wind-chill");

let temperature = 22;
let windSpeed = 2;

function calculateWindChill(tempParam, windSpeedParam) {
    return 13.12 + 0.6215 * tempParam - 11.37 * Math.pow(windSpeedParam, 0.16) + 0.3965 * tempParam * Math.pow(windSpeedParam, 0.16);

}

temp.textContent = `${temperature} °C`;
condition.textContent = "Sunny";
wind.textContent = `${windSpeed} km/h`


if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = calculateWindChill(temperature, windSpeed).toFixed(2); // Calcula y asigna el wind chill
} else {
    windChill.textContent = "N/A";  // Asigna "N/A" si no se cumple la condición
}


