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
      <div>
        <TextField
          hintText="Company Type"
          style={{marginRight: '10px'}}
          onChange={this.handleCompanyTypeChange}
         />

         <RaisedButton
           label="Add Company Type"
           secondary={true}
           onClick={this.submitCompanyType.bind(this)}
           />
      </div>
    )
  }
}


export default connect(null, { createCompanyType })(AddCompanyType)
