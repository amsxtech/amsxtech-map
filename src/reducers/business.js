import {
  SUBSCRIBED_TO_BUSINESSES_SERVICE,
  BUSINESS_CREATED,
  BUSINESS_UPDATED,
  BUSINESS_REMOVED
} from '../actions/business/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_BUSINESSES_SERVICE :
      return [].concat(payload)

    case BUSINESS_CREATED :
      const newBusiness = Object.assign({}, payload)
      return state.concat([newBusiness])

    case BUSINESS_UPDATED :
      return state.map((business) => {
        if (business._id === payload._id) {
          return Object.assign({}, payload)
        }
        return business
      })

    case BUSINESS_REMOVED :
      return state.filter((business) => (business._id !== payload._id))

    default :
      return state
  }
}
