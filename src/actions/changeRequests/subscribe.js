import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_CHANGE_REQUESTS_SERVICE = 'SUBSCRIBED_TO_CHANGE_REQUESTS_SERVICE'
export const CHANGE_REQUEST_CREATED = 'CHANGE_REQUEST_CREATED'
export const CHANGE_REQUEST_UPDATED = 'CHANGE_REQUEST_UPDATED'
export const CHANGE_REQUEST_REMOVED = 'CHANGE_REQUEST_REMOVED'

const api = new API()
const changeRequests = api.service('requests')

export default () => {
  return (dispatch) => {
    changeRequests.on('created', (changeRequest) => { dispatch(createdBusiness(changeRequest)) })
    changeRequests.on('updated', (changeRequest) => { dispatch(updatedBusiness(changeRequest)) })
    changeRequests.on('patched', (changeRequest) => { dispatch(updatedBusiness(changeRequest)) })
    changeRequests.on('removed', (changeRequest) => { dispatch(removedBusiness(changeRequest)) })

    dispatch({
      [CALL_API]: {
        service: 'requests',
        method: FIND,
        type: SUBSCRIBED_TO_CHANGE_REQUESTS_SERVICE,
        authenticate: false,
        params: {
          query: {
            $sort: { createdAt: -1},
            $limit: 50,
          },
        },
      }
    })
  }
}

const createdBusiness = (changeRequest) => {
  return {
    type: CHANGE_REQUEST_CREATED,
    payload: changeRequest
  }
}

const updatedBusiness = (changeRequest) => {
  return {
    type: CHANGE_REQUEST_UPDATED,
    payload: changeRequest
  }
}

const removedBusiness = (changeRequest) => {
  return {
    type: CHANGE_REQUEST_REMOVED,
    payload: changeRequest
  }
}
