import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import subscribeToBusinesses from '../actions/business/subscribe'
import subscribeToUsers from '../actions/users/subscribe'
import subscribeToCompanyTypes from '../actions/companyTypes/subscribe'
import subscribeToSectorTypes from '../actions/sectorTypes/subscribe'
import confirmBusiness from '../actions/business/add'
import AddCompanyType from './AddCompanyType'
import AddSectorType from './AddSectorType'
import NavBarAdmin from './NavBarAdmin'
import TableAdmin from './TableAdmin'
import ViewChangeRequests from './viewChangeRequests'
import Paper from 'material-ui/Paper'
import { Tabs, Tab } from 'material-ui/Tabs'

class RequestsIndex extends PureComponent {
  componentWillMount(){
    this.props.subscribeToUsers()
    this.props.subscribeToBusinesses()
    this.props.subscribeToSectorTypes()
    this.props.subscribeToCompanyTypes()
  }
  confirmBusinessRequest(request){
    this.props.addBusiness(request)
  }
  render(){
    const {businesses, sectorTypes, companyTypes } = this.props
    const confirmedBusinesses = businesses.filter((business) => {return business.confirmed})
    const businessRequests = businesses.filter((business) => {return !business.confirmed})
    return (
      <div>
        <NavBarAdmin />
        <Tabs>
          <Tab label="Change requests">
        <ViewChangeRequests />
        </Tab>
        <Tab label="Add filter types">
        <h3>Add Filter Types</h3>
        <div className="section filter">

          {<AddCompanyType content={companyTypes} />}
          {<AddSectorType content={sectorTypes} />}
        </div>
        </Tab>
        <Tab label="Business requests">
        <h3>Business Requests</h3>
        <div className="section">
          <TableAdmin content={businessRequests} sectorTypes={sectorTypes} companyTypes={companyTypes} />
        </div>
        </Tab>
        <Tab label="Published businesses">
        <h3>Published Businesses</h3>
        <div className="section">
          <TableAdmin content={confirmedBusinesses} sectorTypes={sectorTypes} companyTypes={companyTypes} />
        </div>
        </Tab>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = ({ businesses, sectorTypes, companyTypes }) => ({ businesses, sectorTypes, companyTypes })
export default connect(mapStateToProps, { subscribeToUsers, subscribeToBusinesses, confirmBusiness, subscribeToSectorTypes, subscribeToCompanyTypes })(RequestsIndex)
