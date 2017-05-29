import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_COMPANY_TYPES_SERVICE = 'SUBSCRIBED_TO_COMPANY_TYPES_SERVICE'
export const COMPANY_TYPE_CREATED = 'COMPANY_TYPE_CREATED'
export const COMPANY_TYPE_UPDATED = 'COMPANY_TYPE_UPDATED'
export const COMPANY_TYPE_REMOVED = 'COMPANY_TYPE_REMOVED'

const api = new API()
const companyTypes = api.service('companyTypes')

export default () => {
  return (dispatch) => {
    companyTypes.on('created', (companyType) => { dispatch(createdCompanyType(companyType)) })
    companyTypes.on('updated', (companyType) => { dispatch(updatedCompanyType(companyType)) })
    companyTypes.on('patched', (companyType) => { dispatch(updatedCompanyType(companyType)) })
    companyTypes.on('removed', (companyType) => { dispatch(removedCompanyType(companyType)) })

    dispatch({
      [CALL_API]: {
        service: 'companyTypes',
        method: FIND,
        type: SUBSCRIBED_TO_COMPANY_TYPES_SERVICE,
        authenticate: false,
        params: {
          query: {
            $sort: { createdAt: -1},
            $limit: 25,
          },
        },
      }
    })
  }
}

const createdCompanyType = (companyType) => {
  console.log('in action')
  return {
    type: COMPANY_TYPE_CREATED,
    payload: companyType
  }
}

const updatedCompanyType = (companyType) => {
  return {
    type: COMPANY_TYPE_UPDATED,
    payload: companyType
  }
}

const removedCompanyType = (companyType) => {
  return {
    type: COMPANY_TYPE_REMOVED,
    payload: companyType
  }
}
