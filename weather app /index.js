window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = 'https://fcc-weather-api.glitch.me/api/current?lat= + ${lat} + &lon= + ${lon}';


            fetch(api)
                .then(response => {
                return response.json();
                })
                .then(data => {
                console.log(data);
             });
       
        });




    } else{
        h1.textContent = " allow geolocation for this service"
    }


});

