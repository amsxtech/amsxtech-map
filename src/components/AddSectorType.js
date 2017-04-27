import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import createSectorType from '../actions/sectorTypes/add'

class AddSectorType extends PureComponent {
  constructor(){
    super()
    this.state = {
      sectorType: '',

    }
  }
  submitSectorType(){
    const sectorType = {
      sectorType: this.state.sectorType,

    }
    this.props.createSectorType(sectorType)
  }
  handleSectorTypeChange = (event, sectorType) => {
    this.setState({
      sectorType: sectorType,
    })
  }

  render(){
    return (
      <div>
        <TextField
          hintText="Sector Type"
          style={{marginRight: '10px'}}
          onChange={this.handleSectorTypeChange}
         />

         <RaisedButton
           label="Add Sector Type"
           primary={true}
           onClick={this.submitSectorType.bind(this)}
           />
      </div>
    )
  }
}


export default connect(null, { createSectorType })(AddSectorType)
