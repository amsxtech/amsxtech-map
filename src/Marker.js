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
    let { name, address, companyType, industryType, hiring, website } = this.props.company
    let pos = { lat: parseFloat(this.props.company.lattitude), lng: parseFloat(this.props.company.longitude)}
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
        position: pos,
        title: name
      };

    this.marker = new google.maps.Marker(pref);
  }

  render() {
    return null;
  }
}
