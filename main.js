const API_KEY = "at_X9aQFxvctJw9cokHZKCJdXbODeKkb&ipAddress=";
const API_POINT = "https://geo.ipify.org/api/v2/country,city?apiKey=";

let request = API_POINT+API_KEY;

let map = L.map('map').setView([51.505, -0.09], 13);
let marker = null;
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);

let inputValue = "";

function searchInput(value){
    inputValue = value;
}

function search(){
    if(marker != null)
        marker.removeFrom(map);

    const request = API_POINT+API_KEY+inputValue;

    fetch(request)
    .then(res => res.json())
    .then(data =>{
        marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
        map.setView([data.location.lat, data.location.lng])
    });
    

}

