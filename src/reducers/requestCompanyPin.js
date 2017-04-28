import { SHOW_REQUEST_MARKER } from '../actions/requestMarker'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SHOW_REQUEST_MARKER :
      return payload

    default :
      return state
  }
}
