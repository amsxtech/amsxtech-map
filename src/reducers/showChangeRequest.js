import { CLOSE_CHANGE_REQUEST } from '../actions/changeRequests/close'
import { SHOW_CHANGE_REQUEST } from '../actions/changeRequests/show'

export default (state = false, { type, payload } = {}) => {
  switch(type) {
    case SHOW_CHANGE_REQUEST :
      return true

    case CLOSE_CHANGE_REQUEST :
      return false

    default :
      return state
  }
}
