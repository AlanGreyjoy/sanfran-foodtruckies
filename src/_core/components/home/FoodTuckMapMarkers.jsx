import { AdvancedMarker, useMap } from '@vis.gl/react-google-maps'
import { useEffect, useRef, useState } from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

export default function FoodTruckMapMarkers(props) {
  const foodTrucks = props.foodTrucks || []

  const map = useMap()
  const [markers, setMarkers] = useState({})
  const clusterer = useRef(null)

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map })
    }
  }, [map])

  // Update markers
  useEffect(() => {
    clusterer.current?.clearMarkers()
    clusterer.current?.addMarkers(Object.values(markers))
  }, [markers])

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return
    if (!marker && !markers[key]) return

    setMarkers(prev => {
      if (marker) {
        return { ...prev, [key]: marker }
      } else {
        const newMarkers = { ...prev }
        delete newMarkers[key]
        return newMarkers
      }
    })
  }

  return (
    <>
      {foodTrucks?.map(foodTruck => {
        if (foodTruck.location.latitude === null || foodTruck.location.longitude === null)
          return null

        return (
          <AdvancedMarker
            position={{
              lat: parseFloat(foodTruck.location.latitude),
              lng: parseFloat(foodTruck.location.longitude)
            }}
            key={foodTruck.objectid}
            ref={marker => setMarkerRef(marker, foodTruck.objectid)}
          >
            <span
              style={{
                fontSize: '1.5rem'
              }}
            >
              🚚
            </span>
          </AdvancedMarker>
        )
      })}
    </>
  )
}
