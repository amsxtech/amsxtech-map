import { SHOW_MARKER } from '../actions/showMarker'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SHOW_MARKER :
      return payload

    default :
      return state
  }
}
