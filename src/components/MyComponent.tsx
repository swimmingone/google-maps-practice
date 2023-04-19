import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ENV } from "@/common/ENV";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37.5,
  lng: 127,
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey={ENV.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
