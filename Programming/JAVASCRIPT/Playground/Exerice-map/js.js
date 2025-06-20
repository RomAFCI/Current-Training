var map = L.map('map', {
    center: [47, 2],
    zoom: 6
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


console.log(map);




let lattitude = map._lastCenter.lat;
let longitude = map._lastCenter.lng;
console.log(lattitude);
console.log(longitude);



map.addEventListener("click",() => {
lattitude = map.latLng.lat;
longitude = map.latLng.lng;
console.log(lattitude);
console.log(longitude);


})


