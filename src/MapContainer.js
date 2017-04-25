import React from 'react';
import * as config from './config'
import { connect } from 'react-redux'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import {Marker} from './Marker'
import companies from './seed'

export class MapContainer extends React.Component {
  componentDidMount() {
    this.fetchRequests()
  }
  render() {
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

// const mapStateToProps = ({ requests }) => {
//    return (requests.filter((request) => {
//      request.active
//     })
//   )
// }

let key = config.getGoogleKey()
export default connect()(GoogleApiComponent({
  apiKey: key
})(MapContainer))
