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
L.marker([52.302572, 4.865258], 13)
  .addTo(map)
  .bindPopup('Indie location')
  .openPopup();
