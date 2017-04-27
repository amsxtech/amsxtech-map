import { COMPANY_FILTER_UPDATED } from '../actions/filters/companyTypeFilter'

export default (state = '', { type, payload } = {}) => {

  switch(type) {
    case COMPANY_FILTER_UPDATED :
      return payload

    default :
      return state
  }
}
