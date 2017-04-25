import React from 'react';
import * as config from './config'
import { connect } from 'react-redux'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import {Marker} from './Marker'
import subscribeToBusinesses from './actions/business/subscribe'

export class MapContainer extends React.Component {

  render() {
    const { companies } = this.props
    return (
      <div>
        <JobsMap google={this.props.google}>
          { companies.map((company) => {
              return(
                <Marker
                company={ company } />
              )
            })
          }
        </JobsMap>
      </div>
    )}
}

const mapStateToProps = ({ businesses }) => {
   const companies = businesses.filter((business) => {
     business.active
   })
  return { companies }
}

let key = config.getGoogleKey()
export default connect(mapStateToProps, { subscribeToBusinesses })(GoogleApiComponent({
  apiKey: key
})(MapContainer))
