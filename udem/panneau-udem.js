function getMontrealTime() {
    const montrealTime = new Date().toLocaleString("en-US", {timeZone: "America/Montreal"});
    return montrealTime;
  }
  
  function updateMontrealTime() {
    const montrealTimeElement = document.getElementById("montreal-time");
    montrealTimeElement.textContent = getMontrealTime();
  }
  
  setInterval(updateMontrealTime, 1000);
  
  updateMontrealTime();


function mettreAJourThermometre(temperature) {
  temperature = Math.min(50, Math.max(-10, temperature));
  
  var svg = document.getElementById('thermometre');
  
  svg.innerHTML = '';
  
  var svgElem = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svgElem.setAttributeNS(null, 'width', 250); 
  svgElem.setAttributeNS(null, 'height', 600); 
  svgElem.setAttributeNS(null, 'viewBox', '-40 60 300 500');
  svg.appendChild(svgElem);
  
  var tube = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  tube.setAttributeNS(null, 'x', 120); 
  tube.setAttributeNS(null, 'y', 120); 
  tube.setAttributeNS(null, 'width', 20);
  tube.setAttributeNS(null, 'height', 400);
  tube.setAttributeNS(null, 'fill', '#ccc');
  svgElem.appendChild(tube);
  
  var hauteurMercure = (temperature + 10) * 7; 
  var mercure = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  mercure.setAttributeNS(null, 'x', 120); 
  mercure.setAttributeNS(null, 'y', 570 - hauteurMercure); 
  mercure.setAttributeNS(null, 'width', 20);
  mercure.setAttributeNS(null, 'height', hauteurMercure); 
  mercure.setAttributeNS(null, 'fill', 'yellow');
  svgElem.appendChild(mercure);
  
  for (var i = -10; i <= 50; i += 10) {
      var trait = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      trait.setAttributeNS(null, 'x', 115); 
      trait.setAttributeNS(null, 'y', 570 - ((i + 10) * 7)); 
      trait.setAttributeNS(null, 'width', 30); 
      trait.setAttributeNS(null, 'height', 2); 
      trait.setAttributeNS(null, 'fill', 'white');
      trait.setAttributeNS(null, 'opacity', 0.5);
      svgElem.appendChild(trait);
      
      var texte = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      texte.setAttributeNS(null, 'x', 160); 
      texte.setAttributeNS(null, 'y', 575 - ((i + 10) * 7)); 
      texte.setAttributeNS(null, 'fill', 'white');
      texte.textContent = i + '°C';
      svgElem.appendChild(texte);
  }
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=e8febe2576e11b08f9a9e2399258479c')
.then(response => response.json())
.then(data => {
  var temperature = data.main.temp;
  mettreAJourThermometre(temperature);
})
.catch(error => {
  console.error('Erreur lors de la récupération de la température :', error);
});
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=e8febe2576e11b08f9a9e2399258479c";


async function checkWeather(){
  const response = await fetch(apiUrl);
  var data = await response.json()

  console.log(data)

  document.querySelector(".laTemperature").innerHTML = Math.round(data.main.temp) + "°C" ;
  var weatherIcon = document.querySelector(".icon");
  var images = document.getElementById("panneau-2");
  var msg = document.querySelector("#texts");

  if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "udem/nuages.png";
   
  }
  else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "udem/soleil.png";

  }
  else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "udem/pluie.png";
    
  }
  else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "udem/bruines.png";
  
  }
  else if(data.weather[0].main == "Snow"){
      weatherIcon.src = "udem/neige.png";
      
  }
  else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "udem/brume.png";
      
  }
}
checkWeather()