(function () {
    document.querySelector('.button').addEventListener('click', ()=>{
        const city= document.querySelector('.location');
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=faae4384b82ce902b9947e7e15832ba1')
        .then(response => response.json()).then(
            data=> {
                 document.querySelector('.temp').innerHTML= toCelsius(data['main']['temp']);
                 document.querySelector('.city').innerHTML=data['name'];
                 document.querySelector('.desc').innerHTML=data['weather'][0]['description'];
            }
            
        )

    })
  }());
  function toCelsius(temperature) { return Math.trunc(temperature- 273.15);} 
 
