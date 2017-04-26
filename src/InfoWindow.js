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
    return(
      <Drawer id="infoWindow" open={this.props.showInfoWindow}>
        <button onClick={ this.props.closeInfoWindow }>
          X
        </button>
        {clickedMarker != [] ? (
          <div>
            <h2>{ clickedMarker.name }</h2>
            Address: { clickedMarker.address }<br />
            Website: <a href={ clickedMarker.website }>{ clickedMarker.website }</a>
          </div>
        ) : ( null )
        }
      </Drawer>
    )
  }
}

const mapStateToProps = ({ clickedMarker,showInfoWindow }) => ({ clickedMarker,showInfoWindow })

export default connect(mapStateToProps, { closeInfoWindow })(InfoWindow)
