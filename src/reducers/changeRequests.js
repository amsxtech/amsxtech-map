import {
  SUBSCRIBED_TO_CHANGE_REQUESTS_SERVICE,
  CHANGE_REQUEST_CREATED,
  CHANGE_REQUEST_UPDATED,
  CHANGE_REQUEST_REMOVED
} from '../actions/changeRequests/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_CHANGE_REQUESTS_SERVICE :
      return [].concat(payload)

    case CHANGE_REQUEST_CREATED :
      const newBusiness = Object.assign({}, payload)
      return state.concat([newBusiness])

    case CHANGE_REQUEST_UPDATED :
      return state.map((changeRequest) => {
        if (changeRequest._id === payload._id) {
          return Object.assign({}, payload)
        }
        return changeRequest
      })

    case CHANGE_REQUEST_REMOVED :
      return state.filter((changeRequest) => (console.log(changeRequest) && changeRequest._id !== payload._id))

    default :
      return state
  }
}
