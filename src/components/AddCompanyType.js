import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import createCompanyType from '../actions/companyTypes/add'

class AddCompanyType extends PureComponent {
  constructor(){
    super()
    this.state = {
      companyType: '',

    }
  }
  submitCompanyType(){
    const companyType = {
      companyType: this.state.companyType,

    }
    this.props.createCompanyType(companyType)
  }
  handleCompanyTypeChange = (event, companyType) => {
    this.setState({
      companyType: companyType,
    })
  }

  render(){
    return (
      <Paper>
        <h3>CompanyType to be added</h3>
        <TextField
          hintText="Company Type"
          onChange={this.handleCompanyTypeChange}
         />

           <RaisedButton
             label="Add Company Type"
             primary={true}
             onClick={this.submitCompanyType.bind(this)}
             />
      </Paper>
    )
  }
}


export default connect(null, { createCompanyType })(AddCompanyType)
