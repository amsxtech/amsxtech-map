import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import confirmBusiness from '../actions/business/add'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'

class TableAdmin extends PureComponent {
  render(){
    const businesses = this.props.content

    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>Website</TableHeaderColumn>
            <TableHeaderColumn>Contact</TableHeaderColumn>
            <TableHeaderColumn>Filters</TableHeaderColumn>
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
              <TableRowColumn></TableRowColumn>
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
    )
  }
}

export default connect(null, { confirmBusiness })(TableAdmin)
