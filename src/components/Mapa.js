// import React, { useEffect } from 'react';

// const Map = () => {
//   useEffect(() => {
//     const initMap = () => {
//       const mapOptions = {
//         center: { lat: 44.2107675, lng: 20.9224158 }, // Pocetni centar mape
//         zoom: 7, // Pocetni nivo zumiranja mape (namesteno da se vidi SRBIJA)
//       };

//       const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);

//       // Dodavanje oznacavanja mesta dogadjaja na klik mape
//       map.addListener("click", function (event) {
//         placeMarker(event.latLng, map);
//       });

//       // Oznacavanje mesta dogadjaja
//       function placeMarker(latLng, map) {
//         const marker = new window.google.maps.Marker({
//           position: latLng,
//           map: map,
//         });

//         // Cuvanje koordinata oznacenog mesta u promenljivoj (ili bazi podataka kasnije)
//         const latitude = latLng.lat();
//         const longitude = latLng.lng();
//         // ovde ide obrada oznacenog mesta npr slanje podataka serveru
//       }
//     };

//     // Pozivanje funkcije za inicijalizaciju mape
//     initMap();

//   }, []);

//   return <div id="map" style={{ height: '400px' }} />;
// };

// export default Map;
import React, { useEffect, useRef } from 'react';

const Map = ({ x, y, onMapMarker }) => {
  const mapRef = useRef(null); // Referenca na mapu
  const markerRef = useRef(null); // Referenca na marker

  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: { lat: 44.2107675, lng: 20.9224158 }, // Pocetni centar mape
        zoom: 7, // Pocetni nivo zumiranja mape (namesteno da se vidi SRBIJA)
      };

      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      mapRef.current.map = map; // Čuvanje reference na mapu u ref objektu

      // Dodavanje oznacavanja mesta dogadjaja na klik mape
      map.addListener("click", function (event) {
        placeMarker(event.latLng, map);
      });

      // Oznacavanje mesta dogadjaja
      function placeMarker(latLng, map) {
        if (markerRef.current) {
          // Ako postoji prethodni marker, ukloni ga sa mape
          markerRef.current.setMap(null);
        }

        const marker = new window.google.maps.Marker({
          position: latLng,
          map: map,
        });

        // Cuvanje reference na trenutni marker u ref objektu
        markerRef.current = marker;

        // Cuvanje koordinata oznacenog mesta u promenljivama x i y
        const latitude = latLng.lat();
        const longitude = latLng.lng();

        // Pozivanje onMapMarker funkcije i prosleđivanje koordinata
        onMapMarker(latitude, longitude);
      }
    };

    // Pozivanje funkcije za inicijalizaciju mape
    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: '280px' }} />;
};

export default Map;

