document.addEventListener("DOMContentLoaded", function (){

    let meteo = {};

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Bordeaux&appid=26ef2197205b6d826ebba06de95ad328')
        .then(data => data.json())
        .then(results => {
            console.log(results);
            meteo = results.list;
            console.log(meteo);
        })
        .catch(err => console.error('Failed request.'))
        .finally()
})