import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import subscribeToBusinesses from '../actions/business/subscribe'
import subscribeToUsers from '../actions/users/subscribe'
import confirmBusiness from '../actions/business/add'
import AddCompanyType from './AddCompanyType'
import AddSectorType from './AddSectorType'
import NavBarAdmin from './NavBarAdmin'
import TableAdmin from './TableAdmin'

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
        <div className="section">
          <TableAdmin content={businessRequests} />
        </div>

        <h3>Published Businesses</h3>
        <div className="section">
          <TableAdmin content={confirmedBusinesses} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ businesses }) => ({ businesses })
export default connect(mapStateToProps, { subscribeToUsers, subscribeToBusinesses, confirmBusiness })(RequestsIndex)
