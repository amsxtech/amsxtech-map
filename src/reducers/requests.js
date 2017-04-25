import {
  SUBSCRIBED_TO_REQUESTS_SERVICE,
  REQUEST_CREATED,
  REQUEST_UPDATED,
  REQUEST_REMOVED
} from '../actions/requests/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_REQUESTS_SERVICE :
      return [].concat(payload)

    case REQUEST_CREATED :
      const newRequest = Object.assign({}, payload)
      return state.concat([newRequest])

    case REQUEST_UPDATED :
      return state.map((request) => {
        if (request._id === payload._id) {
          return Object.assign({}, payload)
        }
        return request
      })

    case REQUEST_REMOVED :
      return state.filter((request) => (request._id !== payload._id))

    default :
      return state
  }
}
