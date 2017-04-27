import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import closeInfoWindow from './actions/closeInfoWindow'
import Drawer from 'material-ui/Drawer'

class InfoWindow extends PureComponent {
  clickCloseBtn() {
    console.log('clicked close info window')

  }

  render() {
    let { clickedMarker } = this.props
    let companyType = Object.assign({}, clickedMarker.companyType)
    let sectorType = Object.assign({}, clickedMarker.sectorType)
    const drawerStyle = { boxShadow: 'none', padding: '10px' };

    return(
      <Drawer open={this.props.showInfoWindow} openSecondary={true} containerStyle={drawerStyle}>
        <button onClick={ this.props.closeInfoWindow }>×</button>
        {clickedMarker != [] ? (
          <div>
            <p>
              <h3 className="infowindow">{ clickedMarker.name }</h3>
              <span className="filter">{ companyType.name }</span> in <span className="filter">{ sectorType.name }</span>
              <br /><br />
              Address: { clickedMarker.address }<br />
              Website: <a href={ clickedMarker.website }>{ clickedMarker.website }</a>
            </p>
          </div>
        ) : ( null )
        }
      </Drawer>
    )
  }
}

const mapStateToProps = ({ clickedMarker,showInfoWindow }) => ({ clickedMarker,showInfoWindow })

export default connect(mapStateToProps, { closeInfoWindow })(InfoWindow)
