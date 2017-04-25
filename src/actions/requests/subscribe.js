import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_REQUESTS_SERVICE = 'SUBSCRIBED_TO_REQUESTS_SERVICE'
export const REQUEST_CREATED = 'REQUEST_CREATED'
export const REQUEST_UPDATED = 'REQUEST_UPDATED'
export const REQUEST_REMOVED = 'REQUEST_REMOVED'

const api = new API()
const requests = api.service('requests')

export default () => {
  return (dispatch) => {
    requests.on('created', (request) => { dispatch(createdRequest(request)) })
    requests.on('updated', (request) => { dispatch(updatedRequest(request)) })
    requests.on('patched', (request) => { dispatch(updatedRequest(request)) })
    requests.on('removed', (request) => { dispatch(removedRequest(request)) })

    dispatch({
      [CALL_API]: {
        service: 'requests',
        method: FIND,
        type: SUBSCRIBED_TO_REQUESTS_SERVICE,
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

const createdRequest = (request) => {
  return {
    type: REQUEST_CREATED,
    payload: request
  }
}

const updatedRequest = (request) => {
  return {
    type: REQUEST_UPDATED,
    payload: request
  }
}

const removedRequest = (request) => {
  return {
    type: REQUEST_REMOVED,
    payload: request
  }
}
