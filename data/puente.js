var PuenteGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
         title: "Los pericos cantan al lado del Puente Candiotti",
         audio_url: "https://selevari.github.io//SonidosSantaFe/audio/Puente.mp3"
      },
      "geometry": {
        "coordinates": [
          -60.68293231936555,
          -31.639582059084383
        ],
        "type": "Point"
      }
    }
  ]
}

L.geoJSON(PuenteGeoJSON, {
  onEachFeature: function (feature, layer) {
      var puentePopup =
          "<h3>" + feature.properties.title + "</h3>" +
          "<audio src = " + feature.properties.audio_url + " controls />"
      layer.bindPopup(puentePopup)
  }
}).addTo(mymap)