import { CALL_API, DESTROY } from '../../middleware/api'
import { CHANGE_REQUEST_REMOVED } from './subscribe'
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
