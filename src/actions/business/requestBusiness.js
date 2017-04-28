import { CALL_API, CREATE } from '../../middleware/api'

export default (request) => {
  console.log('submitting in action')
  console.log(request)
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
        tagline: request.tagline,
        angellist: request.angellist,
        facebook: request.facebook,
        twitter: request.twitter,
        linkedin: request.linkedin,
        logo: request.logo,
        companyTypeId: request.companyType,
        sectorTypeId: request.sectorType,
      },
      //id: userId,
    }
  }
}
