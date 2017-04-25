import React from 'react';

export class Marker extends React.Component {

  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
    (this.props.properties !== prevProps.properties) ||
    (this.props.mapOn !== prevProps.mapOn)) {
      this.renderMarker()
    }
  }

  renderMarker() {
    let {
      map, google
    } = this.props;
    let position = this.props.company.coordinates
    let title = this.props.company.name

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
        title:title
      };

    this.marker = new google.maps.Marker(pref);
  }

  render() {
    return null;
  }
}
