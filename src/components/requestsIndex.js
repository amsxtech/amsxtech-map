import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import subscribeToBusinesses from '../actions/business/subscribe'
import confirmBusiness from '../actions/business/add'
import RaisedButton from 'material-ui/RaisedButton'


class RequestsIndex extends PureComponent {
  componentWillMount(){
    this.props.subscribeToBusinesses()
  }
  confirmBusinessRequest(request){
    this.props.addBusiness(request)
  }
  render(){
    const {businesses} = this.props
    return (
      <div>
        <h3>Businesses index</h3>
        {businesses.map((business, index) => {
          return <div key={index}>
            <h3>{business.name}</h3>
            <p>{business.address}</p>
            <p>{business.website}</p>
            <p>Contact: {business.email}</p>
            <p>Coordinates: {business.latitude}, {business.longitude}</p>
              <RaisedButton
              label="Confirm company"
              primary={true}
              disabled={business.confirmed}
              onClick={() => {this.props.confirmBusiness(business, business._id)}}
              />
          </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ businesses }) => ({ businesses })
export default connect(mapStateToProps, { subscribeToBusinesses, confirmBusiness })(RequestsIndex)
