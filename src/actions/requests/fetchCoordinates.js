import axios from 'axios'
export const FETCHED_COORDINATES = "FETCH_COORDINATES"

export default (address) => {
  const requestAddress = address.split(' ').join('+')
  const request = `https://maps.googleapis.com/maps/api/geocode/json?address=${requestAddress}+Amsterdam&components=country:NL&key=AIzaSyC4tOoGJ5ypR_8KCcnJCSqIOHLIsXAhQ64`
  console.log(requestAddress)
  return (dispatch) => {
    console.log('Fetching Address...')
    axios.get(request)
      .then((response) => {
        console.log("got it")
        console.log(response.data.results[0].geometry.location)
        dispatch(fetchedCoordinates(response.data.results[0].geometry.location))
      })
      .catch((error) => { console.error(error)})
  }
}

const fetchedCoordinates = (result) => {
  console.log('dispatching fetched coordinates')
  return {
    type: FETCHED_COORDINATES,
    payload: result
  }
}
