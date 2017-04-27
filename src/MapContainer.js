import React from 'react';
import * as config from './config'
import { connect } from 'react-redux'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import NavBar from './components/NavBar'
import Marker from './Marker'
import RequestMarker from './requestMarker'
import subscribeToBusinesses from './actions/business/subscribe'
import InfoWindow from './InfoWindow'


class MapContainer extends React.Component {
  componentWillMount(){
    this.props.subscribeToBusinesses()
  }

  renderRequestMarker() {
    console.log("I'm heeere!")
    console.log(this.props.requestCompanyPin)
    return <RequestMarker requestedMarker={this.props.requestCompanyPin} />
  }

  render() {
    const { companies } = this.props
    const contentStyle = {  transition: 'margin-right 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.props.showInfoWindow) {
      contentStyle.marginRight = 256;
    }


    return (
      <div>
        <div style={contentStyle}>
          <NavBar />
          <InfoWindow />
          <JobsMap google={this.props.google}>
            { this.props.companies.map((company, index) => {
                return(
                  <Marker key={ index }
                  company={ company } />
                )
              })
            }
            <RequestMarker requestedMarker={this.props.requestCompanyPin} />
          </JobsMap>
        </div>
      </div>
    )}
}

const mapStateToProps = ({ businesses, showInfoWindow, requestCompanyPin }) => {
   const companies = businesses.filter((business) => {
     return business.confirmed
   })
  return { companies, showInfoWindow, requestCompanyPin }
}

let key = config.getGoogleKey()
export default connect(mapStateToProps, { subscribeToBusinesses })(GoogleApiComponent({
  apiKey: key
})(MapContainer))
