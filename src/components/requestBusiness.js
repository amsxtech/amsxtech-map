import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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
           <TextField
             hintText="Longitude"
             type="number"
             onChange={this.handleLongChange}
            />
            <TextField
              hintText="Latitude"
              type="number"
              onChange={this.handleLatChange}
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
