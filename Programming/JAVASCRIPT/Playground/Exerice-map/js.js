// Permet de définir le point de départ sur la carte
var map = L.map("map", {
  center: [47, 2],
  zoom: 6,
  // Permet de coincer la carte
    maxBounds: [
    [-85, -180],
    [85, 180]
  ],
maxBoundsViscosity: 1.0 
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // zoom min et max sur la map
      maxZoom: 19, 
    minZoom: 3,
    // annule la répétition des map
     noWrap: true,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);




let lattitude; // position lat
let longitude; // position lng
let city; //donnée de l'api avec une valeur d'une ville
let info = document.querySelector(".info"); // info textuel en HTML

// l'événement du click récupére les position de la première api
map.addEventListener("click", (e) => {
  //Réaffecter les positions récupéré en variable
  lattitude = e.latlng.lat;
  longitude = e.latlng.lng;
// affiche les positions dans la console
  console.log(lattitude);
  console.log(longitude);
    
// fetch permet d'aller chercher l'api demandé
  fetch(
    // ici on utilise nos variable déclaré précédemment pour permettre a la 2ème api 
    `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${lattitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data.features[0].properties.geocoding.city);
        //on récupére la valeur ville et on l'affecte à city
        city = data.features[0].properties.geocoding.city;
        
      
        fetch(`https://goweather.xyz/weather/${city}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            //affiche un message en HTML en prenant las variables de city pour afficher la ville et la valeur de température
             info.textContent = `la ville est ` + (city) + " la météo est " + (data.temperature); 
          });
        
    });
});

// const afficheTemperature = document.querySelector('.ville');
// afficheTemperature.innerText = La température à ${ville} est de ${temperature} le temps est ${description} et le vent est de ${wind};
//                 afficheTemperature.style.display = 'block';