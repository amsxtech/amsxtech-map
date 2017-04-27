export const SHOW_REQUEST_MARKER = 'SHOW_REQUEST_MARKER'

export default (coordinates) => {
  return {
    type: SHOW_REQUEST_MARKER,
    payload: coordinates
  }
}
