import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import closeInfoWindow from './actions/closeInfoWindow'
import { Facebook } from './images/facebook.svg'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import './infoWindow.sass'

class InfoWindow extends PureComponent {
  clickCloseBtn() {
    console.log('clicked close info window')

  }

  render() {
    let facebook = 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-128.png'
    let twitter = 'https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-128.png'
    let linkedIn = 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-128.png'
    let angelList = 'https://cdn0.iconfinder.com/data/icons/picons-social/57/69-angellist-2-128.png'
    let imageStyle =  { height: "30x", width: "30px", margin: "2px" }

    let { clickedMarker } = this.props
    const companyType = Object.assign({}, clickedMarker.companyType)
    const sectorType = Object.assign({}, clickedMarker.sectorType)
    const drawerStyle = { boxShadow: 'none', padding: '10px' };
    console.log(clickedMarker.facebook)
    return(
      <Drawer open={this.props.showInfoWindow} openSecondary={true} containerStyle={drawerStyle}>
        <button onClick={ this.props.closeInfoWindow }>×</button>
        {clickedMarker != [] ? (
          <div>
            <p>
              <h3>{ clickedMarker.name }</h3>
              <span className="filter">{ companyType.name }</span> in <span className="filter">{ sectorType.name }</span>
              <br /><br />
              <p>''{ clickedMarker.tagline }''</p>
              Address: { clickedMarker.address }<br />
              Website: <a href={ clickedMarker.website }>{ clickedMarker.website }</a><br />
              <p>{ clickedMarker.logo && <img src={ clickedMarker.logo } style={ {width: "150px"} } /> }</p>
              { clickedMarker.facebook && <a href={ clickedMarker.facebook } ><img src={facebook} style={imageStyle} /></a> }
              { clickedMarker.twitter && <a href={ clickedMarker.twitter } ><img src={twitter} style={imageStyle} /></a> }
              { clickedMarker.angellist && <a href={ clickedMarker.angellist } ><img src={angelList} style={imageStyle} /></a> }
              { clickedMarker.linkedin && <a href={ clickedMarker.linkedin } ><img src={linkedIn} style={imageStyle} /></a> }
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
