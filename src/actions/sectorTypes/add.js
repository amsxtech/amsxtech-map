import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  return {
      [CALL_API]: {
      service: 'sectorTypes',
      method: CREATE,
      authenticate: true,
      params:{ name: request.sectorType,
    },
      //id: userId,
    }
  }
}
