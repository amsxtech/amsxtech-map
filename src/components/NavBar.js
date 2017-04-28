import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import subscribeToSectorTypes from '../actions/sectorTypes/subscribe'
import subscribeToCompanyTypes from '../actions/companyTypes/subscribe'
import updateCompanyTypeFilter from '../actions/filters/companyTypeFilter'
import updateSectorTypeFilter from '../actions/filters/sectorTypeFilter'

class NavBar extends PureComponent {
  constructor(){
    super()

    this.state = {
      companyType: 0,
      sectorType: 0
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
    this.props.updateCompanyTypeFilter(value)
  }
  handleSectorChange(event, index, value){
    this.setState({
      sectorType: value
    })
    this.props.updateSectorTypeFilter(value)
  }

  render(){
    const {companyTypes, sectorTypes } = this.props
    return (
      <div>
        <AppBar title="AMSxTech Map" showMenuIconButton={false} style={{backgroundColor: 'black'}}>
          <SelectField
            floatingLabelText="Company Type"
            value={this.state.companyType}
            labelStyle={{color: 'white'}}
          onChange={this.handleCompanyChange.bind(this)}>
          <MenuItem value={0} primaryText='All'/>
          {companyTypes.map((companyType, index) => {
            return <MenuItem key={index} value={companyType._id} primaryText={companyType.name} />
          })}


          </SelectField>
          <SelectField
            floatingLabelText="Sector"
            labelStyle={{color: 'white'}}
            value={this.state.sectorType}
          onChange={this.handleSectorChange.bind(this)}>
          <MenuItem value={0} primaryText='All'/>
          {sectorTypes.map((sectorType, index) => {
            return <MenuItem key={index} value={sectorType._id} primaryText={sectorType.name} />
          })}
          </SelectField>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ companyTypes, sectorTypes, companyTypeFilter, sectorTypeFilter }) => ({ companyTypes, sectorTypes, companyTypeFilter, sectorTypeFilter })
export default connect(mapStateToProps, {subscribeToSectorTypes, subscribeToCompanyTypes, updateCompanyTypeFilter, updateSectorTypeFilter})(NavBar)
