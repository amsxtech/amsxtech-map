import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'

class NavBarAdmin extends PureComponent {
  render(){
    const {companyTypes, sectorTypes } = this.props

    return (
      <div>
        <AppBar title="AMSxTech Map - Admin" showMenuIconButton={false}>

        </AppBar>
      </div>
    )
  }
}
export default NavBarAdmin
