import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import {Marker} from './Marker'
import companies from './seed'

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <JobsMap google={this.props.google}>
          { companies.map((company) => {
              return(
                <Marker
                title={ company.name }
                position={company.coordinates} />
              )
            })
          }
        </JobsMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(MapContainer)
