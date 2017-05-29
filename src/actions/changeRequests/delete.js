import { CALL_API, DESTROY } from '../../middleware/api'

export default (requestId) => {

  return {
      [CALL_API]: {
      service: 'requests',
      method: DESTROY,
      authenticate: true,
      id: requestId,
    }
  }
}
