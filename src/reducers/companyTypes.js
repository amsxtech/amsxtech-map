import {
  SUBSCRIBED_TO_COMPANY_TYPES_SERVICE,
  COMPANY_TYPE_CREATED,
  COMPANY_TYPE_UPDATED,
  COMPANY_TYPE_REMOVED
} from '../actions/companyTypes/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_COMPANY_TYPES_SERVICE :
      return [].concat(payload)

    case COMPANY_TYPE_CREATED :
      const newCompanyType = Object.assign({}, payload)
      return state.concat([newCompanyType])

    case COMPANY_TYPE_UPDATED :
      return state.map((companyType) => {
        if (companyType._id === payload._id) {
          return Object.assign({}, payload)
        }
        return companyType
      })

    case COMPANY_TYPE_REMOVED :
      return state.filter((companyType) => (companyType._id !== payload._id))

    default :
      return state
  }
}
