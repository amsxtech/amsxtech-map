export const COMPANY_FILTER_UPDATED = 'COMPANY_FILTER_UPDATED'

export default (filter) => {
  return {
    type: COMPANY_FILTER_UPDATED,
    payload: filter
  }
}
