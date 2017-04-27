import React from 'react';
import Pin from './images/red-pin.svg'

export default class RequestMarker extends React.Component {

  componentDidUpdate(){
    this.renderMarker()
  }

  renderMarker() {
    let { map, google, requestedMarker } = this.props;
    const position = { lat: parseFloat(requestedMarker.lat), lng: parseFloat(requestedMarker.lng)}

    // if the marker has already been drawn, set map on or null, then render marker
    if (this.marker) {
      if (!this.props.mapOn) {
        this.marker.setMap(null);
      }
      else {
        this.marker.setMap(map)
      }
    }

    // setting the map to null
    const pref = {
        map: map,
        position: position,
        icon: Pin,
      };

    this.marker = new google.maps.Marker(pref)
  }

  render() {
    return null
  }
}
