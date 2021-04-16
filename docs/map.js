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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'We were investigating an overhead electricity equipment fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-248088-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248088-G', 'postcodes_impacted': ['BN207YA', 'CR04FE', 'TN288PL', 'TN299JH', 'TN299JJ', 'TN299LR', 'TN299LS', 'TN299NA', 'TN299NB', 'TN299ND', 'TN299NE', 'TN299NF', 'TN299NG', 'TN299NH', 'TN299NJ', 'TN299NL', 'TN299PN', 'TN299PS', 'TN299QL', 'UK'], 'received_time': '2021-04-13T14:08:01'}, 'geometry': {'type': 'Point', 'coordinates': [0.8575519213561089, 50.949847264326976]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T02:30:00', 'incident_id': 'INCD-231511-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231511-Z', 'postcodes_impacted': ['PE47AB'], 'received_time': '2021-04-16T22:41:44'}, 'geometry': {'type': 'Point', 'coordinates': [-0.2349638851741991, 52.60907115328615]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating an electricity cable that was damaged, causing a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T03:00:00', 'incident_id': 'INCD-260192-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-260192-J', 'postcodes_impacted': ['SW21HF', 'SW21HJ', 'SW21HP', 'SW21HS'], 'received_time': '2021-04-16T16:20:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.12482983079948941, 51.447308278791056]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T03:00:00', 'incident_id': 'INCD-317078-U', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-317078-U', 'postcodes_impacted': ['ME160JJ', 'ME160JA', 'ME160JG'], 'received_time': '2021-04-16T20:45:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.5021719507762511, 51.27564864963486]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T06:30:00', 'incident_id': 'INCD-248264-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248264-G', 'postcodes_impacted': ['TN210LD', 'TN210PH', 'TN210PJ', 'TN210PL', 'TN210PN', 'TN210RU', 'TN210RX', 'TN210RY', 'TN210SA'], 'received_time': '2021-04-16T22:51:43'}, 'geometry': {'type': 'Point', 'coordinates': [0.21396097348332024, 50.93704544770537]}}, {'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T05:30:00', 'incident_id': 'INCD-248266-G', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-248266-G', 'postcodes_impacted': ['CT118PS', 'CT118JT', 'CT118LA', 'CT118PT', 'CT118PU'], 'received_time': '2021-04-16T23:40:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.4239827142795316, 51.33622029223913]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T02:00:00', 'incident_id': 'INCD-231512-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231512-Z', 'postcodes_impacted': ['LU56DG', 'LU56ED', 'LU56EF', 'LU56EG', 'LU56EQ'], 'received_time': '2021-04-16T23:17:28'}, 'geometry': {'type': 'Point', 'coordinates': [-0.5308199182550641, 51.9430877301651]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-231423-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231423-Z', 'postcodes_impacted': ['CM73SE', 'IP121PW', 'IP137', 'IP137AA', 'IP137AB', 'IP137AD', 'IP137AE', 'IP137AF', 'IP137AG', 'IP137AH', 'IP137AJ', 'IP137AL', 'IP137AN', 'IP137AP', 'IP137AQ', 'IP137AR', 'IP137AS', 'IP137AT', 'IP137AU', 'IP137AW', 'IP137AX', 'IP137AZ', 'IP137BS', 'IP137BT', 'IP137BU', 'IP137BY', 'IP137BZ', 'IP137DU', 'IP137JU', 'IP137LH', 'IP139RP', 'IP139RR', 'IP139RS', 'IP139RT', 'IP139RU', 'IP139RX'], 'received_time': '2021-04-16T13:53:51'}, 'geometry': {'type': 'Point', 'coordinates': [1.270533656555274, 52.18864628363777]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T05:00:00', 'incident_id': 'INCD-231496-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231496-Z', 'postcodes_impacted': ['SS91AA', 'SS91BW', 'SS91PG', 'SS91PJ', 'SS91PR', 'SS91AY', 'SS91BS', 'SS91BX', 'SS91DE', 'SS91DG', 'SS91DH', 'SS91DJ', 'SS91DQ', 'SS91DY', 'SS91FR', 'SS91PE', 'SS91PH', 'SS91PN', 'SS91PS', 'SS91QB', 'SS91QD', 'SS91QE', 'SS91RJ', 'SS91RL', 'SS91RN', 'SS91RP'], 'received_time': '2021-04-16T19:35:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.6609456177714684, 51.54237948961002]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T06:00:00', 'incident_id': 'INCD-231513-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231513-Z', 'postcodes_impacted': ['CO12EZ', 'CO12HA', 'CO12EX', 'CO12EY', 'CO28AA', 'CO28AB', 'CO28YY'], 'received_time': '2021-04-16T23:31:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.9199961409006951, 51.877201447574016]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8022\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 00:00:00', 'incident_id': 'HB8022', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['ML3 7GB', 'ML3 7GF', 'ML3 7GG', 'ML3 7GH', 'ML3 7GL', 'ML3 7GN', 'ML3 7TZ'], 'received_time': '2021-04-16 21:36:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.000172999999999, 55.764009]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8019\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 07:00:00', 'incident_id': 'HB8019', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SN3 4DS', 'SN3 4DT', 'SN3 4DU'], 'received_time': '2021-04-16 21:28:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.7477883333333333, 51.572645666666666]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB7994\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 00:00:00', 'incident_id': 'HB7994', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['IV7 8HR'], 'received_time': '2021-04-16 20:14:00'}, 'geometry': {'type': 'Point', 'coordinates': [-4.416499, 57.569121]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB7965\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 03:00:00', 'incident_id': 'HB7965', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['BH21 1AG', 'BH21 1AN', 'BH21 1AS', 'BH21 1AU', 'BH21 1AW', 'BH21 1HZ', 'BH21 1UR', 'BH21 1UW', 'BH21 3PZ'], 'received_time': '2021-04-16 19:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.9874111111111112, 50.79760511111111]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB7953\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 04:00:00', 'incident_id': 'HB7953', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['IV36 1AW', 'IV36 1BA', 'IV36 1BB', 'IV36 1BD', 'IV36 1BU', 'IV36 1PB'], 'received_time': '2021-04-16 18:26:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.610547, 57.612120999999995]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB7884\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 00:30:00', 'incident_id': 'HB7884', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['PH15 2HJ', 'PH15 2LS', 'PH15 2NT'], 'received_time': '2021-04-16 14:49:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.9882546666666667, 56.59837066666666]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': null, 'incident_id': 'INCD-2091-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2091-g', 'postcodes_impacted': ['CF5 5JN', 'CF5 5JL', 'CF5 5JQ', 'CF5 5HN', 'CF5 5QZ'], 'received_time': '2021-04-16 20:51:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2523038, 51.471346]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 02:00:00', 'incident_id': 'INCD-416556-E', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-416556-E', 'postcodes_impacted': ['WS13 7AX', 'WS13 7AT'], 'received_time': '2021-04-16 16:27:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.8355845, 52.6890905]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the ML6 postcode area  of Airdrie, affecting properties in Cromarty Road and surrounding streets. We had no advance warning of this and only became aware of it at 10:45pm. Our engineers have arrived onsite and are investigating the cause of the fault.  Our team will work to get your power back on as quickly and as safely as possible by 1:45am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 12:15am on 17th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-16 00:43', 'incident_id': 'INCD-505263-f', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-505263-f', 'postcodes_impacted': ['ML69RL', 'ML69RN', 'ML69RW'], 'received_time': '2021-04-16 22:46'}, 'geometry': {'type': 'Point', 'coordinates': [-3.9836584373263704, 55.85416959299203]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the G20 postcode area of Glasgow. We had no advance warning of this and only became aware of it at 10:44pm. Our engineers have arrived onsite and are investigating the cause of the fault.  Our team will work to get your power back on as quickly and as safely as possible by 2am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 12:25am on 17th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 01:00', 'incident_id': 'INCD-564463-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564463-s', 'postcodes_impacted': ['G206ER', 'G206ES', 'G206EX', 'G206EZ', 'G206HB', 'G206HJ', 'G206HR', 'G206NQ', 'G206UQ'], 'received_time': '2021-04-16 22:44'}, 'geometry': {'type': 'Point', 'coordinates': [-4.272860997841089, 55.874483360183746]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the G44 postcode area of Glasgow, affecting properties in Clarkston Road and surrounding streets. We had no advance warning of this and only became aware of it at 6:25pm. Repairs are taking longer than expected because of an underground cable fault near to Clarkston Road and our team are now working to get your power back on as quickly and as safely as possible by 3:30am. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 9:16PM on Friday 16 April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 02:30', 'incident_id': 'INCD-564379-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564379-s', 'postcodes_impacted': ['G443AT', 'G443AU', 'G443AX', 'G443BL', 'G443BQ', 'G443BW', 'G443DA', 'G443YS'], 'received_time': '2021-04-16 18:22'}, 'geometry': {'type': 'Point', 'coordinates': [-4.264698263736534, 55.81362220512008]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 07:00', 'incident_id': 'INCD-564259-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564259-s', 'postcodes_impacted': ['PA75PB'], 'received_time': '2021-04-16 14:11'}, 'geometry': {'type': 'Point', 'coordinates': [-4.542923291440464, 55.91900063681292]}}, {'type': 'Feature', 'properties': {'description': 'Smart Meter Cutout Change Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-171852-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S5 8PA': {'class': 'models.MapDataLocation', 'lat': 53.4157, 'lng': -1.49392}}, 'received_time': '2021-04-15 16:07'}, 'geometry': {'type': 'Point', 'coordinates': [-1.49394, 53.415786]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-171979-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO16 7DY': {'class': 'models.MapDataLocation', 'lat': 54.0969, 'lng': -0.194068}}, 'received_time': '2021-04-16 09:11'}, 'geometry': {'type': 'Point', 'coordinates': [-0.194069, 54.096878]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'INCD-172159-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS1 4BT': {'class': 'models.MapDataLocation', 'lat': 54.5696, 'lng': -1.24351}}, 'received_time': '2021-04-16 17:11'}, 'geometry': {'type': 'Point', 'coordinates': [-1.24351, 54.569624]}}, {'type': 'Feature', 'properties': {'description': 'O/H Service Repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 01:00', 'incident_id': 'INCD-172165-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DH7 7AN': {'class': 'models.MapDataLocation', 'lat': 54.7824, 'lng': -1.62341}}, 'received_time': '2021-04-16 17:48'}, 'geometry': {'type': 'Point', 'coordinates': [-1.623406, 54.782374]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-16 05:00', 'incident_id': 'INCD-172180-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'TS23 2HX': {'class': 'models.MapDataLocation', 'lat': 54.611, 'lng': -1.28453}, 'TS23 2HY': {'class': 'models.MapDataLocation', 'lat': 54.611, 'lng': -1.28568}, 'TS23 2HZ': {'class': 'models.MapDataLocation', 'lat': 54.6106, 'lng': -1.28443}, 'TS23 2JB': {'class': 'models.MapDataLocation', 'lat': 54.6107, 'lng': -1.28601}, 'TS23 2HU': {'class': 'models.MapDataLocation', 'lat': 54.6116, 'lng': -1.28658}, 'TS23 2HT': {'class': 'models.MapDataLocation', 'lat': 54.6117, 'lng': -1.28584}, 'TS23 2HS': {'class': 'models.MapDataLocation', 'lat': 54.6117, 'lng': -1.28455}, 'TS23 2HR': {'class': 'models.MapDataLocation', 'lat': 54.6125, 'lng': -1.28506}}, 'received_time': '2021-04-16 19:28'}, 'geometry': {'type': 'Point', 'coordinates': [-1.285335125, 54.611360125000004]}}, {'type': 'Feature', 'properties': {'description': 'S/L Knockdown In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 01:00', 'incident_id': 'INCD-172183-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF8 2PQ': {'class': 'models.MapDataLocation', 'lat': 53.7051, 'lng': -1.29156}, 'WF8 2LY': {'class': 'models.MapDataLocation', 'lat': 53.7045, 'lng': -1.29402}, 'WF8 2PG': {'class': 'models.MapDataLocation', 'lat': 53.7031, 'lng': -1.29452}, 'WF8 2PZ': {'class': 'models.MapDataLocation', 'lat': 53.7037, 'lng': -1.29198}}, 'received_time': '2021-04-16 19:59'}, 'geometry': {'type': 'Point', 'coordinates': [-1.29303175, 53.70410675]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 00:15', 'incident_id': 'INCD-172199-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO15 1AA': {'class': 'models.MapDataLocation', 'lat': 54.1135, 'lng': -0.150159}}, 'received_time': '2021-04-16 21:07'}, 'geometry': {'type': 'Point', 'coordinates': [-0.150145, 54.113434]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 01:00', 'incident_id': 'INCD-172206-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S60 2JA': {'class': 'models.MapDataLocation', 'lat': 53.4247, 'lng': -1.35751}, 'S60 2JF': {'class': 'models.MapDataLocation', 'lat': 53.4235, 'lng': -1.35889}, 'S60 2UW': {'class': 'models.MapDataLocation', 'lat': 53.4232, 'lng': -1.35759}}, 'received_time': '2021-04-16 21:46'}, 'geometry': {'type': 'Point', 'coordinates': [-1.3580969999999999, 53.423292333333336]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 02:30', 'incident_id': 'INCD-172211-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX3 0AH': {'class': 'models.MapDataLocation', 'lat': 53.7101, 'lng': -1.85842}, 'HX3 0AT': {'class': 'models.MapDataLocation', 'lat': 53.7072, 'lng': -1.85711}, 'HX3 0AU': {'class': 'models.MapDataLocation', 'lat': 53.7077, 'lng': -1.85612}, 'HX3 0AS': {'class': 'models.MapDataLocation', 'lat': 53.7085, 'lng': -1.85801}}, 'received_time': '2021-04-16 23:15'}, 'geometry': {'type': 'Point', 'coordinates': [-1.857432, 53.708400749999996]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 02:30', 'incident_id': 'INCD-172213-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD2 3JU': {'class': 'models.MapDataLocation', 'lat': 53.8094, 'lng': -1.72499}, 'BD2 3EE': {'class': 'models.MapDataLocation', 'lat': 53.81, 'lng': -1.72702}, 'BD2 3EG': {'class': 'models.MapDataLocation', 'lat': 53.8097, 'lng': -1.72835}, 'BD2 3EF': {'class': 'models.MapDataLocation', 'lat': 53.8087, 'lng': -1.72762}, 'BD2 3EH': {'class': 'models.MapDataLocation', 'lat': 53.8092, 'lng': -1.72641}}, 'received_time': '2021-04-16 23:22'}, 'geometry': {'type': 'Point', 'coordinates': [-1.7268718, 53.8093722]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P1 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 02:45', 'incident_id': 'INCD-172215-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF9 2AW': {'class': 'models.MapDataLocation', 'lat': 53.5946, 'lng': -1.29936}}, 'received_time': '2021-04-16 23:32'}, 'geometry': {'type': 'Point', 'coordinates': [-1.299044, 53.594699]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out power upgrades in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 10:00', 'incident_id': 'PPC039627', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD19 3JU': {'class': 'models.MapDataLocation', 'lat': 53.7253, 'lng': -1.71067}, 'BD19 3EG': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.7262}, 'BD19 3EA': {'class': 'models.MapDataLocation', 'lat': 53.7265, 'lng': -1.72435}, 'BD19 3AG': {'class': 'models.MapDataLocation', 'lat': 53.7264, 'lng': -1.72608}, 'BD19 3AF': {'class': 'models.MapDataLocation', 'lat': 53.7254, 'lng': -1.72498}, 'BD19 3EP': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.72464}, 'BD19 3AD': {'class': 'models.MapDataLocation', 'lat': 53.7255, 'lng': -1.72549}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.723217857142857, 53.72584328571429]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'PPC039683', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL13 1PF': {'class': 'models.MapDataLocation', 'lat': 54.7443, 'lng': -2.11611}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-2.116174, 54.74408]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out a permanent repair in the area. Work is scheduled to start', 'dno': 'np', 'estimated_restored_time': '2021-04-17 12:00', 'incident_id': 'PPC039884', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO30 4RB': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.09658}, 'YO30 4RA': {'class': 'models.MapDataLocation', 'lat': 53.9904, 'lng': -1.09681}, 'YO30 4US': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.0954}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0965173333333333, 53.99096966666667]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. The scheduled work has been cancelled and is no longer taking place today', 'dno': 'np', 'estimated_restored_time': '2021-04-17 14:30', 'incident_id': 'PPC039900', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD7 3DU': {'class': 'models.MapDataLocation', 'lat': 53.5927, 'lng': -1.81854}, 'HD9 4DU': {'class': 'models.MapDataLocation', 'lat': 53.5939, 'lng': -1.81948}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.81901, 53.5932605]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-17 03:21', 'incident_id': '60508589', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['LA23 1BG', 'LA23 3AB', 'LA23 3AD', 'LA23 3AE', 'LA23 3AF', 'LA23 3AG', 'LA23 3AJ', 'LA23 3AL', 'LA23 3AQ', 'LA23 3AT', 'LA23 3EN', 'LA9 3AR'], 'received_time': '2021-04-16 20:21'}, 'geometry': {'type': 'Point', 'coordinates': [-2.9184104545454543, 54.36275554545455]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident on our high voltage cable which provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-17 03:30', 'incident_id': '60508415', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['CA12 4PH', 'CA12 4PS', 'CA12 4PT', 'CA12 4PL', 'CA12 4PN', 'CA12 4PP', 'CA12 4PW', 'CA12 4PQ', 'CA12 4PY', 'CA12 4PZ', 'CA12 4QA', 'CA12 4RT', 'CA12 5UG'], 'received_time': '2021-04-16 19:40'}, 'geometry': {'type': 'Point', 'coordinates': [-3.1419163846153846, 54.61730107692308]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});