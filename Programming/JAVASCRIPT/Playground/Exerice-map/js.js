var map = L.map("map", {
  center: [47, 2],
  zoom: 6,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// console.log(map);

let lattitude;
let longitude;
let city;

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
      {
        fetch(`https://goweather.xyz/weather/${city}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });
        }
    });
});

