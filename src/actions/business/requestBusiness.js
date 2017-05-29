import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  return {
      [CALL_API]: {
      service: 'businesses',
      method: CREATE,
      authenticate: false,
      params:{
        name: request.name,
        address: request.address,
        longitude: request.longitude,
        latitude: request.latitude,
        website: request.website,
        email: request.email,
        companyTypeId: request.companyType,
        sectorTypeId: request.sectorType,
      },
      //id: userId,
    }
  }
}
