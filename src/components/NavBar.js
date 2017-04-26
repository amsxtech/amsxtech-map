import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import SelectField from 'material-ui/SelectField'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import subscribeToSectorTypes from '../actions/sectorTypes/subscribe'
import subscribeToCompanyTypes from '../actions/companyTypes/subscribe'

class NavBar extends PureComponent {
  constructor(){
    super()

    this.state = {
      companyType: 1,
      sectorType: 1
    }
  }
  componentDidMount(){
    this.props.subscribeToSectorTypes()
    this.props.subscribeToCompanyTypes()
  }

  handleCompanyChange(event, index, value){
    this.setState({
      companyType: value
    })
  }
  handleSectorChange(event, index, value){
    this.setState({
      sectorType: value
    })
  }

  render(){
    const {companyTypes, sectorTypes } = this.props

    return (
      <div>
        <AppBar title="AMSxTech Map">
          <SelectField
            floatingLabelText="Company Type"
            value={this.state.companyType}
          onChange={this.handleCompanyChange.bind(this)}>
          {companyTypes.map((companyType, index) => {
            return <MenuItem key={index} value={companyType._id} primaryText={companyType.name} />
          })}


          </SelectField>
          <SelectField
            floatingLabelText="Sector"
            value={this.state.sectorType}
          onChange={this.handleSectorChange.bind(this)}>
          {sectorTypes.map((sectorType, index) => {
            return <MenuItem key={index} value={sectorType._id} primaryText={sectorType.name} />
          })}
          </SelectField>
        </AppBar>
      </div>
    )
  }
}
const mapStateToProps = ({ companyTypes, sectorTypes }) => ({ companyTypes, sectorTypes })
export default connect(mapStateToProps, {subscribeToSectorTypes, subscribeToCompanyTypes})(NavBar)
