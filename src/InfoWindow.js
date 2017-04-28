import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import closeInfoWindow from './actions/closeInfoWindow'
import closeChangeRequest from './actions/changeRequests/close'
import showChangeRequest from './actions/changeRequests/show'
import RequestForm from './components/requestChangeForm'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

class InfoWindow extends PureComponent {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  handleOpen = () => {
    this.props.showChangeRequest()
  }

  clickCloseBtn() {
    console.log('clicked close info window')
  }

  render() {
    let { clickedMarker } = this.props
    let companyType = Object.assign({}, clickedMarker.companyType)
    let sectorType = Object.assign({}, clickedMarker.sectorType)
    const drawerStyle = { boxShadow: 'none', padding: '10px' };
    console.log(clickedMarker.facebook)
    console.log(this.props.showRequestWindow)

    return(
      <Drawer open={this.props.showInfoWindow} openSecondary={true} containerStyle={drawerStyle}>
        <button onClick={ this.props.closeInfoWindow }>×</button>
        {clickedMarker != [] ? (
          <div>
              <h3 className="infowindow">{ clickedMarker.name }</h3>
              <span className="filterTypes">{ companyType.name }</span> in <span className="filterTypes">{ sectorType.name }</span>
              <p>
                Address:  { clickedMarker.address }<br />
                Website:  <a href={ clickedMarker.website }>{ clickedMarker.website }</a><br />
              </p>
              <RaisedButton label="Suggest changes" onTouchTap={this.handleOpen} />
                 <Dialog
                   title={`Suggest changes to ${clickedMarker.name}`}
                   modal={false}
                   open={this.props.showChangeForm}
                 >
                   <RequestForm company={clickedMarker} />
                 </Dialog>
          </div>
        ) : ( null )
        }
      </Drawer>
    )
  }
}

const mapStateToProps = ({ clickedMarker,showInfoWindow, showChangeForm }) => ({ clickedMarker, showInfoWindow, showChangeForm })

export default connect(mapStateToProps, { closeInfoWindow, showChangeRequest })(InfoWindow)
