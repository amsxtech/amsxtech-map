import { OPEN_REQUEST_WINDOW } from '../actions/requestWindow/open'
import { CLOSE_REQUEST_WINDOW } from '../actions/requestWindow/close'

export default (state = false, { type, payload } = {}) => {
  switch(type) {
    case CLOSE_REQUEST_WINDOW :
      return false

    case OPEN_REQUEST_WINDOW :
      return true

    default :
      return state
  }
}
