import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import createCompanyRequest from '../actions/business/requestBusiness'
import subscribeToBusinesses from '../actions/business/subscribe'
import subscribeToSectorTypes from '../actions/sectorTypes/subscribe'
import subscribeToCompanyTypes from '../actions/companyTypes/subscribe'
import closeRequestWindow from '../actions/requestWindow/close'
import requestMarker from '../actions/requestMarker'

class RequestBusiness extends PureComponent {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      website: '',
      email: '',
      longitude: '',
      latitude: '',
      companyType: 1,
      sectorType: 1
    }
  }


  componentDidMount(){
    this.props.subscribeToBusinesses()
    this.props.subscribeToCompanyTypes()
    this.props.subscribeToSectorTypes()
  }

  submitCompanyRequest(){
    this.getCoordinates(this.state.address)

    const companyRequest = {
      name: this.state.name,
      address: this.state.address,
      website: this.state.website,
      email: this.state.email,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      companyType: this.state.companyType,
      sectorType: this.state.sectorType
    }
    this.props.createCompanyRequest(companyRequest)
    this.props.closeRequestWindow()
  }

  handleNameChange = (event, name) => {
    this.setState({
      name: name,
    })
  }

  handleAddressChange = (event, address) => {
    this.setState({
      address: address,
    })
  }

  handleWebsiteChange = (event, website) => {
    this.setState({
      website: website,
    })
  }

  handleEmailChange = (event, email) => {
    this.setState({
      email: email,
    })
  }

  handleCompanyChange = (event, index, value) => {
    this.setState({
      companyType: value,
    })
  }

  handleSectorChange = (event, index, value) => {
    this.setState({
      sectorType: value
    })
  }

  handleTaglineChange = (event, tagline) => {
    this.setState({
      tagline: tagline,
    })
  }


  getCoordinates = (address) => {
    const requestAddress = address.split(' ').join('+')
    const request = `https://maps.googleapis.com/maps/api/geocode/json?address=${requestAddress}+Amsterdam&components=country:NL&key=AIzaSyC4tOoGJ5ypR_8KCcnJCSqIOHLIsXAhQ64`
    return axios.get(request)
      .then((response) => {
        this.setState({
          latitude: response.data.results[0].geometry.location.lat,
          longitude: response.data.results[0].geometry.location.lng,
        })
        this.props.requestMarker({lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng})
      })
      .catch((error) => { console.error(error)})
  }

  render(){
    const { companyTypes,  sectorTypes } = this.props
    return (
      <div style={{width: "300px", padding: "15px" }}>
        <h3>Request to be added</h3>
        <TextField
          hintText="Business name"
          hintStyle={{color:'darkgrey'}}
          onChange={this.handleNameChange}
         />
       <TextField
         hintText="Address"
         hintStyle={{color:'darkgrey'}}
         onChange={this.handleAddressChange}
         />
       <TextField
         hintText="Contact email"
         hintStyle={{color:'darkgrey'}}
         onChange={this.handleEmailChange}
         />

       <SelectField
         floatingLabelText="Company Type"
         floatingLabelStyle={{color:'darkgrey'}}
         value={this.state.companyType}
         onChange={this.handleCompanyChange.bind(this)}>
         { companyTypes.map((companyType, index) => {
             return <MenuItem key={index} value={companyType._id} primaryText={companyType.name} />
           })
         }
       </SelectField>

       <SelectField
         floatingLabelText="Sector"
         floatingLabelStyle={{color:'darkgrey'}}
         value={this.state.sectorType}
       onChange={this.handleSectorChange.bind(this)}>
         {sectorTypes.map((sectorType, index) => {
           return <MenuItem key={index} value={sectorType._id} primaryText={sectorType.name} />
         })}
       </SelectField>
       <TextField
       hintText="Website"
       hintStyle={{color:'darkgrey'}}
       onChange={this.handleWebsiteChange}
       />
       <br />
       <RaisedButton
         label="Submit company request"
         primary={true}
         onClick={this.submitCompanyRequest.bind(this)}
         />
      </div>
    )
  }
}

const mapStateToProps = ({ companyTypes, sectorTypes }) => ({ companyTypes, sectorTypes })

export default connect(mapStateToProps, { createCompanyRequest, subscribeToBusinesses, subscribeToSectorTypes, subscribeToCompanyTypes, requestMarker, closeRequestWindow })(RequestBusiness)
