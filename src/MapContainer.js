import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import {Marker} from './Marker'

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <JobsMap google={this.props.google}>
          <Marker
            title={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />
        </JobsMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
