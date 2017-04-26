import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  console.log('submitting in action')
  console.log(request)
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
