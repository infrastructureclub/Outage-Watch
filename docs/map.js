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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-247961-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-247961-G', 'postcodes_impacted': ['TN74ET'], 'received_time': '2021-04-10T00:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.0891248562823091, 51.08024221963581]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T05:00:00', 'incident_id': 'INCD-230160-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-230160-Z', 'postcodes_impacted': ['PE147PH', 'PE147PL', 'PE147NS', 'PE147NU', 'PE147NY', 'PE147PN'], 'received_time': '2021-04-10T20:55:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.22946946052632586, 52.72899363533933]}}, {'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-247691-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-247691-G', 'postcodes_impacted': ['BN11YE', 'UMS', 'BN11UA', 'BN11YA', 'BN14AB', 'BN14AD', 'BN14AE', 'BN14AF', 'BN14AG'], 'received_time': '2021-04-04T02:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.13702898035919064, 50.82597526373231]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-54055-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-54055-V', 'postcodes_impacted': ['GU14SQ', 'GU14RY', 'GU14SG', 'GU14SJ', 'GU14SS', 'GU14YN'], 'received_time': '2021-04-08T09:30:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.5775125586781588, 51.23726884118093]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-259721-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-259721-J', 'postcodes_impacted': ['NW52TJ', 'NW53AA', 'NW53AH', 'NW53BU', 'NW53BX'], 'received_time': '2021-04-10T22:52:01'}, 'geometry': {'type': 'Point', 'coordinates': [-0.14200153013895828, 51.54933752330665]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-11T09:00:00', 'incident_id': 'INCD-211989-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-211989-Z', 'postcodes_impacted': ['NR136AA', 'NR136PD', 'NR136PE', 'NR136QQ', 'NR136SP'], 'received_time': '2021-04-11T01:07:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.3852038495167245, 52.66608437850117]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB5147\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 02:00:00', 'incident_id': 'HB5147', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SO30 3HP'], 'received_time': '2021-04-10 22:36:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.328956, 50.944121]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB5099\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 03:30:00', 'incident_id': 'HB5099', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SL4 4FG', 'SL4 4RL'], 'received_time': '2021-04-10 19:02:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.668377, 51.451833]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB4987\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-11 01:30:00', 'incident_id': 'HB4987', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['PO9 6DD', 'PO9 6DP', 'PO9 6DR', 'PO9 6DS', 'PO9 6DT', 'PO9 6DU', 'PO9 6DX'], 'received_time': '2021-04-10 13:54:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.939098857142857, 50.88634428571429]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 03:00:00', 'incident_id': 'INCD-357575-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-357575-G', 'postcodes_impacted': ['B64 6RQ', 'B64 6RE', 'B65 0BJ', 'B64 6RP', 'B65 0BL', 'B64 6RW', 'B64 6RG'], 'received_time': '2021-04-10 19:21:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.051271, 52.47399957142858]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 06:30:00', 'incident_id': 'INCD-357586-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-357586-G', 'postcodes_impacted': ['WR6 5RH', 'WR6 5DJ'], 'received_time': '2021-04-10 22:33:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.4192295, 52.1772195]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 03:30:00', 'incident_id': 'INCD-357587-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-357587-G', 'postcodes_impacted': ['BS37 4BS', 'BS37 4BW', 'BS37 4BP', 'BS37 4BH'], 'received_time': '2021-04-10 22:42:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.4232765, 51.538390500000006]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 03:00:00', 'incident_id': 'INCD-43872-D', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-43872-D', 'postcodes_impacted': ['DE15 9JP', 'DE15 9JS', 'DE15 9JD', 'DE15 9JF'], 'received_time': '2021-04-10 23:51:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.63344575, 52.784906]}}, {'type': 'Feature', 'properties': {'description': 'Awaiting', 'dno': 'wpd', 'estimated_restored_time': '2021-04-11 03:30:00', 'incident_id': 'INCD-43873-D', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-43873-D', 'postcodes_impacted': ['NG16 4FX', 'NG16 4FU', 'NG16 4FS', 'NG16 4FW'], 'received_time': '2021-04-11 00:11:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.34226775, 53.020794499999994]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 03:39', 'incident_id': 'INCD-562609-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-562609-s', 'postcodes_impacted': ['KY114EH', 'KY114EJ', 'KY114ES'], 'received_time': '2021-04-11 01:13'}, 'geometry': {'type': 'Point', 'coordinates': [-3.42893917021523, 56.068841338932806]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the KA18 postcode area of Cumnock. We had no advance warning of this and are working to get supplies restored. Repairs are taking longer than expected because of ongoing fault investigations and additional resources required and our team are now working to get your power back on as quickly and as safely as possible by 9:30am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 1:45am on 11th April', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 08:30', 'incident_id': 'INCD-504087-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-504087-f', 'postcodes_impacted': ['KA181BP'], 'received_time': '2021-04-10 22:51'}, 'geometry': {'type': 'Point', 'coordinates': [-4.265226730569588, 55.454331232964456]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the CA6, DG11, DG14, DG16 postcode areas of Carlisle, Lockerbie, Canonbie and Gretna. We did not know in advance there would be a power cut, and are working to get supplies restored. So far we have identified faulty overhead line equipment near Rosomond Court and we now expect your supply to be restored by 3am. We understand that being without power is frustrating and please be assured we will restore your supply as soon as we possibly can. If for any reason this information changes then we will update this message. We apologise for the inconvenience and thank you for your patience. This message was updated at 12:45am on 11th April.', 'dno': 'sp', 'estimated_restored_time': '2021-04-11 02:00', 'incident_id': 'INCD-1807682-i', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-1807682-i', 'postcodes_impacted': ['CA6', 'CA61AA', 'DG140TQ', 'DG164EH', 'DG165AA', 'DG165AJ', 'DG165AX', 'DG165BN', 'DG165DD', 'DG165DP', 'DG165DR', 'DG165DT', 'DG165DU', 'DG165DX', 'DG165DY', 'DG165DZ', 'DG165EA', 'DG165EB', 'DG165ED', 'DG165EE', 'DG165EF', 'DG165EG', 'DG165EH', 'DG165EJ', 'DG165EL', 'DG165EN', 'DG165EP', 'DG165EQ', 'DG165ER', 'DG165EW', 'DG165FA', 'DG165FD', 'DG165GG', 'DG165HH', 'DG165HS', 'DG165HY', 'DG165JD', 'DG165JN', 'DG165JU', 'DG165LF', 'DG165LQ', 'DG165ZZ', 'DG166EH'], 'received_time': '2021-04-10 18:55'}, 'geometry': {'type': 'Point', 'coordinates': [-3.0594675120911234, 55.00229615335087]}}, {'type': 'Feature', 'properties': {'description': 'Damaged EHV U/G In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-167229-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS25 2DQ': {'class': 'models.MapDataLocation', 'lat': 53.7997, 'lng': -1.39461}, 'LS15 8AB': {'class': 'models.MapDataLocation', 'lat': 53.8048, 'lng': -1.41077}, 'LS15 8AD': {'class': 'models.MapDataLocation', 'lat': 53.804, 'lng': -1.42138}, 'LS15 8AE': {'class': 'models.MapDataLocation', 'lat': 53.8056, 'lng': -1.42527}, 'LS25 1NG': {'class': 'models.MapDataLocation', 'lat': 53.7984, 'lng': -1.39455}, 'LS15 8AJ': {'class': 'models.MapDataLocation', 'lat': 53.8073, 'lng': -1.43811}, 'LS25 1NF': {'class': 'models.MapDataLocation', 'lat': 53.7973, 'lng': -1.40888}, 'LS25 1AS': {'class': 'models.MapDataLocation', 'lat': 53.7946, 'lng': -1.40015}}, 'received_time': '2021-03-29 16:46'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4109423749999999, 53.801725125000004]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-168880-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO32 2NB': {'class': 'models.MapDataLocation', 'lat': 54.0133, 'lng': -1.06187}}, 'received_time': '2021-04-05 14:08'}, 'geometry': {'type': 'Point', 'coordinates': [-1.061855, 54.013288]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170226-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF16 9EH': {'class': 'models.MapDataLocation', 'lat': 53.7116, 'lng': -1.67113}}, 'received_time': '2021-04-09 13:13'}, 'geometry': {'type': 'Point', 'coordinates': [-1.67109, 53.71158]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170469-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S74 9LD': {'class': 'models.MapDataLocation', 'lat': 53.4993, 'lng': -1.43539}}, 'received_time': '2021-04-10 12:52'}, 'geometry': {'type': 'Point', 'coordinates': [-1.43539, 53.49928]}}, {'type': 'Feature', 'properties': {'description': 'O/H Service Repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170499-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'SR7 9BP': {'class': 'models.MapDataLocation', 'lat': 54.8153, 'lng': -1.38623}}, 'received_time': '2021-04-10 16:23'}, 'geometry': {'type': 'Point', 'coordinates': [-1.38623, 54.815295]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 02:00', 'incident_id': 'INCD-170524-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'OL14 6EL': {'class': 'models.MapDataLocation', 'lat': 53.7239, 'lng': -2.04291}}, 'received_time': '2021-04-10 22:50'}, 'geometry': {'type': 'Point', 'coordinates': [-2.042912, 53.723881]}}, {'type': 'Feature', 'properties': {'description': 'DNO Energisation check In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170529-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 3LT': {'class': 'models.MapDataLocation', 'lat': 54.5688, 'lng': -1.23083}}, 'received_time': '2021-04-10 23:39'}, 'geometry': {'type': 'Point', 'coordinates': [-1.230518, 54.56877]}}, {'type': 'Feature', 'properties': {'description': 'DNO Energisation check In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-170530-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD21 1SD': {'class': 'models.MapDataLocation', 'lat': 53.8651, 'lng': -1.91676}}, 'received_time': '2021-04-11 00:10'}, 'geometry': {'type': 'Point', 'coordinates': [-1.918296, 53.864554]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-11 03:45', 'incident_id': 'INCD-170532-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS8 4JL': {'class': 'models.MapDataLocation', 'lat': 53.817, 'lng': -1.52114}, 'LS8 4JJ': {'class': 'models.MapDataLocation', 'lat': 53.8175, 'lng': -1.52118}, 'LS8 4JZ': {'class': 'models.MapDataLocation', 'lat': 53.8162, 'lng': -1.52025}, 'LS8 4JH': {'class': 'models.MapDataLocation', 'lat': 53.8174, 'lng': -1.52016}, 'LS8 4JU': {'class': 'models.MapDataLocation', 'lat': 53.8167, 'lng': -1.5194}, 'LS8 4JF': {'class': 'models.MapDataLocation', 'lat': 53.8177, 'lng': -1.51923}, 'LS8 4EW': {'class': 'models.MapDataLocation', 'lat': 53.8168, 'lng': -1.51812}, 'LS8 4JS': {'class': 'models.MapDataLocation', 'lat': 53.8159, 'lng': -1.51965}, 'LS8 4JB': {'class': 'models.MapDataLocation', 'lat': 53.8172, 'lng': -1.51933}, 'LS8 4JQ': {'class': 'models.MapDataLocation', 'lat': 53.8175, 'lng': -1.51989}, 'LS8 4JD': {'class': 'models.MapDataLocation', 'lat': 53.818, 'lng': -1.51835}, 'LS8 4EP': {'class': 'models.MapDataLocation', 'lat': 53.8161, 'lng': -1.51867}}, 'received_time': '2021-04-11 00:44'}, 'geometry': {'type': 'Point', 'coordinates': [-1.51962425, 53.81700749999999]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-11 13:30', 'incident_id': 'PPC039509', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'NE24 4RT': {'class': 'models.MapDataLocation', 'lat': 55.1303, 'lng': -1.55339}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.553333, 55.131452]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-11 14:00', 'incident_id': 'PPC039520', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HU1 3SA': {'class': 'models.MapDataLocation', 'lat': 53.7462, 'lng': -0.342096}, 'HU1 3SQ': {'class': 'models.MapDataLocation', 'lat': 53.7455, 'lng': -0.341291}, 'HU1 3SS': {'class': 'models.MapDataLocation', 'lat': 53.7446, 'lng': -0.339792}, 'HU1 3SJ': {'class': 'models.MapDataLocation', 'lat': 53.7449, 'lng': -0.340147}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.34083100000000005, 53.745299749999994]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-11 15:00', 'incident_id': 'PPC039595', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DH4 4JS': {'class': 'models.MapDataLocation', 'lat': 54.8671, 'lng': -1.49143}, 'DH4 4QN': {'class': 'models.MapDataLocation', 'lat': 54.8677, 'lng': -1.49471}, 'DH4 4QT': {'class': 'models.MapDataLocation', 'lat': 54.8674, 'lng': -1.49586}, 'DH4 7DS': {'class': 'models.MapDataLocation', 'lat': 54.868, 'lng': -1.49254}, 'DH4 4QW': {'class': 'models.MapDataLocation', 'lat': 54.8674, 'lng': -1.49351}, 'DH4 4QY': {'class': 'models.MapDataLocation', 'lat': 54.8675, 'lng': -1.49324}, 'DH4 4QZ': {'class': 'models.MapDataLocation', 'lat': 54.8673, 'lng': -1.49149}}, 'received_time': '2021-04-11 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4932622857142857, 54.867475285714285]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to connect a new customer in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-11 12:00', 'incident_id': 'PPC039603', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL14 6XB': {'class': 'models.MapDataLocation', 'lat': 54.6476, 'lng': -1.668}, 'DL14 6XR': {'class': 'models.MapDataLocation', 'lat': 54.6459, 'lng': -1.66601}, 'DL14 6XD': {'class': 'models.MapDataLocation', 'lat': 54.6473, 'lng': -1.66619}, 'DL14 6XF': {'class': 'models.MapDataLocation', 'lat': 54.6456, 'lng': -1.66493}}, 'received_time': '2021-04-11 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.66590325, 54.64667675]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to move equipment in order to allow another organisation to work close to our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-11 11:30', 'incident_id': 'PPC039875', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO12 4QP': {'class': 'models.MapDataLocation', 'lat': 54.2391, 'lng': -0.440618}, 'YO12 4RD': {'class': 'models.MapDataLocation', 'lat': 54.2407, 'lng': -0.441693}, 'YO12 4QJ': {'class': 'models.MapDataLocation', 'lat': 54.2406, 'lng': -0.440175}}, 'received_time': '2021-04-11 07:30'}, 'geometry': {'type': 'Point', 'coordinates': [-0.4408236666666667, 54.24012833333333]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-11 07:18', 'incident_id': '40809358', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['BB3 0PT', 'BB3 0PZ', 'BB3 0QA', 'BB3 0QD', 'BB3 0QH', 'BB3 0QJ', 'BB3 0QL', 'BB3 0QN', 'BB3 0QP', 'BB3 0QR', 'BB3 0QS', 'BB3 0QT', 'BB3 0QW'], 'received_time': '2021-04-11 01:19'}, 'geometry': {'type': 'Point', 'coordinates': [-2.4712728461538465, 53.72379153846154]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-11 03:01', 'incident_id': '10645131', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['M18 7DY', 'M18 7ED', 'M18 7NF', 'M18 7NH', 'M18 7NL', 'M18 7NN', 'M18 7NP', 'M18 7NS', 'M18 7NW', 'M18 7NX', 'M18 7PY', 'M18 7SD', 'M18 7WE', 'M18 7WN', 'M18 7WP', 'M18 7WR', 'M18 7WW', 'SK5 6PD'], 'received_time': '2021-04-10 17:57'}, 'geometry': {'type': 'Point', 'coordinates': [-2.170929722222222, 53.45457555555556]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});