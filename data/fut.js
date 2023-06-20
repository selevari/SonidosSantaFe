var UniGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
           title: "¡Dale Tatengue!: La popular va a estallar",
           audio_url: "https://selevari.github.io//SonidosSantaFe/audio/uni%C3%B3n.wav"
        },
        "geometry": {
          "coordinates": [
            -60.71561387620336,
            -31.6316261812958
          ],
          "type": "Point"
        }
      }
    ]
  }
  
  L.geoJSON(UniGeoJSON, {
    onEachFeature: function (feature, layer) {
        var UniPopup =
            "<h4>" + feature.properties.title + "</h4>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(UniPopup)
    }
  }).addTo(mymap)
