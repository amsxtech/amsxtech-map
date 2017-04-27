import { SHOW_REQUEST_MARKER } from '../actions/requestMarker'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SHOW_REQUEST_MARKER :
      console.log("Putting it in the state")
      console.log(payload)
      return payload

    default :
      return state
  }
}
