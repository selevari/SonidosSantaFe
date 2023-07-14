var PicnicGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title : "Picnic en el Federal",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/picnic.aac"
        },
        "geometry": {
          "coordinates": [
            -60.69674180187431,
            -31.62140981894614
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(PicnicGeoJSON, {
    onEachFeature: function (feature, layer) {
        var PicnicPopup =
            "<h3>" + feature.properties.title + "</h3>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(PicnicPopup)
    }
  }).addTo(mymap)