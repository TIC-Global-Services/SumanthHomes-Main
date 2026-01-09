import React from 'react'
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api"

export const MapSection = () => {

  // Warning: Hardcoded for now. The process issue needs to be resolved 
  const MapAPIKey = 'AIzaSyCl9odnEmQrCWNDSDB63P_ZGqS_UgcUAao';

  const mapStyle = {
    width:"100%",
    height:"300px"
  }

  const PinPoint = {
    lat:13.6288,
    lng:79.4192,
  }

  return (
    <div>

        <div className='
        
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
        flex items-center justify-center flex-wrap shirnk-0
        xl:gap-2 
        mb-2 xl:mb-28 md:mb-28
        '>
            <div className='
            flex justify-center
            w-[100%]
            mb-1'>
                <p className='
                text-center
                font-normal text-[#737373]
                w-[70%]
                text-xs md:text-xl xl:text-4xl'>Studio. Showroom. Site Visits  drop by or get directions </p>
            </div>
            
            <button className='
            text-[#B50404] font-semibold
            w-[100%]
            text-sm md:text-xl
            '>Get directions</button>
        </div>

    </div>
  )
}
