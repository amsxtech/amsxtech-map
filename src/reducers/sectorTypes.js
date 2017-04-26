import {
  SUBSCRIBED_TO_SECTOR_TYPES_SERVICE,
  SECTOR_TYPE_CREATED,
  SECTOR_TYPE_UPDATED,
  SECTOR_TYPE_REMOVED
} from '../actions/sectorTypes/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_SECTOR_TYPES_SERVICE :
      return [].concat(payload)

    case SECTOR_TYPE_CREATED :
      const newSectorType = Object.assign({}, payload)
      return state.concat([newSectorType])

    case SECTOR_TYPE_UPDATED :
      return state.map((sectorType) => {
        if (sectorType._id === payload._id) {
          return Object.assign({}, payload)
        }
        return sectorType
      })

    case SECTOR_TYPE_REMOVED :
      return state.filter((sectorType) => (sectorType._id !== payload._id))

    default :
      return state
  }
}
