export const SECTOR_FILTER_UPDATED = 'SECTOR_FILTER_UPDATED'

export default (filter) => {
  return {
    type: SECTOR_FILTER_UPDATED,
    payload: filter
  }
}
