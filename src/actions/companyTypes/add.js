import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  console.log('submitting in action')
  console.log(request)
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
