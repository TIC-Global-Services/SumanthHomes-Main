import React from 'react'
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"

export const MapSection = () => {

  // Warning: Hardcoded for now. The process issue needs to be resolved 
  const MapAPIKey = 'AIzaSyCl9odnEmQrCWNDSDB63P_ZGqS_UgcUAao';

  const mapStyle = {
    width:"90%",
    height:"200px"
  }

  const PinPoint = {
    lat:13.6288,
    lng:79.4192,
  }

  return (
    <div>

        <div className='
        flex justify-center
        mb-4 xl:mb-4 md:mb-4'>

            <LoadScript googleMapsApiKey={MapAPIKey}>

              <GoogleMap 
              
              mapContainerStyle={mapStyle}
              center = {PinPoint}
              zoom = {12}
              >

                <Marker position={PinPoint}></Marker>

              </GoogleMap>

            </LoadScript>
        </div>

        <div className='
        flex items-center justify-center
        xl:gap-2 
        mb-8 xl:mb-28 md:mb-28
        '>
            <p className='
            font-normal text-[#737373]
            text-xs'>Studio. Showroom. Site Visits - drop by or get directions -</p>
            <button className='
            text-[#B50404] font-semibold
            text-xs 
            '>Get directions</button>
        </div>

    </div>
  )
}
