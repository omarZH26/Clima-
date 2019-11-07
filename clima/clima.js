const axios = require('axios');


const getClima = async(lat, lng) => {
    const temp = 273.15;
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f257a6ac25fb6a95fb91adfa4733d236`);

    var temperaturaGrados = resp.data.main.temp;

    return parseFloat(temperaturaGrados - temp).toFixed(2);
}

module.exports = {
    getClima
}