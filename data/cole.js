var ColeGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "El baile de los pasos arrastrados",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/cole.aac"
        },
        "geometry": {
          "coordinates": [
            -60.67252357350968,
            -31.64032351542066
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(ColeGeoJSON, {
    onEachFeature: function (feature, layer) {
        var UniPopup =
            "<h5>" + feature.properties.title + "</h5>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(UniPopup)
    }
  }).addTo(mymap)
