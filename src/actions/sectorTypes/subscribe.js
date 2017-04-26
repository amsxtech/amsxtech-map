import API from '../../lib/api'
import { history } from '../../store'
import { CALL_API, FIND } from '../../middleware/api'

export const SUBSCRIBED_TO_SECTOR_TYPES_SERVICE = 'SUBSCRIBED_TO_SECTOR_TYPES_SERVICE'
export const SECTOR_TYPE_CREATED = 'SECTOR_TYPE_CREATED'
export const SECTOR_TYPE_UPDATED = 'SECTOR_TYPE_UPDATED'
export const SECTOR_TYPE_REMOVED = 'SECTOR_TYPE_REMOVED'

const api = new API()
const sectorTypes = api.service('sectorTypes')

export default () => {
  return (dispatch) => {
    sectorTypes.on('created', (sectorType) => { dispatch(createdSectorType(sectorType)) })
    sectorTypes.on('updated', (sectorType) => { dispatch(updatedSectorType(sectorType)) })
    sectorTypes.on('patched', (sectorType) => { dispatch(updatedSectorType(sectorType)) })
    sectorTypes.on('removed', (sectorType) => { dispatch(removedSectorType(sectorType)) })

    dispatch({
      [CALL_API]: {
        service: 'sectorTypes',
        method: FIND,
        type: SUBSCRIBED_TO_SECTOR_TYPES_SERVICE,
        authenticate: true,
        params: {
          query: {
            $sort: { createdAt: -1},
            $limit: 25,
          },
        },
      }
    })
  }
}

const createdSectorType = (sectorType) => {
  return {
    type: SECTOR_TYPE_CREATED,
    payload: sectorType
  }
}

const updatedSectorType = (sectorType) => {
  return {
    type: SECTOR_TYPE_UPDATED,
    payload: sectorType
  }
}

const removedSectorType = (sectorType) => {
  return {
    type: SECTOR_TYPE_REMOVED,
    payload: sectorType
  }
}
