var mymap = L.map("mapid").setView([-31.636, -60.700], 13)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mymap)

var poiGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Grabando en El Rosa",
            audio_url: "https://ingjuanmasuarez.github.io//MapaSonoro/audio/RegistrosSonorosSantaFe_Museo%20Rosa.mp3"
        },
        "geometry": {
          "coordinates": [
            -60.71498666250912,
            -31.656908390815836
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(poiGeoJSON, {
    onEachFeature: function (feature, layer) {
        var contenidoPopup = 
            "<h2>" + feature.properties.title + "</h2>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(contenidoPopup)
    }
  }).addTo(mymap)