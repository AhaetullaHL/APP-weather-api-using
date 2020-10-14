document.addEventListener("DOMContentLoaded", function (){

    const cityInput = document.querySelector('#city');
    const appForm = document.querySelector('.app-form');

    appForm.addEventListener('submit', function (e){
        e.preventDefault();
        let city = cityInput.value;
        console.log(city);
        weather(city);
    })


})

function weather(city)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26ef2197205b6d826ebba06de95ad328&units=metric`)
        .then(data => data.json())
        .then(results => {
            console.log(results);
            let meteo = results.list;
            console.log(meteo);
        })
        .catch(err => console.error('Failed request.' + err))


}