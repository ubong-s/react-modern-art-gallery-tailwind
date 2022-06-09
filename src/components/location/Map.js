import Leaflet from 'leaflet';
import { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const customIcon = new Leaflet.Icon({
   iconUrl: require('../../icons/icon-location.png'),
   iconRetinaUrl: require('../../icons/icon-location.png'),
   iconAnchor: null,
   popupAnchor: [1, -34],
   shadowUrl: null,
   shadowSize: null,
   shadowAnchor: null,
   iconSize: new Leaflet.Point(60, 75),
   className: 'leaflet-div-icon',
});

const Map = () => {
   const [position, setPosition] = useState([
      41.481526583600406, -71.31041024120394,
   ]);
   return (
      <div>
         <div className='overflow-hidden relative'>
            <Link
               to='/'
               className='absolute left-0 top-0 z-highest md:left-16 lg:left-32'
            >
               <Button title='back to home' backIcon='true' />
            </Link>
            <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
               <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
               />
               <Marker position={position} icon={customIcon}>
                  <Popup>99 King St, Newport, RI 02840, USA</Popup>
               </Marker>
            </MapContainer>
         </div>
      </div>
   );
};

export default Map;
