var map = L.map("map", {
  center: [47, 2],
  zoom: 6,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

console.log(map);

let lattitude;
let longitude;
let city;

map.addEventListener("click", (e) => {
  lattitude = e.latlng.lat;
  longitude = e.latlng.lng;

  console.log(lattitude);
  console.log(longitude);
});

fetch(
  "https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>"
)
  .then((response) => response.json)
  .then((data) => {
    console.log(data);
  });
