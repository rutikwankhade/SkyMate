
let input=document.querySelector('.city-input');

let btn=document.querySelector('.btn-search');
btn.addEventListener('click', ()=>{
    displayWeather();
    // updateUI();
})






 function displayWeather(){
    let place = input.value;
    console.log(place);
    let api="https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/find?q="+ place +"&units=metric&appid=850cac4c51c8a61b959dfe0593e8cb07";
    console.log(api);

    fetch(api)
    .then(response=>{
        data=response.json();
        return data;
})
    .then(data=>{
        console.log(data);
        let temp=data.list[0].main.feels_like;
        let weather=data.list[0].weather[0].description;
        let windSpeed=data.list[0].wind.speed;
        let maxTemp=data.list[0].main.temp_max;
        let minTemp=data.list[0].main.temp_min;
        let humidity=data.list[0].main.humidity;
        let pressure=data.list[0].main.pressure;


        tempText.textContent=temp;
        weatherText.textContent=weather;       
        windspeedText.textContent=windSpeed;
        maxTempText.textContent=maxTemp;

        minTempText.textContent=minTemp;
        humidityText.textContent=humidity;
        pressureText.textContent=pressure;



    })
    .catch(error=>console.log(error))
}

let tempText = document.querySelector('.temp');

let weatherText = document.querySelector('.weather');
let windspeedText = document.querySelector('.wind-speed');
let maxTempText = document.querySelector('.max-temp');
let minTempText = document.querySelector('.min-temp');
let humidityText = document.querySelector('.humidity');
let pressureText = document.querySelector('.pressure');






// function updateUI(weather){
// }