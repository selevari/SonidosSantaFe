var poiGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          title: "Tomando posición en el 'Museo Tomado'",
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
          "<h3>" + feature.properties.title + "</h3>" +
          "<audio src = " + feature.properties.audio_url + " controls />"
      layer.bindPopup(contenidoPopup)
  }
}).addTo(mymap)
