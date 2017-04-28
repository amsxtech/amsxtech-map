import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {

  return {
      [CALL_API]: {
      service: 'requests',
      method: CREATE,
      authenticate: false,
      params:{
        changes: request.changes,
        businessId: request.businessId,
      },
      //id: userId,
    }
  }
}
