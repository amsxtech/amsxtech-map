import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import deleteRequest from '../actions/changeRequests/delete'
import subscribeToChangeRequests from '../actions/changeRequests/subscribe'
import RaisedButton from 'material-ui/RaisedButton'

class ChangeRequests extends PureComponent {
  componentWillMount(){
    this.props.subscribeToChangeRequests()
  }
  confirmBusinessRequest(request){
    this.props.addBusiness(request)
  }
  render(){
    const {changeRequests} = this.props

    return (
      <div>
        <h3>Requested changes:</h3>
        { changeRequests.length === 0 ? <div><h4>No change requests</h4><hr /></div>
          :
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Company name</TableHeaderColumn>
                <TableHeaderColumn style={{width: "850px"}}>Suggested change</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody stripedRows={true} displayRowCheckbox={false}>
              {changeRequests.map((request, index) => {
                let company = Object.assign({}, request.business)
                return (
                  <TableRow key={index}>
                    <TableRowColumn>{company.name}</TableRowColumn>
                    <TableRowColumn style={{whiteSpace: 'normal', width: "850px" }}>{request.changes}</TableRowColumn>
                    <TableRowColumn>
                      <RaisedButton
                        label="Delete"
                        secondary={true}
                        onClick={() => {this.props.deleteRequest(request._id)}}
                        />
                    </TableRowColumn>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      }
    </div>
    )
  }
}

const mapStateToProps = ({ changeRequests }) => ({ changeRequests })
export default connect(mapStateToProps, { subscribeToChangeRequests, deleteRequest })(ChangeRequests)
