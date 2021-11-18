import React, { useEffect, useState } from "react"

export const LocationList = () =>{
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(
                    (locationsArray) => {
                        setLocations(locationsArray)
                    }
                )
        },
        []
    )
    
    return (
        <>
            {
               locations.slice(0, 3).map(
                   (locationObj) => {
                       return <p key={`location--${locationObj.id}`}>{locationObj.address}</p>
                   }
               ) 
            }
        </>
    )
}