// import React from 'react';
// import { useState } from 'react';

// const HideShowMapa = ({ latitude, longitude }) => {
//   const [mapVisible, setMapVisible] = useState(false);

//   const toggleMap = () => {
//     setMapVisible(!mapVisible);
//   };
//   const google = window.google;
//   return (
//     <div>
//       <button id="toggleMapa" className={`prikazimapubutton ${mapVisible ? 'active' : ''}`} onClick={toggleMap}>
//         {mapVisible ? 'Zatvori mapu događaja' : 'Prikazi mapu događaja'}
//       </button>
//       {mapVisible && (
//         <div id="mapa" style={{ display: 'block' }}>
//           <iframe
//             className="z-depth-1-half map-container"
//             width="100%"
//             height={250}
//             frameBorder={0}
//             src={`https://www.google.com/maps/embed?key=AIzaSyDtZ29HzqvVsbWZC7tQbarOQ9HJdX4j0vg&q=${latitude},${longitude}`}
//             allowFullScreen
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default HideShowMapa;
import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const HideShowMapa = ({ latitude, longitude }) => {
  const [mapVisible, setMapVisible] = useState(false);

  const toggleMap = () => {
    setMapVisible(!mapVisible);
  };

  return (
    <div>
      <button id="toggleMapa" className={`prikazimapubutton ${mapVisible ? 'active' : ''}`} onClick={toggleMap}>
        {mapVisible ? 'Zatvori mapu dogadjaja' : 'Prikazi mapu dogadjaja'}
      </button>
      {mapVisible && (
        <div style={{ height: '250px', width: '100%' }}>
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            zoom={11}
            center={{ lat: latitude, lng: longitude }}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default HideShowMapa;
