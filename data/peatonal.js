var PeatonalGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Caminando los sonidos de la peatonal",
            audio_url: "https://selevari.github.io/SonidosSantaFe/audio/peatonal.mp3"
        },
        "geometry": {
          "coordinates": [
            [
              -60.70663263289454,
              -31.64679731688782
            ],
            [
              -60.70696438593929,
              -31.64800644120355
            ],
            [
              -60.70737576540351,
              -31.649149502743548
            ],
            [
              -60.70772946913988,
              -31.65034716635548
            ],
            [
              -60.70806352266696,
              -31.6514049919792
            ],
            [
              -60.708397576195935,
              -31.652513451022045
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  }

  L.geoJSON(PeatonalGeoJSON, {
    onEachFeature: function (feature, layer) {
        var PeaPopup =
            "<h3>" + feature.properties.title + "</h3>" +
            "<audio src = " + feature.properties.audio_url + " controls />"
        layer.bindPopup(PeaPopup)
    }
  }).addTo(mymap)
