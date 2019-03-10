'use strict'

import React, { useState, useEffect } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react'

import './index.sass'

function MapRoute({ google, getMarkers, seaSelection, initialMarkers}) {
    debugger

    let [markers, setMarkers] = useState(initialMarkers)
    let [sea, setSea] = useState({

        name: 'Select Ocean',
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 2

    })

    useEffect(() => {
        setSea(seaSelection)
        setMarkers(markers)

    }, [seaSelection, markers])


    function generateRoute(markers) {
        let route = []
        markers.forEach(({ position }) => route.push(position))
        return route
    }

    function onMarkerDragEnd(coord, index) {
        const { latLng } = coord
        const lat = latLng.lat()
        const lng = latLng.lng()

        let newPosition = { lat, lng }

        markers[index].position = newPosition
        markers = [...markers]

        setMarkers(markers)
        getMarkers(markers)
    }

    function mapClicked(mapProps, map, clickEvent) {
        const { latLng } = clickEvent
        const lat = latLng.lat()
        const lng = latLng.lng()

        let newMarker = {
            name: 'new marker',
            position: {
                lat,
                lng
            }
        }

        markers = [...markers, newMarker]

        setMarkers(markers)
        getMarkers(markers)
    }

    function onMarkerClick(index) {
        markers.splice(index, 1)
        markers = [...markers]

        setMarkers(markers)
        getMarkers(markers)
    }

    return (<Map
        google={google}
        containerStyle={{ height: "50%" }}
        style={{
            width: "100%",
            height: "100%"
        }}
        center={{
            // lat: markers.length ? markers[markers.length - 1].position.lat : sea.center.lat,
            // lng: markers.length ? markers[markers.length - 1].position.lng : sea.center.lng

            lat: sea.center.lat,
            lng: sea.center.lng
        }}
        zoom={sea.zoom}
        onClick={(mapProps, map, clickEvent) => mapClicked(mapProps, map, clickEvent)}
    >
        {
            markers.map((marker, index) => {
                if (index === 0) {
                    return <Marker
                        position={marker.position}
                        draggable={true}
                        animation={google.maps.Animation.DROP}
                        onDragend={(t, map, coord) => onMarkerDragEnd(coord, index)}
                        onClick={() => onMarkerClick(index)}
                        name={marker.name}
                    >
                    </Marker>
                }
                else {

                    return (<Marker
                        position={marker.position}
                        draggable={true}
                        onDragend={(event, coord) => onMarkerDragEnd(coord, index)}
                        onClick={() => onMarkerClick(index)}
                        name={marker.name}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: '#00F',
                            fillOpacity: 0.6,
                            strokeColor: '#00A',
                            strokeOpacity: 0.9,
                            strokeWeight: 1,
                            scale: 3
                        }} />)


                }
            })
        }


        {<Polyline
            path={generateRoute(markers)}
            options={{
                strokeColor: '#0000ff',
                strokeOpacity: 1,
                strokeWeight: 2,
                icons: [{
                    icon: "hello",
                    offset: '0',
                    repeat: '10px'
                }],
            }} />}
    </Map>)
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAFDTq_HRLGd3dWHf2NLtw8Jv-05efTy7s')
})(MapRoute)