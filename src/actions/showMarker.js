export const SHOW_MARKER = 'SHOW_MARKER'

export default (marker) => {
  return {
    type: SHOW_MARKER,
    payload: marker
  }
}
