import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import axios from 'axios'
import updateCompany from '../actions/business/update'


class EditCompany extends PureComponent {
  constructor(){
    super()
    this.state = {
      open:false,
      companyTypeId:"",
      sectorTypeId:"",
      companyType:"",
      sectorType: ""

    }
  }
  componentDidMount(){
    console.log(this.props.content.companyType.name)
    console.log(this.props.content.sectorType.name)
    this.setState({
      companyTypeId: this.props.content.companyType._id,
      sectorTypeId: this.props.content.sectorType._id,
      companyType: this.props.content.companyType.name,
      sectorType: this.props.content.sectorType.name,
})
  }
  handleOpen(){
    this.setState({
      open: true
    })
  }
  handleClose(){
    this.setState({
      open:false
    })
  }
  handleCompanyChange(event, index, value, primaryText){
    this.setState({
      companyTypeId: value,
    })
  }
  handleSectorChange(event, index, value){
    this.setState({
      sectorTypeId: value

    })
  }

  updateCompany(){
    console.log(this.props.content._id)
    const company = {
      name: this.refs.name.getValue(),
      address: this.refs.address.getValue(),
      email: this.refs.email.getValue(),
      companyType: this.state.companyTypeId,
      sectorType: this.state.sectorTypeId,
      website: this.refs.website.getValue(),
    }
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${company.address.split(' ').join('+')}+Amsterdam&components=country:NL&key=AIzaSyC4tOoGJ5ypR_8KCcnJCSqIOHLIsXAhQ64`)
      .then((response) => {
          company.latitude = response.data.results[0].geometry.location.lat,
          company.longitude = response.data.results[0].geometry.location.lng,
          console.log(company)
          this.props.updateCompany(company, this.props.content._id)

      })
      .catch((error) => { console.error(error)})

  }
  render(){
    console.log(this.props.content.companyType._id)
    return (
      <div>
        <RaisedButton label="Edit" onTouchTap={this.handleOpen.bind(this)} />
        <Dialog
          open={this.state.open}
          modal={false}

          onRequestClose={this.handleClose.bind(this)}

          >

          <TextField
            ref="name"
            defaultValue={this.props.content.name}
            hintText="Business name"
            onChange={this.handleNameChange}
           />
         <TextField
          ref="address"
           defaultValue={this.props.content.address}
           hintText="Address"
           onChange={this.handleAddressChange}
           />
         <TextField
          ref="email"
          defaultValue={this.props.content.email}
           hintText="Contact email"
           onChange={this.handleEmailChange}
           />

         <SelectField
            ref="companyType"
            value={this.state.companyTypeId}
           floatingLabelText="Company Type"
           onChange={this.handleCompanyChange.bind(this)}>
           { this.props.companyTypes.map((companyType, index) => {
               return <MenuItem key={index} value={companyType._id} primaryText={companyType.name} />
             })
           }
         </SelectField>

         <SelectField
          ref="sectorType"
           floatingLabelText="Sector"
           value={this.state.sectorTypeId}
         onChange={this.handleSectorChange.bind(this)}>
           {this.props.sectorTypes.map((sectorType, index) => {
             return <MenuItem key={index} value={sectorType._id} primaryText={sectorType.name} />
           })}
         </SelectField>
         <TextField
         ref="website"
         defaultValue={this.props.content.website}
         hintText="Website"
         onChange={this.handleWebsiteChange}
         />
         <br />
         <RaisedButton label="Update company" primary={true} onClick={this.updateCompany.bind(this)}/>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, { updateCompany })(EditCompany)
