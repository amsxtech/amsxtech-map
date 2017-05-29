import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  return {
      [CALL_API]: {
      service: 'companyTypes',
      method: CREATE,
      authenticate: true,
      params:{ name: request.companyType,
    },
      //id: userId,
    }
  }
}
