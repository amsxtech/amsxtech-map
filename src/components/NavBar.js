import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import SelectField from 'material-ui/SelectField'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import subscribeToSectorTypes from '../actions/sectorTypes/subscribe'
import subscribeToCompanyTypes from '../actions/companyTypes/subscribe'
import RequestBusiness from './requestBusiness'
import openRequestWindow from '../actions/requestWindow/open'
import closeRequestWindow from '../actions/requestWindow/close'
import updateCompanyTypeFilter from '../actions/filters/companyTypeFilter'
import updateSectorTypeFilter from '../actions/filters/sectorTypeFilter'

class NavBar extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      companyType: 0,
      sectorType: 0,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'right',
        vertical: 'top',
      },
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

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault()
    this.props.openRequestWindow()
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.props.closeRequestWindow()
  }

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state
    anchorOrigin[positionElement] = position

    this.setState({
      anchorOrigin: anchorOrigin,
    })
  }

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state
    targetOrigin[positionElement] = position

    this.setState({
      targetOrigin: targetOrigin,
    })
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
          <button onClick={this.handleTouchTap} style={{ background: "rgb(211, 47, 47)", border: "0px", color: "white", position: 'relative', margin: "10px"}}>{ this.props.showRequestWindow ? "×" : "+" }</button>
          <Popover
            style={{marginTop: "10px"}}
            open={this.props.showRequestWindow}
            anchorEl={this.state.anchorEl}
            anchorOrigin={this.state.anchorOrigin}
            targetOrigin={this.state.targetOrigin}
            onRequestClose={this.handleRequestClose}
            >
            <RequestBusiness />
          </Popover>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ companyTypes, sectorTypes, companyTypeFilter, sectorTypeFilter, showRequestWindow }) => ({ companyTypes, sectorTypes, companyTypeFilter, sectorTypeFilter, showRequestWindow })

export default connect(mapStateToProps, {subscribeToSectorTypes, subscribeToCompanyTypes, updateCompanyTypeFilter, updateSectorTypeFilter, openRequestWindow, closeRequestWindow})(NavBar)
