import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import subscribeToBusinesses from '../actions/business/subscribe'
import subscribeToUsers from '../actions/users/subscribe'
import confirmBusiness from '../actions/business/add'
import AddCompanyType from './AddCompanyType'
import AddSectorType from './AddSectorType'
import NavBarAdmin from './NavBarAdmin'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class RequestsIndex extends PureComponent {
  componentWillMount(){
    this.props.subscribeToUsers()
    this.props.subscribeToBusinesses()
  }
  confirmBusinessRequest(request){
    this.props.addBusiness(request)
  }
  render(){
    const {businesses} = this.props
    const confirmedBusinesses = businesses.filter((business) => {return business.confirmed})
    const businessRequests = businesses.filter((business) => {return !business.confirmed})

    return (
      <div>
      <NavBarAdmin />
        <h3>Add Filter Types</h3>
        <div className="section filter">
          <AddCompanyType />
          <AddSectorType />
        </div>

        <h3>Business Requests</h3>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Website</TableHeaderColumn>
              <TableHeaderColumn>Contact</TableHeaderColumn>
              <TableHeaderColumn>Confirm</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {businessRequests.map((business, index) => {
              return <TableRow key={index}>
                <TableRowColumn>{business.name}</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'normal'}}>{business.address}</TableRowColumn>
                <TableRowColumn>{business.website}</TableRowColumn>
                <TableRowColumn>{business.email ? business.email : "-" }</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                  label="Confirm company"
                  secondary={true}
                  disabled={business.confirmed}
                  onClick={() => {this.props.confirmBusiness(business, business._id)}}
                  />
                </TableRowColumn>
              </TableRow>
            })}
          </TableBody>
        </Table>
        <br /><br />

        <h3>Published Businesses</h3>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Website</TableHeaderColumn>
              <TableHeaderColumn>Contact</TableHeaderColumn>
              <TableHeaderColumn>Edit/Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={false}>
            {confirmedBusinesses.map((business, index) => {
              return <TableRow key={index}>
                <TableRowColumn>{business.name}</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'normal'}}>{business.address}</TableRowColumn>
                <TableRowColumn>{business.website}</TableRowColumn>
                <TableRowColumn>{business.email ? business.email : "-" }</TableRowColumn>
                <TableRowColumn></TableRowColumn>
              </TableRow>
            })}
          </TableBody>
        </Table>

      </div>
    )
  }
}

const mapStateToProps = ({ businesses }) => ({ businesses })
export default connect(mapStateToProps, { subscribeToUsers, subscribeToBusinesses, confirmBusiness })(RequestsIndex)
