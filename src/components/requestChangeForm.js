import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import requestChanges from '../actions/changeRequests/request'
import closeChangeRequest from '../actions/changeRequests/close'

class RequestChangeForm extends PureComponent {
  constructor(){
    super()
    this.state = {
      changes: '',
    }
  }

  submitChangeRequest(){
    const changeRequest = {
      changes: this.state.changes,
      businessId: this.props.company._id
    }
    console.log(changeRequest)
    this.props.requestChanges(changeRequest)
    this.props.closeChangeRequest()
  }

  handleChangeRequest = (event, changes) => {
    this.setState({
      changes: changes
    })
  }

  handleClose = () => {
    this.props.closeChangeRequest()
  }

  render(){
    const { companyTypes,  sectorTypes } = this.props
    return (
      <div style={{ padding: "25px" }}>
        <TextField
          hintText="What needs to be changed?"
          hintStyle={{color:'darkgrey'}}
          onChange={this.handleChangeRequest}
         />
       <br />
       <RaisedButton
         label="Submit"
         primary={true}
         onClick={this.submitChangeRequest.bind(this)}
         />
       <FlatButton
         label="Cancel"
         primary={true}
         onTouchTap={this.handleClose}
         />
      </div>
    )
  }
}

export default connect(null, { requestChanges, closeChangeRequest })(RequestChangeForm)
