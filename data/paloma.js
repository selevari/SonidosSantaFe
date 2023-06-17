var PaloGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Con-viviendo en el Palomar",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/paloma.aac"
        },
        "geometry": {
          "coordinates": [
            -60.70401580767373,
            -31.646730580372456
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(PaloGeoJSON, {
    onEachFeature: function (feature, layer) {
        var PalPopup =
            "<h3>" + feature.properties.title + "</h3>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(PalPopup)
    }
  }).addTo(mymap)