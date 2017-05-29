import {API_ERROR, API_READY, API_LOADING} from '../middleware/api'

export default (state=false, {type, payload} = {}) => {
  switch(type) {
    case API_READY:
      return false
    case API_LOADING:
    return true
    case API_ERROR:
    return false
    default:
      return state
  }
}
