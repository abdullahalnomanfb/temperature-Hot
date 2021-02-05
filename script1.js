const inputValue = document.getElementById("inputValue");

const country = document.getElementById("country");

const clouds = document.getElementById("clouds");

const temperature = document.getElementById("temp");

const apiKey = '5cc747e47701d53a743d6d793e077a1d'

const weather = () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${apiKey}`)

        .then(res => res.json())
        .then(data => {

            country.innerText = data.name || "Unknown City";
            temperature.innerText = data.main.temp;
            clouds.innerText = data.weather[0].main;
        })
      .catch( error => alert("Plese give the correct City or Country !"));  

}


document.getElementById("btn").addEventListener('click', () => {

    weather();

})



