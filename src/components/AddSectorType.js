import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import createSectorType from '../actions/sectorTypes/add'
import { List, ListItem } from 'material-ui/List'


class AddSectorType extends PureComponent {
  constructor(){
    super()
    this.state = {
      sectorType: '',

    }
  }

  componentWillMount() {
    //this.props.subscribeToUsers()
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
    console.log(this.props)
    const sectorTypes = this.props.content
    return (
      <div>
        <TextField
          hintText="Sector Type"
          style={{marginRight: '10px'}}
          onChange={this.handleSectorTypeChange}
         />

         <RaisedButton
           label="Add Sector Type"
           secondary={true}
           onClick={this.submitSectorType.bind(this)}
           />
           <List>
           {sectorTypes.map((sectorType, index) => {
             return <ListItem  key={index}>{sectorType.name}</ListItem>
           })}
           </List>
       </div>
    )
  }
}


export default connect(null, { createSectorType})(AddSectorType)
