import { SHOW_MARKER } from '../actions/showMarker'
import { CLOSE_INFO_WINDOW } from '../actions/closeInfoWindow'

export default (state = false, { type, payload } = {}) => {
  switch(type) {
    case SHOW_MARKER :
      return true

    case CLOSE_INFO_WINDOW :
      return false

    default :
      return state
  }
}
