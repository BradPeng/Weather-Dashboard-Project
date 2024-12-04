import API_KEY from './config.js';

const weatherForm = document.getElementById("weatherForm")

const submitWeatherForm = async (event) => {
    event.preventDefault()
    const lat = parseFloat(document.getElementById("latitude").value)
    const lon = parseFloat(document.getElementById("longitude").value)
    const units = parseFloat(document.getElementById("units").value)
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
    fetch(currentWeatherUrl).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data.main)
    })
}

weatherForm.addEventListener('submit', submitWeatherForm)
