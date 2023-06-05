var DiqueGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Sentado frente al Dique Número 1 del Puerto",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/dique.aac"
        },
        "geometry": {
          "coordinates": [
            -60.70215728732322,
            -31.648017322964883
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(DiqueGeoJSON, {
    onEachFeature: function (feature, layer) {
        var DiquePopup =
            "<h6>" + feature.properties.title + "</h6>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(DiquePopup)
    }
  }).addTo(mymap)