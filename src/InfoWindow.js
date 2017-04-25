import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import closeInfoWindow from './actions/closeInfoWindow'

class InfoWindow extends PureComponent {
  clickCloseBtn() {
    console.log('clicked close info window')

  }

  render() {
    return(
      <div id="infoWindow">
        <button onClick={ this.props.closeInfoWindow }>
          X
        </button>
        <p>Info window:</p>
        { this.props.clickedMarker.title ? this.props.clickedMarker.title : null }
      </div>
    )
  }
}

const mapStateToProps = ({ clickedMarker }) => ({ clickedMarker })

export default connect(mapStateToProps, { closeInfoWindow })(InfoWindow)
