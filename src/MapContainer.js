import React from 'react';
import * as config from './config'
import { connect } from 'react-redux'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import Marker from './Marker'
import subscribeToBusinesses from './actions/business/subscribe'
import InfoWindow from './InfoWindow'

export class MapContainer extends React.Component {
  componentWillMount(){
    this.props.subscribeToBusinesses()
  }

  render() {
    const { companies } = this.props
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if (this.props.showInfoWindow) {
      contentStyle.marginLeft = 256;
    }

    return (
      <div>
        <InfoWindow />
        <div style={contentStyle}>
          <JobsMap google={this.props.google}>
            { this.props.companies.map((company, index) => {
              console.log(company)
                return(
                  <Marker key={ index }
                  company={ company } />
                )
              })
            }
          </JobsMap>
        </div>
      </div>
    )}
}

const mapStateToProps = ({ businesses, showInfoWindow }) => {
   const companies = businesses.filter((business) => {
     return business.confirmed
   })
  return { companies, showInfoWindow }
}

let key = config.getGoogleKey()
export default connect(mapStateToProps, { subscribeToBusinesses })(GoogleApiComponent({
  apiKey: key
})(MapContainer))
