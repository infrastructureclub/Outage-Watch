document.addEventListener("DOMContentLoaded", function() {
var MarkerIcon = L.Icon.extend({
    options: {
        iconSize:     [30, 30],
        iconAnchor:   [15, 15]
    }
});

var boltIcon = new MarkerIcon({iconUrl: 'img/coloured_bolt.png'});
var mymap = L.map('map').setView([53.96, -3.22], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZW5lcmd5dmlzIiwiYSI6ImNrbjR2aWo4azBsaHEycHM5dHByZzFnZW8ifQ.MyLCIQqHnNHQFWJQqs-j4w'
}).addTo(mymap);

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'This power cut has been caused by an unexpected incident with the underground cable that provides electricity to your home or business. We didn\'t know before your electricity went off that this was going to happen but now we know, rest assured we will get your power back on safely and as quickly as possible.<br/><br/>Please note that all our timescales are estimated based on previous experience and may change if new information becomes available while our engineers are fixing the issue.  With underground power cuts, we may need to dig to repair the cable and this can sometime extend the length of time you are without power. Click the link to find out <a class="c-fault-back__link ng-binding" href="/power-cuts/why-do-we-experience-power-cuts/">why power cuts happen</a>', 'dno': 'enw', 'estimated_restored_time': '2023-12-27 01:17', 'incident_id': 'INC 124195516', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['M24 4HL', 'M24 4PZ', 'M24 4PY', 'M24 4PX', 'M24 4QA', 'M24 4PU'], 'received_time': '2023-12-26 19:17'}, 'geometry': {'type': 'Point', 'coordinates': [-2.2250476666666668, 53.545380333333334]}}, {'type': 'Feature', 'properties': {'description': 'This power cut has been caused by an unexpected incident with the underground cable that provides electricity to your home or business. We didn\'t know before your electricity went off that this was going to happen but now we know, rest assured we will get your power back on safely and as quickly as possible.<br/><br/>Please note that all our timescales are estimated based on previous experience and may change if new information becomes available while our engineers are fixing the issue.  With underground power cuts, we may need to dig to repair the cable and this can sometime extend the length of time you are without power. Click the link to find out <a class="c-fault-back__link ng-binding" href="/power-cuts/why-do-we-experience-power-cuts/">why power cuts happen</a>', 'dno': 'enw', 'estimated_restored_time': '2023-12-26 20:03', 'incident_id': 'INC 124195475', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['SK11 7DZ'], 'received_time': '2023-12-26 14:03'}, 'geometry': {'type': 'Point', 'coordinates': [-2.11635, 53.255571]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});