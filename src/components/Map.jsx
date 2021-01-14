import React from 'react'
import { LocationContext } from "../context/AppContext";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {

    


    const appContext = React.useContext(LocationContext);

    const { loading, locations } = appContext;

    let lat = locations.lat;
    let lon = locations.lon

    const center = {
      lat: lat,
      lng: lon,
    };

    if ( loading )
    {
        return "Loading..."
    }

    return (
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={13}
        >
          <AnyReactComponent
            lat={locations.lat}
            lng={locations.lon}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default Map;


