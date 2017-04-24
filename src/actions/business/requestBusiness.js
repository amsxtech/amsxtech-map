import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  console.log('submitting in action')
  console.log(request)
  return {
      [CALL_API]: {
      service: 'requests',
      method: CREATE,
      authenticate: false,
      params:{ name: request.name,
              address: request.address,
      longitude: request.longitude,
      latitude: request.latitude,
      website: request.website,
      email: request.email},
      //id: userId,
    }
  }
}
