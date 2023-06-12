/*
// Kreiranje mape
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0}, // inicijalno postavljanje centra mape na (0, 0)
      zoom: 2 // inicijalni zoom nivo mape
    });

    // Kreiranje markera
    var marker = new google.maps.Marker({
      map: map,
      draggable: true, // ovo omogucava korisniku da pomeri marker
      animation: google.maps.Animation.DROP,
      position: {lat: 0, lng: 0} // Inicijalna pozicija markera na (0, 0)
    });

    // osluskivanja dogadjaja pomeranja markera
    marker.addListener('dragend', function(event) {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();

      // ovde mog da se dalje obrade koord.
      console.log('Nova pozicija markera:', latitude, longitude);
    });
  }*/
  // Kreiranje mape
function initMap() {
  var mapOptions = {
    center: { lat: 44.2107675, lng: 20.9224158}, // Pocetni centar mape
    zoom: 7, // Pocetni nivo zumiranja mape(namesteno da se vidi SRBIJA)
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Dodavanje oznacavanja mesta dogadjaja na klik mape
  map.addListener("click", function (event) {
    placeMarker(event.latLng, map);
  });

  // Oznacavanje mesta dogadjaja
  function placeMarker(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });

    // Cuvanje koordinata oznacenog mesta u promenljivoj (ili bazi podataka kasnij)
    var latitude = latLng.lat();
    var longitude = latLng.lng();

    // ovde ide obrada oznacenog mesta npr slanje podataka serveru
    
  }
}

// Pozivanje funkcije za inicijalizaciju mape
initMap();

