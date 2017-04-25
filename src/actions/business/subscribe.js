import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_BUSINESSES_SERVICE = 'SUBSCRIBED_TO_BUSINESSES_SERVICE'
export const BUSINESS_CREATED = 'BUSINESS_CREATED'
export const BUSINESS_UPDATED = 'BUSINESS_UPDATED'
export const BUSINESS_REMOVED = 'BUSINESS_REMOVED'

const api = new API()
const businesses = api.service('businesses')

export default () => {
  return (dispatch) => {
    businesses.on('created', (business) => { dispatch(createdBusiness(business)) })
    businesses.on('updated', (business) => { dispatch(updatedBusiness(business)) })
    businesses.on('patched', (business) => { dispatch(updatedBusiness(business)) })
    businesses.on('removed', (business) => { dispatch(removedBusiness(business)) })

    dispatch({
      [CALL_API]: {
        service: 'businesses',
        method: FIND,
        type: SUBSCRIBED_TO_BUSINESSES_SERVICE,
        authenticate: true,
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

const createdBusiness = (business) => {
  return {
    type: BUSINESS_CREATED,
    payload: business
  }
}

const updatedBusiness = (business) => {
  return {
    type: BUSINESS_UPDATED,
    payload: business
  }
}

const removedBusiness = (business) => {
  return {
    type: BUSINESS_REMOVED,
    payload: business
  }
}
