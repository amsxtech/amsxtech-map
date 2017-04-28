import React, {PureComponent, PropTypes} from 'react'
import { connect } from 'react-redux'
import signOut from '../actions/user/sign-out'

import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

class NavBarAdmin extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render(){
    const { signedIn } = this.props

    return (
      <div>
        <AppBar title="AMSxTech Map - Admin" showMenuIconButton={false} style={{backgroundColor: 'black'}}>
          { signedIn ?
            <li><br /><RaisedButton label="Sign Out" onClick={this.signOut.bind(this)} /></li> :
            null
          }

        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(NavBarAdmin)
