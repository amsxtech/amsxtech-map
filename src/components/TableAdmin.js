import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import confirmBusiness from '../actions/business/add'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import EditCompany from './EditCompany'

import SelectField from 'material-ui/SelectField'

import Dialog from 'material-ui/Dialog'

class TableAdmin extends PureComponent {
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
      sectorType: 1,
    }
  }
  componentDidMount(){

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
  render(){
    const businesses = this.props.content
    const companyTypes = this.props.companyTypes
    const sectorTypes = this.props.sectorTypes
    return (
      <div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>Website</TableHeaderColumn>
            <TableHeaderColumn>Contact</TableHeaderColumn>
            <TableHeaderColumn>Company Type, Sector Type</TableHeaderColumn>
            <TableHeaderColumn>Edit/Delete</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody stripedRows={true} displayRowCheckbox={false}>
          {businesses.map((business, index) => {
            return <TableRow key={index}>
              <TableRowColumn>{business.name}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal'}}>{business.address}</TableRowColumn>
              <TableRowColumn>{business.website}</TableRowColumn>
              <TableRowColumn>{business.email ? business.email : "-" }</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal'}}>{business.companyType.name}, {business.sectorType.name}</TableRowColumn>
              <TableRowColumn>
                <EditCompany content={business} companyTypes={companyTypes} sectorTypes={sectorTypes}/>


              </TableRowColumn>
              <TableRowColumn>
                {business.confirmed ? null :
                  (<RaisedButton
                  label="Confirm company"
                  secondary={true}
                  onClick={() => {this.props.confirmBusiness(business, business._id)}}
                  />)
                }
              </TableRowColumn>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
    )
  }
}


export default connect(null, { confirmBusiness })(TableAdmin)
