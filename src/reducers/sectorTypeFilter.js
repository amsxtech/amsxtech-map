import { SECTOR_FILTER_UPDATED } from '../actions/filters/sectorTypeFilter'

export default (state = '', { type, payload } = {}) => {

  switch(type) {
    case SECTOR_FILTER_UPDATED :
      return payload

    default :
      return state
  }
}
