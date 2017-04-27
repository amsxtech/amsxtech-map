import React from 'react';
import * as config from './config'
import { connect } from 'react-redux'
import GoogleApiComponent from './GoogleApiComponent'
import JobsMap from './JobsMap'
import NavBar from './components/NavBar'
import Marker from './Marker'
import subscribeToBusinesses from './actions/business/subscribe'
import InfoWindow from './InfoWindow'


export class MapContainer extends React.Component {
  componentWillMount(){
    this.props.subscribeToBusinesses()
  }

  render() {
    const { companies } = this.props
    console.log(companies)
    const contentStyle = {  transition: 'margin-right 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.props.showInfoWindow) {
      contentStyle.marginRight = 256;
    }

    return (
      <div>
        <InfoWindow />
        <div style={contentStyle}>
          <NavBar />
          <JobsMap google={this.props.google}>
            { this.props.companies.map((company, index) => {
                return(
                  <Marker key={ index }
                    mapOn={company.mapOn}
                  company={ company } />
                )
              })
            }
          </JobsMap>
        </div>
      </div>
    )}
}

const mapStateToProps = ({ businesses, showInfoWindow, companyTypeFilter, sectorTypeFilter }) => {
  const mapOnCompanies = businesses.map((business) => {
    if((companyTypeFilter == 0 || companyTypeFilter == business.companyType) && (sectorTypeFilter == 0 || sectorTypeFilter == business.sectorType)){
      business.mapOn = true
    } else {
      business.mapOn = false
    }
    return business
  })
  const companies = mapOnCompanies.filter((company) => {
    return company.confirmed
  })
  return { companies, showInfoWindow }
}

let key = config.getGoogleKey()
export default connect(mapStateToProps, { subscribeToBusinesses })(GoogleApiComponent({
  apiKey: key
})(MapContainer))
