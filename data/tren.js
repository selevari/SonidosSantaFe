var TrenGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Pasando por las antiguas vías del tren",
            audio_url: "https://selevari.github.io//SonidosSantaFe/audio/tren.aac"
        },
        "geometry": {
          "coordinates": [
            -60.685909411544,
            -31.639354769403255
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(TrenGeoJSON, {
    onEachFeature: function (feature, layer) {
        var trenPopup =
            "<h3>" + feature.properties.title + "</h3>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(trenPopup)
    }
  }).addTo(mymap)
