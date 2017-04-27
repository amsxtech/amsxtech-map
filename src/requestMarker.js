import React from 'react';
import { connect } from 'react-redux'
import showMarker from './actions/showMarker'

class RequestMarker extends React.Component {

  componentDidmount() {
    this.renderMarker()
  }

  renderMarker() {
    console.log('REQUEST MARKER')
    let { map, google, requestMarker } = this.props;
    console.log(requestMarker)
    let position = { lat: requestMarker.latitude, lng: requestMarker.longitude }
    let title = requestMarker.name

    // if the marker has already been drawn, set map on or null
    if (this.marker) {
      if (!this.props.mapOn) {
        this.marker.setMap(null);
      }
      else {
        this.marker.setMap(map)
      }
      return
    }

    // setting the map to null
    const pref = {
        map: map,
        position: position,
        title: title
      };

    this.marker = new google.maps.Marker(pref)
  }

  render() {
    return null;
  }
}

export default connect(null, { showMarker })(RequestMarker)
