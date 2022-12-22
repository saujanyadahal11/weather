import React from 'react'
import { useState, useEffect } from 'react'
import Temperature from './temperature'

export default function Location() {
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
// console.log(lat,lon)
function currentLocation(){
navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);  
})}
useEffect(()=>currentLocation(),[])

return (
    <div > 
        {lat && <Temperature lat={lat} lon={lon} code={0}/>}
    </div>
    )
}
