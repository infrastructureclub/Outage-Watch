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

var geojsonFeature = {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'description': 'We had to turn off power in your area so our engineers could safely carry out emergency repairs to the network.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:00:00', 'incident_id': 'INCD-260219-J', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-260219-J', 'postcodes_impacted': ['KT33PB', 'KT33QW', 'KT33BF', 'KT33QP'], 'received_time': '2021-04-17T12:57:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.26143738458824944, 51.40041820694421]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-18T00:30:00', 'incident_id': 'INCD-231600-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231600-Z', 'postcodes_impacted': ['WD258DB', 'WD28DB'], 'received_time': '2021-04-17T20:22:51'}, 'geometry': {'type': 'Point', 'coordinates': [-0.3349231047484667, 51.65358815027304]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:30:00', 'incident_id': 'INCD-59923-N', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-59923-N', 'postcodes_impacted': ['SW1W8AU', 'SW1W8PB', 'SW1W8PQ', 'SW1W8PZ', 'SW1W8QA', 'SW1W8QB', 'SW1W8QE', 'SW1W8QF', 'SW1W8RB'], 'received_time': '2021-04-17T18:23:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.15125819261512127, 51.48958640194288]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:00:00', 'incident_id': 'INCD-59925-N', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-59925-N', 'postcodes_impacted': ['N193JU', 'N193JX', 'N193TL', 'N193TN', 'N193TS', 'N193JY', 'N193TP', 'N193TT', 'N193TW'], 'received_time': '2021-04-17T18:53:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1354961610987865, 51.5700094712605]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-231593-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231593-Z', 'postcodes_impacted': ['NR65BJ', 'NR65AA', 'NR65BL', 'NR65BN', 'NR65BP', 'NR65BW', 'NR65GA', 'NR65GB', 'NR65PN', 'NR65QZ', 'NR65RR'], 'received_time': '2021-04-17T18:31:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.250196093242885, 52.66303704883896]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-18T00:30:00', 'incident_id': 'INCD-59926-N', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-59926-N', 'postcodes_impacted': ['SW100BN', 'SW100BW', 'SW100DR', 'SW100DT', 'SW100EB', 'SW100EE', 'SW100EN', 'SW100EP', 'SW100HE', 'SW100LF', 'SW100LG', 'SW100LR', 'SW100LU', 'EC1V2TT', 'SW100JL', 'SW100LE', 'SW100TR'], 'received_time': '2021-04-17T20:48:51'}, 'geometry': {'type': 'Point', 'coordinates': [-0.17459703465719983, 51.484561544944384]}}, {'type': 'Feature', 'properties': {'description': 'We were investigating a high voltage overhead electricity line fault which caused a power cut in the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:00:00', 'incident_id': 'INCD-231546-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231546-Z', 'postcodes_impacted': ['CM150EH', 'CM150EJ', 'CM150EL', 'CM150EN', 'CM150EP', 'CM150EQ', 'CM150ER', 'CM150ES', 'CM150ET', 'CM150EW', 'CM150JX', 'CM150LD', 'CM150LE', 'CM150LG', 'CM150NA', 'CM150PU', 'CM150QE', 'CM150QZ', 'CM150RE', 'CM150RU', 'CM150SB', 'CM150SE', 'CM150SF', 'CM150SG', 'CM150SH', 'CM150SJ', 'CM150SL', 'CM150SN', 'CM150SP', 'CM150SR', 'CM150SS', 'CM150ST', 'CM150SU', 'CM150TS', 'CM150TT', 'CM150TU', 'CM35QH', 'CM40JR', 'CM40JS', 'CM40JU', 'CM40JX', 'CM40JY', 'CM40JZ', 'CM40NW', 'CM40NX', 'CM40NZ', 'CM40PA', 'CM40QE', 'CM40QH', 'CM40QJ', 'CM40QL', 'CM40QN', 'CM40QP', 'CM40QR', 'CM40QU', 'CM40QW', 'CM40QX', 'CM40QY', 'CM40QZ', 'CM40RA', 'CM40RB', 'CM40RD', 'CM40RJ', 'CM40RL', 'CM40RN', 'CM40RR', 'CM40RS', 'CM40RT', 'CM40RU', 'CM40RX', 'CM40RY', 'CM40RZ', 'CM40SA', 'CM40SB', 'CM40SD', 'CM40SF', 'CM40SG', 'CM40SP', 'CM59RG'], 'received_time': '2021-04-17T09:30:03'}, 'geometry': {'type': 'Point', 'coordinates': [0.3140477013504482, 51.67978289628871]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on an underground electricity cable affecting the local area.', 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T22:00:00', 'incident_id': 'INCD-231583-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-231583-Z', 'postcodes_impacted': ['SG54PG'], 'received_time': '2021-04-17T16:03:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.220409340521745, 52.00791906031363]}}, {'type': 'Feature', 'properties': {'description': 'A fault occurred on a piece of our electrical equipment which controls the power to your home.', 'dno': 'ukpn', 'estimated_restored_time': null, 'incident_id': 'INCD-54694-V', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-54694-V', 'postcodes_impacted': ['TN376JE', 'TN376JF', 'TN376JJ', 'TN376RG', 'TN376RH', 'TN376RJ', 'TN376RN', 'TN376RP', 'TN376RQ', 'TN376SB'], 'received_time': '2021-04-17T21:04:00'}, 'geometry': {'type': 'Point', 'coordinates': [0.5592592779153798, 50.86231208739571]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T16:30:00', 'incident_id': 'INCD-227941-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-227941-Z', 'postcodes_impacted': ['AL71JD'], 'received_time': '2021-04-17T08:00:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1891168918543099, 51.80033146503926]}}, {'type': 'Feature', 'properties': {'description': "We're carrying out planned work in your area. For our engineers to carry it out safely they need to turn the power off. We're doing this work as it's essential to provide reliable electricity supplies to your area. We're sorry for any inconvenience caused and thank you for your patience.", 'dno': 'ukpn', 'estimated_restored_time': '2021-04-17T15:00:00', 'incident_id': 'INCD-229277-Z', 'incident_url': 'https://www.ukpowernetworks.co.uk/power-cut/map?incidentid=INCD-229277-Z', 'postcodes_impacted': ['IP123RE'], 'received_time': '2021-04-17T09:05:00'}, 'geometry': {'type': 'Point', 'coordinates': [1.4321802590784931, 52.0473383091724]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8263\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 22:00:00', 'incident_id': 'HB8263', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['HP11 2PL', 'HP11 2RF', 'HP11 2SH', 'HP11 2SW', 'HP11 2TD', 'HP12 3DT', 'HP12 3EH', 'HP12 3EY', 'HP12 3FW', 'HP12 3GA', 'HP12 3HE', 'HP12 3HH', 'HP12 3XH'], 'received_time': '2021-04-17 18:48:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.771183, 51.631309]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8224\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-18 02:30:00', 'incident_id': 'HB8224', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SO45 5BA', 'SO45 5BB', 'SO45 5BE', 'SO45 5BG', 'SO45 5ET'], 'received_time': '2021-04-17 15:22:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.4088596, 50.861829]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8195\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-18 00:00:00', 'incident_id': 'HB8195', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['TW7 5JG', 'TW7 5NT', 'TW7 5QE'], 'received_time': '2021-04-17 13:49:00'}, 'geometry': {'type': 'Point', 'coordinates': [-0.325783, 51.482303333333334]}}, {'type': 'Feature', 'properties': {'description': 'We’re sorry for the loss of supply. We currently have a fault affecting the areas listed. Our engineers are on site working hard to get the power back on as quickly as they can. If you need more information, please call us on 105 or send us a message on <a href="http://m.me/ssencommunity/">Facebook</a> or Twitter (<a href="https://twitter.com/ssencommunity">@ssencommunity</a>) and quote reference \'HB8121\'', 'dno': 'ssen', 'estimated_restored_time': '2021-04-17 21:00:00', 'incident_id': 'HB8121', 'incident_url': 'https://www.ssen.co.uk/Powertrack/', 'postcodes_impacted': ['SO14 6UN', 'SO14 6UP', 'SO15 3JD', 'SO17 2AS', 'SO17 2AU', 'SO17 2FT', 'SO17 2FU', 'SO17 2TH', 'SO17 3SN'], 'received_time': '2021-04-17 11:40:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.3974196666666667, 50.92399688888889]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 22:00:00', 'incident_id': 'INCD-66-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-66-q', 'postcodes_impacted': ['TR26 1LN', 'TR26 1LU', 'TR26 1LJ', 'TR26 1ND', 'TR26 1NB', 'TR26 1LW', 'TR26 1LP', 'TR26 1PE', 'TR26 1PT', 'TR26 1PF', 'TR26 1LH', 'TR26 1PU', 'TR26 1LL', 'TR26 1HR', 'TR26 1LT', 'TR26 1NA', 'TR26 1NZ', 'TR26 1NE', 'TR26 1LA', 'TR26 1HW', 'TR26 1JQ', 'TR26 1PB', 'TR26 1PS', 'TR26 1NL', 'TR26 1PZ', 'TR26 1LG'], 'received_time': '2021-04-17 18:55:00'}, 'geometry': {'type': 'Point', 'coordinates': [-5.479387384615385, 50.21520842307692]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 22:00:00', 'incident_id': 'INCD-67-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-67-q', 'postcodes_impacted': ['EX10 9NQ', 'EX10 9AP', 'EX10 9AS', 'EX10 9AR', 'EX10 9AG', 'EX10 9NS', 'EX10 9AA'], 'received_time': '2021-04-17 19:02:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2304158571428565, 50.686792714285716]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 22:00:00', 'incident_id': 'INCD-24-q', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-24-q', 'postcodes_impacted': ['TA6 7EJ'], 'received_time': '2021-04-17 06:42:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.026173, 51.128081]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-17 20:30:00', 'incident_id': 'INCD-2112-g', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-2112-g', 'postcodes_impacted': ['CF37 3HF', 'CF37 3HE', 'CF37 3NW', 'CF37 3HG', 'CF37 3AL'], 'received_time': '2021-04-17 16:45:00'}, 'geometry': {'type': 'Point', 'coordinates': [-3.3518, 51.623408600000005]}}, {'type': 'Feature', 'properties': {'description': 'In Progress', 'dno': 'wpd', 'estimated_restored_time': '2021-04-18 03:00:00', 'incident_id': 'INCD-358016-G', 'incident_url': 'https://powercuts.westernpower.co.uk/incident/INCD-358016-G', 'postcodes_impacted': ['TF7 4HW'], 'received_time': '2021-04-17 18:46:00'}, 'geometry': {'type': 'Point', 'coordinates': [-2.443897, 52.628307]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut affecting the  LL65 postcode area of Ty Croes. We had no advance warning of this and only became aware of it at  9:07PM.. Our control centre will attempt to reset the network remotely to restore power in stages, and our emergency response team are on their way to the local area to investigate the fault. Our team will work to get your power back on as quickly and as safely as possible, and we expect the power to be restored by 11:15PM. Once they arrive, or when we receive any update regarding the cause, we will be able to provide you with more information. We apologise for the inconvenience and thank you for your patience. This message was updated at 9:12PM on 17th April 2021..', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 22:07', 'incident_id': 'INCD-564721-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564721-s', 'postcodes_impacted': ['LL535AZ', 'LL635AD', 'LL635AJ', 'LL635AQ', 'LL635AZ', 'LL635BJ', 'LL635BQ', 'LL635BX', 'LL635BZ', 'LL635DJ', 'LL635DQ', 'LL635DX', 'LL635DZ', 'LL635EJ', 'LL635EQ', 'LL635EX', 'LL635EZ', 'LL635HX', 'LL635HY', 'LL635HZ', 'LL635LJ', 'LL635LQ', 'LL635LX', 'LL635LZ', 'LL635PJ', 'LL635PQ', 'LL635RJ', 'LL635RN', 'LL635RP', 'LL635RQ', 'LL635RR', 'LL635RW', 'LL635RX', 'LL635RY', 'LL635SH', 'LL635SL', 'LL635SN', 'LL635SR', 'LL635SS', 'LL635SW', 'LL635SY', 'LL635TA', 'LL635TB', 'LL635TD', 'LL635TE', 'LL635TF', 'LL635TG', 'LL635TN', 'LL635TU', 'LL635XX', 'LL635YH', 'LL635YL', 'LL635YN', 'LL635YP', 'LL635YR', 'LL635YS', 'LL635YU', 'LL635YY', 'LL645JP', 'LL645JR'], 'received_time': '2021-04-17 21:07'}, 'geometry': {'type': 'Point', 'coordinates': [-4.478147079412324, 53.20697028640983]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the G72 postcode area of Blantyre. We had no advance warning of this and only became aware of it at 8:59pm. Our next available engineer will attend site and the team will work to get your power back on as quickly and as safely as possible by midnight. Once they arrive, or when we receive any update regarding the cause, we will be able to provide you with more information. We apologise for the inconvenience and thank you for your patience. This message was updated at 9:16pm on Saturday, 17 April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 22:59', 'incident_id': 'INCD-564709-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564709-s', 'postcodes_impacted': ['G720NH', 'G720NJ', 'G720NS', 'G720NT', 'G720NY', 'G720PR', 'G720QD', 'G729DB'], 'received_time': '2021-04-17 21:02'}, 'geometry': {'type': 'Point', 'coordinates': [-4.0878920837826405, 55.79140048397763]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the EH12 postcode area of Edinburgh. We had no advance warning of this and only became aware of it at 4:34pm. Our team attended the Broomhall Avenue substation and replaced a blown fuse however they have now established an underground cable fault nearby and we now expect to get your power back on as quickly and as safely as possible by midnight. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 7:25pm on Saturday 17th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 22:59', 'incident_id': 'INCD-564631-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564631-s', 'postcodes_impacted': ['EH127NW', 'EH127NY'], 'received_time': '2021-04-17 16:34'}, 'geometry': {'type': 'Point', 'coordinates': [-3.2830958074643606, 55.93382808748372]}}, {'type': 'Feature', 'properties': {'description': 'There is a power cut in the EH22 postcode area of Newtongrange. We did not know in advance there would be a power cut, and are working to get supplies restored. So far we have worked along side the emergency services and begun the necessary repairs to restore supplies. We are currently awaiting on additional staff to arrive on site to assist and we now expect your supply to be restored by 10:00pm. We understand that being without power is frustrating and please be assured we will restore your supply as soon as we possibly can. If for any reason this information changes then we will update this message. We apologise for the inconvenience and thank you for your patience. This message was updated at 7:06pm on Saturday 17th April 2021', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 22:00', 'incident_id': 'INCD-564601-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564601-s', 'postcodes_impacted': ['EH224PT', 'EH224PZ', 'EH224QA', 'EH224QB', 'EH224QD', 'EH224QE', 'EH224QF', 'EH224QG', 'EH224QH', 'EH224QQ'], 'received_time': '2021-04-17 14:12'}, 'geometry': {'type': 'Point', 'coordinates': [-3.061912573825098, 55.864470010379044]}}, {'type': 'Feature', 'properties': {'description': 'This is a message for customers in the KA7 postcode area of Ayr. It is necessary for our engineers to carry out an emergency shutdown at 8.15pm to repair a faulty underground cable on Newmarket Street and this may affect the supply to your property. We will work to get your power back on as quickly and as safely as possible by midnight. We will update this message if this information changes. We apologise for the inconvenience and thank you for your patience. This message was updated at 7.46pm on Saturday 17th April 2021.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 22:59', 'incident_id': 'INCD-497753-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-497753-k', 'postcodes_impacted': ['KA71LL'], 'received_time': '2021-04-17 13:51'}, 'geometry': {'type': 'Point', 'coordinates': [-4.631596931209811, 55.46305130924389]}}, {'type': 'Feature', 'properties': {'description': 'We are aware of a fault in your area. If you require more information please call us on: \nCentral and Southern Scotland:  0800 092 9290 . \n Cheshire, Merseyside, North Wales and North Shropshire: 0800 001 5400.', 'dno': 'sp', 'estimated_restored_time': '2021-04-17 21:00', 'incident_id': 'INCD-564583-s', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-564583-s', 'postcodes_impacted': ['EH421QT', 'EH421SG', 'TD135XP', 'TD145RJ'], 'received_time': '2021-04-17 12:40'}, 'geometry': {'type': 'Point', 'coordinates': [-2.35661272323457, 55.91779883570885]}}, {'type': 'Feature', 'properties': {'description': 'The electricity supply to your premises may currently be affected by planned work.  You should have received a letter explaining this.  We hope to be able to restore your supplies by 18-APR-2021 08:00.  Please accept our sincere apologies for any inconvenience this is causing.', 'dno': 'sp', 'estimated_restored_time': '2021-04-18 07:00', 'incident_id': 'INCD-494579-k', 'incident_url': 'https://www.spenergynetworks.co.uk/pages/power_cuts_map.aspx?incRef=INCD-494579-k', 'postcodes_impacted': ['FK28QX', 'FK28XX'], 'received_time': '2021-04-02 10:05'}, 'geometry': {'type': 'Point', 'coordinates': [-3.79198947265032, 56.04415359395529]}}, {'type': 'Feature', 'properties': {'description': 'Smart Meter Cutout Change In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-17176-D', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'LS9 9JZ': {'class': 'models.MapDataLocation', 'lat': 53.7936, 'lng': -1.514}}, 'received_time': '2021-04-17 11:12'}, 'geometry': {'type': 'Point', 'coordinates': [-1.513938, 53.79355]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172328-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S9 1WQ': {'class': 'models.MapDataLocation', 'lat': 53.412, 'lng': -1.3908}}, 'received_time': '2021-04-17 12:37'}, 'geometry': {'type': 'Point', 'coordinates': [-1.390782, 53.412015]}}, {'type': 'Feature', 'properties': {'description': 'DNO Energisation check Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172358-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD8 9NE': {'class': 'models.MapDataLocation', 'lat': 53.5928, 'lng': -1.61121}}, 'received_time': '2021-04-17 16:50'}, 'geometry': {'type': 'Point', 'coordinates': [-1.611229, 53.592839]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172360-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF12 7HU': {'class': 'models.MapDataLocation', 'lat': 53.7111, 'lng': -1.59684}}, 'received_time': '2021-04-17 17:06'}, 'geometry': {'type': 'Point', 'coordinates': [-1.596837, 53.711131]}}, {'type': 'Feature', 'properties': {'description': 'Damage Other In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 21:00', 'incident_id': 'INCD-172361-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'OL14 7TL': {'class': 'models.MapDataLocation', 'lat': 53.6825, 'lng': -2.09824}}, 'received_time': '2021-04-17 17:27'}, 'geometry': {'type': 'Point', 'coordinates': [-2.09757, 53.682]}}, {'type': 'Feature', 'properties': {'description': 'Damaged service U/G In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 21:30', 'incident_id': 'INCD-172365-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S2 5EP': {'class': 'models.MapDataLocation', 'lat': 53.3798, 'lng': -1.43965}}, 'received_time': '2021-04-17 18:22'}, 'geometry': {'type': 'Point', 'coordinates': [-1.439648, 53.379751]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 21:30', 'incident_id': 'INCD-172366-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD4 0QN': {'class': 'models.MapDataLocation', 'lat': 53.7684, 'lng': -1.70278}}, 'received_time': '2021-04-17 17:47'}, 'geometry': {'type': 'Point', 'coordinates': [-1.702776, 53.768416]}}, {'type': 'Feature', 'properties': {'description': 'U/G Service repair Awaiting', 'dno': 'np', 'estimated_restored_time': '', 'incident_id': 'INCD-172367-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'S36 6HT': {'class': 'models.MapDataLocation', 'lat': 53.5194, 'lng': -1.6313}}, 'received_time': '2021-04-17 18:24'}, 'geometry': {'type': 'Point', 'coordinates': [-1.631296, 53.519405]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 21:30', 'incident_id': 'INCD-172368-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'WF14 0DQ': {'class': 'models.MapDataLocation', 'lat': 53.6933, 'lng': -1.70995}}, 'received_time': '2021-04-17 18:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.709939, 53.693407]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 22:00', 'incident_id': 'INCD-172369-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX3 0AH': {'class': 'models.MapDataLocation', 'lat': 53.7101, 'lng': -1.85842}, 'HX3 0AT': {'class': 'models.MapDataLocation', 'lat': 53.7072, 'lng': -1.85711}, 'HX3 0AU': {'class': 'models.MapDataLocation', 'lat': 53.7077, 'lng': -1.85612}, 'HX3 0AS': {'class': 'models.MapDataLocation', 'lat': 53.7085, 'lng': -1.85801}}, 'received_time': '2021-04-17 18:02'}, 'geometry': {'type': 'Point', 'coordinates': [-1.857432, 53.708400749999996]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 In Progress', 'dno': 'np', 'estimated_restored_time': '2021-04-17 22:15', 'incident_id': 'INCD-172371-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HX3 7BU': {'class': 'models.MapDataLocation', 'lat': 53.7336, 'lng': -1.83173}}, 'received_time': '2021-04-17 19:08'}, 'geometry': {'type': 'Point', 'coordinates': [-1.831733, 53.733559]}}, {'type': 'Feature', 'properties': {'description': 'Unknown P2 Awaiting', 'dno': 'np', 'estimated_restored_time': '2021-04-17 22:30', 'incident_id': 'INCD-172372-A', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD16 3AZ': {'class': 'models.MapDataLocation', 'lat': 53.869, 'lng': -1.81125}}, 'received_time': '2021-04-17 19:28'}, 'geometry': {'type': 'Point', 'coordinates': [-1.811254, 53.869031]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out power upgrades in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 10:00', 'incident_id': 'PPC039627', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'BD19 3JU': {'class': 'models.MapDataLocation', 'lat': 53.7253, 'lng': -1.71067}, 'BD19 3EG': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.7262}, 'BD19 3EA': {'class': 'models.MapDataLocation', 'lat': 53.7265, 'lng': -1.72435}, 'BD19 3AG': {'class': 'models.MapDataLocation', 'lat': 53.7264, 'lng': -1.72608}, 'BD19 3AF': {'class': 'models.MapDataLocation', 'lat': 53.7254, 'lng': -1.72498}, 'BD19 3EP': {'class': 'models.MapDataLocation', 'lat': 53.7259, 'lng': -1.72464}, 'BD19 3AD': {'class': 'models.MapDataLocation', 'lat': 53.7255, 'lng': -1.72549}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.723217857142857, 53.72584328571429]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out maintenance on our network in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 11:00', 'incident_id': 'PPC039683', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'DL13 1PF': {'class': 'models.MapDataLocation', 'lat': 54.7443, 'lng': -2.11611}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-2.116174, 54.74408]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out a permanent repair in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 12:00', 'incident_id': 'PPC039884', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'YO30 4RB': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.09658}, 'YO30 4RA': {'class': 'models.MapDataLocation', 'lat': 53.9904, 'lng': -1.09681}, 'YO30 4US': {'class': 'models.MapDataLocation', 'lat': 53.9912, 'lng': -1.0954}}, 'received_time': '2021-04-17 08:00'}, 'geometry': {'type': 'Point', 'coordinates': [-1.0965173333333333, 53.99096966666667]}}, {'type': 'Feature', 'properties': {'description': 'We need to temporarily turn the power off to carry out replacement of poles that support our overhead power lines in the area. The scheduled work has now been completed', 'dno': 'np', 'estimated_restored_time': '2021-04-17 14:30', 'incident_id': 'PPC039900', 'incident_url': 'https://www.northernpowergrid.com/power-cuts', 'postcodes_impacted': {'HD7 3DU': {'class': 'models.MapDataLocation', 'lat': 53.5927, 'lng': -1.81854}, 'HD9 4DU': {'class': 'models.MapDataLocation', 'lat': 53.5939, 'lng': -1.81948}}, 'received_time': '2021-04-17 08:30'}, 'geometry': {'type': 'Point', 'coordinates': [-1.81901, 53.5932605]}}, {'type': 'Feature', 'properties': {'description': 'The power cut in your area has been caused by an unexpected incident with the underground cable that provides electricity to your property.', 'dno': 'enw', 'estimated_restored_time': '2021-04-17 22:43', 'incident_id': '60508633', 'incident_url': 'https://www.enwl.co.uk/power-cuts/power-cuts-power-cuts-live-power-cut-information-fault-list/fault-list', 'postcodes_impacted': ['LA3 2BP', 'LA3 2BU', 'LA3 2DF', 'LA3 2DN', 'LA3 2DQ', 'LA3 2DR', 'LA3 2DS', 'LA3 2DY', 'LA3 2JH'], 'received_time': '2021-04-17 16:41'}, 'geometry': {'type': 'Point', 'coordinates': [-2.890340777777778, 54.048605888888886]}}]}

var geoJson = new L.geoJSON(geojsonFeature, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<p>'+feature.properties.description+'</p><p>Received time: '+feature.properties.received_time+'</p><p>Estimated restored time: '+feature.properties.estimated_restored_time+'</p><p><a href="'+feature.properties.incident_url+'" target="_blank">Further details</p>');
    layer.setIcon(boltIcon);
  }
}).addTo(mymap);
});