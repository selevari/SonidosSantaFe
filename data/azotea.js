var AzoGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Desde la azotea de la residencia",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/azotea.aac"
        },
        "geometry": {
          "coordinates": [
            -60.70908851517453,
            -31.645855037262464
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(AzoGeoJSON, {
    onEachFeature: function (feature, layer) {
        var AzoPopup =
            "<h3>" + feature.properties.title + "</h3>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(AzoPopup)
    }
  }).addTo(mymap)