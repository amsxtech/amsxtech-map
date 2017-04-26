import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import {Marker} from './Marker'
import NavBar from './components/NavBar'

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <JobsMap google={this.props.google}>
          <Marker
            title={'Dolores park'}
            position={{lat: 52.370216, lng: 4.895168}} />
        </JobsMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
