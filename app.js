
let input=document.querySelector('.city-input');

let btn=document.querySelector('.btn-search');
btn.addEventListener('click', displayWeather)






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
    })
    .catch(error=>console.log(error))
}
