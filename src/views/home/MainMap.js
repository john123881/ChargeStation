import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import Swal from 'sweetalert2'

const MainMap = () => {
  const [userCenter, setUserCenter] = useState(null)
  const [map, setMap] = useState(null)
  const mapRef = useRef(null)
  const googleMapsApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || 'API_KEY'
  const libraries = ['places', 'geometry']

  const containerStyle = {
    width: '100%',
    height: '400px',
  }

  const options = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    }),
    [],
  )

  const handleMapLoad = useCallback(
    (map) => {
      mapRef.current = map
      setMap(map)
      if (userCenter) {
        const bounds = new window.google.maps.LatLngBounds(userCenter)
        map.fitBounds(bounds)
      }
    },
    [userCenter],
  )

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialUserCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setUserCenter(initialUserCenter)
      },
      () => {
        Swal.fire({
          position: 'middle',
          text: '請允許存取使用者位置來使用此功能',
          icon: 'warning',
          showCloseButton: true,
          showConfirmButton: false,
        })
      },
    )
  }, [])

  return (
    <>
      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries['places']}>
        <GoogleMap
          zoom={14}
          center={userCenter}
          mapContainerStyle={containerStyle}
          options={options}
          onLoad={handleMapLoad}
        ></GoogleMap>
      </LoadScript>
    </>
  )
}

export default MainMap
