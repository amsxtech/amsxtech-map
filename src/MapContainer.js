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
    console.log(this.props)
    return (
      <div>
        <NavBar />
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
        <InfoWindow />
      </div>
    )}
}

const mapStateToProps = ({ businesses }) => {
   const companies = businesses.filter((business) => {
     return business.confirmed
   })
  return { companies }
}

let key = config.getGoogleKey()
export default connect(mapStateToProps, { subscribeToBusinesses })(GoogleApiComponent({
  apiKey: key
})(MapContainer))
