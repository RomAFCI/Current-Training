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
    info.textContent(city)

  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${lattitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data.features[0].properties.geocoding.city);
        city = data.features[0].properties.geocoding.city;
        info.textContent(city)
      
        fetch(`https://goweather.xyz/weather/${city}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
             info.textContent(city)
          });
        
    });
});

