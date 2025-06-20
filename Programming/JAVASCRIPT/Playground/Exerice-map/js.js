var map = L.map("map", {
  center: [47, 2],
  zoom: 6,
    maxBounds: [
    [-85, -180],
    [85, 180]
  ],
maxBoundsViscosity: 1.0 
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    minZoom: 3,
     noWrap: true,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// console.log(map);

let lattitude;
let longitude;
let city;
let info = document.querySelector(".info");

map.addEventListener("click", (e) => {
  lattitude = e.latlng.lat;
  longitude = e.latlng.lng;

  console.log(lattitude);
  console.log(longitude);
    

  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${lattitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data.features[0].properties.geocoding.city);
        city = data.features[0].properties.geocoding.city;
        
      
        fetch(`https://goweather.xyz/weather/${city}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
             info.textContent = `la ville est ` + (city) + " la météo est" + (data); 
          });
        
    });
});

// const afficheTemperature = document.querySelector('.ville');
// afficheTemperature.innerText = La température à ${ville} est de ${temperature} le temps est ${description} et le vent est de ${wind};
//                 afficheTemperature.style.display = 'block';