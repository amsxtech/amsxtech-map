import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import createCompanyRequest from '../actions/business/requestBusiness'
import subscribeToBusinesses from '../actions/business/subscribe'

class RequestBusiness extends PureComponent {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      website: '',
      email: '',
      longitude: '',
      latitude: ''
    }
  }
  componentWillMount(){
    this.props.subscribeToBusinesses()
  }

  submitCompanyRequest(){
    const companyRequest = {
      name: this.state.name,
      address: this.state.address,
      website: this.state.website,
      email: this.state.email,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    }
    this.props.createCompanyRequest(companyRequest)
  }
  handleNameChange = (event, name) => {
    this.setState({
      name: name,
    })
  }

  handleAddressChange = (event, address) => {
    this.getCoordinates(address)
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
  handleLongChange = (event, longitude) => {
    this.setState({
      longitude: longitude,
    })
  }
  handleLatChange = (event, latitude) => {
    this.setState({
      latitude: latitude,
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
      })
      .catch((error) => { console.error(error)})
  }

  render(){

    return (
      <div>
        <h3>Request to be added</h3>
        <TextField
          hintText="Business name"
          onChange={this.handleNameChange}
         />
       <TextField
         hintText="Address"
         onChange={this.handleAddressChange}
         />
         <TextField
           hintText="Website"
           onChange={this.handleWebsiteChange}
           />
           <TextField
             hintText="Contact email"
             onChange={this.handleEmailChange}
             />

           <RaisedButton
             label="Submit company request"
             primary={true}
             onClick={this.submitCompanyRequest.bind(this)}
             />
      </div>
    )
  }
}


export default connect(null, { createCompanyRequest, subscribeToBusinesses })(RequestBusiness)
