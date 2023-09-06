import React from "react";
import GoogleMapReact from 'google-map-react';
import { useLocation } from 'react-router-dom';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    // const { vehicleId } = useParams();
    const google_map_api_key = "AIzaSyD36F2K6M8wxwyO29jwM6P9R_Uyz6XMB8U";
    const location = useLocation();
    const stateData = location.state;
console.log(stateData,'----------stateData')
  const defaultProps = {
    center: {
      lat:stateData.lat,
      lng: stateData.lng
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:  google_map_api_key}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      {/* <Marker lat={18.54590} lng={73.90684} /> */}
        <AnyReactComponent
          lat={18.54590}
          lng={73.90684}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}