import React from 'react';
import MapContainer from './MapContainer';

export class AppContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <MapContainer {...this.props} />
      </div>
    )
  }
}
