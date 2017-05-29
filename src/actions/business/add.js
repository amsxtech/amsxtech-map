import { CALL_API, PATCH } from '../../middleware/api'

export default (request, businessId) => {
  return {
      [CALL_API]: {
      service: 'businesses',
      method: PATCH,
      authenticate: true,
      params:{ name: request.name,
              address: request.address,
      longitude: request.longitude,
      latitude: request.latitude,
      website: request.website,
      email: request.email,
      confirmed: !request.confirmed},
      id: businessId,
    }
  }
}
