/* eslint-disable */

/* Init leaflet map with the latlng */
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJhbXRlciIsImEiOiJjbDBqb3hraXowY2l0M2NxdDdtbHl1Y2hlIn0.PWAp8l3jQZhXJYMrG-_v2Q',
  {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiYnJhbXRlciIsImEiOiJjbDBqb3hraXowY2l0M2NxdDdtbHl1Y2hlIn0.PWAp8l3jQZhXJYMrG-_v2Q',
  }
).addTo(map);

/* Set marker at latlng */
L.marker([latitude, longitude], 13)
  .addTo(map)
  .bindPopup(`${dogsName} location`)
  .openPopup();

/* Set market for current location */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setMarker);
}

function setMarker(position) {
  L.marker([position.coords.latitude, position.coords.longitude], 13)
    .addTo(map)
    .bindPopup(`Jouw locatie`);
}
